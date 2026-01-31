const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
        imageAlt: "Aba Nigeria Temple"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
        imageAlt: "Manti Utha Temple"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
        imageAlt: "Payson Utah Temple"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
        imageAlt: "Yigo Guam Temple"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
        imageAlt: "Washington D.C. Temple"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",

        imageAlt: "Lima Perú Temple"
    },

    // Add more temple objects here...

    {
        templeName: "Buenos Aires",
        location: "Buenos Aires, Argentina",
        dedicated: "1986, December, 17",
        area: 30659,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/400x250/buenos-aires-argentina-temple-2012-1021302-wallpaper.jpg",
        imageAlt: "Buenos Aires Temple"
    },
    {
        templeName: "Córdoba Argentina",
        location: "Córdoba, Argentina",
        dedicated: "2015, May, 17",
        area: 34369,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cordoba-argentina/400x250/cordoba-argentina-temples-buildings-1436933-wallpaper.jpg",
        imageAlt: "Córdoba Argentina Temple"
    },

    {
        templeName: "Montevideo Uruguay",
        location: "Montevideo, Uruguay",
        dedicated: "2001, March, 18",
        area: 10700,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/montevideo-uruguay/400x250/montevideo-uruguay-temple-lds-83476-wallpaper.jpg",
        imageAlt: "Montevideo Uruguay Temple"
    },


];

const tempsF = document.querySelector("#temples");

function displayTemples(templesArray) {
    tempsF.innerHTML = "";

    templesArray.forEach(temple => {

        let card = document.createElement("section");

        let cardTitle = document.createElement("h3");
        cardTitle.textContent = temple.templeName;

        let img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.imageAlt;
        img.loading = "lazy";

        let location = document.createElement("p");
        location.innerHTML = `<span class="label">Location:</span> ${temple.location.toLocaleString()}`;

        let dedicated = document.createElement("p");
        dedicated.innerHTML = `<span class="label">Dedicated:</span>  ${temple.dedicated.toLocaleString()}`;

        let area = document.createElement("p");
        area.innerHTML = `<span class="label">Floor Area:</span> ${temple.area.toLocaleString()} sq ft`;



        card.appendChild(cardTitle);
        card.appendChild(img);
        card.appendChild(location);
        card.appendChild(dedicated)
        card.appendChild(area);

        tempsF.appendChild(card);
    });
}

requestAnimationFrame(() => {
    displayTemples(temples);
});

let pageTitle = document.querySelector("#main-title");

document.querySelector("#home").addEventListener("click", (e) => {
    e.preventDefault();
    pageTitle.textContent = "Home";

    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", (e) => {
    e.preventDefault();
    pageTitle.textContent = "Old Temples";

    let oldTemples = temples.filter(temple => {
        let year = Number(temple.dedicated.split(",")[0]);
        return year < 1900;
    });

    displayTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", (e) => {
    e.preventDefault();
    pageTitle.textContent = "New Temples";

    let newTemples = temples.filter(temple => {
        let year = Number(temple.dedicated.split(",")[0]);
        return year > 2000;
    });

    displayTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", (e) => {
    e.preventDefault();
    pageTitle.textContent = "Large Temples";

    let largeTemples = temples.filter(temple => {
        let each_area = temple.area
        return each_area > 90000;
    });

    displayTemples(largeTemples);
});


const hambutton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hambutton.addEventListener("click", () => {
    toggleActive(navigation);
    toggleActive(hambutton);
});

function toggleActive(element) {
    element.classList.toggle("open");
}

