var Sequelize = require('sequelize'),
    locreq    = require('locreq')(__dirname);

let envFile = locreq('sequelize/config/config.json'),
    config  = envFile.development;

var sequelize = new Sequelize(config.database, config.username, config.password, {
  host    : config.host,
  dialect : config.dialect,
  pool    : 30
});

module.exports = sequelize;
