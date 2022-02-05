USE hyf_lesson1;

SELECT *
FROM task;

SELECT COUNT(*)
FROM task;

SELECT title, created
FROM task
ORDER BY created DESC;

SELECT created, title
FROM task
ORDER BY created DESC
LIMIT 1;

SELECT COUNT(*)
FROM task
WHERE due_date IS NULL;

SELECT status.id, task.title, status.name
FROM status, task
WHERE task.status_id=status.id AND status.name="Done";

SELECT status.id, task.title, status.name
FROM status, task
WHERE task.status_id=status.id AND status.name="Not started" OR status.name= "In progress";

SELECT title, due_date, description
FROM task
WHERE title LIKE "%database%" OR description LIKE "%database%";

SELECT task.title, status.name
FROM task, status;

SELECT status.name, COUNT(task.id) AS numberoftasks
FROM task
LEFT JOIN status ON task.status_id = status.id
GROUP BY status.name;

SELECT status.name, COUNT(task.id) AS numberoftasks
FROM task
LEFT JOIN status ON task.status_id = status.id
GROUP BY status.name
ORDER BY numberoftasks DESC;



