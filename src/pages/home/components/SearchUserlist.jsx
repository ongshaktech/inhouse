import React, { useEffect, useRef, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

export default function SearchUserList({
  term,
  setTerm,
  controll,
  users,
  setTaskDetail,
  taskDetail,
}) {
  let [allUsers, setAllUsers] = useState([]);

  const searchairport = async (term) => {
    const airports = users;
    // get data
    let fits = airports.filter((airport) => {
      const regex = new RegExp(`^${term}`, "gi");
      return airport.name.match(regex);
    });

    // if (term.length === 0) {
    //   fits = [];
    // }

    setAllUsers(fits);
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

  return allUsers?.length ? (
    <div
      className="h-full min-w-[350px] w-full border bg-white p-2 rounded-md shadow-lg flex flex-col gap-3"
      ref={listRef}
    >
      {allUsers?.slice(0, 5)?.map((user) => (
        <div
          className="flex justify-between gap-2 px-2 cursor-pointer"
          onClick={() => {
            setTerm(`${user?.name}`);
            // setData(user?.iata_code);
            setTaskDetail({
              ...taskDetail,
              user_id: Number(user?.user_id),
            });
            controll();
          }}
        >
          <div className=" flex gap-3">
            {/* <div className="pt-2">
              <FaLocationArrow />
            </div> */}
            <div>
              <h2 className="font-bold pb-1">{user?.name}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : null;
}
