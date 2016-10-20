var locreq    = require('locreq')(__dirname),
    Bookshelf = locreq('bookshelf/lib/bookshelf'),
    Person    = locreq('bookshelf/models/person');

new Person({
  firstName: 'a',
  lastName: 'b'
}, { parse: true }).save().then((model) => {
  console.log(model.fullName())
}).catch((err) => {
  // console.log(err)
  err.errors.forEach((e) => {
    console.log(e.message + ': ' + e.path)
  })
}).finally(() => {
  // tear down connection.
  return Bookshelf.knex.destroy();
});
