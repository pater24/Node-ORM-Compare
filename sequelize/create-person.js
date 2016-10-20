var locreq    = require('locreq')(__dirname),
    Sequelize = locreq('sequelize/lib/sequelize');

Sequelize.import('./models/person').create({
  firstName: 'a',
  lastName: 'b'
}).then((model) => {
  console.log(model.fullName)
}).catch((err) => {
  console.log(err)
  // err.errors.forEach((e) => {
  //   console.log(e.message + ': ' + e.path)
  // })
}).finally(() => {
  Sequelize.close();
});
