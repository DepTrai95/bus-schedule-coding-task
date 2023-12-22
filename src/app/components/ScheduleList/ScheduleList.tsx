"use client";
import React, { useState } from "react";
import { BeatLoader } from "react-spinners";
import useScheduleData from "../useScheduleData";
import StopDetails from "../StopDetails/StopDetails";

import "./ScheduleList.css";

interface ScheduleProps {
  selectedRoute: string;
}

const Schedule: React.FC<ScheduleProps> = ({ selectedRoute }) => {
  const { scheduleData, loading } = useScheduleData();
  const [selectedStop, setSelectedStop] = useState<string | null>(null);

  const handleStopClick = (stopName: string) => {
    setSelectedStop(stopName);
  };

  const handleStopDetailsClose = () => {
    setSelectedStop(null);
  };

  const filteredData = selectedRoute
    ? scheduleData.filter((route) => route.route === selectedRoute)
    : scheduleData;

  const formatTime = (timeString: string): string => {
    const [hours, minutes] = timeString.split(":");
    const formattedHours = hours.padStart(2, "0");
    return `${formattedHours}:${minutes}`;
  };



  return (
    <div className="content-area">
      <div className="inner">
        {loading ? (
          <div className="loading-spinner">
            <BeatLoader
              color="#000000"
              size={10}
              margin={3}
            />
          </div>
        ) : (
          filteredData.length > 0 && (
            <div>
              <h2>Busfahrplan</h2>
              <table>
                <thead>
                  <tr>
                    <th>Route</th>
                    <th>Haltestelle</th>
                    <th>Abfahrtszeit</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((route, index) => (
                    <React.Fragment key={`${route.route}-${index}`}>
                      {route.stops.map((stop, stopIndex) => (
                        <tr key={`${stop.name}-${stopIndex}`}>
                          {stopIndex === 0 && (
                            <td rowSpan={route.stops.length}>{route.route}</td>
                          )}
                          <td onClick={() => handleStopClick(stop.name)}>
                            <button
                              aria-label={"Öffne Details zu " + stop.name}
                              className="button-table-data"
                            >
                              {stop.name}
                            </button>
                          </td>
                          <td>{formatTime(stop.time)}</td>
                        </tr>
                      ))}
                      {route.stops.length === 0 && (
                        <tr>
                          <td>{route.route}</td>
                          <td colSpan={2}>
                            <span className="text-center">
                              Keine verfügbaren Informationen
                            </span>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )
        )}

        {selectedStop && (
          <StopDetails
            stopName={selectedStop}
            routes={filteredData
              .filter((route) =>
                route.stops.some((stop) => stop.name === selectedStop)
              )
              .map((route) => ({
                route: route.route,
                time:
                  route.stops.find((stop) => stop.name === selectedStop)
                    ?.time || "",
              }))
              .sort((a, b) => a.time.localeCompare(b.time))
              .sort((a, b) => a.route.localeCompare(b.route))}
            onClose={handleStopDetailsClose}
          />
        )}
      </div>
    </div>
  );
};

export default Schedule;
