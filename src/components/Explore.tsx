import { useState } from "react";
import { useGetSearchMoviesMutation } from "../redux/services/ActionsService";
import SideNavigation from "./SideNavigation";
import SearchContainer from "./SearchContainer";
import { CiSearch } from "react-icons/ci";

const Explore = () => {

  const [searchData, setSearchData] = useState([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const [getSearch] = useGetSearchMoviesMutation();

  const handleChange = (value: string) => {
    setSearchValue(value);

    getSearch(searchValue)
      .then((res: any) => {
        setSearchData(res?.data?.Search);
        console.log("res", res);
      })
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
          <div className="pr-24 col-span-11 bg-gray-950">

            <div className="flex"> 
              <CiSearch className="text-white h-7 w-7 absolute top-12 left-36 z-10"/>
            <input
              className="w-full rounded-lg text-white text-xl py-5 my-7 pl-14 outline-none bg-slate-700 relative"
              onChange={(e) => handleChange(e.target.value)}
              value={searchValue}
              type="search"
              placeholder= "Movies, shows and more"
              />
              </div>
        <SearchContainer data={searchData} />
          </div>
        </div>

      </div>
    </>
  );
};

export default Explore;
