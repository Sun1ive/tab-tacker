'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

function hashPassword(user, options) {
  const SALT_FACTOR = 8;

  if (!user.changed('password')) {
    return;
  }

  return bcrypt.genSaltAsync(SALT_FACTOR).then(salt => bcrypt.hashAsync(user.password, salt)).then(hash => {
    user.setDataValue('password', hash);
  });
}

exports.default = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  });
  User.prototype.comparePassword = function (password) {
    console.log(password);
    console.log(this.password);

    User.prototype.comparePassword = function (password) {
      return bcrypt.compareAsync(password, this.password);
    };
  };

  return User;
};
//# sourceMappingURL=User.js.map