const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 5001;

app.use(express.json());
app.use(cors());

// Endpoint to get all reports
app.get("/api/reports", (req, res) => {
  const filePath = path.join(__dirname, "/api/reports.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      res.status(500).send({ error: "Failed to read reports data." });
      return;
    }
    res.json(JSON.parse(data)); // Send parsed JSON data
  });
});

// Endpoint to get a single report by ID
app.get("/api/reports/:id", (req, res) => {
  const id = req.params.id;
  const filePath = path.join(__dirname, `/api/reports/${id}-201708.json`);
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      res.status(500).send({ error: "Failed to read reports data." });
      return;
    }

    const reports = JSON.parse(data);

    if (reports) {
      res.json(reports);
    } else {
      res.status(404).send({ error: "Report not found" });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
