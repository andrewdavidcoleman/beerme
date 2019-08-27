const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/dist'));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/dist/beer.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
