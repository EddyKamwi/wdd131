document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastmodified").innerHTML = document.lastModified;
const data = document.getElementById("dat");

let temperature = 28;
let windspeed = 14;
var windchill = "N/A";

function calculateWindChill(v, T) {
  const arith =
    13.12 + 0.6215 * T - 11.37 * (v ** 0.16) + 0.3965 * T * (v ** 0.16);
  return `${arith.toFixed(1)}°C`;
}

if (temperature <= 10 && windspeed >= 4.8) {
  windchill = calculateWindChill(windspeed, temperature);
}

data.innerHTML = windchill;
