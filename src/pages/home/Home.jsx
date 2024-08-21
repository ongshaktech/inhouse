import React, { useState } from "react";
import ActiveTask from "./components/ActiveTask";
import WorkPlan from "./components/WorkPlan";
import Toast from "../../components/ui/Toast";

export default function Home() {
  let [showCreateForm, setShowCreateForm] = useState(false);

  // const getFlight = async () => {
  //   const response = await fetch(
  //     "https://travonus-api.ongshak.com/api_handler/air_search/",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "text/event-stream",
  //       },
  //       body: {
  //         adult_quantity: 1,
  //         child_quantity: 1,
  //         child_age: 6,
  //         infant_quantity: 0,
  //         user_ip: "192.168.1.1",
  //         journey_type: "Oneway",
  //         booking_class: "Economy",
  //         segments: [
  //           {
  //             origin: "DAC",
  //             destination: "BOM",
  //             departure_date: "2024-08-20",
  //           },
  //         ],
  //       },
  //     }
  //   );

  //   // To recieve data as a string we use TextDecoderStream class in pipethrough
  //   const reader = response.body
  //     .pipeThrough(new TextDecoderStream())
  //     .getReader();

  //   while (true) {
  //     const { value, done } = await reader.read();
  //     if (done) break;
  //     console.log("Received", value);
  //   }
  // };

 

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
