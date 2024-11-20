document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastmodified").innerHTML = document.lastModified;

const wchill = document.getElementById("windhill");
let temp = 50;
let windspeed = 56;
var windchill = "N/A";

function Windchill(wspend, temp) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * wspend * 0.16 +
    0.3965 * temp * wspend * 0.16
  );
}

if (temp <= 10 && windspeed >= 4.8) {
  Windchill((wspend = windspeed), (temp = temp));
}
document.body.addEventListener("loadeddata", () => {
  windchill.innerText = windchill;
});
