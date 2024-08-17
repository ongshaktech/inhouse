import React from "react";
import DashboardIncompleteTask from "./DashboardIncompleteTask";

export default function ImportantNotUrgentTask({ project, phase }) {
  let allProjects = Object.keys(project?.incomplete ? project?.incomplete : {});

  return (
    <div className="pt-2">
      <div className="flex flex-col gap-4">
        {Object?.keys(project?.incomplete)?.length ? (
          <div className="max-h-[210px] flex flex-col gap-4 overflow-y-scroll project-list mt-3">
            {allProjects?.map((projectDetail, id) => (
              <DashboardIncompleteTask
                key={id}
                projectName={projectDetail}
                project={project}
                phase={phase}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
