import { stringToHumanReadable } from "../../../common/Utils";
import { DataTableColumn } from "../../../components/DataTable/DataTable.types";

const useReportDetailsColumns = (
  reportData: { [key: string]: string | number }[]
) => {
  // Return an empty array if there is no data
  if (!reportData || reportData.length === 0) {
    return { reportDetailsColumns: [] };
  }

  // Generate column definitions based on the keys of the first object in the response array
  const reportDetailsColumns: DataTableColumn<{
    [key: string]: string | number;
  }>[] = Object.keys(reportData[0]).map((column) => ({
    // Capitalize first letter of column name
    header: stringToHumanReadable(column),
    // Use the column name as the accessor
    accessor: column,
    value: (row: { [key: string]: string | number }) =>
      String(row[column] || ""),
    sortable: true,
  }));

  return { reportDetailsColumns };
};

export default useReportDetailsColumns;
