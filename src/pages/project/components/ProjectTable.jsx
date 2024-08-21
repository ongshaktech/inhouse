import { useGetProjectProgressQuery } from "../../../features/projects/projectsApi";

export default function ProjectTable() {
  const { data: allProjects } = useGetProjectProgressQuery();
  return (
    <div className="container mx-auto p-10 rounded-md">
      <h1 className="text-2xl font-semibold pb-8">View Projects</h1>
      
      <table className="w-full text-sm text-left rtl:text-right text-gray-800 border">
        <thead className="text-xs text-black uppercase bg-primary">
          <tr className="">
            <th scope="col" className="px-6 py-4">
              SL
            </th>
            <th scope="col" className="px-6 py-4">
              Name of the Project
            </th>
            <th scope="col" className="px-6 py-4">
              Deadline ( Project Due)
            </th>
          </tr>
        </thead>
        <tbody className="text-black font-semibold">
          {allProjects?.map((project, id) => (
            <tr
              className={`border-b ${
                project % 2 == 0 ? "bg-[#FDF5E0]" : "bg-white"
              }`}
              key={id}
            >
              <td className="px-6 py-4 border-r ">{id + 1}.</td>
              <td className="px-6 py-4 border-r ">{project?.name}</td>
              <td className="px-6 py-4 border-r ">
                {project?.deadline?.slice(0, 10)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
