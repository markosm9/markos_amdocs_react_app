import React from "react";
import { useNavigate } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import useReportDetailsEndpoints from "./useReportDetailsEndpoints";
import DataTable from "../../../components/DataTable/DataTable";
import useReportDetailsColumns from "./useReportsDetailsColumns";
import Loading from "../../../components/Loading/Loading";
import useReportDetailsFn from "./useReportDetailsFn";
import { ButtonProps } from "../../../components/Button/Button.types";
import Layout from "../../../components/Layout/Layout";

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
    onClick: () => navigate("/reports"),
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
