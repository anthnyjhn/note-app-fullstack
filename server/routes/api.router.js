const express = require("express");
const mysql = require("mysql");
const uuid = require("uuid");
const databaseconfig = require("./database.config");
const router = express.Router();

console.log();

const databasePool = mysql.createPool(databaseconfig);

router.get("/list", (req, res) => {
  databasePool.getConnection((err, connection) => {
    if (err) throw err;

    const sql_query = "SELECT * FROM notes";

    connection.query(sql_query, (err, queryResult) => {
      res.json(queryResult);

      connection.release();
      if (err) throw err;
    });
  });
});

router.get("/view/:note_id", (req, res) => {
  const note_id = req.params.note_id;
  databasePool.getConnection((err, connection) => {
    if (err) throw err;

    const sql_query = `SELECT * FROM notes WHERE note_id = '${note_id}'`;

    connection.query(sql_query, (err, queryResult) => {
      res.json(queryResult);

      connection.release();
      if (err) throw err;
    });
  });
});

router.post("/create", (req, res) => {
  const data = req.body;

  databasePool.getConnection((err, connection) => {
    if (err) throw err;

    const sql_query = `INSERT INTO notes (note_id, note_title, note, note_updated)
    VALUES('${uuid.v4()}','${data._noteTitle}' ,'${
      data._noteContent
    }', '2024-04-20 05:46:55');`;

    connection.query(sql_query, (err, queryResult) => {
      res.json(queryResult);

      connection.release();
      if (err) throw err;
    });
  });
});

router.put("/update", (req, res) => {});

router.delete("/delete", (req, res) => {});

module.exports = router;
