/*
Aufgabe: <Aufgabe 08.2_GoldenerHerbst>
Name: <Fatih Temiz>
Matrikel-Nummer: <26825>
Datum: <27.11.2021>
Quellen: W3Schools, Reinbold Deborah (Blätter)
*/

//Noch nicht ganz fertig - Eichhörnchen fehlt noch und ich werde noch Anpassungen machen, sowie mit den Farben rumspielen

namespace L09_Herbstwiese {

    export let crc2: CanvasRenderingContext2D;

    window.addEventListener("load", handleLoad);

    let golden: number = 0.62;

    let leafs: Leaf[] = [];

    let imgDataBackground: ImageData;
    let imgDataMountains: ImageData;
    let imgDataTree: ImageData;



    function handleLoad(_event: Event): void {

        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        //Goldener Schnitt
        let horizone: number = crc2.canvas.height * golden;

        //Startposition für den ersten Berg
        let startPointofFirstMountainX: number = Math.random() * (-50) - 80;

        drawBackground();
        drawMountains(startPointofFirstMountainX, horizone);
        drawTree(horizone + 50);
        //createLeaf();
        createLeaf2();

        window.setInterval(update, 20);
    }

    function drawBackground(): void {

        //Gradient für den gesamten Hintergrund
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);

        gradient.addColorStop(0, "#87CEFF");
        gradient.addColorStop(.5, "#87CEFF");
        gradient.addColorStop(.7, "green");
        gradient.addColorStop(1, "hsla(38, 100%, 37%, 0.76)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        imgDataBackground = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
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
        imgDataMountains = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
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

        let randomColor: number;


        crc2.save();

        for (let i: number = 0; i < 15; i++) {

            drawRandomTreeOnX = Math.random() * 50 + 70;

            xAdd += drawRandomTreeOnX;

            distanceAdd = Math.random() * 20 + 30;
            _treeDistanceFromEachOther += distanceAdd;

            randomColor = Math.random() * 70 + 30;


            crc2.beginPath();
            crc2.moveTo(xAdd - _treeDistanceFromEachOther, _startPositionY);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther + treeTrunkX, _startPositionY);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther + treeTrunkX, _startPositionY - treeTrunkY);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther, _startPositionY - treeTrunkY);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther, _startPositionY);
            crc2.stroke();
            crc2.fillStyle = "hsla(21, 100%, 23%, 1)";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(xAdd - _treeDistanceFromEachOther, _startPositionY - treeTrunkY);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther - treeBushX2, _startPositionY - treeBushY);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther - treeBushX2 + treeBushX3, _startPositionY - treeBushY - treeBushY2);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther + treeBushX4, _startPositionY - treeBushY);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther + treeBushX4 - treeBushX4, _startPositionY - treeBushY);
            crc2.fillStyle = "hsla(123," + randomColor + "100%, 18%, 1)";
            crc2.fill();
            crc2.stroke();
        }
        crc2.restore();
        imgDataTree = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    /*function createLeaf(): void {

        for (let i: number = 0; i < 10; i++) {

            let positionXOfLeaf: number = Math.random() * crc2.canvas.width;
            let positionYOfLeaf: number = Math.random() * crc2.canvas.height;
            let randomRotate: number = Math.random() * 180;
            let colors: string [] = ["brown", "orange"];
            let randomNumberForColor: number = Math.floor(Math.random() * 2);

            let leaf: Leaf = new Leaf(positionXOfLeaf, positionYOfLeaf, randomRotate, colors[randomNumberForColor]);
            console.log(leaf);
            
            //let leaf: Leaf = new Leaf(randomRotate);
            //leaf.positionXOfLeafAsVector.draw();
            leaf.draw();

        }

    }*/

    function createLeaf2(): void {

        for (let i: number = 0; i < 10; i++) {

            let positionXOfLeaf: number = Math.random() * crc2.canvas.width;
            let positionYOfLeaf: number = Math.random() * crc2.canvas.height;
            let randomRotate: number = Math.random() * 180;
            let colors: string[] = ["brown", "orange"];
            let randomNumberForColor: number = Math.floor(Math.random() * 2);

            let leaf: Leaf = new Leaf(positionXOfLeaf, positionYOfLeaf, randomRotate, colors[randomNumberForColor]);
            leafs.push(leaf);
            console.log(leafs);
            leaf.draw();
        }
    }

    function update(): void {

        crc2.putImageData(imgDataBackground, 0, 0);
        crc2.putImageData(imgDataMountains, 0, 0);
        crc2.putImageData(imgDataTree, 0, 0);

        /*
        for (let i: number = 0; i < 10; i++) {

            let positionXOfLeaf: number = Math.random() * crc2.canvas.width;
            let positionYOfLeaf: number = Math.random() * crc2.canvas.height;
            let randomRotate: number = Math.random() * 180;
            let colors: string[] = ["brown", "orange"];
            let randomNumberForColor: number = Math.floor(Math.random() * 2);

            let leaf: Leaf = new Leaf(positionXOfLeaf, positionYOfLeaf, randomRotate, colors[randomNumberForColor]);
            leafs.push(leaf);
            console.log(leafs);
        }

        for (let i: number = 0; i < leafs.length; i++) {

            let positionXOfLeaf: number = Math.random() * crc2.canvas.width;
            let positionYOfLeaf: number = Math.random() * crc2.canvas.height;
            let randomRotate: number = Math.random() * 180;
            let colors: string[] = ["brown", "orange"];
            let randomNumberForColor: number = Math.floor(Math.random() * 2);

            let leaf: Leaf = new Leaf(positionXOfLeaf, positionYOfLeaf, randomRotate, colors[randomNumberForColor]);
            
            leaf.move(1 / 50);
            leaf.draw();
        }
        */

        
        for (let leaf of leafs) {

            leaf.move(1 / 50);
            leaf.draw();
        }


    }

}