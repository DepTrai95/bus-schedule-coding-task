"use client";
import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Schedule from "./components/Schedule";
import StopDetails from "./components/StopDetails";

export default function Home() {
  return (
    <main>
      <div>
        <h1>Busfahrplan</h1>
        <Filter></Filter>
        <Schedule></Schedule>
        <StopDetails></StopDetails>
      </div>
    </main>
  );
}
