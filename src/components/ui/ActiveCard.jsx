import React from "react";
import { LuBadgeCheck } from "react-icons/lu";
import { TbDotsVertical } from "react-icons/tb";

import photo from "../../assets/images/photo.jpeg";
import { RxTimer } from "react-icons/rx";

export default function ActiveCard() {
  return (
    <div className="shadow-md rounded-lg p-4">
      <div className="flex gap-4 justify-between items-center">
        <div>
          <img src={photo} alt="" className="w-[60px] h-[60px] object-cover rounded-full" />
        </div>
        <div className="flex gap-2 items-center">
          <LuBadgeCheck  className="w-6 h-6 cursor-pointer"/>
          <TbDotsVertical className="w-6 h-6 cursor-pointer" />
        </div>
      </div>

        <div className="flex justify-between items-center py-2">
            <h2 className="text-pen font-bold">Travonus</h2>
            <button className="px-3 py-1 rounded-md text-sm border border-blue text-blue">UI</button>
        </div>
        <p className="text-pen text-sm">Identify and Redesign UI Issues for In-House Dashboard</p>

        <div className="flex justify-end pt-1" >
            <div className="flex gap-2 items-center">
                <RxTimer />
                <p>00:00:00</p>
            </div>
        </div>
    </div>
  );
}
