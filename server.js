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

// ===================== Routes ======================= //
app.get('/', (req, res) => {
  res.render('pages/index');
})


// ========================== Route Handlers ============================ //



// =================== Misc. Functions ===================== //


// =================== Start Server ===================== //
app.listen(PORT, () => console.log('Ay! We\'re connected'));