// Given an app.js file, write an API with path / using express JS to send the date after 100 days from today as a response in DD/MM/YYYY format.

// Export the express instance using default export syntax.

// Use the third-party package date-fns.

// Use Common JS module syntax.

const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();

app.get("/", (request, response) => {
  const date = new Date();
  const result = addDays(date, 100);
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});

module.exports = app;
