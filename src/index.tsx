import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // Display a user-friendly error message on the screen
  const errorMessage =
    "Failed to find the root element. Please check your HTML structure.";

  // Create an error container to display the error message
  const errorContainer = document.createElement("div");
  errorContainer.style.position = "absolute";
  errorContainer.style.padding = "20px";
  errorContainer.style.backgroundColor = "#f8d7da";
  errorContainer.style.color = "#721c24";
  errorContainer.style.textAlign = "center";
  errorContainer.textContent = errorMessage;

  // Append the error container to the body
  document.body.appendChild(errorContainer);
}
