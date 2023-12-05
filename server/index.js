const express = require("express");
const app = express();
const cors = require("cors");
// const cors = require("./middlewares/cors");
const { mongoose } = require("mongoose");
const session = require("./middlewares/session");
const beerController = require("./controllers/beerController");

const bodyParser = require("body-parser");
const authController = require("./controllers/authController");
const cartController = require("./controllers/cartController");

mongoose.set("strictQuery", true);

const dbConnectionString = "mongodb://127.0.0.1:27017/Bulgarian-Beer-Finder";

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
  // app.use(cors());
  app.use(bodyParser.json());

  app.listen("3030", () => console.log("Server operational on port: 3030!"));
  app.get("/", (req, res) => {
    res.json({ message: "Service operational.." });
  });

  const corsOptions = {
    origin: "*",
    methods: ["HEAD", "OPTIONS", "GET", "POST", "PUT", "DELETE"],
    Headers: ["Content-Type", "X-Authorization", "X-Frame-Options: GOFORIT"],
  };

  app.use(cors(corsOptions));

  app.use(session());
  app.use("/beer", beerController);
  app.use("/auth", authController);
  app.use("/cart", cartController);
}
startServer();
