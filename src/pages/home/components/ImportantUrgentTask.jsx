import React from "react";
import DashboardIncompleteTask from "./DashboardIncompleteTask";

export default function ImportantUrgentTask({
  project,
  phase,
  selectedTask,
  setSelectedTask,
  first,
}) {
  let allProjects = Object.keys(project?.incomplete ? project?.incomplete : {});
  //   let allProjectsCompleted = Object.keys(
  //     project?.completed ? project?.completed : {}
  //   );
  //   let allProjectsOngoing = Object.keys(
  //     project?.ongoing ? project?.ongoing : {}
  //   );

  return Object?.keys(project?.incomplete)?.length
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
    : null;
}
