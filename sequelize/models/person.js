'use strict';

module.exports = function(sequelize, DataTypes) {
  var Person = sequelize.define('person', {
    firstName: {
      type: DataTypes.STRING,
      field: 'first_name'
    },
    lastName: {
      type: DataTypes.STRING,
      field: 'last_name'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    }
  }, {
    // Properties
    getterMethods: {
      fullName: function() {
        return this.firstName + ' ' + this.lastName;
      }
    },
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        this.hasMany(models.table)
      }
    }
  });

  return Person;
};
