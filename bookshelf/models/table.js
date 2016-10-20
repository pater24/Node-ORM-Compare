var locreq    = require('locreq')(__dirname),
    checkit   = require('checkit'),
    _         = require('lodash'),
    Bookshelf = locreq('bookshelf/lib/bookshelf'),
    Person    = locreq('bookshelf/models/person');

module.exports = Bookshelf.Model.extend({
  tableName: 'tables',
  hasTimestamps: true,
  hasTimestamps: ['createdAt', 'updatedAt'],
  initialize: function() {
    this.on('saving', this.validate, this);

    // Callbacks/Hooks
    this.on('created', () => {
      console.log(this.get('attr1'))
    })
    this.on('destroyed', () => {
      console.log('destroyed')
    })
  },
  validations: {
    attr1: ['alpha'],
    attr2: ['numeric']
  },
  validate: function(model, attrs, options) {
    return checkit(this.validations).run(this.toJSON());
  },
  testName: function() {
    return this.get('attr1') + ' test';
  },
  method2: function(v) {
    return 'foo' + v;
  },
  person: function() {
    return this.belongsTo(Person);
  },
  parse: function(attrs) {
    return _.reduce(attrs, function(memo, val, key) {
      memo[_.camelCase(key)] = val;
      return memo;
    }, {});
  },
  // convert camelCase to snake_case
  format: function(attrs) {
    return _.reduce(attrs, function(memo, val, key) {
        memo[key.split(/(?=[A-Z])/).join("_").toLowerCase()] = val;
        return memo;
    }, {});
  }
}, {
  testClassMethod: function() {
    console.log('this is a class method')
  }
});
