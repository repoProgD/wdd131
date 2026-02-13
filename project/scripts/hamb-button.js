const hambutton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hambutton.addEventListener("click", () => {
    toggleActive(navigation);
    toggleActive(hambutton);
});

function toggleActive(element) {
    element.classList.toggle("open");
}