module.exports = (sequelize, DataTypes) => {
  const IdDetails = sequelize.define("IdDetails", {
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    discription: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    idLevel: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  // IdDetails.associate = (models) => {
  //   IdDetails.hasMany(models.Comments, {
  //     onDelete: "cascade",
  //   });
  // };

  IdDetails.associate = (models) => {
    IdDetails.hasMany(models.hearts, {
      onDelete: "cascade",
      foreignKey: "idDetails_id",
    });
    IdDetails.hasMany(models.like, {
      onDelete: "cascade",
      foreignKey: "idDetails_id",
    });
    IdDetails.hasMany(models.comments, {
      onDelete: "cascade",
      foreignKey: "idDetails_id",
    });
    IdDetails.hasMany(models.tags, {
      onDelete: "cascade",
      foreignKey: "idDetails_id",
    });
  };

  // IdDetails.hasMany(hearts);
  // hearts.belongsTo(IdDetails);
  // hearts.belongsTo(IdDetails, { foreignKey: "idDetails_id" });
  // hearts.hasMany(IdDetails, { foreignKey: "idDetails_id" });
  // const User = sequelize.define('User', { name: DataTypes.STRING }); const Post = sequelize.define('Post', { title: DataTypes.STRING });

  return IdDetails;
};
