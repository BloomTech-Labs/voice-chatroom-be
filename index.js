require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 6969;

app.listen(PORT, () => {
  console.log(`Niceness on ${PORT}`);
});
