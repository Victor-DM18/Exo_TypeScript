"use strict";
const compteur = document.querySelector("#compteur");
const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector("span");
let i = 0;
const increment = (e) => [
    i++,
    span ? span.innerText = i.toString() : null
];
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener("click", increment);
