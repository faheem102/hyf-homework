USE sharing_meal;

--meal
SELECT title
FROM meal;
insert into meal (title, description, location, when_event, max_reservations, price, created_date) values ('Laziza Kheer', 'A sweet dish made with rice milk cream and nuts', 'Kastrup', '2022-02-11 09:16:50', 5, 89.99, '2021-12-02');
SELECT *
FROM meal
WHERE id = 6;
UPDATE meal
SET title = 'Mutton Korma'
WHERE id = 4;
DELETE FROM meal
WHERE id = 1;

--reservation
SELECT *
FROM reservation;
insert into reservation (number_of_guests, meal_id, created_date, contact_name, contact_phonenumber, contact_email) values ('1', '3', '2021-11-04', 'Sam Billings', '54108124', 'billings007@yahoo.com');
SELECT *
FROM reservation
WHERE id = 8;
UPDATE reservation
SET number_of_guests = 4
WHERE id = 8;
DELETE FROM reservation
WHERE id = 3;

--review
SELECT *
FROM review;
insert into review (title, description, stars, created_date, meal_id) values ('Great Service', 'The service was quick food taste is just fine', '4', '2021-11-10', 3);
SELECT *
FROM review
WHERE id = 9;
UPDATE review
SET created_date = '2022-01-09'
WHERE id = 9;

DELETE FROM review 
WHERE id = 11;
--Get meals that has a price smaller than a specific price
SELECT *
FROM meal
WHERE price < 150;
--Get meals that still has available reservations
SELECT *
FROM meal
JOIN reservation ON meal.id = reservation.meal_id
WHERE number_of_guests < max_reservations;

--Get meals that partially match a title. 
SELECT *
FROM meal
WHERE description LIKE '%Chicken%';

--Get meals that has been created between two dates
SELECT *
FROM meal
WHERE created_date > '2021-11-01' 
AND created_date < '2022-01-20';

--Get only specific number of meals
select *
FROM meal
LIMIT 4;

--Get the meals that have good reviews
SELECT *
FROM meal
JOIN review ON meal.id = review.meal_id
WHERE review.stars > 3;

--Get reservations for a specific meal sorted by created_date

SELECT meal.title, reservation.meal_id, reservation.created_date
FROM meal
JOIN reservation ON meal.id = reservation.meal_id
WHERE meal_id = 4
ORDER BY reservation.created_date ASC;

--Sort all meals by average number of stars in the reviews
SELECT meal.title, round(AVG(review.stars), 2) AS star_avg
FROM meal
JOIN review ON meal.id = review.meal_id
GROUP BY meal.title
ORDER BY star_avg;