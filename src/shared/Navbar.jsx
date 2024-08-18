import React, { useState } from "react";
import { HiOutlineViewList, HiOutlineX } from "react-icons/hi";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
import photo from "../assets/images/photo.jpeg";
import { useGetProfileQuery } from "../features/userApi/userApi";
import men1 from "../assets/images/men1.png";
import { FaAngleDown } from "react-icons/fa";

export default function Navbar() {
  let [showNav, setShowNav] = useState(false);
  const { data: profileData, isSuccess } = useGetProfileQuery();

  return (
    <div className="bg-primary text-black">
      <div className="relative  container mx-auto px-10 py-2 flex flex-col md:flex-row justify-between gap-10 items-center z-10">
        <div className="max-w-[500px]  w-full flex justify-between items-center">
          <Link to="/">
            <h2 className="text-2xl font-bold">Ongshak</h2>
          </Link>
          <div className="md:hidden">
            {!showNav ? (
              <HiOutlineViewList
                className="w-8 h-8"
                onClick={() => setShowNav(true)}
              />
            ) : (
              <HiOutlineX
                className="w-8 h-8"
                onClick={() => setShowNav(false)}
              />
            )}
          </div>
        </div>
        <div
          className={`${
            showNav ? "" : "hidden"
          } w-full flex-end md:flex gap-6 items-center justify-end`}
        >
          <ul className="flex flex-col md:flex-row gap-16 items-center text-sm ">
            {/* <p>Dashboard</p> */}
          
            <div className="relative">
              <p className=" peer font-semibold text-[12px] flex items-center gap-1 cursor-pointer">
                <p>Tasks</p>
                <FaAngleDown />
              </p>
              <div
                className={`z-10 hidden  peer-hover:flex hover:flex  absolute top-[15px] left-0 bg-white divide-y divide-gray-100  shadow w-56 p-4 border-t-4 border-primary`}
              >
                <div className="w-full">
                  <NavLink  to="/todays-plan" smooth>
                    <p className="text-[12px] hover:bg-primary p-2 cursor-pointer">
                    Todays’Task
                    </p>
                  </NavLink>
                  <NavLink to="/tasks" smooth>
                    <p className="text-[12px] hover:bg-primary p-2 cursor-pointer">
                    View Task
                    </p>
                  </NavLink>
                </div>
              </div>
            </div>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              <p>Projects</p>
            </NavLink>
            <NavLink
              to="/timeline"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              <p>Timeline</p>
            </NavLink>

            <div className="flex gap-6 items-center">
              <div>
                <HiOutlineBellAlert className="w-6 h-6" />
              </div>
              <div>
                <img
                  src={profileData?.image ? profileData?.image : men1}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
