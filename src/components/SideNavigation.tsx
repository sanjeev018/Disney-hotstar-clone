import React, { useState } from "react";
import disneylogo from "../images/disneylogo.svg";
import { IoIosSearch } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { FiTv } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { FaRadio } from "react-icons/fa6";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

// types
// interface
// enums
// generics
const SideNavigation = () => {
  const [touch, setTouch] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div
      onMouseEnter={() => setTouch(true)}
      onMouseLeave={() => setTouch(false)}
      className="py-10 flex relative"
    >
      <div>
        <ul className="flex justify-center items-center flex-col gap-y-9 cursor-pointer">
          <li>
            <img
              height={90}
              width={90}
              src={disneylogo}
              className="cursor-pointer ml-2"
              alt="main-logo"
            />
            <button className="text-yellow-400 bg-slate-900 ms-3 text-xs font-extralight rounded-lg px-2 tracking-wider py-1">
              Subscribe &gt;{" "}
            </button>
          </li>

          <li className="mt-10">
            <FaUserCircle
              color="#ffffff"
              className="hover:scale-150 ease-in-out duration-300"
            />
          </li>

          <li onClick={() => navigate("/explore")}>
            <IoIosSearch
              color="#ffffff"
              className="h-6 w-6 hover:scale-150 ease-in-out duration-300"
            />
          </li>

          <li>
            <GoHome
              color="#ffffff"
              className="h-6 w-6 hover:scale-150 ease-in-out duration-300"
            />
          </li>
          <li>
            <FiTv
              color="#ffffff"
              className="h-5 w-5 hover:scale-150 ease-in-out duration-300"
            />
          </li>
          <li>
            <FaRadio
              color="#ffffff"
              className="h-4 w-4 hover:scale-150 ease-in-out duration-300"
            />
          </li>
          <li>
            <MdOutlineSportsBaseball
              color="#ffffff"
              className="h-5 w-5 hover:scale-150 ease-in-out duration-300"
            />
          </li>
          <li>
            <BiCategoryAlt
              color="#ffffff"
              className="h-5 w-5 hover:scale-150 ease-in-out duration-300"
            />
          </li>
        </ul>
      </div>
      {/* Title of icons */}
      <div
        className={`${
          touch
            ? "opacity-100  visible w-[200px] translate-x-6"
            : "opacity-0  w-[0px]"
        } absolute left-16 top-36 h-full transition-all font-bold text-base text-slate-300`}
      >
        <ul className="flex text-lg font-medium flex-col gap-y-7 mt-11 cursor-pointer">
          <li className="hover:scale-110 ease-in-out duration-300">
            <a href="/">Signin</a>
          </li>

          <li className="hover:scale-110 ease-in-out duration-300">
            <a href="/"> Search</a>
          </li>

          <li className="hover:scale-110 ease-in-out duration-300">
            <a href="/"> Home </a>
          </li>

          <li className="hover:scale-110 ease-in-out duration-300">
            <a href="/"> TV</a>
          </li>

          <li className="hover:scale-110 ease-in-out duration-300">
            <a href="/"> Movies</a>
          </li>

          <li className="hover:scale-110 ease-in-out duration-300">
            <a href="/"> Sports</a>
          </li>

          <li className="hover:scale-110 ease-in-out duration-300">
            <a href="/"> Categories</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavigation;
