import { useEffect, useState } from "react";
import { TbDeviceIpadPlus, TbDotsVertical, TbUpload } from "react-icons/tb";
import photo from "../../../assets/images/photo.jpeg";
import ProjectWiseTask from "./ProjectWiseTask";
import ImportantNotUrgentTask from "./ImportantNotUrgentTask";
import NotImportantUrgentTask from "./NotImportantUrgentTask";
import NotImportantNotUrgentTask from "./NotImportantNotUrgentTask";
import ImportantUrgentTask from "./ImportantUrgentTask";
import ongoingImg from "../../../assets/images/ongoing.svg";
import { useCompleteTaskMutation } from "../../../features/projects/projectsApi";
import { toast } from "react-toastify";

export default function WorkCard({ task, showCreateForm, setShowCreateForm }) {
  let importantNotUrgentTask = Object.keys(
    task?.important_not_urgent?.ongoing
      ? task?.important_not_urgent?.ongoing
      : {}
  );
  let importantUrgentTask = Object.keys(
    task?.important_urgent?.ongoing ? task?.important_urgent?.ongoing : {}
  );
  let notImportantNotUrgentTask = Object.keys(
    task?.not_important_not_urgent?.ongoing
      ? task?.not_important_not_urgent?.ongoing
      : {}
  );
  let notImportantUrgentTask = Object.keys(
    task?.not_important_urgent?.ongoing
      ? task?.not_important_urgent?.ongoing
      : {}
  );

  let allData = [
    ...importantNotUrgentTask,
    ...importantUrgentTask,
    ...notImportantNotUrgentTask,
    ...notImportantUrgentTask,
  ];

  const [selectedTask, setSelectedTask] = useState([]);

  const [
    completeTask,
    { data: compelteData, isSuccess, isLoading, isError, error },
  ] = useCompleteTaskMutation();

  const handleOngoing = () => {
    // let ongoingList = selectedTask?.map((task) => {
    //   return { ...task, status: "ongoing" };
    // });
    if (allData?.length) {
      toast.error("Already you have an active task.");
      return;
    }
    completeTask(selectedTask);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Move to Active Task");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      if (error?.status == 404) {
        toast.error(`Please perform on your own task`);
      }
    }
  }, [isError]);

  return (
    <div className="bg-white shadow-md p-6">
      <div className="flex gap-4 justify-between items-center">
        <img
          src={task?.profile_img}
          alt=""
          className="w-[50px] h-[50px] rounded-full object-cover"
        />
        <div className="flex gap-4 items-center text-gray-500">
          {/* <TbUpload className="w-6 h-6 cursor-pointer" /> */}
          {!isLoading && (
            <img
              src={ongoingImg}
              alt=""
              className="w-4 h-4 cursor-pointer"
              onClick={handleOngoing}
            />
          )}

          <TbDeviceIpadPlus
            className="w-6 h-6 cursor-pointer"
            onClick={() => setShowCreateForm(!showCreateForm)}
          />
          <TbDotsVertical className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
      <div className="flex gap-8 divide-x md:divide-dashed  divide-gray-400 min-h-[400px] max-h-[400px] overflow-y-scroll">
        <div className="w-full flex flex-col ">
          <ImportantUrgentTask
            project={task?.important_urgent}
            phase="IU"
            selectedTask={selectedTask}
            setSelectedTask={setSelectedTask}
          />
          <ImportantNotUrgentTask
            project={task?.important_not_urgent}
            phase="I!U"
            selectedTask={selectedTask}
            setSelectedTask={setSelectedTask}
          />
          <NotImportantUrgentTask
            project={task?.not_important_urgent}
            phase="!IU"
            selectedTask={selectedTask}
            setSelectedTask={setSelectedTask}
          />
          <NotImportantNotUrgentTask
            project={task?.not_important_not_urgent}
            phase="!I!U"
            selectedTask={selectedTask}
            setSelectedTask={setSelectedTask}
          />
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProjectWiseTask />
        <ProjectWiseTask />
      </div> */}
    </div>
  );
}
