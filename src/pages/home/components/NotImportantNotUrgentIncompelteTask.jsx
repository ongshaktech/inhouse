import React from "react";
import DashboardIncompleteTask from "./DashboardIncompleteTask";
import DashboardCompleteTask from "./DashboardCompleteTask";
import DashboardCompleteTaskLogedIn from "./DashboardCompletedTaskLogedIn";

export default function NotImportantNotUrgentIncompleteTask({
  project,
  phase,
  selectedTask,
  setSelectedTask,
}) {
  let allProjects = Object.keys(project?.incomplete ? project?.incomplete : {});

  return (
    // <div className="pt-2">
    //   <div className="grid grid-cols-2 gap-4">
    <>
      {Object?.keys(project?.incomplete)?.length
        ? allProjects?.map((projectDetail, id) => (
            <DashboardIncompleteTask
              key={id}
              projectName={projectDetail}
              project={project}
              phase={phase}
              selectedTask={selectedTask}
              setSelectedTask={setSelectedTask}
            />
          ))
        : null}

      {/* </div>
    </div> */}
    </>
  );
}
