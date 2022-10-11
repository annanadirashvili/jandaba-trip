// functional for toggle menu

const toggleButton = document.querySelector('.fas');
const toggleMenu = document.querySelector('.toggle-navigation');

// functions

const unableToggleMenu = function(){
    toggleMenu.classList.toggle('hidden');
}


// ---------functional
toggleButton.addEventListener('click', unableToggleMenu);