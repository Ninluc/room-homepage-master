parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"kZ93":[function(require,module,exports) {
module.exports={defaultImgFolder:"./public/",slideImgs:{desktop:["desktop-image-hero-1.jpg","desktop-image-hero-2.jpg","desktop-image-hero-3.jpg"],mobile:["mobile-image-hero-1.jpg","mobile-image-hero-2.jpg","mobile-image-hero-3.jpg"]},slideTexts:{title:["Discover innovative ways to decorate","We are available all across the globe","Manufactured with the best materials"],text:["We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.","With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.","Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."]}};
},{}],"UScd":[function(require,module,exports) {
"use strict";var e=t(require("./carousselConfig.json"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=n(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,i=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,l=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw l}}}}function n(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var a=900,l=function(){var t,n=r(document.getElementsByClassName("articleImg"));try{for(n.s();!(t=n.n()).done;){var o=t.value;if(o.classList.contains("articleImg__bgImage")){var a=(o.currentStyle||window.getComputedStyle(o,!1)).backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi,"$2").split(",")[0];o.style.backgroundImage=a.replace("desktop","mobile")}else{a=o.src.split("/")[o.src.split("/").length-1];a=screen.width<=450?a.replace("desktop","mobile"):a.replace("mobile","desktop"),o.src=e.default.defaultImgFolder+a}}}catch(l){n.e(l)}finally{n.f()}};l(),module.exports={MOBILE_BREAKPOINT:a,swap:l};
},{"./carousselConfig.json":"kZ93"}],"xhhI":[function(require,module,exports) {
"use strict";var e=s(require("./carousselConfig.json")),t=require("./mobileImageSwap.js");function s(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,s){return t&&i(e.prototype,t),s&&i(e,s),Object.defineProperty(e,"prototype",{writable:!1}),e}var l=function(){function s(e){n(this,s),this.counter=e,this.slideParent=document.getElementById("mainBox"),this.slideCurrentImg=this.slideParent.getElementsByClassName("activeSlide")[0]||document.getElementsByClassName("activeSlide")[0],this.textContainer=document.getElementsByClassName("sideTextContainer")[0],this.textTitle=this.textContainer.getElementsByTagName("h2")[0],this.textText=this.textContainer.getElementsByTagName("p")[0]}return r(s,[{key:"getImgsSizeNumbers",value:function(){return e.default.slideImgs.desktop.length}},{key:"getImgIndexFromIndex",value:function(e){return(e%=this.getImgsSizeNumbers())<0&&(e=Math.abs(e),e=this.getImgsSizeNumbers()-e),e}},{key:"chooseImg",value:function(s){return s>=this.getImgsSizeNumbers()&&(s=this.getImgIndexFromIndex(s)),screen.width<=t.MOBILE_BREAKPOINT?e.default.slideImgs.mobile[s]:e.default.slideImgs.desktop[s]}},{key:"chooseTitle",value:function(t){return t>=this.getImgsSizeNumbers()&&(t=this.getImgIndexFromIndex(t)),e.default.slideTexts.title[t]}},{key:"chooseText",value:function(t){return t>=this.getImgsSizeNumbers()&&(t=this.getImgIndexFromIndex(t)),e.default.slideTexts.text[t]}},{key:"setSlide",value:function(t){this.slideCurrentImg.src=e.default.defaultImgFolder+t}},{key:"slide",value:function(t){var s=this,n=this.chooseImg(t),i=document.createElement("img");i.classList.add("mainbox_img","articleImg","newSlide"),i.src=e.default.defaultImgFolder+n,this.slideParent.append(i);var r=.3;this.slideCurrentImg.style.transition="transform ".concat(r,"s ease-in-out"),this.slideCurrentImg.style.transform="translateX(-100%)",this.slideCurrentImg.classList.add("delete"),setTimeout(function(){document.getElementsByClassName("delete")[0].remove();var e=document.getElementsByClassName("newSlide")[0];e.classList.toggle("newSlide"),e.classList.add("activeSlide")},1e3*r),this.slideCurrentImg=i;var l={title:this.chooseTitle(t),text:this.chooseText(t)};this.textContainer.classList.add("play"),r=.6,setTimeout(function(){s.textTitle.innerText=l.title,s.textText.innerText=l.text},r/2*1e3),setTimeout(function(){s.textContainer.classList.remove("play")},1e3*r)}}]),s}(),a=new l(0);a.setSlide(e.default.slideImgs.desktop[0]);var o=document.getElementsByClassName("carousselArrow");o[0].addEventListener("click",function(){a.slide(a.getImgIndexFromIndex(a.counter-1)),a.counter-=1}),o[1].addEventListener("click",function(){a.slide(a.getImgIndexFromIndex(a.counter+1)),a.counter+=1});
},{"./carousselConfig.json":"kZ93","./mobileImageSwap.js":"UScd"}]},{},["xhhI"], null)