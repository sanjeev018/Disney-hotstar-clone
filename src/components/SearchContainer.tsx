import React from 'react'
import Cards from './Cards';

type SearchContainerPropsType = {
    title: string;
    data: {
      Poster: string;
      Title: string;
      Type: string;
      Year: string;
      imdbID: string;
    }[];
  };
  
const SearchContainer = ({data}:SearchContainerPropsType) => {
  return (
    <div className="-z-50">
      <div className="px-10">
        <p className="text-white ml-2 font-semibold text-xl mb-2">Your search movies </p>
          {data?.map((imags, index) => {
            return (
              <div key={index} className="px-2 -z-50">
                <Cards url={imags?.Poster} />
              </div>
            );
          })}
      </div>
    </div>
  )
}

export default SearchContainer
