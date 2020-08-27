'use strict';

// =================== Global Variables ========================//
const detailsbtn = document.querySelector('#update-details');


// =================== Event Listeners ========================//
detailsbtn.addEventListener('click', () => {
  const form = document.querySelector('#update-form');
  form.classList.remove('invis');
})

