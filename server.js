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
app.get('/', (req, res) => {
  res.render('pages/index');
})

app.get('/searches/new', (req, res) => {
  res.render('searches/new')
})

// ========================== Route Handlers ============================ //



// =================== Misc. Functions ===================== //


// =================== Start Server ===================== //
app.listen(PORT, () => console.log('Ay! We\'re connected'));