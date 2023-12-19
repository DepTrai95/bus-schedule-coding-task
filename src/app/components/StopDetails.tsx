"use client";
import React from "react";

const StopDetails = () => {
   return (
     <div>
       <button
         onClick={() => {
           console.log("Clicked Stop Details");
         }}
       >
         Click me - Stop Details Component
       </button>
     </div>
   );
}

export default StopDetails;