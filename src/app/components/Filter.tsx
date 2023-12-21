// Filter.tsx
import React, { useState, useEffect } from "react";

interface FilterProps {
  routes: string[];
  onFilterChange: (selectedRoute: string) => void;
}

const Filter: React.FC<FilterProps> = ({ routes, onFilterChange }) => {
  const [selectedRoute, setSelectedRoute] = useState("");

  useEffect(() => {
    onFilterChange(selectedRoute);
  }, [selectedRoute, onFilterChange]);

  return (
    <div className="form-group">
      <label htmlFor="routeFilter">Filtern nach Route: </label>
      <select
        className="form-control"
        id="routeFilter"
        value={selectedRoute}
        onChange={(e) => setSelectedRoute(e.target.value)}
      >
        <option value="">Alle Routen</option>
        {routes.map((route) => (
          <option key={route} value={route}>
            {route}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
