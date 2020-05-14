require("dotenv").config();
const express = require('express')
const cors = require("cors");

const welcomeRouter = require('./routers/welcomeRouter');
const userRouter = require('./users/user-router');

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", welcomeRouter)
app.use("/users", userRouter)

const PORT = process.env.PORT || 6900;

app.listen(PORT, () => {
  console.log(`Niceness on ${PORT}`);
});

