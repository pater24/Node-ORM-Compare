var locreq    = require('locreq')(__dirname),
    Bookshelf = locreq('bookshelf/lib/bookshelf'),
    Table     = locreq('bookshelf/models/table');

Table.collection().fetch().then((results) => {
  var model = results.models[0];
  return model.destroy().then((result) => {
    console.log('hi')
  })
}).catch((err) => {
  console.log(err)
  // err.errors.forEach((e) => {
  //   console.log(e.message + ': ' + e.path)
  // })
}).finally(() => {
  // tear down connection.
  return Bookshelf.knex.destroy();
});
