import React, { useEffect } from "react";

export default function IndividualCompleteTask({ projectName, obj }) {
  let tasks = obj?.completed[projectName];
  return tasks?.map((task, id) => (
    <tr
      className={`border-b bg-white`}
      key={id}
    >
      <td className="px-6 py-4 border-r ">{}.</td>
      <td className="px-6 py-4 border-r ">{task?.task_name}</td>
      <td className="px-6 py-4 border-r ">
        {task?.completed_on?.slice(0, 10)}
      </td>
    </tr>
  ));
}
