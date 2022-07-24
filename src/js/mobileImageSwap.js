import cc from "./carousselConfig.json";

const MOBILE_BREAKPOINT = 900

const swap = () => {
    if (screen.width <= MOBILE_BREAKPOINT) {
        var imgs = document.getElementsByClassName("articleImg")

        for (var img of imgs) {
            // If in background
            if (img.classList.contains("articleImg__bgImage")) {
                var style = img.currentStyle || window.getComputedStyle(img, false)
                var href = style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0]
                
                img.style.backgroundImage = href.replace("desktop", "mobile")
            }
            else {
                var href = img.src.split('/')[img.src.split('/').length - 1]

                img.src = cc.defaultImgFolder + href.replace("desktop", "mobile")
            }
            // console.log("🚀 ~ file: mobileImageSwap.js ~ line 12 ~ swap ~ href", href);
        }
    }
}

swap()

module.exports = { MOBILE_BREAKPOINT }
