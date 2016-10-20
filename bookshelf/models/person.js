var locreq    = require('locreq')(__dirname),
    checkit   = require('checkit'),
    _         = require('lodash'),
    Bookshelf = locreq('bookshelf/lib/bookshelf'),
    Table     = locreq('bookshelf/models/table');

module.exports = Bookshelf.Model.extend({
  tableName: 'people',
  hasTimestamps: true,
  hasTimestamps: ['createdAt', 'updatedAt'],
  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  },
  tables: function() {
    return this.hasMany(Table);
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
        memo[_.snakeCase(key)] = val;
        return memo;
    }, {});
  }
});
