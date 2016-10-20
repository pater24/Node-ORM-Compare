var locreq    = require('locreq')(__dirname),
    Bookshelf = locreq('bookshelf/lib/bookshelf'),
    Table     = locreq('bookshelf/models/table');

new Table({
  attr1: 'a',
  attr2: 1,
  attr3: false,
  personId: 1
}, { parse: true }).save().then((model) => {
  console.log(model.testName())
  console.log(model.method2('whee'))
}).catch((err) => {
  console.log(err)
  err.errors.forEach((e) => {
    console.log(e.message + ': ' + e.path)
  })
}).finally(() => {
  // tear down connection.
  return Bookshelf.knex.destroy();
});
