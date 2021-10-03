const express = require("express");
const app = express();

// use the express-static middleware
app.use(express.static("singlepage"))

// define the first route
app.get("/", function (req, res) {
  res.send("Welcome to my portfolio site!")
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Hello World, I'm a server."));