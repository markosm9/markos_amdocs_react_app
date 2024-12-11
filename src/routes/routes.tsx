import React from "react";
import { RouteObject } from "react-router-dom";
import ReportDetailsView from "../modules/Reports/ReportDetails/ReportDetailsView";
import ReportsListView from "../modules/Reports/ReportsList/ReportsListView";
import HomePage from "../modules/HomePage/HomePage";

// Define the route configuration, this one can be split later in more files in larger projects
const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/reports",
    element: <ReportsListView />,
  },
  {
    path: "/reports/:reportId",
    element: <ReportDetailsView />,
  },
];

export default routes;
