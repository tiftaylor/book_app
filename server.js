'use strict';

// =================== Packages ===================== //
const express = require('express');
const superagent = require('superagent');
const { response } = require('express');
const pg = require('pg');
require('dotenv').config();


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


// ===================== Routes ======================= //
app.get('/', homePage);
app.get('/searches/new', newSearch);
app.post('/searches', searchResults);
app.get('/books/:bookid', bookDetails);


// ========================== Route Handlers ============================ //
function homePage (req, res) {
  client.query(`SELECT image_url, title, author FROM books`)
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


function bookDetails (req, res) {
  let bookid = req.params.bookid;

  client.query(`SELECT * FROM books WHERE id = ${bookid}`)
    .then(dbResult => {
      const dbData = dbResult.rows;
      res.render('pages/books/show', {
        bookArray: dbData
      });
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

  this.isbn = path.industryIdentifiers[0] ? path.industryIdentifiers[0].identifier : '';
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
