import React from "react";
import DashboardIncompleteTask from "./DashboardIncompleteTask";

export default function ImportantUrgentTask({ project, phase }) {
  let allProjects = Object.keys(project?.incomplete ? project?.incomplete : {});
  //   let allProjectsCompleted = Object.keys(
  //     project?.completed ? project?.completed : {}
  //   );
  //   let allProjectsOngoing = Object.keys(
  //     project?.ongoing ? project?.ongoing : {}
  //   );

  return (
    <div className="pt-2">
      <div className="flex flex-col gap-4">
        {Object?.keys(project?.incomplete)?.length
          ? allProjects?.map((projectDetail, id) => (
              <DashboardIncompleteTask
                key={id}
                projectName={projectDetail}
                project={project}
                phase={ phase}
              />
            ))
          : null}

        {/* <div className="flex gap-4 p-2 border border-[#1F98EC] rounded-md bg-[#EEF8FF] text-pen">
          <div className="w-[40px]">
            <input
              type="checkbox"
              name=""
              id=""
              className="border border-[#1F98EC] outline-[#1F98EC]"
            />
          </div>
          <div className="w-full text-sm">
            <p>Create Mid-Fidelity Dashboard Screen Design:</p>
            <ul className="pl-6">
              <li>
                - Develop the mid-fidelity design for the dashboard screen.
                Focus on structuring the layout and including all essential
                components.
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
}
