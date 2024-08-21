import React from "react";
import { toast } from "react-toastify";

export default function DashboardIncompleteTask({
  projectName,
  project,
  phase,
  selectedTask,
  setSelectedTask,
}) {
  let tasks = project?.incomplete[projectName];
  let otherClass =
    phase == "UI"
      ? "border-[#E20DCD] bg-[#FBDCF8] text-[#E20DCD]"
      : phase == "!UI"
      ? "border-[#E8F70C] bg-[#F3FDD2]/60 text-black"
      : phase == "!U!I"
      ? "border-[#051F4D] bg-[#AECBFF]/50 text-[#051F4D]"
      : "border-blue text-blue bg-[#EEF8FF]";

  const handleTask = (e) => {
    let trackingId = Number(e.target.value);
    let hasTask = selectedTask?.some(
      (account) => account?.task_id === trackingId
    );


    if (!hasTask) {
      setSelectedTask([{ task_id: trackingId, status: "ongoing" }]);
    }

    if (hasTask) {
      toast.error("Can't add more than one task");
    }
  };

  return tasks?.map((task) => (
    <>
      <div className={`flex   gap-2 p-2  rounded-md  border ${otherClass}`}>
        <div className="w-[20px] ">
          <input
            type="checkbox"
            name=""
            id=""
            className="border "
            checked={selectedTask?.some(
              (account) => account?.task_id === task?.id
            )}
            value={task?.id}
            onChange={handleTask}
          />
        </div>
        <div className="w-full  text-sm">
          <ul className="pl-2">
            <li>- {task?.task_name}</li>
          </ul>
          <div className="flex justify-end gap-4 pt-1">
            <p
              className={`text-right border font-bold  px-3 rounded-sm ${otherClass}`}
            >
              {task?.project_name}
            </p>
            <p>{phase}</p>
          </div>
        </div>
      </div>
    </>
  ));
}
