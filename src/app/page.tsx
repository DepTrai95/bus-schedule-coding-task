"use client";
import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import useScheduleData from "./components/useScheduleData";
import Schedule from "./components/ScheduleList";
import Filter from "./components/Filter";
import StopDetails from "./components/StopDetails";

export default function Home() {
  const [selectedRoute, setSelectedRoute] = useState<string>("");
  const { availableRoutes } = useScheduleData();

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
                onClick={() => {}}
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

      <Schedule selectedRoute={selectedRoute} />
    </main>
  );
}
