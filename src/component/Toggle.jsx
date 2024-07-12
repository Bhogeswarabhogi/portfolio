import React, { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleState = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <>
      <p>{isOn ? "On" : "Off"}</p>
      <button onClick={toggleState}>Click</button>
    </>
  );
};

export default Toggle;
