"use strict";
/*
Aufgabe: <Aufgabe 10.1_OldMacDonaldsFarmHeritage>
Name: <Fatih Temiz>
Matrikel-Nummer: <268025>
Datum: <17.12.2021>
Quellen:
*/
var L10_OldMacDonaldsHeritage;
(function (L10_OldMacDonaldsHeritage) {
    let dogAsSubclass = new L10_OldMacDonaldsHeritage.Dog();
    let catAsSubclass = new L10_OldMacDonaldsHeritage.Cat();
    let horseAsSubclass = new L10_OldMacDonaldsHeritage.Horse();
    let cowAsSubclass = new L10_OldMacDonaldsHeritage.Cow();
    let lionAsSubclass = new L10_OldMacDonaldsHeritage.Lion();
    window.addEventListener("load", handleLoad);
    //Indexzähler für die Wiederholung des Lyrics
    let num = 1;
    //handleLoad wird aufgerufen
    function handleLoad() {
        setTimeout(dogSing, 3000);
        //setTimeout(singTheLyrics, 3000);
    }
    //dogSing wird aufgerufen
    function dogSing() {
        num--;
        //Deklarierung der beiden div Elemente
        let displayFoodStock = document.getElementById("displayFoodStock");
        let displayLyrics = document.getElementById("displayLyrics");
        //Gegessene Menge wird von der Futterration abgezogen
        dogAsSubclass.foodRation -= dogAsSubclass.eatenAmount;
        //Aktuelle Futterration wird neu ausgegeben
        let pElementForFoodStock = document.createElement("p");
        displayFoodStock.appendChild(pElementForFoodStock);
        pElementForFoodStock.innerHTML = dogAsSubclass.eat();
        //Special Action wird ausgeführt
        let pElementForSpecialAction = document.createElement("p");
        displayLyrics.appendChild(pElementForSpecialAction);
        pElementForSpecialAction.innerHTML = dogAsSubclass.doSpecialActionDog();
        //Rasse wird ausgewählt
        dogAsSubclass.chooseRaceForDog();
        //Methode sing() wird aufgerufen
        let pElementForLyrics = document.createElement("p");
        displayLyrics.appendChild(pElementForLyrics);
        pElementForLyrics.innerHTML = dogAsSubclass.sing();
        setTimeout(catSing, 3000);
    }
    function catSing() {
        //Deklarierung der beiden div Elemente
        let displayFoodStock = document.getElementById("displayFoodStock");
        let displayLyrics = document.getElementById("displayLyrics");
        //Gegessene Menge wird von der Futterration abgezogen
        catAsSubclass.foodRation -= catAsSubclass.eatenAmount;
        //Aktuelle Futterration wird neu ausgegeben
        let pElementForFoodStock = document.createElement("p");
        displayFoodStock.appendChild(pElementForFoodStock);
        pElementForFoodStock.innerHTML = catAsSubclass.eat();
        //Special Action wird ausgeführt
        let pElementForSpecialAction = document.createElement("p");
        displayLyrics.appendChild(pElementForSpecialAction);
        pElementForSpecialAction.innerHTML = catAsSubclass.doSpecialActionCat();
        //Rasse wird ausgewählt
        catAsSubclass.chooseRaceForCat();
        //Methode sing() wird ufgerufen
        let pElementForLyrics = document.createElement("p");
        displayLyrics.appendChild(pElementForLyrics);
        pElementForLyrics.innerHTML = catAsSubclass.sing();
        setTimeout(horseSing, 3000);
    }
    function horseSing() {
        //Deklarierung der beiden div Elemente
        let displayFoodStock = document.getElementById("displayFoodStock");
        let displayLyrics = document.getElementById("displayLyrics");
        //Gegessene Menge wird von der Futterration abgezogen
        horseAsSubclass.foodRation -= horseAsSubclass.eatenAmount;
        //Aktuelle Futterration wird neu ausgegeben
        let pElementForFoodStock = document.createElement("p");
        displayFoodStock.appendChild(pElementForFoodStock);
        pElementForFoodStock.innerHTML = horseAsSubclass.eat();
        //Special Action wird ausgeführt
        let pElementForSpecialAction = document.createElement("p");
        displayLyrics.appendChild(pElementForSpecialAction);
        pElementForSpecialAction.innerHTML = horseAsSubclass.doSpecialActionHorse();
        //Rasse wird ausgewählt
        horseAsSubclass.chooseRaceForHorse();
        //Methode sing() wird aufgerufen
        let pElementForLyrics = document.createElement("p");
        displayLyrics.appendChild(pElementForLyrics);
        pElementForLyrics.innerHTML = horseAsSubclass.sing();
        setTimeout(cowSing, 3000);
    }
    function cowSing() {
        //Deklarierung der beiden div Elemente
        let displayFoodStock = document.getElementById("displayFoodStock");
        let displayLyrics = document.getElementById("displayLyrics");
        //Gegessene Menge wird von der Futterration abgezogen
        cowAsSubclass.foodRation -= cowAsSubclass.eatenAmount;
        //Aktuelle Futterration wird neu ausgegeben
        let pElementForFoodStock = document.createElement("p");
        displayFoodStock.appendChild(pElementForFoodStock);
        pElementForFoodStock.innerHTML = cowAsSubclass.eat();
        //Special Action wird ausgeführt
        let pElementForSpecialAction = document.createElement("p");
        displayLyrics.appendChild(pElementForSpecialAction);
        pElementForSpecialAction.innerHTML = cowAsSubclass.doSpecialActionCow();
        //Rasse wird ausgewählt
        cowAsSubclass.chooseRaceForCow();
        //Methode sing() wird aufgerufen
        let pElementForLyrics = document.createElement("p");
        displayLyrics.appendChild(pElementForLyrics);
        pElementForLyrics.innerHTML = cowAsSubclass.sing();
        setTimeout(lionSing, 3000);
    }
    function lionSing() {
        //Deklarierung der beiden div Elemente
        let displayFoodStock = document.getElementById("displayFoodStock");
        let displayLyrics = document.getElementById("displayLyrics");
        //Gegessene Menge wird von der Futterration abgezogen
        lionAsSubclass.foodRation -= lionAsSubclass.eatenAmount;
        //Aktuelle Futterration wird neu ausgegeben
        let pElementForFoodStock = document.createElement("p");
        displayFoodStock.appendChild(pElementForFoodStock);
        pElementForFoodStock.innerHTML = lionAsSubclass.eat();
        //Special Action wird ausgeführt
        let pElementForSpecialAction = document.createElement("p");
        displayLyrics.appendChild(pElementForSpecialAction);
        pElementForSpecialAction.innerHTML = lionAsSubclass.doSpecialActionLion();
        //Rasse wird ausgewählt
        lionAsSubclass.chooseRaceForLion();
        //Methode sing() wird aufgerufen
        let pElementForLyrics = document.createElement("p");
        displayLyrics.appendChild(pElementForLyrics);
        pElementForLyrics.innerHTML = lionAsSubclass.sing();
        //Button soll erscheinen, um Tag neu zu starten
        if (num == 0) {
            let createButton = document.createElement("button");
            let divButton = document.getElementById("displayButton");
            createButton.innerHTML = "Start new Day";
            divButton.appendChild(createButton);
            //Der Button erscheint aktuell immer wieder, die vorherigen Button werde ich noch ausblenden
            createButton.addEventListener("click", handleLoad);
            //Num wird wieder auf 1 gesetzt, damit der Tag erneut abgespielt werden kann, bis num wieder 0 erreicht
            num = 1;
            //Ende Gelände - Tag endet
            return;
        }
    }
    //Ich hab es leider nicht hinbekommen, dass es durch den Array durch iteriert. Das hätte mir die einzelnen fünf
    //Funktionen erspart.
    /*function singTheLyrics(): void {



        let displayFoodStock: HTMLDivElement = <HTMLDivElement>document.getElementById("displayFoodStock");
        let displayLyrics: HTMLDivElement = <HTMLDivElement>document.getElementById("displayLyrics");
        console.log("Test");


        for (let i: number = 0; i < animalsArray.length; i++) {

            //setTimeout(function(): void {

            let pElementForLyrics: HTMLParagraphElement = document.createElement("p");
            displayLyrics.appendChild(pElementForLyrics);
            pElementForLyrics.innerHTML = animalsArray[i].sing();

            let pElementForFoodStock: HTMLParagraphElement = document.createElement("p");
            displayFoodStock.appendChild(pElementForFoodStock);
            pElementForFoodStock.innerHTML = animalsArray[i].eat();

            //},         3000);
        }
    }
    */
})(L10_OldMacDonaldsHeritage || (L10_OldMacDonaldsHeritage = {}));
//# sourceMappingURL=Main.js.map