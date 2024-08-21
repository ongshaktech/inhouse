import React from "react";
import { toast } from "react-toastify";

export default function DashboardCompleteTask({
  projectName,
  project,
  phase,
  selectedTask,
  setSelectedTask,
}) {
  let tasks = project?.completed[projectName];
  

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
    <div className={`flex   gap-2 p-2  rounded-md  border bg-gray-200`}>
      <div className="w-[20px] ">
        {/* <input
          type="checkbox"
          name=""
          id=""
          className="border "
          checked={selectedTask?.some(
            (account) => account?.task_id === task?.id
          )}
          value={task?.id}
          onChange={handleTask}
        /> */}
      </div>
      <div className="w-full  text-sm">
        <ul className="pl-2">
          <li className="line-through">- {task?.task_name}</li>
        </ul>
        <div className="flex justify-end gap-4 pt-1">
          <p
            className={`text-right  font-bold  px-3 rounded-sm border border-gray-400`}
          >
            {task?.project_name}
          </p>
          {/* <p>{phase}</p> */}
        </div>
      </div>
    </div>
   </>
  ));
}
