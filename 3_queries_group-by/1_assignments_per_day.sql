SELECT day, count(assignments.*) as total_duration
FROM assignments
GROUP BY day
ORDER BY day;