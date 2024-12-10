import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReportDetails } from "./ReportDetails.types";

const useReportDetailsEndpoints = () => {
  //Initiate params and states
  const { reportId } = useParams<{ reportId: string }>();
  const [reportData, setReportData] = useState<ReportDetails>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    //Fetch Report fake data from json file
    const fetchReportData = async () => {
      if (!reportId) {
        setError("No report ID provided.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:5001/api/reports/${reportId}`
        );

        if (!response.ok) {
          throw new Error("Report not found.");
        }

        const data = await response.json();
        setReportData(data);
      } catch (err) {
        setError("Failed to fetch report data.");
      } finally {
        setLoading(false);
      }
    };

    fetchReportData();
  }, [reportId]);

  return { reportData, loading, error };
};

export default useReportDetailsEndpoints;
