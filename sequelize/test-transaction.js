var locreq    = require('locreq')(__dirname),
    Sequelize = locreq('sequelize/lib/sequelize');

Sequelize.transaction(function (t) {
  return Sequelize.import('./models/table').create({
    attr1: 'a',
    attr2: 1,
    attr3: false
  }, { transaction: t }).then((model) => {
    // Woops, the query was successful but we still want to roll back!
    throw new Error();
  });
}).catch((err) => {
  console.log(err)
}).finally(() => {
  Sequelize.close();
});
