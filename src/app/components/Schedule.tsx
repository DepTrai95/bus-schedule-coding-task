"use client";
import React from "react";

const Schedule = async () => {
  return (
    <div>
      <button
        onClick={() => {
          console.log("Clicked Schedule");
        }}
      >
        Click me - Schedule Component
      </button>
    </div>
  );
};

export default Schedule;
