/*°F*/
const calculateWindChill = (t, w) => {
    if (t <= 50 && w > 3) {
        const chill = 35.74 + (0.6215 * t) - (35.75 * Math.pow(w, 0.16)) + (0.4275 * t * Math.pow(w, 0.16));
        return `${chill.toFixed(1)}°F / ${farenheitToCelsius(chill)}°C`;
    }

    else {
        return "N/A";
    }
};

const farenheitToCelsius = (f) => {
    return ((f - 32) * 5 / 9).toFixed(1);
}

document.addEventListener("DOMContentLoaded", () => {
    const tempElement = document.querySelector("#temp");
    const windElement = document.querySelector("#wind");
    const windChillElement = document.querySelector("#wind-chill");

    if (tempElement && windElement && windChillElement) { 
        const temp = parseFloat(tempElement.textContent.split("/")[0]);
        const windSpeed = parseFloat(windElement.textContent);
        windChillElement.textContent = calculateWindChill(temp, windSpeed);
    }

});




