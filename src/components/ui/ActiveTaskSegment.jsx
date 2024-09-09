import React, { useEffect } from "react";
import { RxTimer } from "react-icons/rx";
import { timeCalculate } from "../../utils/timeCalculate";
import TimeComponent from "./TimeComponent";

export default function ActiveTaskSegment({
  projectName,
  obj,
  phase,
  setSelectedTask,
  selectedTask,
}) {
  let tasks = obj?.ongoing[projectName];

  useEffect(() => {
    let data = tasks?.map((task) => ({
      task_id: task?.id,
      status: "completed",
    }));
    setSelectedTask([...selectedTask, ...data]);
  }, [projectName]);

  console.log("tasks", tasks);
  return (
    <div className="h-[calc(100%-1.75rem)] flex flex-col justify-between ">
      <div>
        <div className="flex justify-between items-center py-2">
          <h2 className="text-pen font-bold">{projectName}</h2>
          <button
            className={`px-3 py-1 rounded-md text-sm border ${
              phase == "UI"
                ? "border-[#E20DCD] bg-[#FBDCF8] text-[#E20DCD]"
                : phase == "!UI"
                ? "border-[#E8F70C] bg-[#F3FDD2]/60 text-black"
                : phase == "!U!I"
                ? "border-[#051F4D] bg-[#AECBFF]/50 text-[#051F4D]"
                : "border-blue text-blue bg-[#EEF8FF]"
            } `}
          >
            {phase}
          </button>
        </div>
        {tasks?.map((task) => (
          <>
            <p className="text-pen text-sm">- {task?.task_name}</p>
          </>
        ))}
      </div>

      <div className="flex justify-end  ">
        <div className="flex gap-2 items-center">
          <RxTimer />
          <TimeComponent startedOn={tasks[0]?.started_on} />
          {/* <p>{timeCalculate()}</p> */}
        </div>
      </div>
    </div>
  );
}
