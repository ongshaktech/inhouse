import React, { useState } from "react";
import ActiveCard from "../../../components/ui/ActiveCard";
import { FaPencil } from "react-icons/fa6";
import { useGetTaskOverviewQuery } from "../../../features/projects/projectsApi";
import Modal from "../../../shared/Modal";
import CreateTaskForm from "./CreateTaskForm";
import CreateProjectForm from "./CreateProjectForm";

export default function ActiveTask({showCreateForm, setShowCreateForm}) {
  const { data, isLoading, isError, error } = useGetTaskOverviewQuery();
  console.log("data", data, isLoading, isError, error);

  
  let [showCreateProject, setShowCreateProject] = useState(false);
  return (
    <div className="container mx-auto px-6 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center pb-8">
        <h2 className="text-2xl font-bold pb-10 text-pen">
          Active Task Overview
        </h2>
        <div className="flex gap-4 flex-col md:flex-row items-center">
          <button
            className="flex gap-2 items-center border border-gray-400 px-3 py-2 rounded-md"
            onClick={() => setShowCreateForm(!showCreateForm)}
          >
            <FaPencil />
            <p>Create Task</p>
          </button>
          <button
            className="flex gap-2 items-center border border-gray-400 px-3 py-2 rounded-md"
            onClick={() => setShowCreateProject(!showCreateProject)}
          >
            <p>Create Project</p>
          </button>
          <select
            name=""
            id=""
            className="px-3 py-2 rounded-md border border-gray-400"
          >
            <option>January</option>
            <option>February</option>
            <option>March</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
        {data?.map((task) => (
          <ActiveCard task={task} />
        ))}
      </div>

      {/* Modal Contents */}
      {showCreateForm ? (
        <Modal open={showCreateForm} control={() => setShowCreateForm(false)}>
          <CreateTaskForm />
        </Modal>
      ) : null}
      {showCreateProject ? (
        <Modal
          open={showCreateProject}
          control={() => setShowCreateProject(false)}
        >
          <CreateProjectForm />
        </Modal>
      ) : null}
    </div>
  );
}
