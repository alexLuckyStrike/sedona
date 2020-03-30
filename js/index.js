
let search = document.querySelector('.section-form');

let button = document.querySelector('.button');

let form = document.querySelector('form-search');


button.addEventListener('click',function(e){
    e.preventDefault();
    search.classList.toggle('form-search-none');

});
let calendar = document.querySelector('.calendar');
let group = document.querySelectorAll('.field-wrapper');

calendar.addEventListener('click',function(e){
    e.preventDefault()
});