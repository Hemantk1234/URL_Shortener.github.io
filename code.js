const express = require("express");
const res = require("express/lib/response");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

// Serve static files from the "public" directory
app.use(express.static("public"));

// Parse the request body as JSON
app.use(express.json());

// Enable Cross Origin Resource Sharing (CORS)
app.use(cors());

// Create a MySQL connection
const con = mysql.createConnection({
  host: "localhost",
  user: "your_username",
  password: "your_password",
  // Change the database name if necessary (here it's "shorturls")
  database: "your_database_name",
});

// Connect to the database
con.connect(function (error) {
  if (error) {
    console.log("Database connection failed");
    console.log(error); // Print the specific error for debugging purposes
  } else {
    console.log("Database connection successful");
  }
});

// Serve the index.html file for the root route
app.get("/", function (request, response) {
  response.sendFile(__dirname + "/public/index.html");
});

// Handle POST request to create a new short URL
app.post("/api/create-short-url", function (request, response) {
  // Generate a unique ID for the short URL
  let uniqueID = Math.random()
    .toString(36)
    .replace(/[^a-z0-9]/gi, "")
    .substr(2, 10);

  // Insert the long URL and the short URL ID into the database
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

// Handle GET request to retrieve all short URLs
app.get("/api/get-all-short-urls", function (request, response) {
  // Retrieve all records from the "links" table
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

// Handle GET request for a specific short URL
app.get("/:shorturlid", function (request, response) {
  let shorturlid = request.params.shorturlid;

  // Retrieve the long URL from the database using the short URL ID
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
        // Redirect to the long URL
        response.redirect(result[0].longurl);
      }
    }
  });
});

// Start the server
app.listen(3000, function () {
  console.log("Server listening on port 3000");
});
