import { useGetProjectTimelineQuery } from "../../../features/projects/projectsApi";

export default function TimelineTable() {
  let { data: timelineData } = useGetProjectTimelineQuery();

  return (
    <div className="">
      <table className="w-full text-sm text-left rtl:text-right text-gray-800 border">
        <thead className="text-xs text-black uppercase bg-primary">
          <tr className="">
            <th scope="col" className="px-6 py-4">
              Project
            </th>
            <th scope="col" className="px-6 py-4">
              Task Name
            </th>
            <th scope="col" className="px-6 py-4">
              Assigned To
            </th>
            <th scope="col" className="px-6 py-4">
              Due Date
            </th>
            <th scope="col" className="px-6 py-4">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="text-black ">
          {timelineData?.map((timeline, id) => (
            <tr
              className={`border-b ${
                id % 2 == 0 ? "bg-[#FDF5E0]" : "bg-white"
              }`}
              key={id}
            >
              <td className="px-6 py-4 border-r ">{timeline?.name}</td>
              <td className="px-6 py-4 border-r ">
                <div>
                  {timeline?.project_tasks?.map((task) => (
                    <p key={task?.id}>{task?.task_name}</p>
                  ))}
                </div>
              </td>
              <td className="px-6 py-4 border-r ">Oishee</td>
              <td className="px-6 py-4 border-r ">
                {timeline?.deadline?.slice(0, 10)}
              </td>
              <td className="px-6 py-4 border-r ">{timeline?.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
