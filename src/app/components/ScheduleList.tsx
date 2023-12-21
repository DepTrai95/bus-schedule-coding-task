"use client";
import React, { useEffect, useState } from "react";
import { GET } from "../api/schedule/route";
import { BeatLoader } from "react-spinners";

interface BusStop {
  route: string;
  stops: {
    name: string;
    time: string;
  }[];
}

interface ScheduleProps {
  selectedRoute: string;
}


const Schedule: React.FC<ScheduleProps> = ({ selectedRoute }) => {
  const [scheduleData, setScheduleData] = useState<BusStop[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchScheduleData = async () => {
      try {
        setLoading(true);
        const response = await GET();
        const data: BusStop[] = await response.json();

        // if route is selected, filter the plan/data
        const filteredData = selectedRoute
          ? data.filter((route) => route.route === selectedRoute)
          : data;

        setScheduleData(filteredData);
      } catch (error) {
        console.error("Error fetching schedule data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchScheduleData();
  }, [selectedRoute]);

  return (
    <div className="content-area">
      <div className="inner">
        {loading ? (
          <div className="text-center">
            <BeatLoader color="#000000" size={10} margin={3} />
          </div>
        ) : (
          scheduleData.length > 0 && (
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
                  {scheduleData.map((route, index) => (
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
