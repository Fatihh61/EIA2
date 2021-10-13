var Aufgabe01;
(function (Aufgabe01) {
    var subjekte = ["Harry", "Hermine", "Ron", "Hagrid", "Dumbledore"];
    var prädikate = ["braut", "liebt", "studiert", "zaubert", "avada kedavra auf"];
    var objekte = ["Dementoren", "Zaubertränke", "Trolle", "Lupin", "Hogwarts"];
    // Gibt die Arrays mit den Reimen wieder
    console.log(subjekte);
    console.log(prädikate);
    console.log(objekte);
    for (var i = 5; i >= 1; i--) {
        /*
        // Gibt die zufälligen Reime aus jeweils einem Array wieder
        console.log(getVerse([subjekte[Math.floor(Math.random() * subjekte.length)]], [prädikate[Math.floor(Math.random() * prädikate.length)]], [objekte[Math.floor(Math.random() * objekte.length)]], ""));
        */
        console.log(getVerse(subjekte, prädikate, objekte));
    }
    function getVerse(_subjekte, _prädikate, _objekte) {
        var vers = [];
        var test1 = (subjekte[Math.floor(Math.random() * subjekte.length)]);
        var test2 = (prädikate[Math.floor(Math.random() * objekte.length)]);
        var test3 = (objekte[Math.floor(Math.random() * prädikate.length)]);
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
})(Aufgabe01 || (Aufgabe01 = {}));
//# sourceMappingURL=script.js.map