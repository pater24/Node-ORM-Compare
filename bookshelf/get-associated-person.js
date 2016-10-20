var locreq    = require('locreq')(__dirname),
    Bookshelf = locreq('bookshelf/lib/bookshelf'),
    Table     = locreq('bookshelf/models/table');

Table.where({
  person_id: 1
}).fetch({ withRelated: ['person'] }).then((model) => {
  console.log(model.related('person'))
}).catch((err) => {
  console.log(err)
  // err.errors.forEach((e) => {
  //   console.log(e.message + ': ' + e.path)
  // })
}).finally(() => {
  // tear down connection.
  return Bookshelf.knex.destroy();
});
