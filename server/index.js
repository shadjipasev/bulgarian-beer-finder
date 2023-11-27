const express = require("express");
const app = express();
const cors = require("./middlewares/cors");
const dbConnectionString = "mongodb://127.0.0.1:27017/Bulgarian-Beer-Finder";
const { mongoose } = require("mongoose");
const session = require("./middlewares/session");
// const router = require("./src/routes");
mongoose.set("strictQuery", true);

const initializeDatabase = () =>
  mongoose
    .connect(dbConnectionString)
    .then(() => {
      console.log("Database connected!");
    })
    .catch(() => {
      console.log("Database connection FAILED!");
    });

async function startServer() {
  initializeDatabase();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());
  //   app.use(session());
  //TODO: Add trim body
  // app.use(router);
  app.listen("3030", () => console.log("Server operational on port: 3030!"));
  app.get("/", (req, res) => {
    res.json({ message: "Service operational.." });
  });
}
startServer();
