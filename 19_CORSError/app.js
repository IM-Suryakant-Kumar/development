const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("RESPONSE FOR GET REQUEST");
});

app.post("/", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.sendFile(__dirname + "/data.json");
});

app.listen(3000, () => {
  console.log("Listing to port: 3000.");
});
