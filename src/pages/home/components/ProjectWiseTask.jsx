import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function ProjectWiseTask() {
  return (
    <div className="pt-2">
      <div className="flex gap-4 items-center justify-between pb-2">
        <h2 className="text-2xl font-semibold text-pen">Inhouse Dashboard</h2>
        <FaAngleUp className="w-8 h-8 fill-gray-500" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex gap-4 p-2 border border-[#FF2327] rounded-md bg-[#FAA8A8]/50 text-pen">
          <div className="w-[40px]">
            <input
              type="checkbox"
              name=""
              id=""
              className="border border-[#FF2327] outline-[#FF2327]"
            />
          </div>
          <div className="w-full text-sm">
            <p>Create Mid-Fidelity Dashboard Screen Design:</p>
            <ul className="pl-6">
              <li>
                - Develop the mid-fidelity design for the dashboard screen.
                Focus on structuring the layout and including all essential
                components.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4 p-2 border border-[#1F98EC] rounded-md bg-[#EEF8FF] text-pen">
          <div className="w-[40px]">
            <input
              type="checkbox"
              name=""
              id=""
              className="border border-[#1F98EC] outline-[#1F98EC]"
            />
          </div>
          <div className="w-full text-sm">
            <p>Create Mid-Fidelity Dashboard Screen Design:</p>
            <ul className="pl-6">
              <li>
                - Develop the mid-fidelity design for the dashboard screen.
                Focus on structuring the layout and including all essential
                components.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
