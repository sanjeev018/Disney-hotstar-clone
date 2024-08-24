import React, { useState } from "react";
// import logo from "../images/logo.png";
import user from "../images/user.png";
import search from "../images/search.png";
import home from "../images/home.png";
import tvicon from "../images/tvicon.png";
import action from "../images/action.png";
import comedy from "../images/comedy.png";
import disneylogo from "../images/disneylogo.svg";
import { IoIosSearch } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { FiTv } from "react-icons/fi";
import { FaRadio } from "react-icons/fa6";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";

const Navbar = () => {
  const [touch, setTouch] = useState(false);

  return (
    <div
      onMouseEnter={() => setTouch(true)}
      onMouseLeave={() => setTouch(false)}
      className="grid grid-cols-1 py-10 h-full"
    >
      <div>
        <ul className="flex justify-center items-center flex-col gap-y-8">
          <li>
            <img
              height={90}
              width={90}
              src={disneylogo}
              // height={3000}s
              // width={4000}
              className="cursor-pointer"
            />
          </li>

          <li>
            <GoHome color="#ffffff" height={300} width={300} />
          </li>
          <li>
            <IoIosSearch />
          </li>
          <li>
            <FiTv />
          </li>
          <li>
            <FaRadio />
          </li>
          <li>
            <MdOutlineSportsBaseball />
          </li>
          <li>
            <img height={50} width={50} src={comedy} />
            <BiCategoryAlt />
          </li>
        </ul>
      </div>

      <div
        className={`z-20 opacity-0 transition ${
          touch && "opacity-100 visible"
        } ml-8 w-20 bg-red-500 h-screen font-bold text-base text-slate-300`}
      >
        <h4 className="mt-20">Signin</h4>
        <h4 className="mt-9">Search</h4>
        <h4 className="mt-11">Home</h4>
        <h4 className="mt-10">TV</h4>
        <h4 className="mt-8">Action</h4>
        <h4 className="mt-10">Comedy</h4>
      </div>
    </div>
  );
};

export default Navbar;
