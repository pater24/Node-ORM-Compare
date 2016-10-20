var locreq    = require('locreq')(__dirname),
    Sequelize = locreq('sequelize/lib/sequelize');

Sequelize.import('./models/table').create({
  attr1: 'a',
  attr2: 1,
  attr3: false,
  personId: 1,
}).then((model) => {
  console.log(model.personId)
  console.log(model.testName)
  console.log(model.method2('whee'))
}).catch((err) => {
  console.log(err)
  // err.errors.forEach((e) => {
  //   console.log(e.message + ': ' + e.path)
  // })
}).finally(() => {
  Sequelize.close();
});
