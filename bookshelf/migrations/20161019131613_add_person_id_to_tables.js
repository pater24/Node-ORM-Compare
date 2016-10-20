
exports.up = function(knex, Promise) {
  return knex.schema.table('tables', function (table) {
    table.integer('person_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('tables', function (table) {
    table.dropColumn('person_id');
  })
};
