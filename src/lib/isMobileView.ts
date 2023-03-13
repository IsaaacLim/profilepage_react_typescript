// for mobile view; media query follow styles.scss
export default function isMobileView() {
  if (window.matchMedia("(max-width: 767px)").matches) {
    return true;
  }
  return false;
}
