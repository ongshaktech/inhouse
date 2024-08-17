import { TbDeviceIpadPlus, TbDotsVertical, TbUpload } from "react-icons/tb";
import photo from "../../../assets/images/photo.jpeg";
import ProjectWiseTask from "./ProjectWiseTask";
import ImportantNotUrgentTask from "./ImportantNotUrgentTask";
import NotImportantUrgentTask from "./NotImportantUrgentTask";
import NotImportantNotUrgentTask from "./NotImportantNotUrgentTask";
import ImportantUrgentTask from "./ImportantUrgentTask";

export default function WorkCard({task}) {
    let importantNotUrgentTask = Object.keys(
        task?.important_not_urgent?.ongoing
          ? task?.important_not_urgent?.ongoing
          : {}
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
    
    //   let allData = [
    //     ...importantNotUrgentTask,
    //     ...importantUrgentTask,
    //     ...notImportantNotUrgentTask,
    //     ...notImportantUrgentTask,
    //   ];
  return (
    <div className="bg-white shadow-md p-6">
      <div className="flex gap-4 justify-between items-center">
        <img
          src={task?.profile_img}
          alt=""
          className="w-[50px] h-[50px] rounded-full object-cover"
        />
        <div className="flex gap-4 items-center text-gray-500">
          <TbUpload className="w-6 h-6 cursor-pointer" />
          <TbDeviceIpadPlus className="w-6 h-6 cursor-pointer" />
          <TbDotsVertical className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
      <div className="flex gap-8 divide-x md:divide-dashed  divide-gray-400">
        <div className="w-full flex flex-col gap-4">
            <ImportantUrgentTask project={task?.important_urgent}  phase="IU" />
            <ImportantNotUrgentTask project={task?.important_not_urgent} phase="I!U" />
            <NotImportantUrgentTask project={task?.not_important_urgent} phase="!IU" />
            <NotImportantNotUrgentTask project={task?.not_important_not_urgent} phase="!I!U" />
          {/* <ProjectWiseTask />
          <ProjectWiseTask /> */}
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProjectWiseTask />
        <ProjectWiseTask />
      </div> */}
    </div>
  );
}
