// ./app.js

const express = require("express");

// Initialize express app
const app = express();

// Converts incoming JSON data to objects
app.use(express.json());

// Basic route to test that the server is working
app.get("/health", (req, res) => {
    res.status(200).send('Working');
})


module.exports = app;
