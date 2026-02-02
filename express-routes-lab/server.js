console.log("TOP OF SERVER.JS RAN");

const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;


// Basic Routes
app.get("/", (req, res) => {
  res.type("text").send("Hello World");
});

app.get("/about", (req, res) => {
  res.type("text").send("About page");
});


// Conditional Routing (/foo)
// First handler randomly responds OR passes to next handler
app.get("/foo", (req, res, next) => {
  const coinFlip = Math.random() < 0.5;

  if (coinFlip) {
    return res.type("text").send("sometimes this");
  }

  // Pass control to the next matching route
  next();
});

// Second handler for /foo
app.get("/foo", (req, res) => {
  res.type("text").send("and sometimes that");
});


// Regular Expression Route
// Matches /user and /username
app.get(/^\/user(name)?$/, (req, res) => {
  res.type("text").send("Matched user or username");
});


// Dynamic Route Handling
app.get("/user/:username", (req, res) => {
  const { username } = req.params;
  res.type("text").send(`Hello ${username}`);
});


// Query String Handling
app.get("/get", (req, res) => {
  console.log("Query params:", req.query);
  res.type("text").send("Check the console for query parameters");
});

// 404 Error Handler 
app.use((req, res) => {
  res.status(404).type("text").send("404 - Not Found");
});


// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
