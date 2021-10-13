var Aufgabe01;
(function (Aufgabe01) {
    var subjekte = ["Harry", "Hermine", "Ron", "Hagrid", "Dumbledore"];
    var prädikate = ["braut", "liebt", "studiert", "zaubert", "avada kedavra auf"];
    var objekte = ["Dementoren", "Zaubertränke", "Trolle", "Lupin", "Hogwarts"];
    for (var i = 5; i >= 1; i--) {
        console.log(getVerse(subjekte, prädikate, objekte));
    }
    function getVerse(_subjekte, _prädikate, _objekte) {
        var vers = [];
        var zufallszahl01 = (subjekte[Math.floor(Math.random() * subjekte.length)]);
        var zufallszahl02 = (prädikate[Math.floor(Math.random() * objekte.length)]);
        var zufallszahl03 = (objekte[Math.floor(Math.random() * prädikate.length)]);
        vers.push(zufallszahl01);
        vers.push(zufallszahl02);
        vers.push(zufallszahl03);
        console.log(vers);
    }
})(Aufgabe01 || (Aufgabe01 = {}));
//# sourceMappingURL=script.js.map