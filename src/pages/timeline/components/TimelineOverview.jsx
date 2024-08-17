import React from "react";
import TimelineTable from "./TimelineTable";

export default function TimelineOverview() {
  return (
    <div className=" rounded-md">
        <h1 className="text-2xl font-semibold pb-6">Overall Task Timeline Table</h1>
     
      <TimelineTable />
    </div>
  );
}
