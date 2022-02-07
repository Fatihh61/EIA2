"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    window.addEventListener("load", handleLoad);
    //Deklariere Formelement
    let form;
    //Deklariere div für canvas
    let canvasContainer;
    //Deklariere Superklassen als array
    let humans = [];
    let vegetables = [];
    //Deklariere Anzahl der Mitarbeiter und Kunden im Durschnitt/Zeit
    let employeeValue;
    let customerValue;
    //Deklariere FormData
    let formData;
    //Deklariere alle Input- und Selectelemente
    let allInputElements;
    let allSelectElements;
    //Deklariere alle Button für die Zutaten an der Theke
    let onionButton;
    let cornButton;
    let saladButton;
    let redsaladButton;
    let tomatoButton;
    //Deklariere alle Button für die Resourcen
    let onionResourcenButton;
    let cornResourcenButton;
    let saladResourcenButton;
    let redsaladResourcenButton;
    let tomatoResourcenButton;
    //Deklariere Button für Mitarbeiter Nummer 1 
    let employee1Name;
    let employee1ThekeButton;
    let employee1DönerButton;
    let employee1TelefonButton;
    let employee1ResourcenButton;
    let employee1PauseButton;
    //Deklariere Button für Mitarbeiter Nummer 2
    let employee2Name;
    let employee2ThekeButton;
    let employee2DönerButton;
    let employee2TelefonButton;
    let employee2ResourcenButton;
    let employee2PauseButton;
    //Deklariere Button für Mitarbeiter Nummer 3
    let employee3Name;
    let employee3ThekeButton;
    let employee3DönerButton;
    let employee3TelefonButton;
    let employee3ResourcenButton;
    let employee3PauseButton;
    function handleLoad(_event) {
        //Start Button von Startseite wird deklariert und listener drauf installiert
        let startButton = document.querySelector("#startButton");
        startButton.addEventListener("click", loadCanvas);
    }
    function loadCanvas(_event) {
        //Canvas wird deklariert
        let canvas = document.querySelector("canvas");
        Döner_Trainer.crc2 = canvas.getContext("2d");
        //Wertzuweisung für Formelement und isHidden remove
        form = document.querySelector("form");
        form.classList.add("isHidden");
        canvas.classList.remove("isHidden");
        //Wertzuweisung für Canvas und isHidden remove
        canvasContainer = document.getElementById("canvasContainer");
        canvasContainer.classList.remove("isHidden");
        //Wertzuweisung für Zutaten an der Theke und isHidden remove
        onionButton = document.getElementById("onionButton");
        onionButton.classList.remove("isHidden");
        cornButton = document.getElementById("cornButton");
        cornButton.classList.remove("isHidden");
        saladButton = document.getElementById("saladButton");
        saladButton.classList.remove("isHidden");
        redsaladButton = document.getElementById("redsaladButton");
        redsaladButton.classList.remove("isHidden");
        tomatoButton = document.getElementById("tomatoButton");
        tomatoButton.classList.remove("isHidden");
        //Wertzuweisung für Resourcen und isHidden remove
        onionResourcenButton = document.getElementById("onionResourcenButton");
        onionResourcenButton.classList.remove("isHidden");
        cornResourcenButton = document.getElementById("cornResourcenButton");
        cornResourcenButton.classList.remove("isHidden");
        saladResourcenButton = document.getElementById("saladResourcenButton");
        saladResourcenButton.classList.remove("isHidden");
        redsaladResourcenButton = document.getElementById("redsaladResourcenButton");
        redsaladResourcenButton.classList.remove("isHidden");
        tomatoResourcenButton = document.getElementById("tomatoResourcenButton");
        tomatoResourcenButton.classList.remove("isHidden");
        //Wertzuweisung für Mitarbeiter Nummer 1 und isHidden remove
        employee1Name = document.getElementById("employee1");
        employee1Name.classList.remove("isHidden");
        employee1ThekeButton = document.getElementById("employee1Theke");
        employee1ThekeButton.classList.remove("isHidden");
        employee1DönerButton = document.getElementById("employee1Döner");
        employee1DönerButton.classList.remove("isHidden");
        employee1TelefonButton = document.getElementById("employee1Telefon");
        employee1TelefonButton.classList.remove("isHidden");
        employee1ResourcenButton = document.getElementById("employee1Resourcen");
        employee1ResourcenButton.classList.remove("isHidden");
        employee1PauseButton = document.getElementById("employee1Pause");
        employee1PauseButton.classList.remove("isHidden");
        //Wertzuweisung für Mitarbeiter Nummer 2 und isHidden remove
        employee2Name = document.getElementById("employee2");
        employee2Name.classList.remove("isHidden");
        employee2ThekeButton = document.getElementById("employee2Theke");
        employee2ThekeButton.classList.remove("isHidden");
        employee2DönerButton = document.getElementById("employee2Döner");
        employee2DönerButton.classList.remove("isHidden");
        employee2TelefonButton = document.getElementById("employee2Telefon");
        employee2TelefonButton.classList.remove("isHidden");
        employee2ResourcenButton = document.getElementById("employee2Resourcen");
        employee2ResourcenButton.classList.remove("isHidden");
        employee2PauseButton = document.getElementById("employee2Pause");
        employee2PauseButton.classList.remove("isHidden");
        //Wertzuweisung für Mitarbeiter Nummer 3 und isHidden remove
        employee3Name = document.getElementById("employee3");
        employee3Name.classList.remove("isHidden");
        employee3ThekeButton = document.getElementById("employee3Theke");
        employee3ThekeButton.classList.remove("isHidden");
        employee3DönerButton = document.getElementById("employee3Döner");
        employee3DönerButton.classList.remove("isHidden");
        employee3TelefonButton = document.getElementById("employee3Telefon");
        employee3TelefonButton.classList.remove("isHidden");
        employee3ResourcenButton = document.getElementById("employee3Resourcen");
        employee3ResourcenButton.classList.remove("isHidden");
        employee3PauseButton = document.getElementById("employee3Pause");
        employee3PauseButton.classList.remove("isHidden");
        onionButton.addEventListener("click", onionContainer);
        //Zeichne Canvaselemente und kreiere die Objekte 
        drawKebabHouse();
        drawOnion();
        drawCorn();
        drawSalad();
        drawRedSalad();
        drawTomatoe();
        createEmployee();
    }
    function onionContainer(_event) {
        console.log("Clicked");
    }
    //Kebabhaus wird durch Canvas gezeichnet
    function drawKebabHouse() {
        //Äußeren Wände der Küche
        Döner_Trainer.crc2.save();
        Döner_Trainer.crc2.lineWidth = 10;
        Döner_Trainer.crc2.strokeStyle = "black";
        Döner_Trainer.crc2.strokeRect(0, 0, 800, 600);
        Döner_Trainer.crc2.restore();
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
    //Onion Objekt wird kreiert
    function drawOnion() {
        let onion = new Döner_Trainer.Onion();
        onion.draw(600, 353);
        vegetables.push(onion);
    }
    //Corn Objekt wird kreiert
    function drawCorn() {
        let mais = new Döner_Trainer.Corn();
        mais.draw(500, 353);
        vegetables.push(mais);
    }
    //RedSalad Objekt wird kreiert
    function drawRedSalad() {
        let redSalad = new Döner_Trainer.Redsalad();
        redSalad.draw(300, 353);
        vegetables.push(redSalad);
    }
    //Tomato Objekt wird kreiert
    function drawTomatoe() {
        let tomatoe = new Döner_Trainer.Tomato();
        tomatoe.draw(200, 353);
        vegetables.push(tomatoe);
    }
    //Salad Objekt wird kreiert
    function drawSalad() {
        let salad = new Döner_Trainer.Salad();
        salad.draw(400, 353);
        vegetables.push(salad);
    }
    function createEmployee() {
        //Wertzuweisung für FormData
        formData = new FormData(document.forms[0]);
        //Alle Input- und Selectelemente werden deklariert
        allInputElements = document.querySelectorAll("input");
        allSelectElements = document.querySelectorAll("select");
        //Das erste Selectelement wird deklariert
        employeeValue = parseFloat(allSelectElements[0].value);
        for (let i = 0; i < employeeValue; i++) {
            //Zufällige Startposition für die Mitarbeiter innerhalb der Küche
            let randomPositionX = Math.random() * 150 + 400;
            let randomPositionY = Math.random() * 135 + 125;
            //Employee Objekt wird kreiert
            let employee = new Döner_Trainer.Employee();
            humans.push(employee);
            employee.draw(randomPositionX, randomPositionY);
            employee.drawMouthOfSmiley(randomPositionX, randomPositionY);
            console.log(employeeValue);
            customerValue = parseFloat(allSelectElements[1].value);
            //Alle x Sekunden erscheint ein Kunde, je nach ausgewählter Einstellung
            setInterval(createCustomer, customerValue);
        }
    }
    //Customer Objekt wird kreiert
    function createCustomer() {
        console.log("Alle x Sekunden bitte ausloggen");
        let customer = new Döner_Trainer.Customer();
        humans.push(customer);
        customer.draw(85, 555);
        customer.drawMouthOfSmiley(85, 555);
    }
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=Main.js.map