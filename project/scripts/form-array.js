const products = [
    {
        id: "f-1",
        name: "Info cards with images",
        averagerating: 4.5
    },
    {
        id: "f-2",
        name: "Depth information images",
        averagerating: 4.7
    },
    {
        id: "f-3",
        name: "Heatmaps",
        averagerating: 3.5
    },
    {
        id: "f-4",
        name: "Depth information images",
        averagerating: 3.9
    },
];

let select = document.querySelector("#resource");
let choice = document.createElement("option");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
});