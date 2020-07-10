const express = require("express");
const cors = require("cors");

const welcomeRouter = require("./routers/welcomeRouter");
const userRouter = require("./users/user-router");
const mentorRouter = require("./mentors/mentor-router");
const categoryRouter = require("./categories/categoryRouter");

const app = express();

app.use(cors());

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

app.use(express.json());
app.use("/", welcomeRouter);
app.use("/users", userRouter);
app.use("/mentors", mentorRouter);
app.use("/categories", categoryRouter);

module.exports = app;
