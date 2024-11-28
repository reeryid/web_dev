import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Route to render the index.ejs file
app.get("/", (req, res) => {
  res.render("index");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
