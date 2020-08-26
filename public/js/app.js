'use strict';

// on click 
// show form by toggling a class

const detailsbtn = document.querySelector('#update-details');
console.log(detailsbtn);

detailsbtn.addEventListener('click', () => {
  const form = document.querySelector('#update-form');
  console.log(form);
  console.log(form.classList);
  form.classList.remove('invis');
  console.log(form.classList);
})