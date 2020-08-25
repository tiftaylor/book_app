'use strict';

// =================== Packages ===================== //
const express = require('express');
const superagent = require('superagent');
const { response } = require('express');
require('dotenv').config();


// =================== Global Variables ===================== //
const PORT = process.env.PORT || 3001;
const app = express();


// ================= Express Configs ====================//
app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(express.urlencoded({extended: true}));


// ===================== Routes ======================= //
app.get('/', homePage);
app.get('/searches/new', newSearch);
app.post('/searches', searchResults);

// ========================== Route Handlers ============================ //
function homePage (req, res) {
  res.render('pages/index');

};


function newSearch (req, res) {
  res.render('searches/new');
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

      res.render('searches/show', {
        bookArray: resultBodyItems.map(objInArray => new Book(objInArray))
      });
    })
    .catch(error => errorHandler(error, res));
}



// =================== Misc. Functions ===================== //
function Book(obj) {
  this.title = obj.volumeInfo.title;
  this.author = obj.volumeInfo.authors;
  this.summary = obj.volumeInfo.description;

  let imgURL = obj.volumeInfo.imageLinks.thumbnail || 'https://i.imgur.com/J5LVHEL.jpg'
  imgURL = imgURL.replace(/^http:\/\//i, 'https://');

  this.imgURL = imgURL;
  this.isbn = obj.volumeInfo.industryIdentifiers;
  this.bookshelf = obj.volumeInfo.categories;
};


function errorHandler(error, res) {
  res.status(500).render('pages/error', {
    status: error.status,
    message: error.message
  });
};


// =================== Start Server ===================== //
app.listen(PORT, () => console.log('Ay! We\'re connected'));