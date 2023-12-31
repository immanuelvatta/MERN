const express = require("express");
const app = express();
const port  = 8000;

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
  // res.send("Our express api server is now sending this over to the browser");
});

const server = app.listen(port , () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
