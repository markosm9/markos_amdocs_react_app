import React, { useState } from "react";
import { DataTableProps } from "./DataTable.types";
import { isEmptyNullOrUndefined } from "../../common/Utils";

//This is just a reference of a reusable Table component, could add more props paginations, filters and more

const DataTable = <T extends { [key: string]: any } | any[]>({
  data,
  columns,
}: DataTableProps<T>) => {
  //Initiate sorting states
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  // Function to sort data based on the field and direction
  const sortData = (
    data: T[],
    field: string,
    direction: "asc" | "desc"
  ): T[] => {
    const sortedData = [...data].sort((a, b) => {
      let aValue, bValue;

      //check type of columns data
      if (typeof a === "object" && !Array.isArray(a)) {
        aValue = a[field as keyof T];
        bValue = b[field as keyof T];
      } else if (Array.isArray(a) && Array.isArray(b)) {
        const columnIndex = columns.findIndex((col) => col.accessor === field);
        aValue = a[columnIndex];
        bValue = b[columnIndex];
      }

      // If both values are empty, keep their relative order
      if (isEmptyNullOrUndefined(aValue) && isEmptyNullOrUndefined(bValue))
        return 0;

      // If one value is empty, push it to the end
      if (isEmptyNullOrUndefined(aValue)) return 1;
      if (isEmptyNullOrUndefined(bValue)) return -1;

      // Normal comparison for non-empty values
      if (aValue < bValue) return direction === "asc" ? -1 : 1;
      if (aValue > bValue) return direction === "asc" ? 1 : -1;
      return 0;
    });

    return sortedData;
  };

  //Handle table sorting
  const handleSort = (field: string) => {
    const newDirection =
      sortField === field && sortDirection === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortDirection(newDirection);
  };

  // Sort the data if there is a sort field selected
  const sortedData = sortField
    ? sortData(data, sortField, sortDirection)
    : data || [];

  // Handle empty or invalid data
  if (!Array.isArray(sortedData) || sortedData.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <table className="min-w-full table-auto border-collapse border border-black">
      <thead className="bg-black text-white">
        <tr>
          {columns.map((column, index) => (
            //Return the table headers
            <th
              key={index}
              className="px-4 py-2 border border-black cursor-pointer"
              onClick={() =>
                column.sortable && handleSort(column.accessor as string)
              }
            >
              {column.header}
              {/* Add sorting if the sortable is enabled for that column */}
              {sortField === column.accessor &&
                (sortDirection === "asc" ? " ↑" : " ↓")}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* return the sorted columns data */}
        {sortedData.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className="odd:bg-gray-100 even:bg-white hover:bg-gray-200"
          >
            {columns.map((column, colIndex) => (
              <td
                key={colIndex}
                className="px-4 py-2 border border-black text-center"
              >
                <div className={column?.className}>
                  {typeof row === "object" && !Array.isArray(row)
                    ? column.value
                      ? column.value(row, row)
                      : // Cast to the correct type
                        String(row[column.accessor as keyof T])
                    : String(row[colIndex])}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
