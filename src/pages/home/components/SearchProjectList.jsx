import React, { useEffect, useRef, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

export default function SearchProjectList({
  term,
  setTerm,
  controll,
  projects,
  setTaskDetail,
  taskDetail
}) {
  let [allProjects, setAllProjects] = useState([]);

  const searchairport = async (term) => {
    const airports = projects;
    // get data
    let fits = airports.filter((airport) => {
      const regex = new RegExp(`^${term}`, "gi");
      return airport.name.match(regex);
    });

    if (term.length === 0) {
      fits = [];
    }

    setAllProjects(fits);
  };

  useEffect(() => {
    searchairport(term);
  }, [term]);

  let listRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (listRef.current && !listRef.current.contains(event.target)) {
        controll();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [listRef]);

  return allProjects?.length ? (
    <div
      className="h-full min-w-[350px] w-full border bg-white p-2 rounded-md shadow-lg flex flex-col gap-3"
      ref={listRef}
    >
      {allProjects?.slice(0, 5)?.map((project) => (
        <div
          className="flex justify-between gap-2 px-2 cursor-pointer"
          onClick={() => {
            setTerm(`${project?.name}`);
            // setData(project?.iata_code);
            controll();
            setTaskDetail({
                ...taskDetail,
                project_id: Number(project?.id)
            })
          }}
        >
          <div className=" flex gap-3">
            {/* <div className="pt-2">
              <FaLocationArrow />
            </div> */}
            <div>
              <h2 className="font-bold pb-1">{project?.name}</h2>
              {/* <p className="text-sm">{project?.name}</p> */}
            </div>
          </div>
          {/* <div className="">{project?.iata_code}</div> */}
        </div>
      ))}
    </div>
  ) : null;
}
