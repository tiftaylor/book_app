CREATE TABLE books (
  id SERIAL PRIMARY KEY, 
  author VARCHAR(150),
  title VARCHAR(150),
  isbn VARCHAR(150),
  image_url VARCHAR(255),
  description VARCHAR
);