var locreq    = require('locreq')(__dirname),
    Sequelize = locreq('sequelize/lib/sequelize');

Sequelize.import('./models/table').findAll({
  where: {
    attr1: 'a',
    attr2: 1
  }
}).then((results) => {
  console.log(results.length)
}).finally(() => {
  Sequelize.close();
});
