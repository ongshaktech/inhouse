import React from "react";
import { LuBadgeCheck } from "react-icons/lu";
import { TbDotsVertical } from "react-icons/tb";

import photo from "../../assets/images/photo.jpeg";
import { RxTimer } from "react-icons/rx";
import ActiveTaskSegment from "./ActiveTaskSegment";

export default function ActiveCard({ task }) {
  let importantNotUrgentTask = Object.keys(
    task?.important_not_urgent?.ongoing
      ? task?.important_not_urgent?.ongoing
      : {}
  );
  let importantUrgentTask = Object.keys(
    task?.important_urgent?.ongoing ? task?.important_urgent?.ongoing : {}
  );
  let notImportantNotUrgentTask = Object.keys(
    task?.not_important_not_urgent?.ongoing
      ? task?.not_important_not_urgent?.ongoing
      : {}
  );
  let notImportantUrgentTask = Object.keys(
    task?.not_important_urgent?.ongoing
      ? task?.not_important_urgent?.ongoing
      : {}
  );

  let allData = [
    ...importantNotUrgentTask,
    ...importantUrgentTask,
    ...notImportantNotUrgentTask,
    ...notImportantUrgentTask,
  ];
  return allData?.length ? (
    <div className="shadow-md rounded-lg p-4 relative">
      <div className="flex gap-4 justify-between items-center">
        <div className="absolute -top-6 left-4">
          <img
            src={task?.profile_img}
            alt=""
            className="w-[60px] h-[60px] object-cover rounded-full"
          />
        </div>

        <div></div>
        <div className="flex gap-2 items-center">
          <LuBadgeCheck className="w-6 h-6 cursor-pointer" />
          <TbDotsVertical className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
      {importantNotUrgentTask?.map((project) => (
        <ActiveTaskSegment
          projectName={project}
          obj={task?.important_not_urgent}
          phase="I!U"
        />
      ))}
      {importantUrgentTask?.map((project) => (
        <ActiveTaskSegment
          projectName={project}
          obj={task?.important_urgent}
          phase="IU"
        />
      ))}
      {notImportantNotUrgentTask?.map((project) => (
        <ActiveTaskSegment
          projectName={project}
          obj={task?.not_important_not_urgent}
          phase="!I!U"
        />
      ))}
      {notImportantUrgentTask?.map((project) => (
        <ActiveTaskSegment
          projectName={project}
          obj={task?.not_important_urgent}
          phase="!IU"
        />
      ))}

      <div className="flex justify-end pt-1 ">
        <div className="flex gap-2 items-center">
          <RxTimer />
          <p>00:00:00</p>
        </div>
      </div>
    </div>
  ) : null;
}
