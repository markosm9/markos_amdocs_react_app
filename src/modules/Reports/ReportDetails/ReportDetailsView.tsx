import React from "react";
import { useNavigate } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"; // Import the left arrow icon
import useReportDetailsEndpoints from "./useReportDetailsEndpoints";
import DataTable from "../../../components/DataTable/DataTable";
import useReportDetailsColumns from "./useReportsDetailsColumns";
import Loading from "../../../components/Loading/Loading";
import useReportDetailsFn from "./useReportDetailsFn";
import Layout from "../../Layout/Layout";
import { ButtonProps } from "../../../components/Button/Button.types";

const ReportDetailsView: React.FC = () => {
  const navigate = useNavigate();

  //Get the endpoint response
  const { reportData, loading, error } = useReportDetailsEndpoints();
  const { convertReportDataToObject } = useReportDetailsFn();

  // Convert the data to an array of objects
  const convertedData = convertReportDataToObject(
    reportData?.data,
    reportData?.columns
  );

  // Generate columns
  const { reportDetailsColumns } = useReportDetailsColumns(convertedData);

  // Define the buttonProps for the back button
  const buttonProps: ButtonProps = {
    value: "Back",
    onClick: () => navigate(-1),
    icon: faArrowLeft,
  };

  return (
    <Layout title="Report Details" buttonProps={buttonProps}>
      <Loading loading={loading} error={error} />
      {!loading && !error && (
        <DataTable data={convertedData} columns={reportDetailsColumns} />
      )}
    </Layout>
  );
};

export default ReportDetailsView;
