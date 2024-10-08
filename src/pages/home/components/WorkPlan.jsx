import React from "react";
import WorkCard from "./WorkCard";
import { useGetTaskOverviewQuery } from "../../../features/projects/projectsApi";
import WorkCardLogedin from "./WorkCardLogedin";

export default function WorkPlan({ showCreateForm, setShowCreateForm }) {
  const { data, isLoading, isError, error } = useGetTaskOverviewQuery();
  let content;

  if (isLoading) {
    content = <div>Loading</div>;
  }

  if (!isLoading && !isError) {
    content = (
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-pen pb-4">Work Plan</h2>
        <div className=" flex flex-col gap-8">
          {/* <WorkCard /> */}
          <div className="grid grid-cols-1 gap-8">
            <WorkCardLogedin
              task={data[0]}
              showCreateForm={showCreateForm}
              setShowCreateForm={setShowCreateForm}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data?.slice(1)?.map((task) => (
              <WorkCard
                task={task}
                showCreateForm={showCreateForm}
                setShowCreateForm={setShowCreateForm}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return content;
}
