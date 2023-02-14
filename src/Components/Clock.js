import React, { useEffect, useState } from "react";

function Clock() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const dete = new Date();
      setClockState(dete.toLocaleTimeString());
    }, 1000);
  }, [])

  return (
    <div>{clockState}</div>
  );
}

export default Clock;
