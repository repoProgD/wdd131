const elements = [
    {
        elementName: "Lithium",
        atomicNumber: 3,
        atomicMass: 6.94,
        classification: "Alkali Metal",
        electronegativity: 0.98,
        atomicRadius: 182.0,
        standardState: "Solid",
        thumbnail: "images/lithium-mini.webp",
        fullImage: "images/lithium.webp",
        imageAlt: "Lithium Element"
    },

    {
        elementName: "Sodium",
        atomicNumber: 11,
        atomicMass: 22.99,
        classification: "Alkali Metal",
        electronegativity: 0.93,
        atomicRadius: 227.0,
        standardState: "Solid",
        thumbnail: "images/sodium-mini.webp",
        fullImage: "images/sodium.webp",
        imageAlt: "Sodium Element"
    },

    {
        elementName: "Potassium",
        atomicNumber: 19,
        atomicMass: 39.10,
        classification: "Alkali Metal",
        electronegativity: 0.82,
        atomicRadius: 275.0,
        standardState: "Solid",
        thumbnail: "images/potassium-mini.webp",
        fullImage: "images/potassium.webp",
        imageAlt: "Potassium Element"
    },

    {
        elementName: "Rubidium",
        atomicNumber: 37,
        atomicMass: 85.47,
        classification: "Alkali Metal",
        electronegativity: 0.82,
        atomicRadius: 303.0,
        standardState: "Solid",
        thumbnail: "images/rubidium-mini.webp",
        fullImage: "images/rubidium.webp",
        imageAlt: "Rubidium Element"
    },
    {
        elementName: "Cesium",
        atomicNumber: 55,
        atomicMass: 132.91,
        classification: "Alkali Metal",
        electronegativity: 0.79,
        atomicRadius: 343.0,
        standardState: "Solid",
        thumbnail: "images/cesium-mini.webp",
        fullImage: "images/cesium.webp",
        imageAlt: "Cesium Element"
    },
    {
        elementName: "Francium",
        atomicNumber: 87,
        atomicMass: 223.00,
        classification: "Alkali Metal",
        electronegativity: 0.70,
        atomicRadius: 348.0,
        standardState: "Solid",
        thumbnail: "images/francium-mini.webp",
        fullImage: "images/francium.webp",
        imageAlt: "Francium Element"
    },


    {
        elementName: "Helium",
        atomicNumber: 2,
        atomicMass: 4.00,
        classification: "Noble Gas",
        electronegativity: 0.00,
        atomicRadius: 140.0,
        standardState: "Gas",
        thumbnail: "images/helium-mini.webp",
        fullImage: "images/helium.webp",
        imageAlt: "Helium Element"
    },

    {
        elementName: "Neon",
        atomicNumber: 10,
        atomicMass: 20.18,
        classification: "Noble Gas",
        electronegativity: 0.00,
        atomicRadius: 154.0,
        standardState: "Gas",
        thumbnail: "images/neon-mini.webp",
        fullImage: "images/neon.webp",
        imageAlt: "Neon Element"
    },

    {
        elementName: "Argon",
        atomicNumber: 18,
        atomicMass: 39.95,
        classification: "Noble Gas",
        electronegativity: 0.00,
        atomicRadius: 188.0,
        standardState: "Gas",
        thumbnail: "images/argon-mini.webp",
        fullImage: "images/argon.webp",
        imageAlt: "Argon Element"
    },

    {
        elementName: "Krypton",
        atomicNumber: 36,
        atomicMass: 83.80,
        classification: "Noble Gas",
        electronegativity: 0.00,
        atomicRadius: 202.0,
        standardState: "Gas",
        thumbnail: "images/krypton-mini.webp",
        fullImage: "images/krypton.webp",
        imageAlt: "Krypton Element"
    },

    {
        elementName: "Xenon",
        atomicNumber: 54,
        atomicMass: 131.29,
        classification: "Noble Gas",
        electronegativity: 0.00,
        atomicRadius: 216.0,
        standardState: "Gas",
        thumbnail: "images/xenon-mini.webp",
        fullImage: "images/xenon.webp",
        imageAlt: "Xenon Element"
    },

    {
        elementName: "Radon",
        atomicNumber: 86,
        atomicMass: 222.00,
        classification: "Noble Gas",
        electronegativity: 0.00,
        atomicRadius: 220.0,
        standardState: "Gas",
        thumbnail: "images/radon-mini.webp",
        fullImage: "images/radon.webp",
        imageAlt: "Radon Element"
    },

];

const elementContainer = document.querySelector("#elements");

function displayElements(elementsArray) {
    elementContainer.innerHTML = "";

    elementsArray.forEach(element => {
        let card = document.createElement("article");
        card.classList.add("element-card");

        
        let title = document.createElement("h3");
        title.textContent = element.elementName;

        let img = document.createElement("img");
        img.src = element.thumbnail;
        img.alt = element.imageAlt;
        img.classList.add("card-image");
        img.loading = "lazy";
        img.width = 300;
        img.height = 169;

        
        card.addEventListener("mouseenter", () => {
            img.src = element.fullImage;
        });
        card.addEventListener("mouseleave", () => {
            img.src = element.thumbnail;
        });

        let atomicNumber = document.createElement("p");
        atomicNumber.innerHTML = `<span class="label">Atomic Number: </span> ${element.atomicNumber.toLocaleString()}`;
        
        let atomicMass = document.createElement("p");
        atomicMass.innerHTML = `<span class="label">Atomic Mass: </span> ${element.atomicMass.toLocaleString()} u`;

        let classification = document.createElement("p");
        classification.innerHTML = `<span class="label">Classification: </span> ${element.classification.toLocaleString()}`;

        let electronegativity = document.createElement("p");
        electronegativity.innerHTML = `<span class="label">Electronegativity: </span> ${element.electronegativity.toLocaleString()}`;

        let atomicRadius = document.createElement("p");
        atomicRadius.innerHTML = `<span class="label">Atomic Radius: </span> ${element.atomicRadius.toLocaleString()} pm`;

        let standardState = document.createElement("p");
        standardState.innerHTML = `<span class="label">Standard State: </span> ${element.standardState}`;

        card.appendChild(title);
        card.appendChild(img);
        card.appendChild(atomicNumber)
        card.appendChild(atomicMass)
        card.appendChild(classification)
        card.appendChild(electronegativity)
        card.appendChild(atomicRadius)
        card.appendChild(standardState);

        if (element.atomicNumber > 82) { 
            let warning = document.createElement("p");
            warning.textContent = "Warning: Unstable / Radioactive";
            warning.classList.add("warning");
            card.appendChild(warning);
        }


        elementContainer.appendChild(card);
    });
}

requestAnimationFrame(() => {
    let isAlkaliPage = document.querySelector("#main-alkali");
    let isNoblePage = document.querySelector("#main-noble");

    if (isAlkaliPage) {
        let alkaliMetals = elements.filter(element => element.classification === "Alkali Metal");
        displayElements(alkaliMetals);
    }

    else if (isNoblePage) { 
        let nobleGases = elements.filter(element => element.classification === "Noble Gas");
        displayElements(nobleGases);
    }
});

