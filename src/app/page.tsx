"use client";
import React, { useState } from "react";
import Button from "./components/Button/Button";
import useScheduleData from "./components/useScheduleData";
import Schedule from "./components/ScheduleList/ScheduleList";
import Filter from "./components/Filter/Filter";

export default function Home() {
  const [selectedRoute, setSelectedRoute] = useState<string>("");
  const [loadSchedule, setLoadSchedule] = useState<boolean>(false);
  const { availableRoutes } = useScheduleData();

  const handleButtonClick = () => {
    setLoadSchedule(true);
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
                onClick={handleButtonClick}
              />
            </div>
            <div className="grid-item">
              <Filter
                availableRoutes={availableRoutes}
                onFilterChange={handleFilterChange}
              />
            </div>
          </div>
        </div>
      </div>

      {loadSchedule && <Schedule selectedRoute={selectedRoute} />}
    </main>
  );
}
