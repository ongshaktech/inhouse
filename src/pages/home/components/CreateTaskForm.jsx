import { useEffect, useState } from "react";
import { HiMiniPlus } from "react-icons/hi2";
import {
  useAddTaskMutation,
  useGetTaskDetailQuery,
} from "../../../features/projects/projectsApi";
import { toast } from "react-toastify";
// import Toast from "../../../components/UI/Toast";

export default function CreateTaskForm() {
  let [taskName, setTaskName] = useState("");
  const [taskDetail, setTaskDetail] = useState({
    project_id: "",
    user_id: "",
    task_names: [],
    description: "",
    resources: "",
    due_date: "",
  });

  const { data: taskoverview } = useGetTaskDetailQuery();

  const [addTask, { data, isLoading, isSuccess }] = useAddTaskMutation();

  const handleTask = () => {
    if (taskName) {
      setTaskDetail({
        ...taskDetail,
        task_names: [...taskDetail.task_names, taskName],
      });
      setTaskName("");
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.status);
      setTaskDetail({
        project_id: "",
        user_id: "",
        task_names: [],
        description: "",
        resources: "",
        due_date: "",
      });
    }
  }, [isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !taskDetail?.due_date ||
      !taskDetail?.project_id ||
      !taskDetail.task_names ||
      !taskDetail?.user_id
    ) {
      toast.error("Please fill all the required field");
      return;
    }
    addTask(taskDetail);
  };

  return (
    <div className=" rounded-md">
      <div className=" rounded-md ">
        <h1 className="text-xl font-semibold">Create Task</h1>
      </div>
      <form className="  mx-auto flex flex-col gap-6 py-8">
        {/* <div className="flex gap-8"> */}
        <label className="flex flex-col gap-2 w-full">
          <p className="font-medium">Select the Project</p>
          <select
            className="px-4 py-2 rounded-md outline-none border border-[#727070]"
            value={taskDetail?.project_id}
            onChange={(e) =>
              setTaskDetail({
                ...taskDetail,
                project_id: Number(e.target.value),
              })
            }
          >
            <option>Select Project</option>
            {taskoverview?.projects?.map((project) => (
              <option key={project?.id} value={project?.id}>
                {project?.name}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2 w-full">
          <p className="font-medium">Task Name </p>
          <div className="flex gap-4">
            <input
              type="text"
              name=""
              id=""
              placeholder="Task Name"
              className="w-full px-4 py-2 rounded-md outline-none border border-[#727070]"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
            <div
              className="border border-[#727070] flex justify-center items-center w-10 h-10 rounded-md cursor-pointer px-10  hover:bg-primary hover:text-black transition-all duration-300"
              onClick={() => handleTask()}
            >
              Add
              {/* <HiMiniPlus className="stroke-gray-400" /> */}
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            {taskDetail?.task_names?.map((task, id) => (
              <div key={id} className="p-2 bg-white w-full rounded-md">
                {task}
              </div>
            ))}
          </div>
        </label>
        {/* </div> */}
        <label className="flex flex-col gap-2 w-full">
          <p className="font-medium">Due Date</p>

          <input
            type="date"
            name=""
            id=""
            placeholder="Select due date"
            className="px-4 py-2 rounded-md outline-none border border-[#727070]"
            value={taskDetail?.due_date}
            onChange={(e) =>
              setTaskDetail({
                ...taskDetail,
                due_date: e.target.value,
              })
            }
          />
        </label>
        <label className="flex flex-col gap-2 w-full">
          <p className="font-medium">Assign Task to </p>
          <select
            className="px-4 py-2 rounded-md outline-none border border-[#727070]"
            value={taskDetail?.user_id}
            onChange={(e) =>
              setTaskDetail({
                ...taskDetail,
                user_id: Number(e.target.value),
              })
            }
          >
            <option>Select Project</option>
            {taskoverview?.users?.map((user) => (
              <option key={user?.user_id} value={user?.user_id}>
                {user?.name}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2 w-full">
          <p className="font-medium">Resources</p>

          <input
            type="text"
            name=""
            id=""
            placeholder="Add resources"
            className="px-4 py-2 rounded-md outline-none border border-[#727070]"
            value={taskDetail?.resources}
            onChange={(e) =>
              setTaskDetail({ ...taskDetail, resources: e.target.value })
            }
          />
        </label>
        <label className="flex flex-col gap-2 w-full">
          <p className="font-medium">Description (Optional)</p>
          <input
            type="text"
            name=""
            id=""
            placeholder="Write description of the project"
            className="px-4 py-2 rounded-md outline-none border border-[#727070]"
            value={taskDetail?.description}
            onChange={(e) =>
              setTaskDetail({ ...taskDetail, description: e.target.value })
            }
          />
        </label>
        <div
          className="border border-[#727070] flex justify-center items-center w-10 h-10 rounded-md cursor-pointer px-10  hover:bg-primary hover:text-black transition-all duration-300"
          disabled={isLoading}
          onClick={handleSubmit}
        >
          {isLoading ? "Processing" : "Create"}
        </div>
      </form>
      {/* <Toast /> */}
    </div>
  );
}