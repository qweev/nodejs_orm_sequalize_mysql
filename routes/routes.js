var express = require("express");
var router = express.Router();
const book = require("../controller/book.controller.js");
const user = require("../controller/user.controller.js");

router.get("/allBooks", book.findAll);
router.get("/allBooksWhere", book.findAllWhere);
router.post("/addBook", book.create); // send post with json book from some web client like:
// {
// "name":"abc",
// "price":"123"
// }

router.get("/allUsers", user.findAll);

module.exports = router;
