const hamburgerButton = document.querySelector('.hamburger-button');
const navLinksContainer = document.querySelector('.nav-links-container');
const navItems = document.querySelectorAll('.nav-item');

// mobile menu toggle
hamburgerButton.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
    hamburgerButton.classList.toggle('active');
});

// remove and assign active attribute
navItems.forEach(item => item.addEventListener('click', () => {
    let currentlyActive = navLinksContainer.querySelector('[active="true"]')
    currentlyActive.removeAttribute('active');
    item.setAttribute('active', true);
    navLinksContainer.classList.remove('active');
}))
