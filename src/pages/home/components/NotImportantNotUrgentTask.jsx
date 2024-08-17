import React from "react";
import DashboardIncompleteTask from "./DashboardIncompleteTask";

export default function NotImportantNotUrgentTask({ project, phase }) {
  let allProjects = Object.keys(project?.incomplete ? project?.incomplete : {});

  return (
    <div className="pt-2">
      <div className="flex flex-col gap-4">
        {Object?.keys(project?.incomplete)?.length
          ? allProjects?.map((projectDetail, id) => (
              <DashboardIncompleteTask
                key={id}
                projectName={projectDetail}
                project={project}
                phase={phase}
              />
            ))
          : null}
      </div>
    </div>
  );
}
