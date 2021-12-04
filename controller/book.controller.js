const db = require("../config/dbConnection.js");
const Book = db.book;
var validator = require("validator");

// https://sequelize.org/ -> more info on SQL syntax

// Get all books
exports.findAll = (req, res) => {
  Book.findAll().then((books) => {
    // Send all books as response
    res.status(200).json({
      status: true,
      data: books,
    });
  });
};

// Get all books with WHERE clause
const { Op, json } = require("sequelize"); // Op means operator like eq, and, like ,or, etc..
exports.findAllWhere = (req, res) => {
  Book.findAll({
    where: {
      [Op.or]: [{ name: "aaa" }, { price: "123" }],
    },
  }).then((books) => {
    // Send all books as response
    res.status(200).json({
      status: true,
      data: books,
    });
  });
};

// Save to MySQL database after input validation at htpp level
exports.create = (req, res) => {
  var price = req.body.price;
  var name = req.body.name;
  console.log("is price:" + validator.isNumeric(price));
  console.log("is name:" + validator.isAlpha(name));

  if (validator.isNumeric(price) && validator.isAlpha(name)) {
    console.log("validation ok");
    Book.create({
      name: req.body.name,
      price: req.body.price,
    }).then(() => res.json({ msg: "ok" }));
  } else {
    res.json({ msg: "validation failed" });
  }
};
