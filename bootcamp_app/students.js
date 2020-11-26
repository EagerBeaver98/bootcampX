const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

let cohort = process.argv[2] || '';
let limit = process.argv[3] || 10;

pool.query(`SELECT students.id, students.name as student_name, cohorts.name as cohort_name FROM students JOIN cohorts ON cohorts.id = cohort_id GROUP BY students.id, cohorts.id HAVING cohorts.name LIKE '${cohort}%' LIMIT ${limit};`)
  .then(res => {
    console.log(res.rows);
    pool.end();
  })
  .catch(err => console.error('query error', err.stack));