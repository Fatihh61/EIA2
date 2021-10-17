var Aufgabe01;
(function (Aufgabe01) {
    var subjekte = ["Harry", "Hermine", "Ron", "Hagrid", "Dumbledore"];
    var prädikate = ["braut", "liebt", "studiert", "zaubert", "avada kedavra auf"];
    var objekte = ["Dementoren", "Zaubertränke", "Trolle", "Lupin", "Hogwarts"];
    for (var i = 5; i >= 1; i--) {
        console.log(getVerse(subjekte, prädikate, objekte));
    }
    function getVerse(_subjekte, _prädikate, _objekte) {
        var vers = "";
        var ergebnisSubjekte = Math.floor(Math.random() * subjekte.length);
        var ergebnisPrädikate = Math.floor(Math.random() * objekte.length);
        var ergebnisObjekte = Math.floor(Math.random() * prädikate.length);
        vers += _subjekte.splice(ergebnisSubjekte, 1) + " ";
        vers += _prädikate.splice(ergebnisPrädikate, 1) + " ";
        vers += _objekte.splice(ergebnisObjekte, 1) + " ";
        return vers;
    }
})(Aufgabe01 || (Aufgabe01 = {}));
//# sourceMappingURL=script.js.map