import { useEffect, useState } from "react";
import { HiMiniPlus } from "react-icons/hi2";
import {
  useAddTaskMutation,
  useGetTaskDetailQuery,
} from "../../../features/projects/projectsApi";
import { toast } from "react-toastify";
import SearchProjectList from "./SearchProjectList";
import SearchUserList from "./SearchUserlist";
import { FaRegTrashAlt, FaTrash } from "react-icons/fa";

export default function CreateTaskForm() {
  let [projectTerm, setProjectTerm] = useState("");
  let [userTerm, setUserTerm] = useState("");
  let [showProjectList, setShowProjectList] = useState(false);
  let [showUserList, setShowUserList] = useState(false);

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

  const handleDeleteTask = (taskName) => {
    let filteredTask = taskDetail?.task_names?.filter(
      (task) => task !== taskName
    );
    setTaskDetail({
      ...taskDetail,
      task_names: filteredTask,
    });
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
      setProjectTerm("");
      setUserTerm("");
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
    <div className="  rounded-md">
      <div className=" rounded-md ">
        <h1 className="text-xl font-semibold">Create Task</h1>
      </div>
      <form className="relative max-w-xl  mx-auto flex flex-col gap-6  ">
        {/* <div className="flex gap-8"> */}
        <label className="relative flex flex-col gap-2 w-full">
          <p className="font-medium">Select the Project</p>
          <input
            type="text"
            name=""
            id=""
            placeholder="eg. inhouse"
            className="w-full px-4 py-2 rounded-md outline-none border border-[#727070]"
            onFocus={() => projectTerm == "" && setShowProjectList(true)}
            value={projectTerm}
            onChange={(e) => {
              setProjectTerm(e.target.value);
              setShowProjectList(true);
            }}
          />
          {showProjectList && (
            <div className="absolute top-[72px] z-10">
              <SearchProjectList
                term={projectTerm}
                setTerm={setProjectTerm}
                controll={() => setShowProjectList(false)}
                projects={taskoverview?.projects}
                setTaskDetail={setTaskDetail}
                taskDetail={taskDetail}
                // setData={(data) => modifySegment(index, { origin: data })}
              />
            </div>
          )}
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
              <div
                key={id}
                className="p-2 bg-white w-full rounded-md flex gap-4 justify-between items-center"
              >
                <p>- {task} </p>
                <div className="w-[40px]">
                  <FaRegTrashAlt
                    className="w-4 h-4 cursor-pointer"
                    onClick={() => handleDeleteTask(task)}
                  />
                </div>
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

        <label className="relative flex flex-col gap-2 w-full">
          <p className="font-medium">Assign Task to</p>
          <input
            type="text"
            name=""
            id=""
            placeholder="eg. Ridwan"
            className="w-full px-4 py-2 rounded-md outline-none border border-[#727070]"
            onFocus={() => userTerm == "" && setShowUserList(true)}
            value={userTerm}
            onChange={(e) => {
              setUserTerm(e.target.value);
              setShowUserList(true);
            }}
          />
          {showUserList && (
            <div className="absolute top-[72px] z-10">
              <SearchUserList
                term={userTerm}
                setTerm={setUserTerm}
                controll={() => setShowUserList(false)}
                users={taskoverview?.users}
                setTaskDetail={setTaskDetail}
                taskDetail={taskDetail}
                // setData={(data) => modifySegment(index, { origin: data })}
              />
            </div>
          )}
        </label>
        {/* <label className="flex flex-col gap-2 w-full">
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
        </label> */}
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
          className="sticky bottom-0    border border-[#727070] flex justify-center items-center w-10 h-10 rounded-md cursor-pointer px-10  bg-white  hover:bg-primary hover:text-black transition-all duration-300 ml-20 md:ml-[340px]"
          disabled={isLoading}
          onClick={handleSubmit}
        >
          {isLoading ? "Processing" : "Create"}
        </div>
      </form>
    </div>
  );
}
