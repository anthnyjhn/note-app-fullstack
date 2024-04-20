const express = require("express");
const mysql = require("mysql");
const databaseconfig = require('./database.config')
const router = express.Router();

console.log(databaseconfig)

const databasePool = mysql.createPool(databaseconfig);

router.get("/list", (req, res) => {
    databasePool.getConnection((err, connection) => {
    if (err) throw err;

    const sql_query = "SELECT * FROM notes";

    connection.query(sql_query, (err, queryResult) => {

        res.json(queryResult);

      connection.release();
      if (err) throw err
    });
  });
});

module.exports = router;
