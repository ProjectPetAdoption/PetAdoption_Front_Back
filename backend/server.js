// server.js
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors()); // Enable CORS

const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit-form", (req, res) => {
  const formData = req.body;
  console.log("Received form data:", formData);
  // You can process and save the form data to a database here

    //res.send("your data was received!!");
  //res.status(200).json({ message: "Form data received successfully" });

    res.redirect("http://localhost:3000/shelter");

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
