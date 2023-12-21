"use client";
import React from "react";

const StopDetails = () => {
   return (
     <div className="content-area">
       <div className="inner">
         <button
           className="btn--primary"
           onClick={() => {
             console.log("Clicked Stop Details");
           }}
         >
           Stop Details Component
         </button>
       </div>
     </div>
   );
}

export default StopDetails;