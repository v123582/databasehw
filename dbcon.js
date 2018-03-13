var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs290_chend5',
  password        : '750322',
  database        : 'cs290_chend5'
});

module.exports.pool = pool;