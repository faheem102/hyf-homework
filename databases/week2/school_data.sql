USE school_data;

ALTER TABLE class
ADD status ENUM('not-started', 'ongoing', 'finished') NOT NULL;
