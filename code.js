const express = require("express");
const res = require("express/lib/response");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "#442301@Hk",
  database: "shorturls",
});

con.connect(function (error) {
  if (error) {
    console.log("Database connection failed");
    console.log(error); // Print the specific error for debugging purposes
  } else {
    console.log("Database connection successful");
  }
});

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/public/index.html");
});

app.post("/api/create-short-url", function (request, response) {
  let uniqueID = Math.random()
    .toString(36)
    .replace(/[^a-z0-9]/gi, "")
    .substr(2, 10);
  let sql = `INSERT INTO links (longurl, shorturlid) VALUES ('${request.body.longurl}', '${uniqueID}')`;

  con.query(sql, function (error, result) {
    if (error) {
      response.status(500).json({
        status: "notok",
        message: "Internal server error",
      });
    } else {
      response.status(200).json({
        status: "ok",
        message: "Short URL created",
        shorturlid: uniqueID,
      });
    }
  });
});

app.get("/api/get-all-short-urls", function (request, response) {
  let sql = "SELECT * FROM links";

  con.query(sql, function (error, result) {
    if (error) {
      response.status(500).json({
        status: "notok",
        message: "Internal server error",
      });
    } else {
      response.status(200).json({
        status: "ok",
        message: "All short URLs retrieved",
        data: result,
      });
    }
  });
});

app.get("/:shorturlid", function (request, response) {
  let shorturlid = request.params.shorturlid;
  let sql = `SELECT * FROM links WHERE shorturlid = '${shorturlid}' LIMIT 1`;

  con.query(sql, function (error, result) {
    if (error) {
      response.status(500).json({
        status: "notok",
        message: "Something went wrong",
      });
    } else {
      if (result.length === 0) {
        response.status(404).json({
          status: "notok",
          message: "Short URL not found",
        });
      } else {
        response.redirect(result[0].longurl);
      }
    }
  });
});

app.listen(3000, function () {
  console.log("Server listening on port 3000");
});
