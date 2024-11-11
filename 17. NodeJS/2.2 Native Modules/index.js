const fs = require("fs");

fs.writeFile("message_node.txt", "hello from node JS", (err) => {
    if (err) throw err;
    console.log("File saved")
});

fs.readFile('./message_node.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 