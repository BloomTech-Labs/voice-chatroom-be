const express = require('express')
const cors = require("cors");

const welcomeRouter = require('./routers/welcomeRouter');
const userRouter = require('./users/user-router');
const mentorRouter = require('./mentors/mentor-router');

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", welcomeRouter)
app.use("/users", userRouter)
app.use("/mentors", mentorRouter)

module.exports = app