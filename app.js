const express = require("express");
const app = express();
const router = require("./routes/routes.js");

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// include database config file
const db = require("./config/dbConnection.js");

// force: true will drop the table if it already exists
db.sequelize
  .sync({ force: false }) // !!! init DB connection and tables creation if not exist
  .then(() => {
    console.log("Drop and Resync with { force: false }");
  })
  .catch((e) => {
    console.log("!!!!!!!!!!" + e);
  });

app.use("/api/", router); // fetch API routes from other file

app.get("/", (req, res) => {
  res.json({ message: "hello" });
});

// set port, listen for requests
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//todo
//add validation error on model handling - !! crashes application at the moment
//add json to object conversion and to db
// swagger
