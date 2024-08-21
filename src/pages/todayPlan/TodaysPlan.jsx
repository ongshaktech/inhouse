import { useEffect, useState } from "react";
// import {
//   useAddTodaysPlanMutation,
//   useGetTodaysPlanQuery,
// } from "../../../features/projects/projectsApi";
import { toast } from "react-toastify";
import {
  useAddTodaysPlanMutation,
  useGetTodaysPlanQuery,
} from "../../features/projects/projectsApi";
import Toast from "../../components/ui/Toast";
import { useNavigate } from "react-router-dom";

export default function TodaysPlan() {
  const { data: todaysPlan, isLoading } = useGetTodaysPlanQuery();
  const [
    addTodaysPlan,
    { data: addTodaysPlandata, isLoading: addLoading, isSuccess },
  ] = useAddTodaysPlanMutation();

  let [selectedCategory, setSelectedCategory] = useState("");

  let [selectedTask, setselectedTask] = useState([]);
  const navigate = useNavigate("");

  useEffect(() => {
    if (selectedCategory) {
      let newSelectedTask = selectedTask?.map((task) => {
        return { ...task, category: selectedCategory };
      });

      setselectedTask([...newSelectedTask]);
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (isSuccess) {
      toast.success(addTodaysPlandata?.status);
      setselectedTask([]);
      setSelectedCategory("");
      // navigate("/");
    }
  }, [isSuccess]);


  const handleTask = (e) => {
    let trackingId = Number(e.target.value);
    let hasTask = selectedTask?.some(
      (account) => account?.task_id === trackingId
    );


    if (!hasTask) {
      setselectedTask([...selectedTask, { task_id: trackingId }]);
    } else {
      let filteredAccount = selectedTask?.filter(
        (account) => account?.task_id != trackingId
      );
      setselectedTask([...filteredAccount]);
    }
    setSelectedCategory("");
  };

  const handleCategory = () => {
    if (!selectedTask?.length || !selectedCategory) {
      toast.error("Please select task and category.");
      return;
    }

    addTodaysPlan(selectedTask);
  };

  return (
    <div className="container  mx-auto  rounded-md p-10">
      <h1 className="font-semibold text-xl pb-6">
        Here are your Tasks for Today
      </h1>
      <table className="w-full text-sm text-left rtl:text-right text-gray-800 border">
        <thead className="text-md text-black uppercase bg-primary ">
          <tr className="">
            <th scope="col" className="px-6 py-4 w-[50px]"></th>
            <th scope="col" className="px-6 py-4">
              SL
            </th>
            <th scope="col" className="px-6 py-4">
              Task Name
            </th>
            <th scope="col" className="px-6 py-4">
              Due Date
            </th>
            <th scope="col" className="px-6 py-4">
              Project Name
            </th>
          </tr>
        </thead>
        <tbody className="text-black ">
          {todaysPlan?.map((task, id) => (
            <tr
              className={` ${task % 2 == 0 ? "bg-[#F4F4F4]" : "bg-white"}`}
              key={id}
            >
              <td className="px-6 py-4 border-r  w-[50px]">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="accent-green-500"
                  checked={selectedTask?.some(
                    (account) => account?.task_id === task?.id
                  )}
                  value={task?.id}
                  onChange={handleTask}
                />
              </td>
              <td className="px-6 py-4 border-r ">{id + 1}.</td>
              <td className="px-6 py-4 border-r ">{task?.task_name}</td>
              <td className="px-6 py-4 border-r ">
                {task?.due_date?.slice(0, 10)}
              </td>
              <td className="px-6 py-4 border-r ">{task?.project_name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="py-4">
        <h1 className="text-xl font-semibold pb-4">Select Category</h1>
        <div className="flex gap-6 items-center">
          <div
            className={`px-4 py-2 font-bold rounded-md cursor-pointer border ${
              selectedCategory === "important_urgent"
                ? "bg-[#DCE1E8] border border-gray-400"
                : " border-[#E20DCD] bg-[#FBDCF8] text-[#E20DCD]"
            }`}
            onClick={() => setSelectedCategory("important_urgent")}
          >
            UI
          </div>
          <div
            className={`px-4 py-2 font-bold rounded-md cursor-pointer border ${
              selectedCategory === "not_important_urgent"
                ? "bg-[#DCE1E8] border border-gray-400"
                : "border-blue text-blue bg-[#EEF8FF]"
            }`}
            onClick={() => setSelectedCategory("not_important_urgent")}
          >
            U!I
          </div>
          <div
            className={`px-4 py-2 font-bold rounded-md cursor-pointer border ${
              selectedCategory === "important_not_urgent"
                ? "bg-[#DCE1E8] border border-gray-400"
                : " border-[#E8F70C] bg-[#F3FDD2]/60 text-black"
            }`}
            onClick={() => setSelectedCategory("important_not_urgent")}
          >
            !UI
          </div>
          <div
            className={`px-4 py-2 font-bold rounded-md cursor-pointer border ${
              selectedCategory === "not_important_not_urgent"
                ? "bg-[#DCE1E8] border border-gray-400 "
                : "border-[#051F4D] bg-[#AECBFF]/50 text-[#051F4D]"
            }`}
            onClick={() => setSelectedCategory("not_important_not_urgent")}
          >
            !U!I
          </div>
        </div>
        <div className="pt-6">
          <button
            className="border border-gray-400 px-4 py-2 rounded-md hover:bg-primary transition-all duration-300"
            onClick={handleCategory}
          >
            {addLoading ? "Processing" : "Add to Category"}
          </button>
        </div>
      </div>
      <Toast />
    </div>
  );
}
