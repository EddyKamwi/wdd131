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
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
      "https://www.churchofjesuschrist.org/imgs/7cf8e8b9e5a5a1f379d4e2c9bc2166f9c6007aca/full/640%2C/0/default",
  },
  {
    templeName: "Apia Samoa",
    location: "Apia, Pesega, Samoa",
    dedicated: "1983, August, 5",
    area: 18691,
    imageUrl:
      "https://www.churchofjesuschrist.org/imgs/6007b20e832459d2d8540c15a8f5fa80d7dcff0f/full/640%2C/0/default",
  },
  {
    templeName: "Anchorage Alaska",
    location: "Anchorage, Alaska, United States",
    dedicated: "1999, January, 9",
    area: 11937,
    imageUrl:
      "https://www.churchofjesuschrist.org/imgs/ef1d9b0a65b398d3d5aad2ccaad5aa79588b6cfd/full/640%2C/0/default",
  },
];

// select container
var main = document.getElementById("container");

function create(temple) {
  // create an element
  const div = document.createElement("div");

  // add new content for the new element
  div.innerHTML = `<div class="card">
        <h3>${temple.templeName}</h3>

        <p>
          <span class="color-span">LOCATION:</span> <span id="location">${
            temple.location
          }</span>
        </p>
        <p>
          <span class="color-span">DEDICATED:</span>
          <span id="dedication">${temple.dedicated}</span>
        </p>
        <p>
          <span class="color-span">SIZE:</span> <span id="size">${
            temple.area
          } </span>sq fit
        </p>

        <picture>
          <img
            loading="lazy"
            src=${temple.imageUrl}

            alt=${
              // adding a image alt
              temple.templeName
            }
            width="301px"
            height="187px"
         >
        </picture>
    </div>`;

  // add the element to the container

  main.appendChild(div);
}
function clearContainer(title="Home") {
  // clearing what ever is in the div.container
  main.innerHTML = `<h2>${title}</h2>`;
}

// footer dates
document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastmodified").innerHTML = document.lastModified;

// menu
var display = true;
const bars = document.getElementById("bars");
const menu = document.getElementById("menu");

function toggleBars() {
  // check if a menu is displaying
  if (display) {
    // display or hide the menu
    bars.innerText = "x";
    menu.style.display = "flex";
    display = false;
  } else if (display === false) {
    // display or hide the menu
    menu.style.display = "none";
    bars.innerText = "≡";
    display = true;
  }
}

document.getElementById("bars").addEventListener("click", toggleBars);
const newnav = document.getElementById("new");
const small = document.getElementById("small");
const large = document.getElementById("large");
const home = document.getElementById("home");
const old = document.getElementById("old");

// loop through the temples dictionary
temples.map((temple) => { create(temple) });

  // home display all
home.addEventListener("click", () => { clearContainer(); temples.map((temple) => { create(temple) }) });

  // old - temples built before 1900
old.addEventListener("click", () => { clearContainer("Old"); temples.map((temple) => { var year = parseInt(temple.dedicated.slice(0, 4)); if (year < 1900) { create(temple); } }) });

  // New- temples built after 2000
newnav.addEventListener("click", () => { clearContainer("New"); temples.map((temple) => { var year = parseInt(temple.dedicated.slice(0, 4)); if (year > 2000) { create(temple); } }) });

  // Large - temples larger than 90000 square feet
large.addEventListener("click", () => { clearContainer("Large");temples.map((temple) => {  var area = temple.area; if (area > 90000) { create(temple); }})});

// Small - temples smaller than 10000 square feet
small.addEventListener("click", () => { clearContainer("Small");temples.map((temple) => { var area = temple.area; if (area < 10000) { create(temple); }})});