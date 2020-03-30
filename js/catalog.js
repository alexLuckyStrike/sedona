let min = document.querySelector('.min');
let max = document.querySelector('.max');
let range = document.querySelector('.filter-form-range').min;
let value = document.querySelector('.filter-form-range');


value.addEventListener('input',function(){

    max.innerHTML = this.value;

});


min.innerHTML = range;


