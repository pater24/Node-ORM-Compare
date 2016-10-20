var locreq    = require('locreq')(__dirname),
    Sequelize = locreq('sequelize/lib/sequelize');

Sequelize.import('./models/table').findAll({
  offset: 1,
  limit: 1
}).then((results) => {
  console.log(results.length)
}).finally(() => {
  Sequelize.close();
});
