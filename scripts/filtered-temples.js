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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  // Add more temple objects here...
];

document.getElementById("bars").addEventListener("click", Display);
document.getElementById("crossBars").addEventListener("click", Hide);

var main = document.getElementById("container");

temples.map((temple) => {
  const div = document.createElement("div");

  div.innerHTML =
  `<div class="card">
        <h3>${temple.templeName}</h3>

        <p>
          <span class="color-span">LOCATION:</span> <span id="location">${temple.location}</span>
        </p>
        <p>
          <span class="color-span">DEDICATED:</span>
          <span id="dedication">${temple.dedicated}</span>
        </p>
        <p>
          <span class="color-span">SIZE:</span> <span id="size">${temple.area}</span>sq fit
        </p>

        <picture>
          <img
            loading="lazy"
            src=${temple.imageUrl}
            width="100%"
            height="auto"
         >
        </picture>
    </div>`
  main.appendChild(div);
});
// document.getElementById("location").innerText = "Aba, Nigeria"
// document.getElementById("dedication").innerText = "2005, August, 7"
// document.getElementById("size").innerText = "11500"
