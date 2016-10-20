'use strict';

module.exports = function(sequelize, DataTypes) {
  var Table = sequelize.define('table', {
    attr1: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true
      }
    },
    attr2: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true
      }
    },
    attr3: DataTypes.BOOLEAN,
    personId: {
      type: DataTypes.INTEGER,
      field: 'person_id'
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
      testName: function() {
        return this.attr1 + ' test';
      }
    },
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        this.belongsTo(models.person)
      },
      testClassMethod: function() {
        console.log('this is a class method')
      }
    },
    instanceMethods: {
      method2: function(v) { return 'foo' + v }
    },
    hooks: {
      afterCreate: function(model, options) {
        console.log(model.attr1)
      },
      afterDestroy: function(model, options) {
        console.log('destroyed')
      }
    },
    scopes: {
    }
  });

  return Table;
};
