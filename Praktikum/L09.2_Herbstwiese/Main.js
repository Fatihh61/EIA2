"use strict";
/*
Aufgabe: <Aufgabe 08.2_GoldenerHerbst>
Name: <Fatih Temiz>
Matrikel-Nummer: <26825>
Datum: <27.11.2021>
Quellen: W3Schools, Reinbold Deborah (Blätter)
*/
//Noch nicht ganz fertig - Eichhörnchen fehlt noch und ich werde noch Anpassungen machen, sowie mit den Farben rumspielen
var L09_Herbstwiese;
(function (L09_Herbstwiese) {
    window.addEventListener("load", handleLoad);
    let golden = 0.62;
    let leafs = [];
    let imgDataBackground;
    let imgDataMountains;
    let imgDataTree;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        L09_Herbstwiese.crc2 = canvas.getContext("2d");
        //Goldener Schnitt
        let horizone = L09_Herbstwiese.crc2.canvas.height * golden;
        //Startposition für den ersten Berg
        let startPointofFirstMountainX = Math.random() * (-50) - 80;
        drawBackground();
        drawMountains(startPointofFirstMountainX, horizone);
        drawTree(horizone + 50);
        //createLeaf();
        createLeaf2();
        window.setInterval(update, 20);
    }
    function drawBackground() {
        //Gradient für den gesamten Hintergrund
        let gradient = L09_Herbstwiese.crc2.createLinearGradient(0, 0, 0, L09_Herbstwiese.crc2.canvas.height);
        gradient.addColorStop(0, "#87CEFF");
        gradient.addColorStop(.5, "#87CEFF");
        gradient.addColorStop(.7, "green");
        gradient.addColorStop(1, "hsla(38, 100%, 37%, 0.76)");
        L09_Herbstwiese.crc2.fillStyle = gradient;
        L09_Herbstwiese.crc2.fillRect(0, 0, L09_Herbstwiese.crc2.canvas.width, L09_Herbstwiese.crc2.canvas.height);
        imgDataBackground = L09_Herbstwiese.crc2.getImageData(0, 0, L09_Herbstwiese.crc2.canvas.width, L09_Herbstwiese.crc2.canvas.height);
    }
    function drawMountains(_startPointFirstMountainX, _horizoneY) {
        //Gradient für die Berge
        let gradient = L09_Herbstwiese.crc2.createLinearGradient(0, 150, 0, _horizoneY);
        gradient.addColorStop(1, "grey");
        gradient.addColorStop(0, "white");
        let x = 0;
        let drawLineRandomX = 0;
        L09_Herbstwiese.crc2.save();
        //Beginn der Zeichnung für die Berge
        for (let i = 8; i > 0; i--) {
            //Zufällige Zahl für Zeichnung in X und Y Richtung
            drawLineRandomX = Math.random() * 50 + 100;
            let drawLineRandomY = Math.random() * 80 + 50;
            x += drawLineRandomX;
            L09_Herbstwiese.crc2.beginPath();
            L09_Herbstwiese.crc2.moveTo(_startPointFirstMountainX, _horizoneY);
            L09_Herbstwiese.crc2.strokeStyle = "grey";
            L09_Herbstwiese.crc2.lineWidth = 2;
            L09_Herbstwiese.crc2.lineTo(x - 50, drawLineRandomY);
            L09_Herbstwiese.crc2.lineTo(x + 150, _horizoneY);
            L09_Herbstwiese.crc2.fillStyle = gradient;
            L09_Herbstwiese.crc2.fill();
        }
        L09_Herbstwiese.crc2.closePath();
        L09_Herbstwiese.crc2.restore();
        imgDataMountains = L09_Herbstwiese.crc2.getImageData(0, 0, L09_Herbstwiese.crc2.canvas.width, L09_Herbstwiese.crc2.canvas.height);
    }
    function drawTree(_startPositionY) {
        let treeTrunkX = 25;
        let treeTrunkY = 50;
        let treeBushX2 = 25;
        let treeBushX3 = 37.5;
        let treeBushX4 = 50;
        let treeBushY = 50;
        let treeBushY2 = 75;
        let xAdd = 0;
        let drawRandomTreeOnX;
        let _treeDistanceFromEachOther = 0;
        let distanceAdd;
        let randomColor;
        L09_Herbstwiese.crc2.save();
        for (let i = 0; i < 15; i++) {
            drawRandomTreeOnX = Math.random() * 50 + 70;
            xAdd += drawRandomTreeOnX;
            distanceAdd = Math.random() * 20 + 30;
            _treeDistanceFromEachOther += distanceAdd;
            randomColor = Math.random() * 70 + 30;
            L09_Herbstwiese.crc2.beginPath();
            L09_Herbstwiese.crc2.moveTo(xAdd - _treeDistanceFromEachOther, _startPositionY);
            L09_Herbstwiese.crc2.lineTo(xAdd - _treeDistanceFromEachOther + treeTrunkX, _startPositionY);
            L09_Herbstwiese.crc2.lineTo(xAdd - _treeDistanceFromEachOther + treeTrunkX, _startPositionY - treeTrunkY);
            L09_Herbstwiese.crc2.lineTo(xAdd - _treeDistanceFromEachOther, _startPositionY - treeTrunkY);
            L09_Herbstwiese.crc2.lineTo(xAdd - _treeDistanceFromEachOther, _startPositionY);
            L09_Herbstwiese.crc2.stroke();
            L09_Herbstwiese.crc2.fillStyle = "hsla(21, 100%, 23%, 1)";
            L09_Herbstwiese.crc2.fill();
            L09_Herbstwiese.crc2.closePath();
            L09_Herbstwiese.crc2.beginPath();
            L09_Herbstwiese.crc2.moveTo(xAdd - _treeDistanceFromEachOther, _startPositionY - treeTrunkY);
            L09_Herbstwiese.crc2.lineTo(xAdd - _treeDistanceFromEachOther - treeBushX2, _startPositionY - treeBushY);
            L09_Herbstwiese.crc2.lineTo(xAdd - _treeDistanceFromEachOther - treeBushX2 + treeBushX3, _startPositionY - treeBushY - treeBushY2);
            L09_Herbstwiese.crc2.lineTo(xAdd - _treeDistanceFromEachOther + treeBushX4, _startPositionY - treeBushY);
            L09_Herbstwiese.crc2.lineTo(xAdd - _treeDistanceFromEachOther + treeBushX4 - treeBushX4, _startPositionY - treeBushY);
            L09_Herbstwiese.crc2.fillStyle = "hsla(123," + randomColor + "100%, 18%, 1)";
            L09_Herbstwiese.crc2.fill();
            L09_Herbstwiese.crc2.stroke();
        }
        L09_Herbstwiese.crc2.restore();
        imgDataTree = L09_Herbstwiese.crc2.getImageData(0, 0, L09_Herbstwiese.crc2.canvas.width, L09_Herbstwiese.crc2.canvas.height);
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
    function createLeaf2() {
        for (let i = 0; i < 10; i++) {
            let positionXOfLeaf = Math.random() * L09_Herbstwiese.crc2.canvas.width;
            let positionYOfLeaf = Math.random() * L09_Herbstwiese.crc2.canvas.height;
            let randomRotate = Math.random() * 180;
            let colors = ["brown", "orange"];
            let randomNumberForColor = Math.floor(Math.random() * 2);
            let leaf = new L09_Herbstwiese.Leaf(positionXOfLeaf, positionYOfLeaf, randomRotate, colors[randomNumberForColor]);
            leafs.push(leaf);
            console.log(leafs);
            leaf.draw();
        }
    }
    function update() {
        L09_Herbstwiese.crc2.putImageData(imgDataBackground, 0, 0);
        L09_Herbstwiese.crc2.putImageData(imgDataMountains, 0, 0);
        L09_Herbstwiese.crc2.putImageData(imgDataTree, 0, 0);
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
})(L09_Herbstwiese || (L09_Herbstwiese = {}));
//# sourceMappingURL=Main.js.map