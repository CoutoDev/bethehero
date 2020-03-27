const knex = require('knex');
const congig = require('../../knexfile');

const connection = knex(congig.development);

module.exports = connection;