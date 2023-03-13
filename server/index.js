const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const errorHandler = require("./middlewares/errorHandler");
const AuthRoutes = require("./routes/auth");
const ParcelRoutes = require("./routes/percel");

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json({ limit: "50mb" }));
app.use(errorHandler);

const BaseUrl = "/api/v1";
app.use(`${BaseUrl}/auth`, AuthRoutes);
app.use(`${BaseUrl}/percel`, ParcelRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to backend " });
});

const Port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(Port, () => console.log(`Server Runing on port ${Port}`))
  )
  .catch((err) => console.log(err.message));
