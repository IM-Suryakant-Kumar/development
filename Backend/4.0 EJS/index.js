import express from "express";

const app = express();
const PORT = 3000;
let day = "weekday";
let activity = "work hard";

function dayAndActivity(req, res, next) {
	const dayNum = new Date().getDay();
	if (dayNum === 0 || dayNum === 6) {
		day = "weekend";
		activity = "have fun";
	}
	next();
}

app.use(dayAndActivity)

app.get("/", (req, res) => {
	res.render("index.ejs", {
		day,
		activity,
	});
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
