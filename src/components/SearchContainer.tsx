import React from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";

type SearchContainerPropsType = {
  data: {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
  }[];
};

const SearchContainer = ({ data }: SearchContainerPropsType) => {
  
  console.log('data' , data)

  return (
    <div className="-z-50">
        <p className="text-white ml-2 font-semibold text-xl mb-2">
          Your searched movies{" "}
        </p>
      <div className="px-5 grid grid-cols-4 gap-2">
        {data?.map((imags, index) => {
          return (
            <div key={index} className="w-80 h-80" >
              <Cards url={imags?.Poster} className="flex" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchContainer;
