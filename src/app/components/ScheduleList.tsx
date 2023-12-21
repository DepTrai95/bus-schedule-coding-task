"use client";
import React from "react";
import { BeatLoader } from "react-spinners";
import useScheduleData from "../components/useScheduleData";

interface ScheduleProps {
  selectedRoute: string;
}

const Schedule: React.FC<ScheduleProps> = ({ selectedRoute }) => {
  const { scheduleData, loading } = useScheduleData();

  const filteredData = selectedRoute
    ? scheduleData.filter((route) => route.route === selectedRoute)
    : scheduleData;

  return (
    <div className="content-area">
      <div className="inner">
        {loading ? (
          <div className="text-center">
            <BeatLoader color="#000000" size={10} margin={3} />
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
                          <td>{stop.name}</td>
                          <td>{stop.time}</td>
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
      </div>
    </div>
  );
};

export default Schedule;
