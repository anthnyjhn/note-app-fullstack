const express = require("express");
const cors = require("cors");

const app = express();

const ServerPort = process.env.PORT || 3000;
const ApiRouter = require("./routes/api.router");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", ApiRouter);

app.listen(ServerPort, () => {
  console.log(`Server: http://localhost:${ServerPort}`);
});
