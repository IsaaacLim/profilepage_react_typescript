import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/css/style.css";
import routes from "./data/routes";

const Home: React.FunctionComponent<{}> = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
