"use strict";
/*
Aufgabe: <Aufgabe 09.1_OldMacDonaldsFarm>
Name: <Fatih Temiz>
Matrikel-Nummer: <26825>
Datum: <04.12.2021>
Quellen: W3Schools, Herbert Gerasimov - Vorallem den Inhalt der beiden Methoden mit return, diverse Youtube Videos
über die Basics von Classes, Objekten und Methoden
*/
var L09_Farm;
(function (L09_Farm) {
    window.addEventListener("load", handleLoad);
    //Tiere/Objekte werden deklariert 
    let dog = new L09_Farm.Animal("Crack", "ein Hund", "Fleisch", 10, 250, "wuuuuuuuuuff", 10);
    let cat = new L09_Farm.Animal("Gilbert", "eine Katze", "Whiskas", 5, 100, "miaaaaauuuuu", 5);
    let horse = new L09_Farm.Animal("Pony", "ein Pferd", "Heu", 20, 300, "yahüüüüüüüüüüüüüüü", 20);
    let cow = new L09_Farm.Animal("Milka", "eine Kuh", "Graß", 20, 300, "muuuuuuuuuuh", 20);
    let lion = new L09_Farm.Animal("Memphis", "ein Löwe", "Vegan", 1, 100, "wrooooooaaaaaaaaaah", 1);
    //Indexzähler für die Wiederholung des Lyrics (alles an einem Tag)
    let num = 2;
    //Array für die Objekte wird deklariert
    let animalsArray = [dog, cat, horse, cow, lion];
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
        //<p> Element wird erstellt//Methode sing() wird für dog aufgerufen
        let pElementForLyrics = document.createElement("p");
        displayLyrics.appendChild(pElementForLyrics);
        pElementForLyrics.innerHTML = animalsArray[0].sing();
        //Gegessene Menge wird von der Futterration abgezogen
        dog.foodRatio -= dog.eatenAmount;
        //Aktuelle Futterration wird neu ausgegeben
        let pElementForFoodStock = document.createElement("p");
        displayFoodStock.appendChild(pElementForFoodStock);
        pElementForFoodStock.innerHTML = animalsArray[0].eat();
        setTimeout(catSing, 3000);
    }
    function catSing() {
        //Deklarierung der beiden div Elemente
        let displayFoodStock = document.getElementById("displayFoodStock");
        let displayLyrics = document.getElementById("displayLyrics");
        //<p> Element wird erstellt//Methode sing() wird für dog aufgerufen
        let pElementForLyrics = document.createElement("p");
        displayLyrics.appendChild(pElementForLyrics);
        pElementForLyrics.innerHTML = animalsArray[1].sing();
        //Gegessene Menge wird von der Futterration abgezogen
        cat.foodRatio -= cat.eatenAmount;
        //Aktuelle Futterration wird neu ausgegeben
        let pElementForFoodStock = document.createElement("p");
        displayFoodStock.appendChild(pElementForFoodStock);
        pElementForFoodStock.innerHTML = animalsArray[1].eat();
        setTimeout(horseSing, 3000);
    }
    function horseSing() {
        //Deklarierung der beiden div Elemente
        let displayFoodStock = document.getElementById("displayFoodStock");
        let displayLyrics = document.getElementById("displayLyrics");
        //<p> Element wird erstellt//Methode sing() wird für dog aufgerufen
        let pElementForLyrics = document.createElement("p");
        displayLyrics.appendChild(pElementForLyrics);
        pElementForLyrics.innerHTML = animalsArray[2].sing();
        //Gegessene Menge wird von der Futterration abgezogen
        horse.foodRatio -= horse.eatenAmount;
        //Aktuelle Futterration wird neu ausgegeben
        let pElementForFoodStock = document.createElement("p");
        displayFoodStock.appendChild(pElementForFoodStock);
        pElementForFoodStock.innerHTML = animalsArray[2].eat();
        setTimeout(cowSing, 3000);
    }
    function cowSing() {
        //Deklarierung der beiden div Elemente
        let displayFoodStock = document.getElementById("displayFoodStock");
        let displayLyrics = document.getElementById("displayLyrics");
        //<p> Element wird erstellt//Methode sing() wird für dog aufgerufen
        let pElementForLyrics = document.createElement("p");
        displayLyrics.appendChild(pElementForLyrics);
        pElementForLyrics.innerHTML = animalsArray[3].sing();
        //Gegessene Menge wird von der Futterration abgezogen
        cow.foodRatio -= cow.eatenAmount;
        //Aktuelle Futterration wird neu ausgegeben
        let pElementForFoodStock = document.createElement("p");
        displayFoodStock.appendChild(pElementForFoodStock);
        pElementForFoodStock.innerHTML = animalsArray[3].eat();
        setTimeout(lionSing, 3000);
    }
    function lionSing() {
        //Deklarierung der beiden div Elemente
        let displayFoodStock = document.getElementById("displayFoodStock");
        let displayLyrics = document.getElementById("displayLyrics");
        //<p> Element wird erstellt//Methode sing() wird für dog aufgerufen
        let pElementForLyrics = document.createElement("p");
        displayLyrics.appendChild(pElementForLyrics);
        pElementForLyrics.innerHTML = animalsArray[4].sing();
        //Gegessene Menge wird von der Futterration abgezogen
        lion.foodRatio -= lion.eatenAmount;
        //Aktuelle Futterration wird neu ausgegeben
        let pElementForFoodStock = document.createElement("p");
        displayFoodStock.appendChild(pElementForFoodStock);
        pElementForFoodStock.innerHTML = animalsArray[4].eat();
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
        //Ist num nicht 0, wird mit dogSing das ganze noch einmal abgespielt
        setTimeout(dogSing, 3000);
    }
    //setTimeout(singTheLyrics, 3000);
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
})(L09_Farm || (L09_Farm = {}));
//# sourceMappingURL=main.js.map