
const toggleMenu = (menu, shadow) => {
    menu.classList.toggle("menu__opened")
    shadow.classList.toggle("active")
}

module.exports = { toggleMenu }