SELECT day, count(assignments.*) as total_duration
FROM assignments
GROUP BY day
HAVING count(assignments.*) >= 10
ORDER BY day;