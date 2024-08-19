import React, { useEffect, useState } from "react";
import { LuBadgeCheck } from "react-icons/lu";
import { TbDotsVertical } from "react-icons/tb";

import photo from "../../assets/images/photo.jpeg";
import { RxTimer } from "react-icons/rx";
import ActiveTaskSegment from "./ActiveTaskSegment";
import { useCompleteTaskMutation } from "../../features/projects/projectsApi";
import { toast } from "react-toastify";

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

  let [selectedTask, setSelectedTask] = useState([]);

  console.log("selectedTask", selectedTask);

  const [
    completeTask,
    { data: compelteData, isSuccess, isLoading, isError, error },
  ] = useCompleteTaskMutation();

  console.log(" isError, error", isError, error);

  const handleComplete = () => {
    completeTask(selectedTask);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully Complete your task");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      if (error?.status == 404) {
        toast.error(`Please perform on your own task`);
      }
    }
  }, [isError]);

  return allData?.length ? (
    <div className="shadow-md rounded-lg p-4 relative">
      <div className="flex gap-4 justify-between items-center pb-2">
        <div className="absolute -top-4 left-4">
          <img
            src={task?.profile_img}
            alt=""
            className="w-[50px] h-[50px] object-cover rounded-full"
          />
        </div>

        <div></div>
        <div className="flex gap-2 items-center">
          {!isLoading && (
            <LuBadgeCheck
              className="w-6 h-6 cursor-pointer"
              onClick={handleComplete}
            />
          )}

          {/* <TbDotsVertical className="w-6 h-6 cursor-pointer" /> */}
        </div>
      </div>
      {importantNotUrgentTask?.map((project) => (
        <ActiveTaskSegment
          projectName={project}
          obj={task?.important_not_urgent}
          phase="I!U"
          setSelectedTask={setSelectedTask}
          selectedTask={selectedTask}
        />
      ))}
      {importantUrgentTask?.map((project) => (
        <ActiveTaskSegment
          projectName={project}
          obj={task?.important_urgent}
          phase="IU"
          setSelectedTask={setSelectedTask}
          selectedTask={selectedTask}
        />
      ))}
      {notImportantNotUrgentTask?.map((project) => (
        <ActiveTaskSegment
          projectName={project}
          obj={task?.not_important_not_urgent}
          phase="!I!U"
          setSelectedTask={setSelectedTask}
          selectedTask={selectedTask}
        />
      ))}
      {notImportantUrgentTask?.map((project) => (
        <ActiveTaskSegment
          projectName={project}
          obj={task?.not_important_urgent}
          phase="!IU"
          setSelectedTask={setSelectedTask}
          selectedTask={selectedTask}
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
