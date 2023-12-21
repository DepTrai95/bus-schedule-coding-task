// StopDetails.tsx
"use client";
import React from "react";
import "./StopDetails.css";

interface StopDetailsProps {
  stopName: string;
  routes: { route: string; time: string }[];
  onClose: () => void;
}

const StopDetails: React.FC<StopDetailsProps> = ({
  stopName,
  routes,
  onClose,
}) => {
  const handleModalClosing = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleModalClosing}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{stopName} Details</h2>
        <ul>
          {routes.map((route, index) => (
            <li key={index}>{`${route.route}: ${route.time}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StopDetails;
