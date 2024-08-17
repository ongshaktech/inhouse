import React, { useEffect, useState } from "react";
import { useCreateProjectMutation } from "../../../features/projects/projectsApi";
import { toast } from "react-toastify";

export default function CreateProjectForm() {
  let [projectDetail, setProjectDetail] = useState({
    name: "",
    description: "",
    deadline: "",
  });

  const [createProject, { data, isLoading, isSuccess }] =
    useCreateProjectMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.status);
      setProjectDetail({
        name: "",
        description: "",
        deadline: "",
      });
    }
  }, [isSuccess]);

  const handleProject = (e) => {
    e.preventDefault();
    if (
      projectDetail?.name &&
      projectDetail?.deadline &&
      projectDetail?.deadline
    ) {
      createProject(projectDetail);
    } else {
      toast.error("Please fill all the input field.");
    }
  };
  return (
    <div className="">
      <h1 className="text-xl font-semibold">Create a Project</h1>
      
      <form className=" max-w-[500px] mx-auto flex flex-col gap-6 py-8">
        <label className="flex flex-col gap-2 ">
          <p className="text-md font-medium">Name of the project</p>
          <input
            type="text"
            name=""
            id=""
            placeholder="Name of the project"
            className="px-4 py-2 rounded-md outline-none border border-[#727070]"
            value={projectDetail.name}
            onChange={(e) =>
              setProjectDetail({ ...projectDetail, name: e.target.value })
            }
          />
        </label>
        <label className="flex flex-col gap-2 ">
          <p className="text-md font-medium">
            Name of the project description
          </p>
          <input
            type="text"
            name=""
            id=""
            placeholder="Name of the project description"
            className="px-4 py-2 rounded-md outline-none border border-[#727070]"
            value={projectDetail.description}
            onChange={(e) =>
              setProjectDetail({
                ...projectDetail,
                description: e.target.value,
              })
            }
          />
        </label>
        <label className="flex flex-col gap-2 ">
          <p className="text-md font-medium">Project Due Date </p>
          <input
            type="date"
            name=""
            id=""
            placeholder="Select due date"
            className="px-4 py-2 rounded-md outline-none border border-[#727070]"
            value={projectDetail.deadline}
            onChange={(e) =>
              setProjectDetail({ ...projectDetail, deadline: e.target.value })
            }
          />
        </label>
        <div className="pt-4">
          <button
            className="bg-primary px-6 py-3 rounded-md font-semibold"
            onClick={handleProject}
          >
            Create a project
          </button>
        </div>
      </form>
    </div>
  );
}
