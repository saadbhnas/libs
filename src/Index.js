require("./models/User");
const express = require("express");
const mongoose = require("mongoose");
const AuthRoutes = require("./Routes/AuthRoutes");
const bodyParser = require("body-parser");
const requireAuth = require("./middlewares/reqiureAuth");

const app = express();

app.use(bodyParser.json());
app.use(AuthRoutes);

const mongoURI =
  "mongodb+srv://bahnas:Thresh@cluster0.l3a2r.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo instance", err);
});

app.get("/", requireAuth, (req, res) => {
  res.send(`your email : ${req.user.email}`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
