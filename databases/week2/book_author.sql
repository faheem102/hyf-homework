CREATE database books_author_data;
USE books_author_data;

SET NAMES utf8mb4;



CREATE TABLE `author` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `country_born` varchar(255) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `award` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `award_country` varchar(255) NOT NULL,
  `award_date` DATETIME NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `book` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `genre` varchar(255) NOT NULL,
  `published` DATETIME NOT NULL,
  `award_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_award` FOREIGN KEY (`award_id`) REFERENCES `award` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `book_author` (
  `book_id` int(10) unsigned NOT NULL,
  `author_id` int(10) unsigned NOT NULL,
  PRIMARY KEY(`book_id`, `author_id`),
  CONSTRAINT `fk_author_book_author` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_book_author_book` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--author

insert into author (id, first_name, last_name, country_born) values (1, 'Aarika', 'Ellingworth', 'Canada');
insert into author (id, first_name, last_name, country_born) values (2, 'Billy', 'Graham', 'USA');
insert into author (id, first_name, last_name, country_born) values (3, 'Anas', 'Sarosh', 'Palestine');
insert into author (id, first_name, last_name, country_born) values (4, 'Tim', 'David', 'England');
insert into author (id, first_name, last_name, country_born) values (5, 'Mark', 'Wood', 'Australia');
insert into author (id, first_name, last_name, country_born) values (6, 'Andy', 'Balbarnie', 'Ireland');

--award

insert into award (id, title, award_country, award_date) values (1, 'Excellence award', 'USA', '2021-09-12');
insert into award (id, title, award_country, award_date) values (2, 'Best seller', 'Canada', '2021-12-12');
insert into award (id, title, award_country, award_date) values (3, 'Book of the year', 'England', '2021-09-12');
insert into award (id, title, award_country, award_date) values (4, 'Best literature', 'Australia', '2020-09-12');
insert into award (id, title, award_country, award_date) values (5, 'Novel of the year', 'England', '2020-12-12');

--book
insert into book (id, title, genre, published, award_id) values (1, '50-days of summer', 'Drama', '2021-01-12', 2);

insert into book (id, title, genre, published, award_id) values (2, 'Truly yours', 'Romance', '2020-01-12', 1);
insert into book (id, title, genre, published, award_id) values (3, 'Midnight murder', 'Crime', '2021-05-12', 3);
insert into book (id, title, genre, published, award_id) values (4, 'Tales of horror', 'Thriller', '2020-07-12', 2);
insert into book (id, title, genre, published, award_id) values (5, 'Enemy at the gates', 'War', '2021-03-02', 4);
insert into book (id, title, genre, published, award_id) values (6, 'Adventures of tintin', 'Kids', '2019-01-12', 5);
insert into book (id, title, genre, published, award_id) values (7, 'Summer holidays', 'Drama', '2021-08-25', 4);
insert into book (id, title, genre, published, award_id) values (8, 'Street rage', 'Crime', '2020-11-12', 5);

--book_author

insert into book_author (book_id, author_id) values (1, 2);
insert into book_author (book_id, author_id) values (7, 4);
insert into book_author (book_id, author_id) values (2, 3);
insert into book_author (book_id, author_id) values (4, 1);
insert into book_author (book_id, author_id) values (3, 2);
insert into book_author (book_id, author_id) values (5, 4);
insert into book_author (book_id, author_id) values (6, 5);
insert into book_author (book_id, author_id) values (5, 1);
insert into book_author (book_id, author_id) values (2, 6);
insert into book_author (book_id, author_id) values (3, 4);
insert into book_author (book_id, author_id) values (8, 3);

ALTER TABLE award
MODIFY COLUMN award_date DATE;
ALTER TABLE book
MODIFY COLUMN published DATE;