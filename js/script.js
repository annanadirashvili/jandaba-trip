'use strict'

// pop up window functional on Main-plan section

const popUp = document.querySelector('.pop-up');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.div-of-grey-div');


// ----------------------------------------
// function to open a modal:

const showPopUp = function(){
    popUp.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// function to close pop-up

const closePopUp = function(){
    popUp.classList.add('hidden');
    overlay.classList.add('hidden');
}

// -----------------(functional)-----------------------
// openind window 
for (let i = 0; i<btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click', showPopUp);

// to close pop-up

btnCloseModal.addEventListener('click', closePopUp);
overlay.addEventListener('click', closePopUp)
// to close window using esc

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !popUp.classList.contains('hidden')){
        closePopUp();
    }
})
