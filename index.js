const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;
const blogRouter = require("./src/routes/blog-routes");
const userRouter = require("./src/routes/user-routes");

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/blog", blogRouter);
app.use("/user", userRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
