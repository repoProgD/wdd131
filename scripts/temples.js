const mainnav = document.querySelector('.navigation'); // ul element by class
const hamButton = document.querySelector('#menu');     // button element by id

// add click event
hamButton.addEventListener('click', () => {
    mainnav.classList.toggle('show');         // for making this event work, I need a css rule targeting .navigation.show
    hamButton.classList.toggle('open');      // for making this event work, I need a css rule targeting .open
});  