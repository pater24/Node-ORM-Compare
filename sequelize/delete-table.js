var locreq    = require('locreq')(__dirname),
    Sequelize = locreq('sequelize/lib/sequelize');

Sequelize.import('./models/table').findOne().then((model) => {
  return model.destroy().then((result) => {
    console.log('hi')
  })
}).catch((err) => {
  console.log(err)
  // err.errors.forEach((e) => {
  //   console.log(e.message + ': ' + e.path)
  // })
}).finally(() => {
  Sequelize.close();
});
