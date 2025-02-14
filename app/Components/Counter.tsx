"use client";

import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="bg-white text-black">
      <div className="flex gap-3 justify-center py-">counter: {counter}</div>
      <div className="flex gap-3 justify-center py-">
        <button
          className="py-2 rounded px-6 bg-red-200"
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          onClick={handleDecrement}
          className="py-2 rounded px-6 bg-pink-200"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
