import { useState, useEffect } from "react";
import { ReportsDataType } from "./ReportsList.types";

const useReportsListEndpoints = () => {
  const [reportsData, setReportsData] = useState<ReportsDataType | null>(null); // The main data
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error message

  useEffect(() => {
    //Fetch Report fake data from json file
    const fetchReports = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("http://localhost:5001/api/reports");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();

          if (data) {
            setReportsData(data);
          } else {
            throw new Error(
              "Unexpected response structure: Missing `content` key."
            );
          }
        } else {
          throw new Error("Unexpected response format. Expected JSON.");
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  return { reportsData, loading, error };
};

export default useReportsListEndpoints;
