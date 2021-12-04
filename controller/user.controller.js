const db = require("../config/dbConnection.js");
const User = db.user;
const Item = db.item;

// !!! this creates foreing key on itemId column which points to Item ID column
User.belongsTo(Item, { foreignKey: "itemId" });

// Get all users
exports.findAll = (req, res) => {
  User.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"], // exclude User columns
    },
    include: {
      model: Item, // !!! this works like JOIN in SQL
      attributes: ["description", "value"], // show selected Item columns
    },
  }).then((users) => {
    res.status(200).json({
      status: true,
      data: users,
    });
  });
};

// example result:
// {
//   "status": true,
//   "data": [{
//     "id": 1,
//     "name": "uuu",
//     "age": 222,
//     "itemId": 1,
//     "item": {
//       "description": "aa",
//       "value": 11
//     }
//   }]
// }
