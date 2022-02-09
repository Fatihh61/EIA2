"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    window.addEventListener("load", handleLoad);
    //Deklariere Formelement
    let form;
    let orderDiv;
    //Deklariere div für canvas
    let canvasContainer;
    //Deklariere Superklassen als array
    let humans = [];
    let vegetables = [];
    let employeeArray = [];
    //Deklariere Anzahl der Mitarbeiter und Kunden im Durschnitt/Zeit
    let employeeValue;
    let customerValue;
    //Deklariere FormData
    let formData;
    //Aktueller Mitarbeiter für die Positionsauswahl
    let currentEmployee;
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
    let onionResourceButton;
    let cornResourceButton;
    let saladResourceButton;
    let redsaladResourceButton;
    let tomatoResourceButton;
    //Deklariere Button für Mitarbeiter Nummer 1 
    let employeeThekeButton;
    let employeeDönerButton;
    let employeeTelefonButton;
    let employeeResourceButton;
    let employeePauseButton;
    let employeePrepareResourceButton;
    //Ingredients als Paragraphen
    let paragraphOnion;
    let paragraphTomato;
    let paragraphSalad;
    let paragraphRedsalad;
    let paragraphCorn;
    //Resourcen als Paragraphen
    let paragraphOnionResource;
    let paragraphTomatoResource;
    let paragraphSaladResource;
    let paragraphRedsaladResource;
    let paragraphCornResource;
    //ImageData
    let imgDataKebabHouse;
    let imgDataOnion;
    let imgDataCorn;
    let imgDataRedSalad;
    let imgDataSalad;
    let imgDataTomato;
    //Menge der Zutaten an der Theke
    let ingredientAmountOnion;
    let ingredientAmountCorn;
    let ingredientAmountSalad;
    let ingredientAmountRedsalad;
    let ingredientAmountTomato;
    let employeeBread = [];
    let employeeIngredient = [];
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
        orderDiv = document.getElementById("order");
        orderDiv.classList.remove("isHidden");
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
        onionResourceButton = document.getElementById("onionResourcenButton");
        onionResourceButton.classList.remove("isHidden");
        cornResourceButton = document.getElementById("cornResourcenButton");
        cornResourceButton.classList.remove("isHidden");
        saladResourceButton = document.getElementById("saladResourcenButton");
        saladResourceButton.classList.remove("isHidden");
        redsaladResourceButton = document.getElementById("redsaladResourcenButton");
        redsaladResourceButton.classList.remove("isHidden");
        tomatoResourceButton = document.getElementById("tomatoResourcenButton");
        tomatoResourceButton.classList.remove("isHidden");
        //Wertzuweisung für Mitarbeiter und isHidden remove
        employeeThekeButton = document.getElementById("employee1Theke");
        employeeThekeButton.classList.remove("isHidden");
        employeeDönerButton = document.getElementById("employee1Döner");
        employeeDönerButton.classList.remove("isHidden");
        employeeTelefonButton = document.getElementById("employee1Telefon");
        employeeTelefonButton.classList.remove("isHidden");
        employeeResourceButton = document.getElementById("employee1Resourcen");
        employeeResourceButton.classList.remove("isHidden");
        employeePauseButton = document.getElementById("employee1Pause");
        employeePauseButton.classList.remove("isHidden");
        employeePrepareResourceButton = document.getElementById("employee1PrepareResource");
        employeePrepareResourceButton.classList.remove("isHidden");
        employeeThekeButton.addEventListener("click", employeeTheke);
        employeeDönerButton.addEventListener("click", employeeDöner);
        employeeTelefonButton.addEventListener("click", employeeTelefon);
        employeeResourceButton.addEventListener("click", employeeResourcen);
        employeePauseButton.addEventListener("click", employeePause);
        employeePrepareResourceButton.addEventListener("click", employeePrepareResource);
        onionButton.addEventListener("click", onionIngredient);
        cornButton.addEventListener("click", cornIngredient);
        saladButton.addEventListener("click", saladIngredient);
        redsaladButton.addEventListener("click", redsaladIngredient);
        tomatoButton.addEventListener("click", tomatoIngredient);
        onionResourceButton.addEventListener("click", onionResource);
        tomatoResourceButton.addEventListener("click", tomatoResource);
        saladResourceButton.addEventListener("click", saladResource);
        redsaladResourceButton.addEventListener("click", redsaladResource);
        cornResourceButton.addEventListener("click", cornResource);
        //Zeichne Canvaselemente und kreiere die Objekte 
        drawKebabHouse();
        drawOnion();
        drawCorn();
        drawSalad();
        drawRedSalad();
        drawTomatoe();
        createEmployee();
        window.setInterval(update, 20);
    }
    //Mitarbeiter 1 Tastatur
    function employeeTheke(_event) {
        allSelectElements = document.querySelectorAll("select");
        currentEmployee = parseFloat(allSelectElements[0].value);
        switch (currentEmployee) {
            case 1:
                employeeArray[0].takeOrder(450, 320);
                break;
            case 2:
                employeeArray[1].takeOrder(450, 320);
                break;
            case 3:
                employeeArray[2].takeOrder(450, 320);
                break;
            default:
            // console.log("Fehlgeschlagen");
        }
    }
    function employeeDöner(_event) {
        allSelectElements = document.querySelectorAll("select");
        currentEmployee = parseFloat(allSelectElements[0].value);
        switch (currentEmployee) {
            case 1:
                employeeArray[0].cutKebab(245, 225);
                break;
            case 2:
                employeeArray[1].cutKebab(245, 225);
                break;
            case 3:
                employeeArray[2].cutKebab(245, 225);
                break;
            default:
            // console.log("Fehlgeschlagen");
        }
    }
    function employeeTelefon(_event) {
        let aktuellerMitarbeiter;
        allSelectElements = document.querySelectorAll("select");
        aktuellerMitarbeiter = parseFloat(allSelectElements[0].value);
        switch (aktuellerMitarbeiter) {
            case 1:
                employeeArray[0].buyResources(650, 315);
                break;
            case 2:
                employeeArray[1].buyResources(650, 315);
                break;
            case 3:
                employeeArray[2].buyResources(650, 315);
                break;
            default:
            // console.log("Fehlgeschlagen");
        }
    }
    function employeeResourcen(_event) {
        let aktuellerMitarbeiter;
        allSelectElements = document.querySelectorAll("select");
        aktuellerMitarbeiter = parseFloat(allSelectElements[0].value);
        switch (aktuellerMitarbeiter) {
            case 1:
                employeeArray[0].fillResources(450, 140);
                break;
            case 2:
                employeeArray[1].fillResources(450, 140);
                break;
            case 3:
                employeeArray[2].fillResources(450, 140);
                break;
            default:
            // console.log("Fehlgeschlagen");
        }
    }
    function employeePause(_event) {
        let aktuellerMitarbeiter;
        allSelectElements = document.querySelectorAll("select");
        aktuellerMitarbeiter = parseFloat(allSelectElements[0].value);
        switch (aktuellerMitarbeiter) {
            case 1:
                employeeArray[0].takeNap(650, 140);
                break;
            case 2:
                employeeArray[1].takeNap(650, 140);
                break;
            case 3:
                employeeArray[2].takeNap(650, 140);
                break;
            default:
            // console.log("Fehlgeschlagen");
        }
    }
    function employeePrepareResource(_event) {
        let aktuellerMitarbeiter;
        allSelectElements = document.querySelectorAll("select");
        aktuellerMitarbeiter = parseFloat(allSelectElements[0].value);
        switch (aktuellerMitarbeiter) {
            case 1:
                employeeArray[0].prepareResource(650, 225);
                break;
            case 2:
                employeeArray[1].prepareResource(650, 225);
                break;
            case 3:
                employeeArray[2].prepareResource(650, 225);
                break;
            default:
            // console.log("Fehlgeschlagen");
        }
    }
    function onionIngredient(_event) {
        // console.log("clicked onionIngredient");
        vegetables[0].ingredientsAmount -= 5;
        paragraphOnion.innerHTML = "Zwiebel:" + vegetables[0].ingredientsAmount;
        console.log(vegetables[0].ingredientsAmount);
    }
    function onionResource(_event) {
        // console.log("clicked onionResource");
        if (vegetables[0].resourceAmount > 0) {
            setTimeout(fillOnion, 10000);
            console.log("Wird nach 10 Sekunden aufgefüllt");
        }
    }
    function fillOnion() {
        console.log("Fülle mich auf nach 10 Sekunden");
        vegetables[0].ingredientsAmount = ingredientAmountOnion;
        console.log(vegetables[0].ingredientsAmount);
        paragraphOnion.innerHTML = "Zwiebel:" + vegetables[0].ingredientsAmount;
    }
    function cornIngredient(_event) {
        // console.log("clicked cornIngredient");
        vegetables[1].ingredientsAmount -= 5;
        paragraphCorn.innerHTML = "Mais:" + vegetables[1].ingredientsAmount;
        console.log(vegetables[1].ingredientsAmount);
    }
    function cornResource(_event) {
        // console.log("clicked onionResource");
        if (vegetables[1].resourceAmount > 0) {
            setTimeout(fillCorn, 10000);
            console.log("Wird nach 10 Sekunden aufgefüllt");
        }
    }
    function fillCorn() {
        console.log("Fülle mich auf nach 10 Sekunden");
        vegetables[1].ingredientsAmount = ingredientAmountOnion;
        console.log(vegetables[1].ingredientsAmount);
        paragraphCorn.innerHTML = "" + vegetables[1].ingredientsAmount;
    }
    function saladIngredient(_event) {
        // console.log("clicked saladIngredient");
        vegetables[2].ingredientsAmount -= 5;
        paragraphSalad.innerHTML = "Salat:" + vegetables[2].ingredientsAmount;
        console.log(vegetables[2].ingredientsAmount);
    }
    function saladResource(_event) {
        // console.log("clicked onionResource");
        if (vegetables[2].resourceAmount > 0) {
            setTimeout(fillSalad, 10000);
            console.log("Wird nach 10 Sekunden aufgefüllt");
        }
    }
    function fillSalad() {
        console.log("Fülle mich auf nach 10 Sekunden");
        vegetables[2].ingredientsAmount = ingredientAmountOnion;
        console.log(vegetables[2].ingredientsAmount);
        paragraphSalad.innerHTML = "Salat:" + vegetables[2].ingredientsAmount;
    }
    function redsaladIngredient(_event) {
        // console.log("clicked redsaladIngredient");
        vegetables[3].ingredientsAmount -= 5;
        paragraphRedsalad.innerHTML = "Rotkraut:" + vegetables[3].ingredientsAmount;
        console.log(vegetables[3].ingredientsAmount);
    }
    function redsaladResource(_event) {
        // console.log("clicked onionResource");
        if (vegetables[3].resourceAmount > 0) {
            setTimeout(fillRedsalad, 10000);
            console.log("Wird nach 10 Sekunden aufgefüllt");
        }
    }
    function fillRedsalad() {
        console.log("Fülle mich auf nach 10 Sekunden");
        vegetables[3].ingredientsAmount = ingredientAmountOnion;
        console.log(vegetables[3].ingredientsAmount);
        paragraphRedsalad.innerHTML = "Rotkraut:" + vegetables[3].ingredientsAmount;
    }
    function tomatoIngredient(_event) {
        // console.log("clicked tomatoIngredient");
        vegetables[4].ingredientsAmount -= 5;
        console.log(vegetables[4].ingredientsAmount);
        paragraphTomato.innerHTML = "Tomate:" + vegetables[4].ingredientsAmount;
    }
    function tomatoResource(_event) {
        // console.log("clicked onionResource");
        if (vegetables[4].resourceAmount > 0) {
            setTimeout(fillTomato, 10000);
            console.log("Wird nach 10 Sekunden aufgefüllt");
        }
    }
    function fillTomato() {
        console.log("Fülle mich auf nach 10 Sekunden");
        vegetables[4].ingredientsAmount = ingredientAmountOnion;
        console.log(vegetables[4].ingredientsAmount);
        paragraphTomato.innerHTML = "Tomate:" + vegetables[4].ingredientsAmount;
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
        //Anzeigemenge für Zutaten
        Döner_Trainer.crc2.save();
        Döner_Trainer.crc2.beginPath();
        Döner_Trainer.crc2.lineWidth = 4;
        Döner_Trainer.crc2.strokeStyle = "black";
        Döner_Trainer.crc2.moveTo(0, 500);
        Döner_Trainer.crc2.lineTo(800, 500);
        Döner_Trainer.crc2.stroke();
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
        imgDataKebabHouse = Döner_Trainer.crc2.getImageData(0, 0, Döner_Trainer.crc2.canvas.width, Döner_Trainer.crc2.canvas.height);
    }
    //Onion Objekt wird kreiert
    function drawOnion() {
        allInputElements = document.querySelectorAll("input");
        ingredientAmountOnion = parseFloat(allInputElements[0].value);
        let onion = new Döner_Trainer.Onion(ingredientAmountOnion, ingredientAmountOnion);
        vegetables.push(onion);
        //Paragraph für Zutat wird erstellt
        paragraphOnion = document.createElement("p");
        onionButton.appendChild(paragraphOnion);
        paragraphOnion.innerHTML = "Zwiebel:" + allInputElements[0].value;
        paragraphOnion.classList.add("ingredientsValue");
        //Paragraph für Resource wird erstellt
        paragraphOnionResource = document.createElement("p");
        onionResourceButton.appendChild(paragraphOnionResource);
        paragraphOnionResource.innerHTML = "Zwiebel:" + allInputElements[0].value;
        paragraphOnionResource.classList.add("resourceValue");
        imgDataOnion = Döner_Trainer.crc2.getImageData(0, 0, Döner_Trainer.crc2.canvas.width, Döner_Trainer.crc2.canvas.height);
    }
    //Corn Objekt wird kreiert
    function drawCorn() {
        allInputElements = document.querySelectorAll("input");
        ingredientAmountCorn = parseFloat(allInputElements[0].value);
        let corn = new Döner_Trainer.Corn(ingredientAmountCorn, ingredientAmountCorn);
        vegetables.push(corn);
        paragraphCorn = document.createElement("p");
        cornButton.appendChild(paragraphCorn);
        paragraphCorn.innerHTML = "Mais:" + allInputElements[0].value;
        paragraphCorn.classList.add("ingredientsValue");
        imgDataCorn = Döner_Trainer.crc2.getImageData(0, 0, Döner_Trainer.crc2.canvas.width, Döner_Trainer.crc2.canvas.height);
    }
    //RedSalad Objekt wird kreiert
    function drawRedSalad() {
        allInputElements = document.querySelectorAll("input");
        ingredientAmountRedsalad = parseFloat(allInputElements[0].value);
        let redSalad = new Döner_Trainer.Redsalad(ingredientAmountRedsalad, ingredientAmountRedsalad);
        vegetables.push(redSalad);
        paragraphRedsalad = document.createElement("p");
        redsaladButton.appendChild(paragraphRedsalad);
        paragraphRedsalad.innerHTML = "Rotkraut:" + allInputElements[0].value;
        paragraphRedsalad.classList.add("ingredientsValue");
        imgDataRedSalad = Döner_Trainer.crc2.getImageData(0, 0, Döner_Trainer.crc2.canvas.width, Döner_Trainer.crc2.canvas.height);
    }
    //Tomato Objekt wird kreiert
    function drawTomatoe() {
        allInputElements = document.querySelectorAll("input");
        ingredientAmountTomato = parseFloat(allInputElements[0].value);
        let tomato = new Döner_Trainer.Tomato(ingredientAmountTomato, ingredientAmountTomato);
        vegetables.push(tomato);
        paragraphTomato = document.createElement("p");
        tomatoButton.appendChild(paragraphTomato);
        paragraphTomato.innerHTML = "Tomate:" + allInputElements[0].value;
        paragraphTomato.classList.add("ingredientsValue");
        imgDataTomato = Döner_Trainer.crc2.getImageData(0, 0, Döner_Trainer.crc2.canvas.width, Döner_Trainer.crc2.canvas.height);
    }
    //Salad Objekt wird kreiert
    function drawSalad() {
        allInputElements = document.querySelectorAll("input");
        ingredientAmountSalad = parseFloat(allInputElements[0].value);
        let salad = new Döner_Trainer.Salad(ingredientAmountSalad, ingredientAmountSalad);
        vegetables.push(salad);
        paragraphSalad = document.createElement("p");
        saladButton.appendChild(paragraphSalad);
        paragraphSalad.innerHTML = "Salat:" + allInputElements[0].value;
        paragraphSalad.classList.add("ingredientsValue");
        imgDataSalad = Döner_Trainer.crc2.getImageData(0, 0, Döner_Trainer.crc2.canvas.width, Döner_Trainer.crc2.canvas.height);
    }
    function createEmployee() {
        //Wertzuweisung für FormData
        formData = new FormData(document.forms[0]);
        //Alle Selectelemente werden deklariert
        allSelectElements = document.querySelectorAll("select");
        //Das erste Selectelement wird deklariert
        employeeValue = parseFloat(allSelectElements[1].value);
        for (let i = 0; i < employeeValue; i++) {
            //Employee Objekt wird kreiert
            let employee = new Döner_Trainer.Employee();
            humans.push(employee);
            employeeArray.push(employee);
            customerValue = parseFloat(allSelectElements[2].value);
            //Alle x Sekunden erscheint ein Kunde, je nach ausgewählter Einstellung
            // setInterval(createCustomer, customerValue);
        }
        //Alle x Sekunden erscheint ein Kunde, je nach ausgewählter Einstellung
        setInterval(createCustomer, customerValue);
    }
    //Customer Objekt wird kreiert
    function createCustomer() {
        // console.log("Alle x Sekunden bitte ausloggen");
        let customer = new Döner_Trainer.Customer();
        humans.push(customer);
    }
    function update() {
        // console.log("Update wird immer aufgerufen");
        // crc2.putImageData(imgDataKebabHouse, 0, 0);
        Döner_Trainer.crc2.putImageData(imgDataOnion, 0, 0);
        Döner_Trainer.crc2.putImageData(imgDataCorn, 0, 0);
        Döner_Trainer.crc2.putImageData(imgDataRedSalad, 0, 0);
        Döner_Trainer.crc2.putImageData(imgDataSalad, 0, 0);
        Döner_Trainer.crc2.putImageData(imgDataTomato, 0, 0);
        for (let i = 0; i < humans.length; i++) {
            humans[i].draw();
        }
        for (let i = 0; i < vegetables.length; i++) {
            vegetables[i].draw();
        }
    }
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=Main.js.map