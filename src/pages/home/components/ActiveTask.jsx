import React from "react";
import ActiveCard from "../../../components/ui/ActiveCard";
import { FaPencil } from "react-icons/fa6";

export default function ActiveTask() {
  return (
    <div className="container mx-auto px-6 py-6">
      <div className="flex justify-between items-center pb-4">
        <h2 className="text-2xl font-bold pb-2 text-pen">
          Active Task Overview
        </h2>
        <div className="flex gap-4 items-center">
          <button className="flex gap-2 items-center border border-gray-400 px-3 py-2 rounded-md">
            <FaPencil />
            <p>Create</p>
          </button>
          <button className="flex gap-2 items-center border border-gray-400 px-3 py-2 rounded-md">
            <p>Assigned Task</p>
          </button>
          <select name="" id="" className="px-3 py-2 rounded-md border border-gray-400">
            <option>January</option>
            <option>February</option>
            <option>March</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ActiveCard />
        <ActiveCard />
        <ActiveCard />
        <ActiveCard />
        <ActiveCard />
        <ActiveCard />
        <ActiveCard />
      </div>
    </div>
  );
}
