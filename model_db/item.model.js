module.exports = (sequelize, DataTypes) => {
  const Items = sequelize.define("item", {
    description: {
      type: DataTypes.STRING(100),
    },
    value: {
      type: DataTypes.INTEGER,
    },
  });

  return Items;
};
