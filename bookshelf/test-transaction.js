var locreq    = require('locreq')(__dirname),
    Bookshelf = locreq('bookshelf/lib/bookshelf'),
    Table     = locreq('bookshelf/models/table');

Bookshelf.transaction(function(t) {
  return new Table({
    attr1: 'a',
    attr2: 1,
    attr3: false
  }).save(null, { transacting: t }).then((model) => {
    throw new Error();
  });
}).catch((err) => {
  console.error(err);
}).finally(() => {
  // tear down connection.
  return Bookshelf.knex.destroy();
});
