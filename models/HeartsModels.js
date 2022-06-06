module.exports = (sequelize, DataTypes) => {
  const hearts = sequelize.define("hearts", {
    heart_click: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return hearts;
};
