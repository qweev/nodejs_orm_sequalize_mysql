module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define("book", {
    name: {
      type: DataTypes.STRING(100),
      //validation here at JS level - doesn;t work as throws validation error and crashes app
      validate: {
        isAlpha: true,
        notEmpty: true,
      },
    },
    price: {
      type: DataTypes.INTEGER,
      //validation here at JS level
      validate: {
        isNumeric: true,
        notEmpty: true,
      },
    },
  });

  return Books;
};
