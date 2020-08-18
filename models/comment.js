module.exports = function(sequelize, DataTypes) {
    const Comment = sequelize.define("Comment", {
      comment: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    });
  
    Comment.associate = function(models) {
        Comment.belongsTo(models.Recipe, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Comment;
  };