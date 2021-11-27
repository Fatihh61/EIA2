"use strict";
var L08_GoldenerHerbst;
(function (L08_GoldenerHerbst) {
    let crc2;
    window.addEventListener("load", handleLoad);
    let golden = 0.62;
    function handleLoad() {
        //Canvas Element Zugriff
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        //Goldener Schnitt
        let horizone = crc2.canvas.height * golden;
        //Startposition für den ersten Berg
        let startPointofFirstMountainX = Math.random() * (-50) - 80;
        drawBackGround();
        drawCloud();
        drawMountains(startPointofFirstMountainX, horizone);
        //drawTree(0, horizone - 50);
        drawTree2(horizone + 50);
        //drawField(0, horizone + 150);
    }
    function drawBackGround() {
        //Gradient für den gesamten Hintergrund
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#87CEFF");
        gradient.addColorStop(.5, "white");
        gradient.addColorStop(1, "green");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawCloud() {
        //Path2D für die Wolkenpartikel
        let clouds = new Path2D();
        //Gradient für die Wolkenpartikel
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 50);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0.07)");
        crc2.save();
        for (let i = 30; i > 0; i--) {
            let numbX = Math.random() * 100 + 650;
            let numbY = Math.random() * 100 + 50;
            let translateX = Math.random() * (-4.5) + (-3.5);
            let translateY = Math.random() * (-0.2);
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
    function drawMountains(_startPointFirstMountainX, _horizoneY) {
        //Gradient für die Berge
        let gradient = crc2.createLinearGradient(0, 150, 0, _horizoneY);
        gradient.addColorStop(1, "grey");
        gradient.addColorStop(0, "white");
        let x = 0;
        let drawLineRandomX = 0;
        //debugger;
        crc2.save();
        //Beginn der Zeichnung für die Berge
        for (let i = 8; i > 0; i--) {
            //Zufällige Zahl für Zeichnung in X und Y Richtung
            drawLineRandomX = Math.random() * 50 + 100;
            let drawLineRandomY = Math.random() * 80 + 50;
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
    function drawTree(_startPositionX, _startPositionY) {
        crc2.save();
        crc2.fillStyle = "brown";
        crc2.fillRect(_startPositionX + 100, _startPositionY, 20, 70);
        crc2.restore();
        crc2.save();
        crc2.beginPath();
        crc2.strokeStyle = "green";
        crc2.moveTo(_startPositionX + 100, _startPositionY);
        crc2.lineTo(-10, 0);
        crc2.lineTo(10, 20);
        crc2.lineTo(5, 20);
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.closePath();
        crc2.restore();
    }
    function drawField(_startPositionX, _startPositionY) {
        crc2.save();
        crc2.fillStyle = "green";
        crc2.fillRect(_startPositionX, _startPositionY, 800, 78);
        crc2.restore();
    }
    function drawTree2(_startPositionY) {
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
        crc2.save;
        for (let i = 0; i < 15; i++) {
            drawRandomTreeOnX = Math.random() * 50 + 70;
            xAdd += drawRandomTreeOnX;
            distanceAdd = Math.random() * 20 + 30;
            _treeDistanceFromEachOther += distanceAdd;
            console.log(distanceAdd);
            console.log(_treeDistanceFromEachOther);
            console.log(drawRandomTreeOnX);
            console.log(xAdd);
            crc2.beginPath();
            crc2.moveTo(xAdd - _treeDistanceFromEachOther, _startPositionY);
            console.log(xAdd - _treeDistanceFromEachOther, _startPositionY);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther + treeTrunkX, _startPositionY);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther + treeTrunkX, _startPositionY - treeTrunkY);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther, _startPositionY - treeTrunkY);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther, _startPositionY);
            crc2.stroke();
            crc2.fillStyle = "brown";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(xAdd - _treeDistanceFromEachOther, _startPositionY - treeTrunkY);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther - treeBushX2, _startPositionY - treeBushY);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther - treeBushX2 + treeBushX3, _startPositionY - treeBushY - treeBushY2);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther + treeBushX4, _startPositionY - treeBushY);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther + treeBushX4 - treeBushX4, _startPositionY - treeBushY);
            crc2.fillStyle = "darkgreen";
            crc2.fill();
            crc2.stroke();
        }
        /*
        crc2.lineTo(_startPositionX + treeTrunkX, _startPositionY - 50);
        crc2.lineTo(_startPositionX + treeTrunkX + treeTrunkX, _startPositionY - 50);
        crc2.lineTo(_startPositionX + treeTrunkX - treeBushX , _startPositionY - 50 - treeBushY);
        //Hälfte des Baumes fertig
        crc2.lineTo(_startPositionX + treeTrunkX - treeBushX2 , _startPositionY - 50);
        crc2.stroke();
        */
        crc2.restore;
    }
})(L08_GoldenerHerbst || (L08_GoldenerHerbst = {}));
//# sourceMappingURL=script.js.map