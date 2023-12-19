"use client";
import React from "react";

const Filter = () => {
  return (
    <div>
      <button
        onClick={() => {
          console.log("Clicked Filter");
        }}
      >
        Click me - Filter Component
      </button>
    </div>
  );
};

export default Filter;
