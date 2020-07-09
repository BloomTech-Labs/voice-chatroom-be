const express = require("express");
const cors = require("cors");

const welcomeRouter = require("./routers/welcomeRouter");
const userRouter = require("./users/user-router");
const mentorRouter = require("./mentors/mentor-router");
const categoryRouter = require("./categories/categoryRouter");

const app = express();

app.use(
	cors({
		origin: "https://www.wyzerapp.com",
	})
);

app.use(express.json());
app.use("/", welcomeRouter);
app.use("/users", userRouter);
app.use("/mentors", mentorRouter);
app.use("/categories", categoryRouter);

module.exports = app;
