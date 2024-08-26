import React from "react";
import stree from "../images/stree.webp";
import streelogo from "../images/streelogo.jpeg";
import { FaPlay } from "react-icons/fa6";

const bannerImg = [
  "https://w0.peakpx.com/wallpaper/849/749/HD-wallpaper-x-men-apocalypse-banner-poster-movies-widescreen.jpg",
  stree,
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJzmTJfldazoU8ElPC8ljF1otOqVACdjSgtgHinzMOs1athrMZzdVWDSu0UUz4DwhpGa64DM7ANeKZrHW2fZR9OEm1MShhWdqE9yONo2eCMGe8AT2KVBOruu2jjEyN7LyV0h9wp2QwyFXU/s1600/DC+Comics%25E2%2580%2599+Aquaman+Final+Theatrical+One+Sheet+Movie+Posters+%2526+Banners+%25283%2529.jpg",
  "https://teaser-trailer.com/wp-content/uploads/2019/01/Polar-new-banner.jpg",
  "https://collider.com/wp-content/uploads/gangster-squad-poster-banner.jpg",
];

const BannerContainer = () => {
  const getRandonImg = (imgArray: string[]) => {
    const random = Math.floor(Math.random() * 1000) % imgArray?.length;
    return imgArray[random];
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right,rgba(0,0,0,7), rgba(0,0,0,0.1)),url(${getRandonImg(
          bannerImg
        )})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="h-screen grid grid-cols-2"
    >
      <div>
        {/* <h1 className='text-slate-300 pt-60 font-bold text-4xl'>Stree</h1> */}

        <img src={streelogo} alt="banner" className="w-48 mt-24" />

        <div className="flex">
          <h1 className="text-white font-bold"> 2018 . 2h 7m . Hindi . </h1>
          <p className="text-white">U/A 16+ </p>
        </div>
        <p className="text-white">
          {" "}
          The small town of Chanderi is haunted by a vengeful
          <br />
          spirit, Stree. Soon enough, Vicky, a goofy, gifted tailor,
          <br /> becomes an unlikely saviour for his kind.
        </p>

        <p className="text-white font-semibold text-base mt-5">
          {" "}
          Horror | Paranormal | Dark | Supernatural
        </p>
        <div className="flex gap-4 mt-10">
          <button className="text-xl pe-16 opacity-75 ps-14 py-3 rounded-md bg-slate-700 hover:animate-pulse flex">
            {" "}
            <FaPlay className="mt-1 mr-2 text-white"/>
            <p className="text-white font-semibold"> Subscribe to Watch </p>
          </button>

          <p className="text-white text-4xl bg-slate-700 opacity-75 px-3 rounded-md cursor-pointer hover:animate-pulse">
            &#43;
          </p>

      
        </div>
      </div>

    </div>
  );
};

export default BannerContainer;
