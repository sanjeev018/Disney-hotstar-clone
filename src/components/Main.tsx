import React from "react";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Home from "./Home";

import disneylogo from "../images/disneylogo.svg";

const Main = () => {
  return (
    <div>
      <div className="bg-slate-950 h-full overflow-auto">
        <div className="flex">
          <Navbar />
          <div className="w-11/12">
            <Welcome />
          </div>
        </div>

        {/* Cards Sliders */}
        <Home />
        <Home />
        <Home />
        <Home />
        <Home />
        <Home />
        <Home />
        <Home />
        <Home />
      </div>

      <img
        src={disneylogo}
        height={100}
        width={100}
        className="cursor-pointer"
      />
    </div>
  );
};

export default Main;
