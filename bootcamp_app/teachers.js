const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

let cohort = process.argv[2] || 'JUL02';

pool.connect(() => console.log('connected'));

pool.query(`SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON assistance_requests.student_id = students.id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = '${cohort}'
ORDER BY teacher
`)
  .then(data => {
    data.rows.forEach(row => {
      console.log(`${row.cohort}: ${row.teacher}`);
    });
    pool.end();
  })
  .catch(error => {
    console.error('error', error);
    pool.end();
  });