import React, { useState } from "react";
import { HiOutlineViewList, HiOutlineX } from "react-icons/hi";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { Link } from "react-router-dom";
import photo from "../assets/images/photo.jpeg";

export default function Navbar() {
  let [showNav, setShowNav] = useState(false);
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
            <p>Dashboard</p>
            <p>Task</p>
            <p>Projects</p>
            <p>Timeline</p>

            <div className="flex gap-6 items-center">
              <div>
                <HiOutlineBellAlert className="w-8 h-8" />
              </div>
              <div>
                <img src={photo} alt="" className="w-12 h-12 rounded-full object-cover" />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
