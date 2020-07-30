module.exports = function(sequelize, DataTypes) {
    const Favorite = sequelize.define("Favorite", {
      recipe: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      author: {
        type: DataTypes.INTEGER
      }
    });
  
    Favorite.associate = function(models) {
        Favorite.belongsTo(models.Recipe, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Favorite;
  };