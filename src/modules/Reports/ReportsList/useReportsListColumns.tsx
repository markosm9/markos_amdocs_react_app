import { useNavigate } from "react-router-dom";
import { DataTableColumn } from "../../../components/DataTable/DataTable.types";
import { Report } from "./ReportsList.types";
import Button from "../../../components/Button/Button";

const useReportsListColumns = () => {
  const navigate = useNavigate();

  // Navigate to the selected report
  const onNavigate = (id: number) => () => navigate(`/report/${id}`);

  //Return the table columns
  const reportListColumns: DataTableColumn<Report>[] = [
    {
      header: "Name",
      accessor: "name",
      value: (report) => report.name,
      sortable: true,
    },
    {
      header: "Description",
      accessor: "description",
      value: (report) => report.description,
      sortable: true,
    },
    {
      header: "Actions",
      accessor: "id",
      value: (report) => (
        <Button
          onClick={onNavigate(report.id)}
          className="bg-gray-500 text-white px-4 py-2 rounded"
          value="View Report"
        />
      ),
      className: "flex justify-center items-center",
    },
  ];

  return { reportListColumns };
};

export default useReportsListColumns;
