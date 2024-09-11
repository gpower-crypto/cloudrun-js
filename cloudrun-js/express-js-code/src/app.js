const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hi World");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// asia-southeast1-docker.pkg.dev/high-theme-262709/express-server/simple-express
