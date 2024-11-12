document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastmodified").innerHTML = document.lastModified;

let bar = document.getElementById("bars");
let display = true;
const menu = document.getElementById("menu");
const crossbars = document.getElementById("crossbars");

function Display() {
  // check if a menu is displaying
  if (display) {
    // display or hide the menu
    menu.style.display = "flex";
    crossbars.style.display = "flex";
    bar.style.display = "none";
    display = false;
  }
}
function Hide() {
    // check if a menu is displaying
    if (display === false) {
      // display or hide the menu
      menu.style.display = "none";
      crossbars.style.display = "none";
      bar.style.display = "block";
      display = true;
    }
  }
  

document.getElementById("bars").addEventListener("click", Display);
document.getElementById("crossBars").addEventListener("click", Hide);
