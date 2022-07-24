
const slideButtons = document.getElementsByClassName("carousselArrow")

document.onkeydown = (key) => {

    if (key.key === "ArrowRight") {
        slideButtons[1].click()
    }
    else if (key.key === "ArrowLeft") {
        slideButtons[0].click()
    }
}