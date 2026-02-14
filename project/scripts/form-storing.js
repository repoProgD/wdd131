let reviews = localStorage.getItem("reviews");

if (reviews == null) {
    reviews = 0;
}

else { 
    reviews = Number(reviews);
}

reviews++;

localStorage.setItem("reviews", reviews);