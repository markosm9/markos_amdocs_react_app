import { useCallback } from "react";

const useReportDetailsFn = () => {
  // Function to convert data into an array of objects
  const convertReportDataToObject = useCallback(
    (
      data: (string | number)[][] | undefined,
      columns: string[] | undefined
    ): { [key: string]: string | number }[] => {
      // Return empty array if data or columns is undefined
      if (!data || !columns) return [];

      // Return the converted data
      return data.map((row) =>
        row.reduce((acc, value, index) => {
          acc[columns[index]] = value;
          return acc;
        }, {} as { [key: string]: string | number })
      );
    },
    []
  );

  return { convertReportDataToObject };
};

export default useReportDetailsFn;
