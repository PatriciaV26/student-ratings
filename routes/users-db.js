var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ratings'
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  pool.getConnection((err, connection) => {
    const sql = `SELECT * FROM students`;
    connection.query(sql, (err, results) => {
      res.json(results);
      connection.release();
    });
  });
});

router.get('/ratings', function (req, res, next) {
  pool.getConnection((err, connection) => {
    const sql = `SELECT students.*, AVG(students_tests.grades) as avg FROM students LEFT JOIN students_tests ON (students.id = students_tests.student_id AND students_tests.test_id <> 3 ) GROUP BY students.id ORDER BY avg DESC`;
    connection.query(sql, (err, results) => {

      const sql = `SELECT students.id, AVG(students_tests.grades) as avg FROM students LEFT JOIN students_tests ON (students.id = students_tests.student_id AND students_tests.test_id = 3 ) GROUP BY students.id`;
      connection.query(sql, (err, resultsRatings) => {
        console.info(resultsRatings);
        var medie = results.map(function (result) {
          const rating = resultsRatings.find(rating => {
            return result.id === rating.id;
          })

          result.avg = result.avg || 0;
          result.rating = rating.avg || 0;
          return result;
        })
        res.json(results);
        connection.release();
      });
    });
  });
});

// http://localhost:3000/users/add
router.post('/add', function (req, res, next) {
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

router.post('/rate', function(req, res, next) {
  var test_id = req.body.testId;
  var marks = req.body.marks;
  var owner=req.body.owner;
  console.warn('add', test_id , marks, owner);

  var values =  marks.map(mark => [
    mark.studentId, test_id, mark.nota, owner
  ]);
  console.info(values);
  pool.getConnection((err, connection) => {
    const sql = `INSERT INTO students_tests (student_id, test_id, grades, owner) VALUES ?`;
    console.log(sql);
    connection.query(sql, [values], (err, result) => {
      res.json({
        success: true,
        message: 'Done!'
      });
      connection.release();
    });
  });
});


module.exports = router;