import React from "react";
import DashboardIncompleteTask from "./DashboardIncompleteTask";

export default function NotImportantUrgentTask({
  project,
  phase,
  selectedTask,
  setSelectedTask,
}) {
  let allProjects = Object.keys(project?.incomplete ? project?.incomplete : {});

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
