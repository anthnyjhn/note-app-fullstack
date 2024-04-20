const express = require("express");
const app = express();
const ServerPort = process.env.PORT || 3000;
const ApiRouter = require("./routes/ApiRouter");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", ApiRouter);

app.listen(ServerPort, () => {
  console.log(`Server: http://localhost:${ServerPort}`);
});
