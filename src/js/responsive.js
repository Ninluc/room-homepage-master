import cc from "./carousselConfig.json";

import { MOBILE_BREAKPOINT, swap } from "./mobileImageSwap.js"
import { toggleMenu } from "./navSlide.js"

const nav = document.getElementsByTagName("nav")[0]
const mainBox = document.getElementById("mainBox")

const breakpoint = () => {
    if (screen.width <= MOBILE_BREAKPOINT) {
        // -- Hamburger menu --
        if (!document.getElementsByClassName("hamburgerIcon")[0]) {
            // menu
            let menu = document.createElement("div")
            menu.classList.add("menu")
            mainBox.append(menu);

            // Hamburger icon
            let hamburger = document.createElement("div")
            hamburger.classList.add("hamburgerIcon")
            hamburger.addEventListener("click", () => {
                toggleMenu(menu, document.getElementById("cover"));
                hamburger.classList.toggle("hamburger__close")
                document.getElementsByClassName("logo")[0].classList.toggle("logo__invisible")
                // let main = document.getElementsByTagName("main")[0]
                // let mainStyle = main.currentStyle || window.getComputedStyle(main, false)
                // mainStyle.overflowY == "hidden" ? main.style.overflowY = "scroll" : main.style.overflowY = "hidden"
                // console.log("🚀 ~ file: responsive.js ~ line 28 ~ hamburger.addEventListener ~ ainStyle.overflowY", mainStyle.overflowY);
            })
            nav.append(hamburger)

            Array.from(nav.children).forEach((el) => {
                if (el.tagName.toLowerCase() == "a") {
                    menu.insertAdjacentElement("beforeend", el)
                }
            })
        }
    }
    else {
        if (document.getElementsByClassName("hamburgerIcon")[0]) {
            let menu = document.getElementsByClassName("menu")[0]
            let hamburger = document.getElementsByClassName("hamburgerIcon")[0]

            Array.from(menu.children).forEach((el) => {
                nav.insertAdjacentElement("beforeend", el)
            })

            hamburger.remove()
            menu.remove()
        }
    }
}



breakpoint()

window.onresize = () => {
    breakpoint()
    swap()
}
