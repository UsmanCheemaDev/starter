"use client";
import React from "react";
import { useState } from "react";

const Toggler = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className="bg-white p-20 text-center">
      <button
        onClick={() => setIsOn(!isOn)}
        className=" border-black border-solid border-4 px-4 py-2 text-black  font-bold rounded-lg"
        style={{ backgroundColor: isOn ? "green" : "red" }}
      >
        Office: {isOn ? "On" : "Off"}
      </button>
    </div>
  );
};

export default Toggler;
