import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
  const data = req.body;
  console.log(data);
  res.send(`<h1>Your band name is</h1><h1>${data.street} ${data.pet}</h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
