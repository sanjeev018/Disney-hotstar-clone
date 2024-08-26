import React, { useEffect, useState } from "react";
import SideNavigation from "./components/SideNavigation";
import BannerContainer from "./components/BannerContainer";
import ScrollContainer from "./components/ScrollContainer";
// import { BASE_URL, OMDB_API_KEY } from "./constant";
import {
  useGetActionMoviesQuery,
  useGetAdventureMoviesQuery,
  useGetComedyMoviesQuery,
  useGetDramaMoviesQuery,
  useGetHorrorMoviesQuery,
} from "./redux/services/ActionsService";

type Props = {};

const App = (props: Props) => {
  const [actionsMovies, setActionsMovies] = useState([]);
  const [comdeyMovies, setComdeyMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [adventureMovies, setAdventureMovies] = useState([]);

  const { isLoading, isFetching, data } = useGetActionMoviesQuery("");

  const {
    isLoading: isLoadingComedy,
    isFetching: isFetchingComedy,
    data: comedyData,
  } = useGetComedyMoviesQuery("");

  const {
    isLoading: isLoadingDrama,
    isFetching: isFetchingDrama,
    data: dramaData,
  } = useGetDramaMoviesQuery("");

  const {
    isLoading: isLoadingHorror,
    isFetching: isFetchingHorror,
    data: horrorData,
  } = useGetHorrorMoviesQuery("");

  const {
    isLoading: isLoadingAdventure,
    isFetching: isFetchingAdventure,
    data: adventureData,
  } = useGetAdventureMoviesQuery("");

  // console.log(
  //   "isLoading",
  //   isLoadingAdventure,
  //   "isFetching",
  //   isFetchingAdventure,
  //   "data",
  //   adventureData
  // );

  // action Movies
  useEffect(() => {
    if (!isLoading && !isFetching) {
      setActionsMovies(data?.Search);
    }
  }, [isLoading, isFetching, data]);

  // comedy Movies
  useEffect(() => {
    if (!isLoadingComedy && !isFetchingComedy) {
      setComdeyMovies(comedyData?.Search);
    }
  }, [isLoadingComedy, isFetchingComedy, comedyData]);
  // Drama Movies
  useEffect(() => {
    if (!isLoadingDrama && !isFetchingDrama) {
      setDramaMovies(dramaData?.Search);
    }
  });
  // Horror Movies
  useEffect(() => {
    if (!isLoadingHorror && !isFetchingHorror) {
      setHorrorMovies(horrorData?.Search);
    }
  });
  // Adventure Movies
  useEffect(() => {
    if (!isLoadingAdventure && !isFetchingAdventure) {
      setAdventureMovies(adventureData?.Search);
    }
  });

  // ------using fetching api----------
  // const [comedyMovies, seComedyMovies] = useState([]);

  // const getActionMoviesData = () => {
  //   fetch(`${BASE_URL}?s=action&type=movie&apikey=${OMDB_API_KEY}`)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       if (result?.Response === "True") {
  //         setActionsMovies(result?.Search);
  //       }
  //     })
  //     .catch((err) => console.error(err));
  // };

  // const getComedyMoviesData = () => {
  //   fetch(`${BASE_URL}?s=comedy&type=movie&apikey=${OMDB_API_KEY}`)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       if (result?.Response === "True") {
  //         seComedyMovies(result?.Search);
  //       }
  //     })
  //     .catch((err) => console.error(err));
  // };

  // useEffect(() => {
  //   getActionMoviesData();
  //   getComedyMoviesData()
  // }, []);
  // ------using fetching api----------

  return (
    <>
      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-1 bg-slate-950 ">
          <div className="fixed z-50">
            <SideNavigation />
          </div>
        </div>

        <div className="col-span-11 bg-slate-900 overflow-y-auto">
          <BannerContainer />

          {/* Actions Movies */}
          <ScrollContainer title="Action Movies" data={actionsMovies} />
          {/* Comedy Movies */}
          <ScrollContainer title="Comdey Movies" data={comdeyMovies} />
          {/* Drama Movies */}
          <ScrollContainer title="Drama Movies" data={dramaMovies} />
          {/* Horror Movies */}
          <ScrollContainer title="Horror Movies" data={horrorMovies} />
          {/* adventure Movies */}
          <ScrollContainer title="Adventure Movies" data={adventureMovies} />
          {/* animation Movies */}
          <ScrollContainer title="Animation Movies" data={adventureMovies} />

          {/* <ScrollContainer title="Comedy Movies" data={} />
          <ScrollContainer title="Horror Movies" data={} />
          <ScrollContainer title="Adventure Movies" data={} />
          <ScrollContainer title="Gor Movies" data={} />
          <ScrollContainer title="Fantasy Movies" data={} />
          <ScrollContainer title="Sci-fi Movies" data={} />
          <ScrollContainer title="Mystery Movies" data={} />
          <ScrollContainer title="Drama Movies" data={} /> */}

          {/* <ScrollContainer /> */}

          {/* <ScrollContainer /> */}

          {/* <ScrollContainer /> */}
        </div>

        {/* Cards Sliders */}
      </div>
    </>
  );
};

export default App;
