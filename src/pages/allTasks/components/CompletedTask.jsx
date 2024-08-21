import React from "react";
import { useGetTaskOverviewQuery } from "../../../features/projects/projectsApi";
import CompletedTaskTable from "./CompletedTaskTable";

export default function CompletedTask() {
  const { data, isLoading, isError, error } = useGetTaskOverviewQuery();

  let content;

  if (isLoading) {
    content = <div>Loading</div>;
  }

  if (!isLoading && !isError) {
    content = (
      <div className="container mx-auto p-10 rounded-md">
        <h1 className="text-2xl font-semibold pb-8">Completed Tasks</h1>

        <table className="w-full text-sm text-left rtl:text-right text-gray-800 border">
          <thead className="text-xs text-black uppercase bg-primary">
            <tr className="">
              <th scope="col" className="px-6 py-4">
                SL
              </th>
              <th scope="col" className="px-6 py-4">
                Name of the Project
              </th>
              <th scope="col" className="px-6 py-4">
                Deadline ( Project Due)
              </th>
            </tr>
          </thead>
          <tbody className="text-black font-semibold">
            {data?.map((project, id) => (
              <CompletedTaskTable task={project} key={id} />
            ))}
            {/* <CompletedTaskTable task={data[0]} /> */}
          </tbody>
        </table>
      </div>
    );
  }

  return content;
}
