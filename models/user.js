const bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 6
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      is: /^[0-9+-]$/gi,
      validate: {
        len: [9, 16]
      }
    },
    bio: {
      type: DataTypes.STRING
    },
    picture: {
      type :DataTypes.STRING
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    token: {
      type: DataTypes.STRING
    }
  });
  
  User.prototype.validPassword = function(password) {
    return bcrypt.compare(password, this.password);
  };

  User.addHook("beforeCreate", user => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  User.addHook("beforeValidate", user => {
    if (user.password) {
      user.password = bcrypt.hashSync(
        user.password,
        bcrypt.genSaltSync(10),
        null
      );
    }
  });
  return User;
};