import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "./routes/routes";
import "@fortawesome/fontawesome-free/css/all.min.css";

const AppRoutes: React.FC = () => {
  // Dynamically load routes
  const element = useRoutes(routes);
  return element;
};

const App: React.FC = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
