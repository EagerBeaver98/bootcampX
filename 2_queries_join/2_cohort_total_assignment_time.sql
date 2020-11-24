SELECT sum(assignment_submissions.duration) as total_duration
FROM assignment_submissions
RIGHT JOIN students ON students.id = student_id
RIGHT JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = 'FEB12'
GROUP BY cohorts.name;