"use strict";
var L08_CanvasAufgabe;
(function (L08_CanvasAufgabe) {
    let crc2;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        crc2.fillStyle = "blue";
        crc2.fillRect(0, 0, 1300, 600);
        //drawRandomObjects();
        //drawRectangle();
        //drawMiniCircles();
        drawRandom();
    }
    function drawRectangle() {
        for (let i = 0; i < 100; i++) {
            let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            let randomNumberX = Math.random() * 1000;
            let randomNumberY = Math.random() * 200;
            crc2.transform(1, 0.5, -0.5, 1, 500, 30);
            crc2.fillStyle = randomColor;
            crc2.scale(0.5, 0.5);
            crc2.fillRect(randomNumberX, randomNumberY, 250, 100);
            crc2.transform(1, 0.5, -0.5, 1, 60, 30);
            crc2.fillStyle = randomColor;
            crc2.fillRect(randomNumberX, randomNumberY, 250, 100);
            crc2.transform(1, 0.5, -0.5, 1, 60, 30);
            crc2.fillStyle = randomColor;
            crc2.fillRect(randomNumberX, randomNumberY, 250, 100);
            crc2.transform(1, 0.5, -0.5, 1, 60, 30);
            crc2.fillStyle = randomColor;
            crc2.fillRect(randomNumberX, randomNumberY, 250, 100);
        }
    }
    function drawRandomObjects() {
        let arrayWidth = [100, 200, 300, 400, 500, 600];
        let arrayHeight = [100, 200, 300, 400, 500, 600];
        for (let i = 75; i > 0; i--) {
            let randomNumberX = Math.random() * 1000;
            let randomNumberY = Math.random() * 600;
            let randomNumberXCircle = Math.random() * 1000;
            let randomNumberYCircle = Math.random() * 600;
            let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            let randomColorStroke = "#" + Math.floor(Math.random() * 16777215).toString(16);
            crc2.beginPath();
            crc2.fillStyle = randomColor;
            crc2.strokeStyle = randomColorStroke;
            crc2.moveTo(randomNumberX, randomNumberY);
            crc2.lineTo(randomNumberX, randomNumberY + 70);
            crc2.lineTo(randomNumberX + 80, randomNumberY + 35);
            crc2.closePath();
            crc2.lineWidth = 4;
            crc2.scale(1.1, 1.1);
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = randomColor;
            crc2.strokeStyle = randomColorStroke;
            crc2.arc(randomNumberXCircle, randomNumberYCircle, 50, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
        }
    }
    function drawRandom() {
        let arrayWidth = [100, 200, 300, 400, 500, 600];
        let arrayHeight = [100, 200, 300, 400, 500, 600];
        crc2.save();
        for (let i = 40; i > 0; i--) {
            let randomNumberX = Math.random() * 1000;
            let randomNumberY = Math.random() * 600;
            let randomNumberXCircle = Math.random() * 1000;
            let randomNumberYCircle = Math.random() * 600;
            let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            let randomColorStroke = "#" + Math.floor(Math.random() * 16777215).toString(16);
            crc2.beginPath();
            crc2.fillRect(0, 0, 200, 150);
            crc2.translate(50, 0);
            crc2.fillRect(0, 0, 200, 150);
            crc2.fillStyle = randomColor;
            crc2.strokeStyle = randomColorStroke;
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
        }
        crc2.restore();
        crc2.save();
        for (let i = 40; i > 0; i--) {
            let randomNumberX = Math.random() * 1000;
            let randomNumberY = Math.random() * 600;
            let randomNumberXCircle = Math.random() * 1000;
            let randomNumberYCircle = Math.random() * 600;
            let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            let randomColorStroke = "#" + Math.floor(Math.random() * 16777215).toString(16);
            debugger;
            crc2.beginPath();
            crc2.fillRect(0, 150, 200, 150);
            crc2.translate(50, 0);
            crc2.fillRect(0, 150, 200, 150);
            crc2.fillStyle = randomColor;
            crc2.strokeStyle = randomColorStroke;
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
        }
        crc2.restore();
        crc2.restore();
        crc2.save();
        for (let i = 40; i > 0; i--) {
            let randomNumberX = Math.random() * 1000;
            let randomNumberY = Math.random() * 600;
            let randomNumberXCircle = Math.random() * 1000;
            let randomNumberYCircle = Math.random() * 600;
            let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            let randomColorStroke = "#" + Math.floor(Math.random() * 16777215).toString(16);
            debugger;
            crc2.beginPath();
            crc2.fillRect(0, 300, 200, 150);
            crc2.translate(50, 0);
            crc2.fillRect(0, 300, 200, 150);
            crc2.fillStyle = randomColor;
            crc2.strokeStyle = randomColorStroke;
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
        }
        crc2.restore();
        for (let i = 40; i > 0; i--) {
            let randomNumberX = Math.random() * 1000;
            let randomNumberY = Math.random() * 600;
            let randomNumberXCircle = Math.random() * 1000;
            let randomNumberYCircle = Math.random() * 600;
            let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            let randomColorStroke = "#" + Math.floor(Math.random() * 16777215).toString(16);
            debugger;
            crc2.beginPath();
            crc2.fillRect(0, 450, 200, 150);
            crc2.translate(50, 0);
            crc2.fillRect(0, 450, 200, 150);
            crc2.fillStyle = randomColor;
            crc2.strokeStyle = randomColorStroke;
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
        }
        crc2.restore();
    }
    function drawMiniCircles() {
        let arrayWidth = [100, 200, 300, 400, 500, 600];
        let arrayHeight = [100, 200, 300, 400, 500, 600];
        crc2.beginPath();
        crc2.fillStyle = "white";
        crc2.fillRect(320, 100, 600, 450);
        crc2.closePath();
        for (let i = 150; i > 0; i--) {
            let randomNumberX = Math.random() * 1000;
            let randomNumberY = Math.random() * 600;
            let randomNumberScale;
            let randomNumberCircleX = Math.random() * 450;
            let randomNumberCircleY = Math.random() * 350;
            let numbX = randomNumberCircleX + 400;
            let numbY = randomNumberCircleY + 150;
            let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            let randomColorStroke = "#" + Math.floor(Math.random() * 16777215).toString(16);
            //debugger;
            crc2.beginPath();
            crc2.fillStyle = randomColor;
            crc2.strokeStyle = randomColorStroke;
            crc2.arc(numbX, numbY, 50, 0, 2 * Math.PI);
            crc2.lineWidth = 4;
            crc2.fill();
            crc2.scale(1, 1);
            crc2.stroke();
            crc2.closePath();
        }
    }
    /*
    crc3.beginPath();
    //Arc erstellt Bogen/Kurven, x/y = x/y Koordinate für Zentrum des Zirkels, r = Radius des Zirkels (also Größe), sAngle = Startwinkel, eAngle = Endwinkel
    crc3.arc(180, 50, 30, 20, 5 * Math.PI);
    //Beendet den begonnen Pfad und verbindet Startpunkt mit Endpunkt
    crc3.closePath();
    //Zeichnet Kontur des Pfades
    crc3.stroke();
    */
    /*
 
    crc3.beginPath();
    crc3.arc(300, 200, 50, 0, 2 * Math.PI);
    crc3.fillStyle = "#006400";
    crc3.stroke();
    crc3.closePath();
 
    */
})(L08_CanvasAufgabe || (L08_CanvasAufgabe = {}));
//# sourceMappingURL=script.js.map