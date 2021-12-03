"use strict";
var L09_Farm;
(function (L09_Farm) {
    window.addEventListener("load", handleLoad);
    //Tiere/Objekte werden deklariert 
    let dog = new L09_Farm.Animal("Crack", "ein Hund", "Fleisch", 10, 250, "wuuuuuuuuuff", 10);
    let cat = new L09_Farm.Animal("Gilbert", "eine Katze", "Whiskas", 5, 100, "miaaaaauuuuu", 5);
    let horse = new L09_Farm.Animal("Pony", "ein Pferd", "Heu", 20, 300, "yahüüüüüüüüüüüüüüü", 20);
    let cow = new L09_Farm.Animal("Milka", "eine Kuh", "Graß", 20, 300, "muuuuuuuuuuh", 20);
    let lion = new L09_Farm.Animal("Memphis", "ein Löwe", "Vegan", 1, 100, "wrooooooaaaaaaaaaah", 1);
    let num = 1;
    //Array der Objekte wird deklariert
    let animalsArray = [dog, cat, horse, cow, lion];
    //handleLoad wird aufgerufen
    function handleLoad() {
        let displayFoodStock = document.getElementById("displayFoodStock");
        /*for (let i: number = 0; i < animalsArray.length; i++) {

            pElementForFoodStock = document.createElement("p");
            displayFoodStock.appendChild(pElementForFoodStock);
            pElementForFoodStock.innerHTML = animalsArray[i].eat();

        }
        */
        setTimeout(dogSing, 3000);
        //setTimeout(singTheLyrics, 3000);
    }
    function dogSing() {
        num--;
        let displayFoodStock = document.getElementById("displayFoodStock");
        let displayLyrics = document.getElementById("displayLyrics");
        let pElementForLyrics = document.createElement("p");
        displayLyrics.appendChild(pElementForLyrics);
        pElementForLyrics.innerHTML = animalsArray[0].sing();
        dog.foodRatio -= dog.eatenAmount;
        let pElementForFoodStock = document.createElement("p");
        displayFoodStock.appendChild(pElementForFoodStock);
        pElementForFoodStock.innerHTML = animalsArray[0].eat();
        setTimeout(catSing, 3000);
    }
    function catSing() {
        let displayFoodStock = document.getElementById("displayFoodStock");
        let displayLyrics = document.getElementById("displayLyrics");
        let pElementForLyrics = document.createElement("p");
        displayLyrics.appendChild(pElementForLyrics);
        pElementForLyrics.innerHTML = animalsArray[1].sing();
        cat.foodRatio -= cat.eatenAmount;
        let pElementForFoodStock = document.createElement("p");
        displayFoodStock.appendChild(pElementForFoodStock);
        pElementForFoodStock.innerHTML = animalsArray[1].eat();
        setTimeout(horseSing, 3000);
    }
    function horseSing() {
        let displayFoodStock = document.getElementById("displayFoodStock");
        let displayLyrics = document.getElementById("displayLyrics");
        let pElementForLyrics = document.createElement("p");
        displayLyrics.appendChild(pElementForLyrics);
        pElementForLyrics.innerHTML = animalsArray[2].sing();
        horse.foodRatio -= horse.eatenAmount;
        let pElementForFoodStock = document.createElement("p");
        displayFoodStock.appendChild(pElementForFoodStock);
        pElementForFoodStock.innerHTML = animalsArray[2].eat();
        setTimeout(cowSing, 3000);
    }
    function cowSing() {
        let displayFoodStock = document.getElementById("displayFoodStock");
        let displayLyrics = document.getElementById("displayLyrics");
        let pElementForLyrics = document.createElement("p");
        displayLyrics.appendChild(pElementForLyrics);
        pElementForLyrics.innerHTML = animalsArray[3].sing();
        cow.foodRatio -= cow.eatenAmount;
        let pElementForFoodStock = document.createElement("p");
        displayFoodStock.appendChild(pElementForFoodStock);
        pElementForFoodStock.innerHTML = animalsArray[3].eat();
        setTimeout(lionSing, 3000);
    }
    function lionSing() {
        let displayFoodStock = document.getElementById("displayFoodStock");
        let displayLyrics = document.getElementById("displayLyrics");
        let pElementForLyrics = document.createElement("p");
        displayLyrics.appendChild(pElementForLyrics);
        pElementForLyrics.innerHTML = animalsArray[4].sing();
        lion.foodRatio -= lion.eatenAmount;
        let pElementForFoodStock = document.createElement("p");
        displayFoodStock.appendChild(pElementForFoodStock);
        pElementForFoodStock.innerHTML = animalsArray[4].eat();
        if (num == 0) {
            let createButton = document.createElement("button");
            let divButton = document.getElementById("displayButton");
            createButton.innerHTML = "Start new Day";
            divButton.appendChild(createButton);
            createButton.addEventListener("click", handleLoad);
            num = 1;
            return;
        }
        setTimeout(dogSing, 3000);
    }
    //setTimeout(singTheLyrics, 3000);
    function singTheLyrics() {
        let displayFoodStock = document.getElementById("displayFoodStock");
        let displayLyrics = document.getElementById("displayLyrics");
        console.log("Test");
        for (let i = 0; i < animalsArray.length; i++) {
            //setTimeout(function(): void {
            let pElementForLyrics = document.createElement("p");
            displayLyrics.appendChild(pElementForLyrics);
            pElementForLyrics.innerHTML = animalsArray[i].sing();
            let pElementForFoodStock = document.createElement("p");
            displayFoodStock.appendChild(pElementForFoodStock);
            pElementForFoodStock.innerHTML = animalsArray[i].eat();
            //},         3000);
        }
    }
})(L09_Farm || (L09_Farm = {}));
//# sourceMappingURL=main.js.map