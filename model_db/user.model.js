module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("user", {
    name: {
      type: DataTypes.STRING(100),
    },
    age: {
      type: DataTypes.INTEGER,
    },
  });

  return Users;
};
