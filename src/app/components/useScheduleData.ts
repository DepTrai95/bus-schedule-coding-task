"use client"
import { format } from 'path';
import { useState, useEffect } from 'react';

interface BusStop {
   route: string;
   stops: {
      name: string;
      time: string;
   }[];
}

const useScheduleData = () => {
   const [scheduleData, setScheduleData] = useState<BusStop[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<Error | null>(null);
   const [availableRoutes, setAvailableRoutes] = useState<string[]>([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            setLoading(true);
            const response = await fetch('/api/schedule');
            const data: BusStop[] = await response.json();
            setScheduleData(data);
            //create new set of routes for the filter list
            const routes = data.map((route) => route.route);
            setAvailableRoutes(Array.from(new Set(routes)).sort());
         } catch (error) {
            setError(new Error("An unknown error occurred"));
         } finally {
            setLoading(false);
         }
      };

      fetchData();
   }, []);

   return { scheduleData, loading, error, availableRoutes };
};

export default useScheduleData;
