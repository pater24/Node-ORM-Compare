var locreq    = require('locreq')(__dirname),
    Sequelize = locreq('sequelize/lib/sequelize');

var Table = Sequelize.import('./models/table'),
    Person = Sequelize.import('./models/person');

Table.associate(Sequelize.models)
Person.associate(Sequelize.models)

Person.findOne().then((model) => {
  return model.getTables().then((result) => {
    console.log(result)
  })
}).catch((err) => {
  console.log(err)
  // err.errors.forEach((e) => {
  //   console.log(e.message + ': ' + e.path)
  // })
}).finally(() => {
  Sequelize.close();
});
