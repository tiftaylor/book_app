'use strict';

// =================== Packages ===================== //
const express = require('express');
const superagent = require('superagent');
const { response } = require('express');
const pg = require('pg');
require('dotenv').config();
const methodOverride = require('method-override');


// =================== Global Variables ===================== //
const PORT = process.env.PORT || 3001;
const DATABASE_URL = process.env.DATABASE_URL;
const app = express();


// ================= Express Configs ====================//
app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(express.urlencoded({extended: true}));
const client = new pg.Client(DATABASE_URL);
client.on('error', (error) => console.error(error));
app.use(methodOverride('_method'));


// ===================== Routes ======================= //
app.get('/', homePage);
app.get('/searches/new', newSearch);
app.post('/searches', searchResults);
app.get('/books/:bookid', bookDetails);
app.post('/books', saveBook);
app.put('/books/:bookid', updateDetails);
app.delete('/books/:bookid', deleteBook);


// ========================== Route Handlers ============================ //
function deleteBook (req, res) {
  const id = req.params.bookid;
  const SQL = 'DELETE FROM books WHERE id=$1';

  client.query(SQL, [id])
    .then( () => {
      res.redirect('/');
    })
    .catch(error => errorHandler(error, res));
}


function updateDetails (req, res) {
  const body = req.body;
  const SQL = `UPDATE books SET
                title=$1,
                author=$2,
                isbn=$3,
                image_url=$4,
                summary=$5,
                bookshelf=$6
                WHERE id=$7`;
  
  const values = [body.title, body.author, body.isbn, body.image_url, body.summary, body.bookshelf, req.params.bookid];

  client.query(SQL, values)
    .then( () => {
      res.redirect(`/books/${req.params.bookid}`);
    })
    .catch(error => errorHandler(error, res));
}


function homePage (req, res) {
  client.query(`SELECT id, image_url, title, author FROM books`)
    .then(dbResult => {
      const dbData = dbResult.rows;
      res.render('pages/index', {
        bookArray: dbData
      });
    })
    .catch(error => errorHandler(error, res));
};


function newSearch (req, res) {
  res.render('pages/searches/new');
};


function searchResults (req, res) {
  const inputText = req.body.inputText;
  // test one:  ralph

  const GOOGLE_TITLE_URL = `https://www.googleapis.com/books/v1/volumes?q=+intitle:${inputText}`;
  const GOOGLE_AUTHOR_URL = `https://www.googleapis.com/books/v1/volumes?q=+inauthor:${inputText}`;

  let requestURL;
  if(req.body.searchType === 'author'){
    requestURL = GOOGLE_AUTHOR_URL;
  } else {
    requestURL = GOOGLE_TITLE_URL;
  }

  superagent.get(requestURL)
    .then(result => {
      const resultBodyItems = result.body.items;

      res.render('pages/searches/show', {
        bookArray: resultBodyItems.map(objInArray => new Book(objInArray))
      });
    })
    .catch(error => errorHandler(error, res));
}


function saveBook (req, res) {
  const {author, title, isbn, image_url, summary, bookshelf} = req.body;

  const addData = `INSERT INTO books
    (author, title, isbn, image_url, summary, bookshelf)
    VALUES($1, $2, $3, $4, $5, $6) RETURNING id`;
  const valueArray = [author, title, isbn, image_url, summary, bookshelf];

  client.query(addData, valueArray).then((dbResult) => {
    const newID = dbResult.rows[0].id;

    res.redirect(`/books/${newID}`)
  })
  .catch(error => errorHandler(error, res));
}


function bookDetails (req, res) {
  let bookid = req.params.bookid;

  client.query(`SELECT * FROM books WHERE id = ${bookid}`)
    .then(dbResult => {
      const dbData = dbResult.rows;
  
      client.query(`SELECT DISTINCT bookshelf FROM books`)
        .then(shelfData => {
          console.log(shelfData);
          res.render('pages/books/show', {
            bookArray: dbData,
            bookshelves: shelfData.rows
          });
        })

      
    })
    .catch(error => errorHandler(error, res));
}


// =================== Misc. Functions ===================== //
function Book(obj) {
  const path = obj.volumeInfo;

  this.title = path.title;
  this.author = path.authors;
  this.summary = path.description;

  let image_url = path.imageLinks && path.imageLinks.thumbnail ? path.imageLinks.thumbnail : 'https://i.imgur.com/J5LVHEL.jpg';
  image_url = image_url.replace(/^http:\/\//i, 'https://');
  this.image_url = image_url;

  this.isbn = path.industryIdentifiers[1] ? path.industryIdentifiers[1].identifier : '';
  this.bookshelf = path.categories;
};


function errorHandler(error, res) {
  res.status(500).render('pages/error', {
    status: error.status,
    message: error.message
  });
};


// =================== Start Server ===================== //
client.connect()
  .then( () => {
    app.listen(PORT, () => console.log('Ay! We\'re connected'));
  });
