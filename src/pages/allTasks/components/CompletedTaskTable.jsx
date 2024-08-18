import React from "react";
import IndividualCompleteTask from "./IndividualCompleteTask";

export default function CompletedTaskTable({ task }) {
  let importantNotUrgentTask = Object.keys(
    task?.important_not_urgent?.completed
      ? task?.important_not_urgent?.completed
      : {}
  );
  let importantUrgentTask = Object.keys(
    task?.important_urgent?.completed ? task?.important_urgent?.completed : {}
  );
  let notImportantNotUrgentTask = Object.keys(
    task?.not_important_not_urgent?.completed
      ? task?.not_important_not_urgent?.completed
      : {}
  );
  let notImportantUrgentTask = Object.keys(
    task?.not_important_urgent?.completed
      ? task?.not_important_urgent?.completed
      : {}
  );

  let allData = [
    ...importantNotUrgentTask,
    ...importantUrgentTask,
    ...notImportantNotUrgentTask,
    ...notImportantUrgentTask,
  ];

  return allData?.length ? (
    <>
      {importantNotUrgentTask?.map((project) => (
        <IndividualCompleteTask
          projectName={project}
          obj={task?.important_not_urgent}
        />
      ))}
      {importantNotUrgentTask?.map((project) => (
        <IndividualCompleteTask
          projectName={project}
          obj={task?.important_not_urgent}
        />
      ))}
      {importantNotUrgentTask?.map((project) => (
        <IndividualCompleteTask
          projectName={project}
          obj={task?.important_not_urgent}
        />
      ))}
      {importantNotUrgentTask?.map((project) => (
        <IndividualCompleteTask
          projectName={project}
          obj={task?.important_not_urgent}
        />
      ))}
    </>
  ) : null;
}
