const express = require("express");
const mongoose = require("mongoose");
const app = express();

//midleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route
app.use("/api/products", require("./routes/product.route"));

app.get("/", (req, res) => {
  res.send("Hello from Node API server Updated");
});

mongoose
  .connect(
    "mongodb+srv://samabdoul03:0zIE4KgwDssTr7NL@backenddb.3p4pfso.mongodb.net/BackendDB?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
