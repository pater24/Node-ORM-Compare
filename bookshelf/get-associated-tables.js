var locreq    = require('locreq')(__dirname),
    Bookshelf = locreq('bookshelf/lib/bookshelf'),
    Person    = locreq('bookshelf/models/person');

Person.where({}).fetch({ withRelated: ['tables'] }).then((model) => {
  // console.log(model)
  // console.log(model.related('tables'))
  console.log(model.related('tables').length)
}).catch((err) => {
  console.log(err)
  // err.errors.forEach((e) => {
  //   console.log(e.message + ': ' + e.path)
  // })
}).finally(() => {
  // tear down connection.
  return Bookshelf.knex.destroy();
});

