var locreq    = require('locreq')(__dirname),
    Bookshelf = locreq('bookshelf/lib/bookshelf'),
    Table     = locreq('bookshelf/models/table');

Table.query((qb) => {
  qb.offset(1).limit(1);
}).fetchAll().then((results) => {
  console.log(results.length);
}).finally(() => {
  // tear down connection.
  return Bookshelf.knex.destroy();
});
