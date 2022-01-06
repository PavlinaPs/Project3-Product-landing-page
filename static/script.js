const hamburgerButton = document.getElementsByClassName('hamburger-button')[0];
const navLinksContainer = document.getElementsByClassName('nav-links-container')[0];

hamburgerButton.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active')
});

let placeholder = document.querySelector("#email-label");


