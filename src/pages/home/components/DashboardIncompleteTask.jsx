import React from "react";

export default function DashboardIncompleteTask({
  projectName,
  project,
  phase,
}) {
  let tasks = project?.incomplete[projectName];
  let otherClass =
    phase == "IU"
      ? "border-blue text-blue bg-[#EEF8FF]"
      : phase == "I!U"
      ? "border-[#E8F70C] bg-[#F3FDD2]/60 text-black"
      : phase == "!I!U"
      ? "border-[#051F4D] bg-[#AECBFF]/50 text-[#051F4D]"
      : "border-[#E20DCD] bg-[#FBDCF8] text-[#E20DCD]";

  return tasks?.map((task) => (
    <div className={`flex gap-2 p-2  rounded-md  border ${otherClass}`}>
      <div className="w-[20px] ">
        <input
          type="checkbox"
          name=""
          id=""
          className="border "
        />
      </div>
      <div className="w-full  text-sm">
        <ul className="pl-2">
          <li>- {task?.task_name}</li>
        </ul>
        <div className="flex justify-end gap-4 pt-1">
          <p className={`text-right border font-bold  px-3 rounded-sm ${otherClass}`}>
            {task?.project_name}
          </p>
          <p>{phase}</p>
        </div>
      </div>
    </div>
  ));
}
