import cc from "./carousselConfig.json";

import { MOBILE_BREAKPOINT } from "./mobileImageSwap.js"

class Caroussel {

    constructor(defaultSlide) {
        this.counter = defaultSlide;

        // Img
        this.slideParent = document.getElementById("mainBox");
        this.slideCurrentImg = this.slideParent.getElementsByClassName("activeSlide")[0] || document.getElementsByClassName("activeSlide")[0];

        // Text
        this.textContainer = document.getElementsByClassName("sideTextContainer")[0];
        this.textTitle = this.textContainer.getElementsByTagName("h2")[0];
        this.textText = this.textContainer.getElementsByTagName("p")[0];
    }

    // Getters
    /**
     * @return {int} sum - The numbers of different images (mobile equivalent not included)
     */
    getImgsSizeNumbers() {
        return cc.slideImgs["desktop"].length;
    }



    getImgIndexFromIndex(index) {
        index = index % this.getImgsSizeNumbers()

        if (index < 0) {
            index = Math.abs(index);
            index = this.getImgsSizeNumbers() - index
        }
        
        return index
    }

    chooseImg(imgIndex) {
        if (imgIndex >= this.getImgsSizeNumbers()) {
            imgIndex = this.getImgIndexFromIndex(imgIndex)
        }

        if (screen.width <= MOBILE_BREAKPOINT) {
            return cc.slideImgs["mobile"][imgIndex]
        }
        else {
            return cc.slideImgs["desktop"][imgIndex]
        }
    }

    chooseTitle(titleIndex) {
        if (titleIndex >= this.getImgsSizeNumbers()) {
            titleIndex = this.getImgIndexFromIndex(titleIndex)
        }

        return cc.slideTexts["title"][titleIndex]
    }

    chooseText(textIndex) {
        if (textIndex >= this.getImgsSizeNumbers()) {
            textIndex = this.getImgIndexFromIndex(textIndex)
        }

        return cc.slideTexts["text"][textIndex]
    }

    setSlide(img) {
        this.slideCurrentImg.src = cc.defaultImgFolder + img
    }

    slide(slideIndex) {
        // Pre
        let imgSrc = this.chooseImg(slideIndex)

        // -- Image --
        var newSlide = document.createElement("img");
        newSlide.classList.add("mainbox_img", "articleImg", "newSlide");
        newSlide.src = cc.defaultImgFolder + imgSrc;
        this.slideParent.append(newSlide);

        // animation
        let animationTime = .3;
        this.slideCurrentImg.style.transition = `transform ${animationTime}s ease-in-out`;
        this.slideCurrentImg.style.transform = "translateX(-100%)";
        this.slideCurrentImg.classList.add("delete")
        setTimeout(() => {
            document.getElementsByClassName("delete")[0].remove()
            let newSlide = document.getElementsByClassName("newSlide")[0]
            newSlide.classList.toggle("newSlide")
            newSlide.classList.add("activeSlide")
        }, animationTime * 1000)

        this.slideCurrentImg = newSlide

        // -- Text --
        let texts = {
            "title" : this.chooseTitle(slideIndex),
            "text" : this.chooseText(slideIndex)
        }

        this.textContainer.classList.add("play")
        animationTime = .6
        // Mid animation
        setTimeout(() => {
            this.textTitle.innerText = texts["title"]
            this.textText.innerText = texts["text"]
        }, (animationTime / 2) * 1000)
        // Ended animation
        setTimeout(() => {
            this.textContainer.classList.remove("play")
        }, animationTime * 1000)
    }

}

const caroussel = new Caroussel(0);
// on load
caroussel.setSlide(cc.slideImgs["desktop"][0]);

const slideButtons = document.getElementsByClassName("carousselArrow")
slideButtons[0].addEventListener("click", () => {
    caroussel.slide(caroussel.getImgIndexFromIndex(caroussel.counter - 1))
    caroussel.counter -= 1
})
slideButtons[1].addEventListener("click", () => {
    caroussel.slide(caroussel.getImgIndexFromIndex(caroussel.counter + 1))
    caroussel.counter += 1
})
