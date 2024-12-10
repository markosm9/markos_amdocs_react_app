import React from "react";
import DataTable from "../../../components/DataTable/DataTable";
import useReportsListEndpoints from "./useReportsListEndpoints";
import Loading from "../../../components/Loading/Loading";
import useReportsListColumns from "./useReportsListColumns";
import Layout from "../../Layout/Layout";

const ReportsListView: React.FC = () => {
  //Get the endpoint response
  const { reportsData, loading, error } = useReportsListEndpoints();

  // Generate columns
  const { reportListColumns } = useReportsListColumns();

  return (
    <Layout title="Reports List">
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
