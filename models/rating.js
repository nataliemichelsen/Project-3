module.exports = function(sequelize, DataTypes) {
    const Rating = sequelize.define("Rating", {
      rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate : {
            max: 5,
            min: 1,
            inInt: true
        }
      },
      author: {
        type: DataTypes.INTEGER
      }
    });
  
    Rating.associate = function(models) {
        Rating.belongsTo(models.Recipe, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Rating;
  };