var locreq    = require('locreq')(__dirname),
    Bookshelf = locreq('bookshelf/lib/bookshelf'),
    Table     = locreq('bookshelf/models/table');

Table.query({
  where: {
    attr1: 'a',
    attr2: 1
  }
}).fetchAll().then((results) => {
  console.log(results.length);
}).finally(() => {
  // tear down connection.
  return Bookshelf.knex.destroy();
});
