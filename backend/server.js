require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json()); //parses json data

//middleware - not necessary but can help with debugging + logs all requests
app.use((error, req, res, next) => {
  console.log(req.path, req.method); //.path - request url      .method - type so like GET POST etc
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
