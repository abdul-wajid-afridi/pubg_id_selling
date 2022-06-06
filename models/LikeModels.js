module.exports = (sequelize, DataTypes) => {
  const like = sequelize.define("like", {
    likes_tick: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return like;
};
