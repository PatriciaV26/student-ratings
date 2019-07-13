var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var pool  = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'ratings'
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  pool.getConnection((err, connection) => {
    const sql = `SELECT * FROM students`;
    connection.query(sql, (err, results) => {
      res.json(results);
      connection.release();
    });
  });
});

// http://localhost:3000/users/add
router.post('/add', function(req, res, next) {
  var firstName = req.body.firstname;
  var lastName = req.body.lastname;
  var marks = req.body.marks;
  console.warn('add', firstname, lastname, marks);

  pool.getConnection((err, connection) => {
    const sql = `INSERT INTO students (id, firstname, lastname, email) VALUES (NULL, '${firstname}', '${lastname}', '${email}');`;
    console.log(sql);
    connection.query(sql, (err, result) => {
      const id = result.insertId;
      res.json({
        success: true,
        id,
        message: 'Done!'
      });
      connection.release();
    });
  });
});

router.post('/add', function(req, res, next) {
  var student_id= req.body.student_id;
  var test_id = req.body.test_id;
  var grades = req.body.grades;
  var owner=req.body.owner;
  console.warn('add', student_id, test_id ,grades,owner);

  pool.getConnection((err, connection) => {
    const sql = `INSERT INTO students_tests (student_id, test_id, grades, owner) VALUES (NULL, '${student_id}', '${test_id}', '${grades}','${owner}');`;
    console.log(sql);
    connection.query(sql, (err, result) => {
      const id = result.insertId;
      res.json({
        success: true,
        id,
        message: 'Done!'
      });
      connection.release();
    });
  });
});


module.exports = router;