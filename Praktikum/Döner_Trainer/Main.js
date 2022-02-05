"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    window.addEventListener("load", handleLoad);
    let form;
    let humans = [];
    let employeeValue;
    let customerValue;
    let formData;
    let allInputElements;
    let allSelectElements;
    function handleLoad(_event) {
        let startButton = document.querySelector("#startButton");
        startButton.addEventListener("click", loadCanvas);
    }
    function loadCanvas(_event) {
        let canvas = document.querySelector("canvas");
        Döner_Trainer.crc2 = canvas.getContext("2d");
        form = document.querySelector("form");
        form.classList.add("isHidden");
        canvas.classList.remove("isHidden");
        Döner_Trainer.crc2.save();
        Döner_Trainer.crc2.lineWidth = 10;
        Döner_Trainer.crc2.strokeStyle = "black";
        Döner_Trainer.crc2.strokeRect(0, 0, 800, 600);
        Döner_Trainer.crc2.restore();
        drawKebabHouse();
        createEmployee();
    }
    function drawKebabHouse() {
        //Rechteck innerhalb der Küche
        Döner_Trainer.crc2.save();
        Döner_Trainer.crc2.beginPath();
        Döner_Trainer.crc2.lineWidth = 4;
        Döner_Trainer.crc2.strokeRect(200, 100, 500, 250);
        Döner_Trainer.crc2.strokeStyle = "black";
        Döner_Trainer.crc2.closePath();
        Döner_Trainer.crc2.restore();
        //Theke1
        Döner_Trainer.crc2.save();
        Döner_Trainer.crc2.beginPath();
        Döner_Trainer.crc2.moveTo(700, 100);
        Döner_Trainer.crc2.lineTo(800, 100);
        Döner_Trainer.crc2.moveTo(700, 350);
        Döner_Trainer.crc2.lineTo(800, 350);
        Döner_Trainer.crc2.lineWidth = 4;
        Döner_Trainer.crc2.fillStyle = "#5b3a29";
        Döner_Trainer.crc2.strokeStyle = "black";
        Döner_Trainer.crc2.stroke();
        Döner_Trainer.crc2.fill();
        Döner_Trainer.crc2.closePath();
        Döner_Trainer.crc2.restore();
        //Theke2
        Döner_Trainer.crc2.save();
        Döner_Trainer.crc2.beginPath();
        Döner_Trainer.crc2.lineWidth = 4;
        Döner_Trainer.crc2.strokeRect(0, 350, 800, 125);
        Döner_Trainer.crc2.strokeStyle = "black";
        Döner_Trainer.crc2.closePath();
        Döner_Trainer.crc2.restore();
        //Dönerspieß
        Döner_Trainer.crc2.save();
        Döner_Trainer.crc2.beginPath();
        Döner_Trainer.crc2.lineWidth = 3;
        Döner_Trainer.crc2.fillStyle = "#b47636";
        Döner_Trainer.crc2.arc(100, 225, 30, 0, 2 * Math.PI);
        Döner_Trainer.crc2.fill();
        Döner_Trainer.crc2.stroke();
        Döner_Trainer.crc2.closePath();
        Döner_Trainer.crc2.restore();
        Döner_Trainer.crc2.save();
        Döner_Trainer.crc2.beginPath();
        Döner_Trainer.crc2.fillStyle = "black";
        Döner_Trainer.crc2.arc(100, 225, 1, 0, 2 * Math.PI);
        Döner_Trainer.crc2.fill();
        Döner_Trainer.crc2.closePath();
        Döner_Trainer.crc2.restore();
        //Behälter für Ersatzzutaten
        let positionOfErsatzbehälter = 0;
        let numberAdditionErsatzbehälter = 100;
        for (let i = 0; i <= 4; i++) {
            Döner_Trainer.crc2.save();
            Döner_Trainer.crc2.beginPath();
            Döner_Trainer.crc2.lineWidth = 2;
            Döner_Trainer.crc2.strokeRect(225 + positionOfErsatzbehälter, 25, 50, 50);
            positionOfErsatzbehälter += numberAdditionErsatzbehälter;
            Döner_Trainer.crc2.closePath();
            Döner_Trainer.crc2.restore();
        }
        //Behälter für Zutaten
        Döner_Trainer.crc2.save();
        let positionOfBehälter = 0;
        let numberAdditionBehälter = 100;
        for (let i = 0; i <= 4; i++) {
            Döner_Trainer.crc2.save();
            Döner_Trainer.crc2.beginPath();
            Döner_Trainer.crc2.lineWidth = 2;
            Döner_Trainer.crc2.ellipse(245 + positionOfBehälter, 415, 23, 30, 0, 0, 2 * Math.PI);
            Döner_Trainer.crc2.strokeStyle = "black";
            Döner_Trainer.crc2.stroke();
            positionOfBehälter += numberAdditionBehälter;
            Döner_Trainer.crc2.closePath();
            Döner_Trainer.crc2.restore();
        }
        //"Hallo" Matte
        Döner_Trainer.crc2.save();
        Döner_Trainer.crc2.beginPath();
        Döner_Trainer.crc2.lineWidth = 3;
        Döner_Trainer.crc2.fillStyle = "#B8860B";
        Döner_Trainer.crc2.strokeStyle = "black";
        Döner_Trainer.crc2.fillRect(50, 525, 75, 50);
        Döner_Trainer.crc2.strokeRect(50, 525, 75, 50);
        Döner_Trainer.crc2.fill();
        Döner_Trainer.crc2.stroke();
        Döner_Trainer.crc2.fillStyle = "black";
        Döner_Trainer.crc2.font = "25px Arial";
        Döner_Trainer.crc2.fillText("Hallo", 57, 558);
        Döner_Trainer.crc2.restore();
    }
    function createEmployee() {
        //FormData wird übertragen
        formData = new FormData(document.forms[0]);
        //Alle Input- und Selectelemente werden deklariert
        allInputElements = document.querySelectorAll("input");
        allSelectElements = document.querySelectorAll("select");
        //Das erste Selectelement wird deklariert
        employeeValue = parseFloat(allSelectElements[0].value);
        for (let i = 0; i < employeeValue; i++) {
            //Zufällige Startposition für die Mitarbeiter
            let randomPositionX = Math.random() * 150 + 400;
            let randomPositionY = Math.random() * 135 + 125;
            //Mitarbeiter werden erstellt
            let employee = new Döner_Trainer.Employee();
            humans.push(employee);
            employee.draw(randomPositionX, randomPositionY);
            console.log(employeeValue);
            // console.log(humans);
            // console.log(randomPositionX);
            // console.log(randomPositionY);
            let number = 15000;
            setInterval(createCustomer, number);
        }
    }
    function createCustomer() {
        console.log("Alle 15 Sekunden bitte ausloggen");
        let customer = new Döner_Trainer.Customer();
        humans.push(customer);
        customer.draw(85, 555);
    }
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=Main.js.map