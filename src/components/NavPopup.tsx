import React from "react";
import { useDrag } from "@use-gesture/react";
import { a, useSpring, config } from "@react-spring/web";

import { useNavigate } from "react-router-dom";
import INav from "../interfaces/navList";

type bgColors = "steel" | "royal";

const NavPopup: React.FC<{
  children: React.ReactNode;
  navItems: INav[];
  bgColor?: bgColors;
}> = ({ children, navItems, bgColor }) => {
  const navigate = useNavigate();
  const height = navItems.length * 150 + 80;
  const [{ y }, api] = useSpring(() => ({ y: height }));

  const open = ({ canceled }: { canceled: boolean }) => {
    // when cancel is true, it means that the user passed the upwards threshold
    // so we change the spring config to create a nice wobbly effect
    api.start({
      y: 0,
      immediate: false,
      config: canceled ? config.wobbly : config.stiff,
    });
  };
  const close = (velocity = 0, redirect?: string) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...config.stiff, velocity },
      onRest: () => redirect && navigate(redirect),
    });
  };

  const bind = useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
      canceled,
    }) => {
      // if the user drags up passed a threshold, then we cancel
      // the drag so that the sheet resets to its open position
      if (my < -70) cancel();

      // when the user releases the sheet, we check whether it passed
      // the threshold for it to close, or if we reset it to its open positino
      if (last) {
        my > height * 0.5 || (vy > 0.5 && dy > 0)
          ? close(vy)
          : open({ canceled });
      }
      // when the user keeps dragging, we just move the sheet according to
      // the cursor position
      else api.start({ y: my, immediate: true });
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    }
  );

  const display = y.to((py) => (py < height ? "block" : "none"));

  const bgStyle = {
    transform: y.to(
      [0, height],
      ["translateY(-8%) scale(1.16)", "translateY(0px) scale(1.00)"]
    ),
    opacity: y.to([0, height], [0.4, 1], "clamp"),
  };
  return (
    <div className="nav-popup-cont" id={bgColor}>
      <a.div style={bgStyle}>{children}</a.div>
      <div className="actionBtn" onClick={() => open({ canceled: false })} />

      {/* Nav popup */}
      <a.div
        className="nav-options-cont"
        {...bind()}
        style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
      >
        {/* Background layer to prevent other DOM interaction */}
        <div id="cover" onClick={() => close()} />
        {/* Nav options */}
        {navItems.map((navItem) => (
          <div
            key={navItem.name}
            onClick={() => close(0, `${navItem.path}`)}
            children={navItem.name}
          />
        ))}
        <div onClick={() => close()}>
          <span>Close</span>
        </div>
      </a.div>
    </div>
  );
};

export default NavPopup;
