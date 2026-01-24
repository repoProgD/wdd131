/*°F*/
const calculateWindChill = (t, w) =>  35.74 + (0.6215 * t) - (35.75 * Math.pow(w, 0.16)) + (0.4275 * t * Math.pow(w, 0.16));
     
const farenheitToCelsius = (f) => ((f - 32) * (5 / 9)).toFixed(1);


document.addEventListener("DOMContentLoaded", () => {
    const tempElement = document.querySelector("#temp");
    const windElement = document.querySelector("#wind");
    const windChillElement = document.querySelector("#wind-chill");

    const temp = parseFloat(tempElement.textContent.split("/")[0]);
    const windSpeed = parseFloat(windElement.textContent);

    if (temp <= 50 && windSpeed > 3) {
        
        const chillFar = calculateWindChill(temp, windSpeed);
        windChillElement.textContent = `${chillFar.toFixed(1)}°F / ${farenheitToCelsius(chillFar)}°C`;
    }

    else { 
        windChillElement.textContent = "N/A";
    }

});




