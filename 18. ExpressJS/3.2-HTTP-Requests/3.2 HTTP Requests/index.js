import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log(req.rawHeaders)
  res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Tentang Saya</h1><p>My name is Dary</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +62123456789</p>");
});

app.get("/links", (req, res) => {
  res.send("<h1>My Links</h1><ul><li><a href='https://facebook.com/dary.reery' target='_blank'>Facebook</a></li></ul>")
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
