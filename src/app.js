const hamburger_button = document.getElementById('hamburger')
const nav_items = document.getElementById('nav-items')

function toggleButton() {
    nav_items.classList.toggle('show')
}

hamburger_button.addEventListener('click',toggleButton)