namespace Aufgabe01 {



let subjekte: string [] = ["Harry", "Hermine", "Ron", "Hagrid", "Dumbledore"];
let prädikate: string [] = ["braut", "liebt", "studiert", "zaubert", "avada kedavra auf"];
let objekte: string [] = ["Dementoren", "Zaubertränke", "Trolle", "Lupin", "Hogwarts"];

// Gibt die Arrays mit den Reimen wieder
console.log(subjekte);
console.log(prädikate);
console.log(objekte);



for (let i: number = 5; i >= 1; i--) {
    
    /*
    // Gibt die zufälligen Reime aus jeweils einem Array wieder
    console.log(getVerse([subjekte[Math.floor(Math.random() * subjekte.length)]], [prädikate[Math.floor(Math.random() * prädikate.length)]], [objekte[Math.floor(Math.random() * objekte.length)]], ""));
    */
    console.log(getVerse(subjekte, prädikate, objekte));
}


function getVerse(_subjekte: string[], _prädikate: string[], _objekte: string[]): void {

    

    let vers: string [] = [];

    let test1: string = (subjekte[Math.floor (Math.random() * subjekte.length)]);
    let test2: string = (prädikate[Math.floor (Math.random() * objekte.length)]);
    let test3: string = (objekte[Math.floor( Math.random() * prädikate.length)]);

    
    // Trennen des einzelnen Elements aus dem jeweiligen Array
    /*
    objekte.splice(test2);
    prädikate.splice(test3);
    */
   
    // pushen des Elements in die Variable vers
    vers.push(test1);
    vers.push(test2);
    vers.push(test3);

    /*
    vers.push(objekte);
    prädikate.push(vers);
    */

    /*
    console.log(subjekte);
    console.log(objekte);
    console.log(prädikate);
    */
    

    console.log(vers);
    
    /*
    console.log(test2);
    console.log(test3);
    */
}
}