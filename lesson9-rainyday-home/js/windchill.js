let temperature = parseInt(document.querySelector(".temp").textContent);
let windspeed = parseInt(document.querySelector(".windspeed").textContent);
let windchill = document.querySelector(".windchill");
let istempandwindcorrect = temperature <= 50 && windspeed >= 3;
if (istempandwindcorrect) {
    let windchilled = 35.74 + 0.6215 * temperature - 35.75 * windspeed ** 0.16 + 0.4275 * temperature * windspeed ** 0.16;
    let windchillrounded = Math.round(windchilled);
    windchill.textContent = windchillrounded += "F";
}