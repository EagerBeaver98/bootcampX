SELECT students.name as name, sum(duration) / count(duration) as average_assignment_duration
FROM assignment_submissions
JOIN students ON students.id = student_id
GROUP BY students.name, students.end_date
HAVING students.end_date IS NULL
ORDER BY sum(duration) / count(duration) DESC