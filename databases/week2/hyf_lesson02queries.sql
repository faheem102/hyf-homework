USE hyf_lesson02;

SELECT *
FROM task;

insert into task (title, description, created, updated, due_date, status_id) values ('Complete the Assignment', 'work on your recent hyf assignment', '2022-02-06 06:54:16', '2022-02-07 13:05:09', '2022-02-11 13:05:09' , 2);

UPDATE task
SET title = 'Eat your Dinner'
WHERE id = 36;

UPDATE task
SET status_id = 3
WHERE id = 36;


DELETE FROM task
WHERE id =36
SELECT title
from task;
SELECT title
from task;
DELETE FROM task
WHERE id =37;
DELETE FROM task
WHERE id =38;
DELETE FROM task
WHERE id =39;

SELECT *
FROM user_task
JOIN user ON user.id = user_task.user_id 
WHERE user.email LIKE '%@spotify.com';

SELECT *
FROM user_task
JOIN user ON user.id = user_task.user_id
JOIN task ON task.id = user_task.task_id
JOIN status on task.status_id = status.id
WHERE user.name = 'Donald Duck'
AND status.name = 'Not Started';

SELECT *
FROM user_task
JOIN user ON user.id = user_task.user_id
JOIN task ON task.id = user_task.task_id
WHERE user.name = 'Maryrose Meadows'
AND month(task.created) = 9;

SELECT month(created), COUNT(title)
FROM task
GROUP BY month(task.created);
