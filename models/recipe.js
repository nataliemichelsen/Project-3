module.exports = function(sequelize, DataTypes) {
    const Recipe = sequelize.define("Recipe", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      category: {
          type: DataTypes.INTEGER
      },
      ingredients: {
          type: DataTypes.TEXT
      },
      steps: {
          type: DataTypes.TEXT
      },
      time: {
          type: DataTypes.INTEGER
      },
      picture: {
          type: DataTypes.STRING
      },
      visility: {
          type: DataTypes.BOOLEAN
      }
    });
  
    Recipe.associate = function(models) {
        Recipe.hasMany(models.Comment, {
        onDelete: "cascade"
      });
    };

    Recipe.associate = function(models) {
      Recipe.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Recipe;
  };