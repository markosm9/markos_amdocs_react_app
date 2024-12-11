import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import DataTable from "../../../components/DataTable/DataTable";
import useReportsListEndpoints from "./useReportsListEndpoints";
import Loading from "../../../components/Loading/Loading";
import useReportsListColumns from "./useReportsListColumns";
import Layout from "../../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { ButtonProps } from "../../../components/Button/Button.types";

const ReportsListView: React.FC = () => {
  const navigate = useNavigate();

  //Get the endpoint response
  const { reportsData, loading, error } = useReportsListEndpoints();

  // Generate columns
  const { reportListColumns } = useReportsListColumns();

  // Define the buttonProps for the back button
  const buttonProps: ButtonProps = {
    value: "Back",
    onClick: () => navigate("/"),
    icon: faArrowLeft,
  };

  return (
    <Layout title="Reports List" buttonProps={buttonProps}>
      <Loading loading={loading} error={error} />
      {!loading && !error && (
        <DataTable
          data={reportsData?.content || []}
          columns={reportListColumns}
        />
      )}
    </Layout>
  );
};

export default ReportsListView;
