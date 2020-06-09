

(function() {

    let search = document.querySelector('.section-form');

    let button = document.querySelector('.button');

    let form = document.querySelector('.form-search');

    let adults = document.getElementById('adults');

    let kids = document.getElementById('kids');

    let adultPlus = document.querySelector('.adult-plus');

    let adultMinus = document.querySelector('.adult-minus');

    let AdultNumber = 0;

    let kidsMinus = document.querySelector('.kids-minus');

    let kidsPlus = document.querySelector('.kids-plus');

    let KidsNumber = 0;


    adultPlus.addEventListener('click', function (e) {
        e.preventDefault();
        AdultNumber++;
        adults.value = AdultNumber;
        if(adults.value < 0){
            adults.value = 0;
        }
    });

    adultMinus.addEventListener('click', function (e) {
        e.preventDefault();
        AdultNumber--;
        adults.value = AdultNumber;
        if(adults.value < 0){
            adults.setAttribute('disabled','disabled');
            adults.value = 0;
        }
    });

    kidsMinus.addEventListener('click', function (e) {
        e.preventDefault();
        KidsNumber--;
        kids.value = KidsNumber;
        if(kids.value < 0){
            kids.setAttribute('disabled','disabled')
            kids.value = 0
        }
    });

    kidsPlus.addEventListener('click', function (e) {
        e.preventDefault();
        KidsNumber++;
        kids.value = KidsNumber;
        if(kids.value < 0){
            kids.value = 0
        }
    });

    button.addEventListener('click', function (e) {
        e.preventDefault();
        search.classList.toggle('form-search-none');
        adults.value = AdultNumber;
        kids.value = KidsNumber;
    });

//--не работает удаление класса при нажатии esc
    window.addEventListener('keydown',function(e){
       e.preventDefault();
       if(e.keyCode === 27 && search.classList.contains('form-search-none')){
           search.classList.remove('form-search-none');
       }
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
    });

}());