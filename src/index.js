import express from "express";
import Router from "./routes/index";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use("", Router);

app.listen(3000, function () {
  console.log("running on port 3000 ");
});
