"use client";
import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import Schedule from "./components/ScheduleList";
import Filter from "./components/Filter";
import StopDetails from "./components/StopDetails";

export default function Home() {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  return (
    <main>
      <h1 className="text-center">Bus Schedule Coding Task</h1>
      <div className="content-area">
        <div className="inner">
          <Button
            className="btn--primary"
            label="Lade Busfahrplan"
            onClick={() => handleButtonClick("schedule")}
          />
        </div>
      </div>
      
      {selectedButton === "schedule" && <Schedule />}
    </main>
  );
}
