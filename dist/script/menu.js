"use strict";
var _a;
// Disabilita lo scroll quando il menu responsive è aperto
(_a = document.getElementById("hamburger")) === null || _a === void 0 ? void 0 : _a.addEventListener("change", function (event) {
    var checkbox = event.target;
    if (checkbox.checked) {
        document.body.style.overflow = "hidden";
    }
    else {
        document.body.style.overflow = "auto";
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // Chiudi il menu e riabilita lo scroll quando si fa clic su un elemento con la classe "chiudi"
    var chiudiElements = document.querySelectorAll(".chiudi");
    chiudiElements.forEach(function (element) {
        element.addEventListener("click", function () {
            document.getElementById("hamburger").checked = false;
            document.body.style.overflow = "auto";
        });
    });
});
