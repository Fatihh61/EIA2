namespace Aufgabe01 {


    let subjekte: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Dumbledore"];
    let prädikate: string[] = ["braut", "liebt", "studiert", "zaubert", "avada kedavra auf"];
    let objekte: string[] = ["Dementoren", "Zaubertränke", "Trolle", "Lupin", "Hogwarts"];

    for (let i: number = 5; i >= 1; i--) {

        console.log(getVerse(subjekte, prädikate, objekte));
    }

    function getVerse(_subjekte: string[], _prädikate: string[], _objekte: string[]): string {


        let vers: string = "";

        let ergebnisSubjekte: number = Math.floor(Math.random() * subjekte.length);
        let ergebnisPrädikate: number = Math.floor(Math.random() * objekte.length);
        let ergebnisObjekte: number = Math.floor(Math.random() * prädikate.length);


        vers += _subjekte.splice(ergebnisSubjekte, 1) + " ";
        vers += _prädikate.splice(ergebnisPrädikate, 1) + " ";
        vers += _objekte.splice(ergebnisObjekte, 1) + " ";


        return vers;
    }
}