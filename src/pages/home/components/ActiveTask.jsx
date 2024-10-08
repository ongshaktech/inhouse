import React, { useState } from "react";
import ActiveCard from "../../../components/ui/ActiveCard";
import { FaPencil } from "react-icons/fa6";
import { useGetTaskOverviewQuery } from "../../../features/projects/projectsApi";
import Modal from "../../../shared/Modal";
import CreateTaskForm from "./CreateTaskForm";
import CreateProjectForm from "./CreateProjectForm";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function ActiveTask({ showCreateForm, setShowCreateForm }) {
  const { data, isLoading, isError, error } = useGetTaskOverviewQuery();

  let [showCreateProject, setShowCreateProject] = useState(false);
  return (
    <div className="relative container mx-auto px-6 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center pb-8">
        <h2 className="text-2xl font-bold pb-10 text-pen">
          Active Task Overview
        </h2>
        <div className="flex gap-4  flex-col md:flex-row items-center">
          <div className="relative">
            {/* <p className="  font-semibold text-[12px] flex items-center gap-1 cursor-pointer">
                <p>create</p>
                <FaAngleDown />
              </p> */}

            <button className="peer flex gap-2 items-center border border-gray-400 px-3 py-2 rounded-md">
              <FaPencil />
              <p>Create</p>
            </button>
            <div
              className={`z-10 hidden  peer-hover:flex hover:flex  absolute top-10 right-0 bg-white divide-y divide-gray-100  shadow w-56 p-4 border-t-4 border-primary`}
            >
              <div className="w-full">
                <p
                  className=" hover:bg-primary p-2 cursor-pointer"
                  onClick={() => setShowCreateForm(!showCreateForm)}
                >
                  Create Task
                </p>
                <p
                  className=" hover:bg-primary p-2 cursor-pointer"
                  onClick={() => setShowCreateProject(!showCreateProject)}
                >
                  Create Project
                </p>
              </div>
            </div>
          </div>
          {/* <button className="flex gap-2 items-center border border-gray-400 px-3 py-2 rounded-md">
            <p>Assigned Task</p>
          </button> */}
          {/* <select
            name=""
            id=""
            className="px-3 py-2 rounded-md border border-gray-400"
          >
            <option>January</option>
            <option>February</option>
            <option>March</option>
          </select> */}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10 md:gap-x-6 md:gap-y-10">
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
