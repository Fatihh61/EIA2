/*
Aufgabe: <Aufgabe 08.2_GoldenerHerbst>
Name: <Fatih Temiz>
Matrikel-Nummer: <26825>
Datum: <27.11.2021>
*/

//Noch nicht ganz fertig - Eichhörnchen und Blätter fehlen noch

namespace L08_GoldenerHerbst {



    let crc2: CanvasRenderingContext2D;

    window.addEventListener("load", handleLoad);

    let golden: number = 0.62;

    function handleLoad(): void {

        //Canvas Element Zugriff
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        //Goldener Schnitt
        let horizone: number = crc2.canvas.height * golden;

        //Startposition für den ersten Berg
        let startPointofFirstMountainX: number = Math.random() * (-50) - 80;





        drawBackGround();
        drawCloud();
        drawMountains(startPointofFirstMountainX, horizone);
        drawTree(horizone + 50);
        // Funktioniert noch nicht ganz - Muss es noch kleiner machen, dann habe ich die Blätter drawLeaf(crc2.canvas.width, crc2.canvas.height);
        drawLeaf2();
    }


    function drawBackGround(): void {

        //Gradient für den gesamten Hintergrund
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);

        gradient.addColorStop(0, "#87CEFF");
        gradient.addColorStop(.5, "white");
        gradient.addColorStop(1, "#e69e19");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }



    function drawCloud(): void {

        //Path2D für die Wolkenpartikel
        let clouds: Path2D = new Path2D();

        //Gradient für die Wolkenpartikel
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 50);

        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0.07)");

        crc2.save();


        for (let i: number = 30; i > 0; i--) {

            let numbX: number = Math.random() * 100 + 650;
            let numbY: number = Math.random() * 100 + 50;
            let translateX: number = Math.random() * (-4.5) + (-3.5);
            let translateY: number = Math.random() * (-0.2);

            console.log(translateX);
            console.log(translateY);





            clouds.arc(numbX, numbY, 15, 0, 2 * Math.PI);

            crc2.beginPath();
            crc2.fillStyle = gradient;
            crc2.translate(translateX, translateY);
            crc2.fill(clouds);
            crc2.stroke();
            crc2.closePath();
        }

        crc2.restore();
    }


    function drawMountains(_startPointFirstMountainX: number, _horizoneY: number): void {

        //Gradient für die Berge
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 150, 0, _horizoneY);
        gradient.addColorStop(1, "grey");
        gradient.addColorStop(0, "white");

        let x: number = 0;
        let drawLineRandomX: number = 0;

        crc2.save();

        //Beginn der Zeichnung für die Berge


        for (let i: number = 8; i > 0; i--) {


            //Zufällige Zahl für Zeichnung in X und Y Richtung
            drawLineRandomX = Math.random() * 50 + 100;
            let drawLineRandomY: number = Math.random() * 80 + 50;

            x += drawLineRandomX;



            console.log(drawLineRandomX);
            console.log(drawLineRandomY);

            crc2.beginPath();
            crc2.moveTo(_startPointFirstMountainX, _horizoneY);
            crc2.strokeStyle = "grey";
            crc2.lineWidth = 2;
            crc2.lineTo(x - 50, drawLineRandomY);
            crc2.lineTo(x + 150, _horizoneY);
            crc2.fillStyle = gradient;
            crc2.fill();


        }
        crc2.closePath();
        crc2.restore();
    }

    function drawTree(_startPositionY: number): void {

        let treeTrunkX: number = 25;
        let treeTrunkY: number = 50;
        let treeBushX2: number = 25;
        let treeBushX3: number = 37.5;
        let treeBushX4: number = 50;
        let treeBushY: number = 50;
        let treeBushY2: number = 75;

        let xAdd: number = 0;
        let drawRandomTreeOnX: number;

        let _treeDistanceFromEachOther: number = 0;
        let distanceAdd: number;

        crc2.save();

        for (let i: number = 0; i < 15; i++) {

            drawRandomTreeOnX = Math.random() * 50 + 70;

            xAdd += drawRandomTreeOnX;

            distanceAdd = Math.random() * 20 + 30;
            _treeDistanceFromEachOther += distanceAdd;


            crc2.beginPath();
            crc2.moveTo(xAdd - _treeDistanceFromEachOther, _startPositionY);
            console.log(xAdd - _treeDistanceFromEachOther, _startPositionY);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther + treeTrunkX, _startPositionY);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther + treeTrunkX, _startPositionY - treeTrunkY);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther, _startPositionY - treeTrunkY);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther, _startPositionY);
            crc2.stroke();
            crc2.fillStyle = "#8B4513";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(xAdd - _treeDistanceFromEachOther, _startPositionY - treeTrunkY);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther - treeBushX2, _startPositionY - treeBushY);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther - treeBushX2 + treeBushX3, _startPositionY - treeBushY - treeBushY2);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther + treeBushX4, _startPositionY - treeBushY);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther + treeBushX4 - treeBushX4, _startPositionY - treeBushY);
            crc2.fillStyle = "#006400";
            crc2.fill();
            crc2.stroke();
        }
        crc2.restore();
    }

    function drawLeaf(_leafXPosition: number, _leafYPosition: number): void {

        let randomX: number = Math.random() * 600;
        let randomY: number = Math.random() * 400;

        crc2.save();

        crc2.beginPath();
        crc2.moveTo(randomX + 30, randomY + 50);
        //crc2.moveTo(30, 50);
        crc2.bezierCurveTo(randomX + 25, randomY + 120, randomX + 185, randomY + 125, randomX + 175, randomY + 50);
        crc2.bezierCurveTo(randomX + 120, randomY - 30, randomX + 50, randomY + 30, randomX + 30, randomY + 50);
        crc2.stroke();


        crc2.restore();


    }

    function drawLeaf2(): void {

        crc2.save();
        for (let i: number = 0; i < 50; i++) {

            let positionXOfLeaf: number = Math.random() * crc2.canvas.width;
            let positionYOfLeaf: number = Math.random() * crc2.canvas.height;

            console.log(positionXOfLeaf);
            console.log(positionYOfLeaf);
            

            crc2.beginPath();
            crc2.fillStyle = "#e38e00";
            crc2.rotate(10);
            crc2.ellipse(positionXOfLeaf, positionYOfLeaf, 8, 20, 10, 10, 20);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
        }
        crc2.restore();
    }

}