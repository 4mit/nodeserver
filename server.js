const express = require("express");
var cors = require("cors");
const app = express();

const data = require("./data");

const PORT = process.env.PORT || 4000;

var whitelist = [
  "http://localhost:4000/",
  "http://example1.com",
  "http://example2.com",
];
var corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
    // if (whitelist.indexOf(origin) !== -1) {
    //   callback(null, true);
    // } else {
    //   callback(new Error("Not allowed by CORS"));
    // }
  },
};

app.get("/", cors(corsOptions), function (req, res, next) {
  res.send({ msg: "This is CORS-enabled for a whitelisted domain." });
});

app.get("/courses", cors(corsOptions), function (req, res, next) {
  res.json(data.data);
});
app.get("/meetings", cors(corsOptions), function (req, res, next) {
  res.json(data.meetings);
});
app.listen(PORT, function () {
  console.log("CORS-enabled web server listening on port 80");
});
