import express from "express";

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>")
})

app.get("/about", (req, res) => {
  res.send("<h1>I'm a web developer</h1>")
})

app.get("/contact", (req, res) => {
  res.send("<h1>Contact me x - @suryakant_91</h1>")
})

app.listen(PORT, () => {
  console.log(`Server in running on ${PORT}...`)
})