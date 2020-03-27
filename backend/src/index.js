const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

/**
  * Métodos HTTP:
  * GET: Buscar uma informação no backend
  * POST: Criar uma informação no backend
  * PUT: Alterar  uma informação no backend
  * DELETE: Deletar informação no backend
  */

/**
 * Tipos de parâmetros:
 * 
 * Query params: Parâmetros nomeados enviados na rota após o '?' (Filtros, paginação)
 * Route params: parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */

/**
  * SQL: MySQL, SQLite, PostgresSQL, Oracle, MS SQL Server, etc...
  * NoSQL: MongoDB, CouchDB, etc... 
  */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */



app.listen(3333);