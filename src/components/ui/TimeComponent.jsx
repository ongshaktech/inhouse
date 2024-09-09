import React, { useEffect, useState } from "react";
import { timeCalculate } from "../../utils/timeCalculate";

export default function TimeComponent({ startedOn }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    // Call the function immediately to set the initial time
    setTime(timeCalculate(startedOn));

    // Set an interval to update the time every second
    const intervalId = setInterval(() => {
      setTime(timeCalculate(startedOn));
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [startedOn]);

  return (
    <div>
      <p>{time}</p>
    </div>
  );
}
