import express from "express";

const app = express();
const PORT = 3000;

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    sidebars
  });
})

const sidebars = ["home", "essays", "books"];


app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`));
