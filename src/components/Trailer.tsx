import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constant";
import { useParams } from "react-router-dom";
import SideNavigation from "./SideNavigation";

interface Movie {
  Title: string;
  Poster: string;
  imdbId: string;
  Actors: string;
  Language: string;
  Plot: string;
  Year: string;
  Runtime: string;
  Genre: string;

  [key: string]: any;
}

const Trailer = () => {
  const { trailerId } = useParams<{ trailerId: string }>();
  const [item, setItem] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const fetchData = async () => {
    setLoading(true); // Start loading
    setError(null); // Clear any previous errors

    try {
      const response = await axios.get(
        `${BASE_URL}?apikey=37cc3c6d&i=${trailerId}`
      );
      setItem(response.data);
      console.log(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-12 h-screen ">
      <div className="col-span-1 bg-slate-950 ">
        <div className="fixed z-50">
          <SideNavigation />
        </div>
      </div>
      {loading &&
      <div className="h-screen w-screen flex justify-center items-center bg-slate-900">
         <h1 className="text-3xl text-gray-200  text-center font-bold"> Loading....</h1>
           </div>
           }
      {error && 
      <p>Error: {error?.message}</p>} {/* Display error message */}
     
      {item && (
        <div className="col-span-11  bg-slate-500 flex justify-center items-center">
          <div>
            <div className="max-w-80 bg-gray-700 rounded-md m-5">
              <div className="h-48">
                <img
                  className=" h-full w-full rounded-t-md"
                  src={item?.Poster}
                  alt="img"
                />
              </div>
              {/* watch Nw and watchList button  */}
              <div></div>
              <div className="px-2 py-4">
                <p className="text-base font-semibold text-gray-100 text-center">
                  {item?.Year} &middot; {item?.Runtime} &middot; {item.Language}{" "}
                  &middot;
                  {item?.imdbRating} &middot; {item.Genre}
                </p>
                <p className="text-sm text-gray-300 font-light leading-5">
                  {" "}
                  {item?.Plot}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Trailer;
