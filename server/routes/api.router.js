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

  const getDate = () => {
    const currentDateAndTime = new Date();

    // Get the current date
    const year = currentDateAndTime.getFullYear();
    const month = String(currentDateAndTime.getMonth() + 1).padStart(2, "0");
    const day = String(currentDateAndTime.getDate()).padStart(2, "0");

    // Get the current time
    const hours = String(currentDateAndTime.getHours()).padStart(2, "0");
    const minutes = String(currentDateAndTime.getMinutes()).padStart(2, "0");
    const seconds = String(currentDateAndTime.getSeconds()).padStart(2, "0");

    // Combine date and time components into the desired format
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedDateTime;
  };

  databasePool.getConnection((err, connection) => {
    if (err) throw err;
    const NewNoteID = uuid.v4();
    const sql_query = `INSERT INTO notes (note_id, note_title, note, note_updated)
    VALUES('${NewNoteID}','${data._noteTitle}' ,'${data._noteContent}', '${getDate}');`;

    connection.query(sql_query, (err, queryResult) => {
      res.send(NewNoteID);

      connection.release();
      if (err) throw err;
    });
  });
});

router.put("/update", (req, res) => {});

router.delete("/delete", (req, res) => {});

module.exports = router;
