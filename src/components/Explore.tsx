import { useState } from "react";
import { useGetSearchMoviesMutation } from "../redux/services/ActionsService";
import SideNavigation from "./SideNavigation";

const Explore = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const [getSearch] = useGetSearchMoviesMutation();

  const handleChange = (value: string) => {
    setSearchValue(value);

    getSearch(searchValue)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div>
        <div className="grid grid-cols-12 h-screen">
          <div className="col-span-1 bg-slate-950 ">
            <div className="fixed z-50">
              <SideNavigation />
            </div>
          </div>
          <div className="col-span-11 bg-slate-700">
            <input
              className="h-fit"
              onChange={(e) => handleChange(e.target.value)}
              value={searchValue}
              type="search"
              placeholder="Search Movie Name here"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
