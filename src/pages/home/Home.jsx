import React, { useState } from "react";
import ActiveTask from "./components/ActiveTask";
import WorkPlan from "./components/WorkPlan";
import Toast from "../../components/ui/Toast";

export default function Home() {
  let [showCreateForm, setShowCreateForm] = useState(false);

  return (
    <div>
      <ActiveTask
        showCreateForm={showCreateForm}
        setShowCreateForm={setShowCreateForm}
      />
      <WorkPlan
        showCreateForm={showCreateForm}
        setShowCreateForm={setShowCreateForm}
      />
      <Toast />
    </div>
  );
}
