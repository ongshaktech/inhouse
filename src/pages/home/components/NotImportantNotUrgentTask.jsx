import React from "react";
import DashboardIncompleteTask from "./DashboardIncompleteTask";
import DashboardCompleteTask from "./DashboardCompleteTask";

export default function NotImportantNotUrgentTask({
  project,
  phase,
  task,
  selectedTask,
  setSelectedTask,
}) {
  let allProjects = Object.keys(project?.incomplete ? project?.incomplete : {});

  let completed1 = Object.keys(
    task?.not_important_not_urgent?.completed
      ? task?.not_important_not_urgent?.completed
      : {}
  );
  let completed2 = Object.keys(
    task?.not_important_urgent?.completed
      ? task?.not_important_urgent?.completed
      : {}
  );
  let completed3 = Object.keys(
    task?.important_not_urgent?.completed
      ? task?.important_not_urgent?.completed
      : {}
  );
  let completed4 = Object.keys(
    task?.important_urgent?.completed ? task?.important_urgent?.completed : {}
  );

  return (
    <div className="flex flex-col gap-4">
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
      {completed1?.length
        ? completed1?.map((projectDetail, id) => (
            <DashboardCompleteTask
              key={id}
              projectName={projectDetail}
              project={task?.not_important_not_urgent}
              phase={phase}
              selectedTask={selectedTask}
              setSelectedTask={setSelectedTask}
            />
          ))
        : null}
      {completed2?.length
        ? completed2?.map((projectDetail, id) => (
            <DashboardCompleteTask
              key={id}
              projectName={projectDetail}
              project={task?.not_important_urgent}
              phase={phase}
              selectedTask={selectedTask}
              setSelectedTask={setSelectedTask}
            />
          ))
        : null}
      {completed3?.length
        ? completed3?.map((projectDetail, id) => (
            <DashboardCompleteTask
              key={id}
              projectName={projectDetail}
              project={task?.important_not_urgent}
              phase={phase}
              selectedTask={selectedTask}
              setSelectedTask={setSelectedTask}
            />
          ))
        : null}
      {completed4?.length
        ? completed4?.map((projectDetail, id) => (
            <DashboardCompleteTask
              key={id}
              projectName={projectDetail}
              project={task?.important_urgent}
              phase={phase}
              selectedTask={selectedTask}
              setSelectedTask={setSelectedTask}
            />
          ))
        : null}
    </div>
  );
}
