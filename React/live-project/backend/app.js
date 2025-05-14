const connectDB = require("./config/db");
connectDB();
const express = require("express");
const authRoute = require("./routes/authRoute");

const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/api", authRoute);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
