import React, { useEffect, useState } from "react";
import SideNavigation from "./SideNavigation";
import { ClockLoader } from "react-spinners";

const ContentTv = ({ ContentMovies }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading();
    }, 800);
  }, []);

  return (
    <div>
      {loading == true ? (
        <div className="grid grid-cols-12 h-screen ">
          <div className="col-span-1 bg-slate-950 ">
            <div className="fixed z-50">
              <SideNavigation />
            </div>
          </div>

          <div className="col-span-11 bg-slate-800 flex  justify-center">
            <p className="text-white font-semibold text-4xl text-center pt-60 font-serif">
              <ClockLoader color="red" size={80} />
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-12 h-screen ">
          <div className="col-span-1 bg-slate-950 ">
            <div className="fixed z-50">
              <SideNavigation />
            </div>
          </div>

          <div className="col-span-11 bg-slate-800 flex  justify-center">
            <p className="text-white font-semibold text-4xl text-center pt-60 font-serif">
              Content coming soon ...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentTv;
