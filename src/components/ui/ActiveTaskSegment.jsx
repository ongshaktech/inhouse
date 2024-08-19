import React, { useEffect } from "react";

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
  return (
    <>
      <div className="flex justify-between items-center py-2">
        <h2 className="text-pen font-bold">{projectName}</h2>
        <button
          className={`px-3 py-1 rounded-md text-sm border ${
            phase == "IU"
              ? "border-[#E20DCD] bg-[#FBDCF8] text-[#E20DCD]"
              : phase == "I!U"
              ? "border-[#E8F70C] bg-[#F3FDD2]/60 text-black"
              : phase == "!I!U"
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
    </>
  );
}
