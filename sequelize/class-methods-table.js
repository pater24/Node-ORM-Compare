var locreq    = require('locreq')(__dirname),
    Sequelize = locreq('sequelize/lib/sequelize');

Sequelize.import('./models/table').testClassMethod()
Sequelize.close();
