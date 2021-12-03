"use strict";
var L09_Farm;
(function (L09_Farm) {
    window.addEventListener("load", handleLoad);
    //Tiere/Objekte werden deklariert 
    let dog = new L09_Farm.Animal("Crack", "ein Hund", "Fleisch", 10, 250, "wuuuuuuuuuff");
    let cat = new L09_Farm.Animal("Gilbert", "eine Katze", "Whiskas", 5, 100, "miaaaaauuuuu");
    let horse = new L09_Farm.Animal("Pony", "ein Pferd", "Heu", 20, 300, "yahüüüüüüüüüüüüüüü");
    let cow = new L09_Farm.Animal("Milka", "eine Kuh", "Graß", 20, 300, "muuuuuuuuuuh");
    let lion = new L09_Farm.Animal("Memphis", "ein Löwe", "Vegan", 1, 100, "wrooooooaaaaaaaaaah");
    //Array der Objekte wird deklariert
    let animalsArray = [dog, cat, horse, cow, lion];
    //handleLoad wird aufgerufen
    function handleLoad() {
        singTheLyrics();
        //setTimeout(singTheLyrics(), 3000);
    }
    function singTheLyrics() {
        setTimeout(function () {
            let displayFoodStock = document.getElementById("displayFoodStock");
            let displayLyrics = document.getElementById("displayLyrics");
            for (let i = 0; i < animalsArray.length; i++) {
                let pElementForLyrics = document.createElement("p");
                displayLyrics.appendChild(pElementForLyrics);
                pElementForLyrics.innerHTML = animalsArray[i].sing();
            }
        }, 3000);
    }
})(L09_Farm || (L09_Farm = {}));
//# sourceMappingURL=main.js.map