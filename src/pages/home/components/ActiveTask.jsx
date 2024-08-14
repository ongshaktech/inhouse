import React from "react";
import ActiveCard from "../../../components/ui/ActiveCard";

export default function ActiveTask() {
  return (
    <div className="container mx-auto px-6 py-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold pb-2 text-pen">Active Task Overview</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ActiveCard />
        <ActiveCard />
        <ActiveCard />
        <ActiveCard />
        <ActiveCard />
        <ActiveCard />
        <ActiveCard />
      </div>
    </div>
  );
}
