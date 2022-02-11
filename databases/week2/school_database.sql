CREATE database school_data;
USE school_data;
SET NAMES utf8mb4;

CREATE TABLE `class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `begins` DATETIME NULL DEFAULT NULL,
  `ends` DATETIME NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  `class_id` int(10) unsigned NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


--class
insert into class (id, name, begins, ends) values (1, 'Databases', '2020-10-07', '2020-10-21');
insert into class (id, name, begins, ends) values (2, 'Javascript', '2020-09-07', '2020-09-21');
insert into class (id, name, begins, ends) values (3, 'HTML', '2020-08-07', '2020-08-21');
insert into class (id, name, begins, ends) values (4, 'CSS', '2021-03-07', '2021-04-21');
insert into class (id, name, begins, ends) values (5, 'Node JS', '2021-05-11', null);
insert into class (id, name, begins, ends) values (6, 'React', '2021-04-13', null);
insert into class (id, name, begins, ends) values (7, 'Machine Learning', null, null);
insert into class (id, name, begins, ends) values (8, 'Artificial Intelligence', null, null);

--student

insert into student (id, name, email, phone, class_id) values (1, 'Tim David', 'timdavid11@yahoo.com', '0045-23534789', 2);
insert into student (id, name, email, phone, class_id) values (2, 'Graham Thorpe', 'gthorpe@gmail.com', '0045-12859365',3);
insert into student (id, name, email, phone, class_id) values (3, 'Ricky Ponting', 'ricky123@gmail.com', '0045-20201021',1);
insert into student (id, name, email, phone, class_id) values (4, 'Heath Streak', 'heathstreak007@hotmail.com', '0045-83391109',4);
insert into student (id, name, email, phone, class_id) values (5, 'Marck Boucher', 'mboucher@aol.com', '0045-29283737',5);
insert into student (id, name, email, phone, class_id) values (6, 'Courtney Walsh', 'courtneywalsh@gmail.com', '0045-98533309',6);
