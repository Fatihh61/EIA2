namespace Aufgabe01 {


let subjekte: string [] = ["Harry", "Hermine", "Ron", "Hagrid", "Dumbledore"];
let prädikate: string [] = ["braut", "liebt", "studiert", "zaubert", "avada kedavra auf"];
let objekte: string [] = ["Dementoren", "Zaubertränke", "Trolle", "Lupin", "Hogwarts"];

for (let i: number = 5; i >= 1; i--) {

    console.log(getVerse(subjekte, prädikate, objekte));
}

function getVerse(_subjekte: string[], _prädikate: string[], _objekte: string[]): void {

    let vers: string [] = [];
    let zufallszahl01: string = (subjekte[Math.floor (Math.random() * subjekte.length)]);
    let zufallszahl02: string = (prädikate[Math.floor (Math.random() * objekte.length)]);
    let zufallszahl03: string = (objekte[Math.floor( Math.random() * prädikate.length)]);

    vers.push(zufallszahl01);
    vers.push(zufallszahl02);
    vers.push(zufallszahl03);

    console.log(vers);
}
}