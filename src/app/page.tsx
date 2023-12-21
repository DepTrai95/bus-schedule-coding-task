"use client";
import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import Schedule from "./components/ScheduleList";
import Filter from "./components/Filter";
import StopDetails from "./components/StopDetails";

export default function Home() {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [selectedRoute, setSelectedRoute] = useState<string>("");

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  const handleFilterChange = (route: string) => {
    setSelectedRoute(route);
  };

  return (
    <main>
      <h1 className="text-center">Bus Schedule Coding Task</h1>
      <div className="content-area">
        <div className="inner">
          <div className="grid--default">
            <div className="grid-item">
              <Button
                className="btn--primary"
                label="Lade Busfahrplan"
                onClick={() => handleButtonClick("schedule")}
              />
            </div>
            <div className="grid-item">
              <Filter
                routes={["Route A", "Route B", "Route C"]} //now as a test - probably have to refactor to use data from json
                onFilterChange={handleFilterChange}
              />
            </div>
            <div className="grid-item">
              <Button
                className="btn--primary"
                label="Test Button 2"
                onClick={() => console.log("Test2")}
              />
            </div>
          </div>
        </div>
      </div>

      {selectedButton === "schedule" && (
        <Schedule selectedRoute={selectedRoute} />
      )}
    </main>
  );
}
