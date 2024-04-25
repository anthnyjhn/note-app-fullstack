CREATE DATABASE note_app_db;
USE note_app_db;

CREATE TABLE notes (
		note_id varchar(36) NOT NULL,
		note varchar(600),
        note_created DATETIME DEFAULT current_timestamp() NOT NULL,
        note_updated DATETIME DEFAULT current_timestamp() NOT NULL,
        
        CONSTRAINT PK_noteid PRIMARY KEY (note_id)
        
);


ALTER TABLE notes
		MODIFY COLUMN note_created DATETIME DEFAULT current_timestamp() NOT NULL,
       MODIFY COLUMN note_updated DATETIME DEFAULT current_timestamp() NOT NULL;
	

-- Insert Note
INSERT INTO notes (note_id, note, note_updated)
	VALUES('1', 'test', '2024-04-20 05:46:55');
    
-- Update Note

-- Delete Note
