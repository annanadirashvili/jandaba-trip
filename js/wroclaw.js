// functional for toggle menu

const toggleButton = document.querySelector('.fas');
const toggleMenu = document.querySelector('.toggle-navigation');
const togglePlanOne = document.querySelector('.toggle-plan-one')
const togglePlan = document.querySelector('.toggle-plan');

// functions

const unableToggleMenu = function(){
    toggleMenu.classList.toggle('hidden');
}
const disableToggleMenu = function(){
    toggleMenu.classList.add('hidden');
}


// ---------functional
toggleButton.addEventListener('click', unableToggleMenu);
togglePlan.addEventListener('click', disableToggleMenu);
togglePlanOne.addEventListener('click', disableToggleMenu);

    

// for dropdown manu

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }

 

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
    if (!event.target.matches('.dropbtn1')) {
        var dropdowns1 = document.getElementsByClassName("dropdown-content1");
        var e;
        for (e = 0; e < dropdowns1.length; e++) {
          var openDropdown1 = dropdowns1[e];
          if (openDropdown1.classList.contains('show')) {
            openDropdown1.classList.remove('show');
          }
        }
      }
  }