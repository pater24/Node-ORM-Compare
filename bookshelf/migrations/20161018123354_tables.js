
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tables', function (table) {
    table.increments();
    table.string('attr1');
    table.integer('attr2');
    table.boolean('attr3');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tables');
};
