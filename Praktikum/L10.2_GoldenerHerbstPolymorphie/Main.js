"use strict";
/*
Aufgabe: <Aufgabe 11.1_GoldenerHerbstAdvanced>
Name: <Fatih Temiz>
Matrikel-Nummer: <26825>
Datum: <15.01.2022>
Quellen: Eyüp Öcal, David Eichler (Konzept)
*/
//Das mit der Teleportation des Eichhörnchen konnte ich leider nicht lösen
var L10_HerbstwiesePolymorphie;
(function (L10_HerbstwiesePolymorphie) {
    window.addEventListener("load", handleLoad);
    let golden = 0.62;
    let moveables = [];
    let squirrelArray = [];
    let nutArray = [];
    let positionArray = [];
    let isPressed = false;
    let cloudAsSubclass;
    let hazelnutObject;
    let squirrelAsSubclass;
    let imgDataBackground;
    let imgDataSun;
    let imgDataSunNight;
    let imgDataMountains;
    let imgDataTree;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        L10_HerbstwiesePolymorphie.crc2 = canvas.getContext("2d");
        //Goldener Schnitt
        let horizone = L10_HerbstwiesePolymorphie.crc2.canvas.height * golden;
        //Startposition für den ersten Berg
        let startPointofFirstMountainX = Math.random() * (-50) - 80;
        drawBackground();
        drawSun(150, 150);
        createCloud();
        drawMountains(startPointofFirstMountainX, horizone);
        drawTree(horizone + 50);
        createSquirrel();
        createLeaf();
        canvas.addEventListener("mousedown", createHazelnut);
        window.setInterval(update, 20);
        drawSunNight(150, 150);
        document.addEventListener("keypress", changeSun);
    }
    function drawBackground() {
        //Gradient für den gesamten Hintergrund
        let gradient = L10_HerbstwiesePolymorphie.crc2.createLinearGradient(0, 0, 0, L10_HerbstwiesePolymorphie.crc2.canvas.height);
        gradient.addColorStop(0, "#87CEFF");
        gradient.addColorStop(.5, "#87CEFF");
        gradient.addColorStop(.7, "green");
        gradient.addColorStop(1, "hsla(38, 100%, 37%, 0.76)");
        L10_HerbstwiesePolymorphie.crc2.fillStyle = gradient;
        L10_HerbstwiesePolymorphie.crc2.fillRect(0, 0, L10_HerbstwiesePolymorphie.crc2.canvas.width, L10_HerbstwiesePolymorphie.crc2.canvas.height);
        imgDataBackground = L10_HerbstwiesePolymorphie.crc2.getImageData(0, 0, L10_HerbstwiesePolymorphie.crc2.canvas.width, L10_HerbstwiesePolymorphie.crc2.canvas.height);
    }
    function drawSun(_positionX, _positionY) {
        let r1 = 30;
        let r2 = 120;
        let gradient = L10_HerbstwiesePolymorphie.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "yellow");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L10_HerbstwiesePolymorphie.crc2.save();
        L10_HerbstwiesePolymorphie.crc2.translate(_positionX, _positionY);
        L10_HerbstwiesePolymorphie.crc2.fillStyle = gradient;
        L10_HerbstwiesePolymorphie.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L10_HerbstwiesePolymorphie.crc2.fill();
        L10_HerbstwiesePolymorphie.crc2.restore();
        imgDataSun = L10_HerbstwiesePolymorphie.crc2.getImageData(0, 0, L10_HerbstwiesePolymorphie.crc2.canvas.width, L10_HerbstwiesePolymorphie.crc2.canvas.height);
    }
    function drawMountains(_startPointFirstMountainX, _horizoneY) {
        //Gradient für die Berge
        let gradient = L10_HerbstwiesePolymorphie.crc2.createLinearGradient(0, 150, 0, _horizoneY);
        gradient.addColorStop(1, "grey");
        gradient.addColorStop(0, "white");
        let x = 0;
        let drawLineRandomX = 0;
        L10_HerbstwiesePolymorphie.crc2.save();
        for (let i = 8; i > 0; i--) {
            //Zufällige Zahl für Zeichnung in X und Y Richtung
            drawLineRandomX = Math.random() * 50 + 100;
            let drawLineRandomY = Math.random() * 80 + 50;
            x += drawLineRandomX;
            L10_HerbstwiesePolymorphie.crc2.beginPath();
            L10_HerbstwiesePolymorphie.crc2.moveTo(_startPointFirstMountainX, _horizoneY);
            L10_HerbstwiesePolymorphie.crc2.strokeStyle = "grey";
            L10_HerbstwiesePolymorphie.crc2.lineWidth = 2;
            L10_HerbstwiesePolymorphie.crc2.lineTo(x - 50, drawLineRandomY);
            L10_HerbstwiesePolymorphie.crc2.lineTo(x + 150, _horizoneY);
            L10_HerbstwiesePolymorphie.crc2.fillStyle = gradient;
            L10_HerbstwiesePolymorphie.crc2.fill();
        }
        L10_HerbstwiesePolymorphie.crc2.closePath();
        L10_HerbstwiesePolymorphie.crc2.restore();
        imgDataMountains = L10_HerbstwiesePolymorphie.crc2.getImageData(0, 0, L10_HerbstwiesePolymorphie.crc2.canvas.width, L10_HerbstwiesePolymorphie.crc2.canvas.height);
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
        L10_HerbstwiesePolymorphie.crc2.save();
        for (let i = 0; i < 15; i++) {
            drawRandomTreeOnX = Math.random() * 50 + 70;
            xAdd += drawRandomTreeOnX;
            distanceAdd = Math.random() * 20 + 30;
            _treeDistanceFromEachOther += distanceAdd;
            randomColor = Math.random() * 70 + 30;
            L10_HerbstwiesePolymorphie.crc2.beginPath();
            L10_HerbstwiesePolymorphie.crc2.moveTo(xAdd - _treeDistanceFromEachOther, _startPositionY);
            L10_HerbstwiesePolymorphie.crc2.lineTo(xAdd - _treeDistanceFromEachOther + treeTrunkX, _startPositionY);
            L10_HerbstwiesePolymorphie.crc2.lineTo(xAdd - _treeDistanceFromEachOther + treeTrunkX, _startPositionY - treeTrunkY);
            L10_HerbstwiesePolymorphie.crc2.lineTo(xAdd - _treeDistanceFromEachOther, _startPositionY - treeTrunkY);
            L10_HerbstwiesePolymorphie.crc2.lineTo(xAdd - _treeDistanceFromEachOther, _startPositionY);
            L10_HerbstwiesePolymorphie.crc2.stroke();
            L10_HerbstwiesePolymorphie.crc2.fillStyle = "hsla(21, 100%, 23%, 1)";
            L10_HerbstwiesePolymorphie.crc2.fill();
            L10_HerbstwiesePolymorphie.crc2.closePath();
            L10_HerbstwiesePolymorphie.crc2.beginPath();
            L10_HerbstwiesePolymorphie.crc2.moveTo(xAdd - _treeDistanceFromEachOther, _startPositionY - treeTrunkY);
            L10_HerbstwiesePolymorphie.crc2.lineTo(xAdd - _treeDistanceFromEachOther - treeBushX2, _startPositionY - treeBushY);
            L10_HerbstwiesePolymorphie.crc2.lineTo(xAdd - _treeDistanceFromEachOther - treeBushX2 + treeBushX3, _startPositionY - treeBushY - treeBushY2);
            L10_HerbstwiesePolymorphie.crc2.lineTo(xAdd - _treeDistanceFromEachOther + treeBushX4, _startPositionY - treeBushY);
            L10_HerbstwiesePolymorphie.crc2.lineTo(xAdd - _treeDistanceFromEachOther + treeBushX4 - treeBushX4, _startPositionY - treeBushY);
            L10_HerbstwiesePolymorphie.crc2.fillStyle = "hsla(123," + randomColor + "100%, 18%, 1)";
            L10_HerbstwiesePolymorphie.crc2.fill();
            L10_HerbstwiesePolymorphie.crc2.stroke();
        }
        L10_HerbstwiesePolymorphie.crc2.restore();
        imgDataTree = L10_HerbstwiesePolymorphie.crc2.getImageData(0, 0, L10_HerbstwiesePolymorphie.crc2.canvas.width, L10_HerbstwiesePolymorphie.crc2.canvas.height);
    }
    function createLeaf() {
        for (let i = 0; i < 20; i++) {
            let colors = ["brown", "orange"];
            let randomNumberForColor = Math.floor(Math.random() * 2);
            let randomLeafType = Math.floor(Math.random() * 2);
            let leaf = new L10_HerbstwiesePolymorphie.Leaf(colors[randomNumberForColor], randomLeafType);
            moveables.push(leaf);
            //leaf.draw();
        }
    }
    function createCloud() {
        cloudAsSubclass = new L10_HerbstwiesePolymorphie.Cloud();
        moveables.push(cloudAsSubclass);
    }
    function createHazelnut(_event) {
        let positionX = _event.clientX;
        let positionY = _event.clientY;
        positionArray.push(positionX);
        positionArray.push(positionY);
        hazelnutObject = new L10_HerbstwiesePolymorphie.Hazelnut(_event.clientX, _event.clientY);
        moveables.push(hazelnutObject);
        nutArray.push(hazelnutObject);
        console.log(nutArray);
        // createSquirrel();
        if (squirrelArray.length == nutArray.length) {
            for (let i = 0; i <= positionArray.length; i++) {
                squirrelAsSubclass.changePosition(positionArray[0], positionArray[1]);
                // squirrelAsSubclass.position.x = positionArray[i];
                console.log(squirrelAsSubclass.position.x);
                i++;
                // squirrelAsSubclass.position.y = positionArray[i];
                console.log(squirrelAsSubclass.position.y);
            }
        }
    }
    function createSquirrel() {
        squirrelAsSubclass = new L10_HerbstwiesePolymorphie.Squirrel;
        moveables.push(squirrelAsSubclass);
        squirrelArray.push(squirrelAsSubclass);
        // squirrelArray.splice(1, 1);
        console.log(squirrelArray);
        // if (squirrelArray.length == nutArray.length) {
        //     for (let i: number = 0; i <= positionArray.length; i++) {
        //         squirrelAsSubclass.changePosition(positionArray[0], positionArray[1]);
        //         // squirrelAsSubclass.position.x = positionArray[i];
        //         console.log(squirrelAsSubclass.position.x);
        //         i++;
        //         // squirrelAsSubclass.position.y = positionArray[i];
        //         console.log(squirrelAsSubclass.position.y);
        //     }
        // }
    }
    function drawSunNight(_positionX, _positionY) {
        if (isPressed == true) {
            let r1 = 30;
            let r2 = 120;
            let gradient = L10_HerbstwiesePolymorphie.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "black");
            gradient.addColorStop(1, "HSLA(30, 100%, 50%, 0)");
            L10_HerbstwiesePolymorphie.crc2.save();
            L10_HerbstwiesePolymorphie.crc2.translate(_positionX, _positionY);
            L10_HerbstwiesePolymorphie.crc2.fillStyle = gradient;
            L10_HerbstwiesePolymorphie.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            L10_HerbstwiesePolymorphie.crc2.fill();
            L10_HerbstwiesePolymorphie.crc2.restore();
        }
    }
    function update() {
        if (isPressed == false) {
            L10_HerbstwiesePolymorphie.crc2.putImageData(imgDataBackground, 0, 0);
            L10_HerbstwiesePolymorphie.crc2.putImageData(imgDataSun, 0, 0);
            L10_HerbstwiesePolymorphie.crc2.putImageData(imgDataMountains, 0, 0);
            L10_HerbstwiesePolymorphie.crc2.putImageData(imgDataTree, 0, 0);
            //crc2.putImageData(imgDataHazelnut, 0, 0);
            console.log("Ist noch bei false");
        }
        else if (isPressed == true) {
            L10_HerbstwiesePolymorphie.crc2.putImageData(imgDataBackground, 0, 0);
            drawSunNight(150, 150);
            // crc2.putImageData(imgDataSunNight, 0, 0);
            L10_HerbstwiesePolymorphie.crc2.putImageData(imgDataMountains, 0, 0);
            L10_HerbstwiesePolymorphie.crc2.putImageData(imgDataTree, 0, 0);
            console.log("Gewechselt auf true");
            //drawSunNight(150, 150);
        }
        for (let i = 0; i < moveables.length; i++) {
            moveables[i].move(1 / 50, 0);
            moveables[i].draw();
        }
    }
    function changeSun(_event) {
        isPressed = true;
        console.log("isPressed = true");
    }
})(L10_HerbstwiesePolymorphie || (L10_HerbstwiesePolymorphie = {}));
//# sourceMappingURL=Main.js.map