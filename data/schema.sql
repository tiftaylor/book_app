DROP TABLE IF EXISTS books;

CREATE TABLE books (
  id SERIAL PRIMARY KEY, 
  author VARCHAR(200),
  title VARCHAR,
  isbn VARCHAR(200),
  image_url VARCHAR(255),
  summary VARCHAR,
  bookshelf VARCHAR(255)
);