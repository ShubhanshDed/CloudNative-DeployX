const express = require("express");

const app = express();

const PORT = 4100;

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to CloudNative DeployX!");
});

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    message: "Application is running successfully",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
