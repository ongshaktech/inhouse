import { TbDeviceIpadPlus, TbDotsVertical, TbUpload } from "react-icons/tb";
import photo from "../../../assets/images/photo.jpeg";
import ProjectWiseTask from "./ProjectWiseTask";

export default function WorkCard() {
  return (
    <div className="bg-white shadow-md p-6">
      <div className="flex gap-4 justify-between items-center">
        <img
          src={photo}
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
          <ProjectWiseTask />
          <ProjectWiseTask />
          <ProjectWiseTask />
        </div>
        <div className="w-full flex flex-col gap-4 pl-8">
          <ProjectWiseTask />
          <ProjectWiseTask />
          <ProjectWiseTask />
        </div>
      </div>
    </div>
  );
}
