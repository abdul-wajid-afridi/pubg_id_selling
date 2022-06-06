module.exports = (sequelize, DataTypes) => {
  const tags = sequelize.define("tags", {
    tag_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return tags;
};
