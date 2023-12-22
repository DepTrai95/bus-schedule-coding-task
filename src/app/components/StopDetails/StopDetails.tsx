"use client";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
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
  const modalRoot = document.getElementById("modal-root") || document.body;

  const handleModalClosing = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.type === "click" && event.target === event.currentTarget) {
      document.querySelector(".modal")?.removeAttribute("aria-modal");
      onClose();
    }
  };

  // accessibility - closing with "esc"
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        document.querySelector(".modal")?.removeAttribute("aria-modal");
        onClose();
      }
    };
    // add EventListener if modal gets "created"
    document.addEventListener("keydown", handleKeyDown);
    // remove EventListener as soon as modal "closes"
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleClose = () => {
    document.querySelector(".modal")?.removeAttribute("aria-modal");
    onClose();
  };

  return ReactDOM.createPortal(
    <div
      className="modal"
      onClick={handleModalClosing}
      role="dialog"
      tabIndex={0}
      aria-modal={true}
    >
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <h2>{stopName} Details</h2>
        <ul>
          {routes.map((route, index) => (
            <li key={index}>{`${route.route}: ${route.time}`}</li>
          ))}
        </ul>
      </div>
    </div>,
    modalRoot
  );
};

export default StopDetails;
