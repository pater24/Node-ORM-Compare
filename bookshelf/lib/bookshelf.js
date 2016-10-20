var locreq    = require('locreq')(__dirname);

let envFile = locreq('bookshelf/knexfile'),
    config  = envFile.development;

var knex = require('knex')({
  client: config.client,
  connection: config.connection
});

var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
