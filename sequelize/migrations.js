var Umzug = require('umzug');
var umzug = new Umzug({});

umzug.pending().then(function (migrations) {
  console.log(migrations);
});

umzug.up().then(function (migrations) {
  console.log(migrations);
});
