
exports.up = function(knex, Promise) {
  return knex.schema.createTable('people', function (table) {
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('people');
};
