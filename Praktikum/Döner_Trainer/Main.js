"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    window.addEventListener("load", handleLoad);
    //Deklariere Formelement
    let form;
    //Div Elemente für die Anzeige
    let orderDiv;
    let totalMoodDiv;
    let currentOrder;
    let soldBread;
    //Anzahl verkaufter Brotarten
    let counterDöner = 0;
    let counterYufka = 0;
    let counterLahmacun = 0;
    //Deklariere div für canvas
    let canvasContainer;
    //Deklariere Superklassen als array
    let humans = [];
    let vegetables = [];
    //Deklariere Subklasse als Array
    let employeeArray = [];
    let customerArray = [];
    //Deklariere Brotarten in einem Array
    let breadArray = ["döner", "yufka", "lahmacun"];
    let ingredientsArray = ["zwiebel", "mais", "salat", "rotkraut", "tomate"];
    //Deklariere Brotart und Zutaten, die Mitarbeiter verwendet
    let employeeBread = [];
    let employeeIngredient = [];
    //Deklariere Anzahl der Mitarbeiter und Kunden im Durschnitt/Zeit
    let employeeValue;
    let customerValue;
    //Deklariere Menge der Resource
    let resourceAmount;
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
    //Deklariere alle Button für die Brotarten
    let dönerButton;
    let yufkaButton;
    let lahmacunButton;
    //Deklariere Button für Mitarbeiter Nummer 1 
    let employeeThekeButton;
    let employeeDönerButton;
    let employeeTelefonButton;
    let employeeResourceButton;
    let employeePauseButton;
    let employeePrepareResourceButton;
    let employeePayButton;
    //Ingredients als Paragraphen
    let paragraphOnion;
    let paragraphTomato;
    let paragraphSalad;
    let paragraphRedsalad;
    let paragraphCorn;
    let paragraphDöner;
    let paragraphYufka;
    let paragraphLahmacun;
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
    let ingredientAndResourceAmountOnion;
    let ingredientAndResourceAmountCorn;
    let ingredientAndResourceAmountSalad;
    let ingredientAndResourceAmountRedsalad;
    let ingredientAndResourceAmountTomato;
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
        totalMoodDiv = document.getElementById("totalMotivation");
        currentOrder = document.getElementById("currentOrder");
        soldBread = document.getElementById("soldBread");
        //Wertzuweisung für Zutaten an der Theke und isHidden remove
        onionButton = document.getElementById("onionButton");
        cornButton = document.getElementById("cornButton");
        saladButton = document.getElementById("saladButton");
        redsaladButton = document.getElementById("redsaladButton");
        tomatoButton = document.getElementById("tomatoButton");
        //Wertzuweisung für Resourcen und isHidden remove
        onionResourceButton = document.getElementById("onionResourcenButton");
        cornResourceButton = document.getElementById("cornResourcenButton");
        saladResourceButton = document.getElementById("saladResourcenButton");
        redsaladResourceButton = document.getElementById("redsaladResourcenButton");
        tomatoResourceButton = document.getElementById("tomatoResourcenButton");
        //Wertzuweisung für Brotarten und isHidden remove
        dönerButton = document.getElementById("dönerButton");
        yufkaButton = document.getElementById("yufkaButton");
        lahmacunButton = document.getElementById("lahmacunButton");
        //Wertzuweisung für Mitarbeiter und isHidden remove
        employeeThekeButton = document.getElementById("employee1Theke");
        employeeDönerButton = document.getElementById("employee1Döner");
        employeeTelefonButton = document.getElementById("employee1Telefon");
        employeeResourceButton = document.getElementById("employee1Resourcen");
        employeePauseButton = document.getElementById("employee1Pause");
        employeePrepareResourceButton = document.getElementById("employee1PrepareResource");
        employeePayButton = document.getElementById("giveOrder");
        //Steuerung für die Mitarbeiter
        employeeThekeButton.addEventListener("click", employeePosition);
        employeeDönerButton.addEventListener("click", employeePosition);
        employeeTelefonButton.addEventListener("click", employeePosition);
        employeeResourceButton.addEventListener("click", employeePosition);
        employeePauseButton.addEventListener("click", employeePosition);
        employeePrepareResourceButton.addEventListener("click", employeePosition);
        employeePayButton.addEventListener("click", checkOrder);
        //Zutat wird angeklickt und geleert
        onionButton.addEventListener("click", ingredient);
        cornButton.addEventListener("click", ingredient);
        saladButton.addEventListener("click", ingredient);
        redsaladButton.addEventListener("click", ingredient);
        tomatoButton.addEventListener("click", ingredient);
        //Ressource wird angeklickt und Zutat aufgefüllt
        onionResourceButton.addEventListener("click", resource);
        tomatoResourceButton.addEventListener("click", resource);
        saladResourceButton.addEventListener("click", resource);
        redsaladResourceButton.addEventListener("click", resource);
        cornResourceButton.addEventListener("click", resource);
        //Brotart wird angeklickt und hinzugefügt
        // dönerButton.addEventListener("click", addDöner);
        // yufkaButton.addEventListener("click", addYufka);
        // lahmacunButton.addEventListener("click", addLahmacun);
        dönerButton.addEventListener("click", addBread);
        yufkaButton.addEventListener("click", addBread);
        lahmacunButton.addEventListener("click", addBread);
        //Zeichne Canvaselemente und kreiere die Objekte 
        drawKebabHouse();
        createOnion();
        createCorn();
        createSalad();
        createRedSalad();
        createTomatoe();
        createEmployee();
        window.setInterval(update, 20);
    }
    function ingredient(_event) {
        let target = _event.target;
        let targetId = target.id;
        switch (targetId) {
            case "onionButton":
                if (vegetables[0].ingredientsAmount > 0 && employeeArray[currentEmployee].position.x == 450 && employeeArray[currentEmployee].position.y == 320 && customerArray[0].customerSubclassOrder.length > employeeIngredient.length && employeeArray[currentEmployee].mood > 0) {
                    vegetables[0].subtractVegetable();
                    vegetables[0].ingredientsAmount -= 5;
                    employeeIngredient.push(ingredientsArray[0]);
                    paragraphOnion.innerHTML = "Zwiebel:" + vegetables[0].ingredientsAmount;
                    displayCurrentOrder();
                }
                else {
                    console.log("Keine Zwiebel Zutat mehr  verfügbar");
                }
                break;
            case "cornButton":
                if (vegetables[1].ingredientsAmount > 0 && employeeArray[currentEmployee].position.x == 450 && employeeArray[currentEmployee].position.y == 320 && customerArray[0].customerSubclassOrder.length > employeeIngredient.length && employeeArray[currentEmployee].mood > 0) {
                    vegetables[1].ingredientsAmount -= 5;
                    employeeIngredient.push(ingredientsArray[1]);
                    paragraphCorn.innerHTML = "Mais:" + vegetables[1].ingredientsAmount;
                    displayCurrentOrder();
                }
                else {
                    console.log("Keine Mais Zutat mehr  verfügbar");
                }
                break;
            case "saladButton":
                if (vegetables[2].ingredientsAmount > 0 && employeeArray[currentEmployee].position.x == 450 && employeeArray[currentEmployee].position.y == 320 && customerArray[0].customerSubclassOrder.length > employeeIngredient.length && employeeArray[currentEmployee].mood > 0) {
                    vegetables[2].ingredientsAmount -= 5;
                    employeeIngredient.push(ingredientsArray[2]);
                    paragraphSalad.innerHTML = "Salat:" + vegetables[2].ingredientsAmount;
                    displayCurrentOrder();
                }
                else {
                    console.log("Keine Salat Zutat mehr  verfügbar");
                }
                break;
            case "redsaladButton":
                if (vegetables[3].ingredientsAmount > 0 && employeeArray[currentEmployee].position.x == 450 && employeeArray[currentEmployee].position.y == 320 && customerArray[0].customerSubclassOrder.length > employeeIngredient.length && employeeArray[currentEmployee].mood > 0) {
                    vegetables[3].ingredientsAmount -= 5;
                    employeeIngredient.push(ingredientsArray[3]);
                    paragraphRedsalad.innerHTML = "Rotkraut:" + vegetables[3].ingredientsAmount;
                    displayCurrentOrder();
                }
                else {
                    console.log("Keine Rotkraut Zutat mehr  verfügbar");
                }
                break;
            case "tomatoButton":
                if (vegetables[4].ingredientsAmount > 0 && employeeArray[currentEmployee].position.x == 450 && employeeArray[currentEmployee].position.y == 320 && customerArray[0].customerSubclassOrder.length > employeeIngredient.length && employeeArray[currentEmployee].mood > 0) {
                    vegetables[4].ingredientsAmount -= 5;
                    employeeIngredient.push(ingredientsArray[4]);
                    paragraphTomato.innerHTML = "Tomate:" + vegetables[4].ingredientsAmount;
                    displayCurrentOrder();
                }
                else {
                    console.log("Keine Tomaten Zutat mehr  verfügbar");
                }
                break;
        }
    }
    function resource(_event) {
        let target = _event.target;
        let targetId = target.id;
        switch (targetId) {
            case "onionResourcenButton":
                if (vegetables[0].resourceAmount > 0 && employeeArray[currentEmployee].position.x == 450 && employeeArray[currentEmployee].position.y == 140 && employeeArray[currentEmployee].mood > 0) {
                    setTimeout(function () {
                        fillResource(0);
                    }, 10000);
                }
                else {
                    console.log("Keine Zwiebel Resourcen mehr verfügbar");
                }
                break;
            case "cornResourcenButton":
                if (vegetables[1].resourceAmount > 0 && employeeArray[currentEmployee].position.x == 450 && employeeArray[currentEmployee].position.y == 140 && employeeArray[currentEmployee].mood > 0) {
                    setTimeout(function () {
                        fillResource(1);
                    }, 10000);
                }
                else {
                    console.log("Keine Mais Resourcen mehr verfügbar");
                }
                break;
            case "saladResourcenButton":
                if (vegetables[2].resourceAmount > 0 && employeeArray[currentEmployee].position.x == 450 && employeeArray[currentEmployee].position.y == 140 && employeeArray[currentEmployee].mood > 0) {
                    setTimeout(function () {
                        fillResource(2);
                    }, 10000);
                }
                else {
                    console.log("Keine Salat Resourcen mehr verfügbar");
                }
                break;
            case "redsaladResourcenButton":
                if (vegetables[3].resourceAmount > 0 && employeeArray[currentEmployee].position.x == 450 && employeeArray[currentEmployee].position.y == 140 && employeeArray[currentEmployee].mood > 0) {
                    setTimeout(function () {
                        fillResource(3);
                    }, 10000);
                }
                else {
                    console.log("Keine Rotkraut Resourcen mehr verfügbar");
                }
                break;
            case "tomatoResourcenButton":
                if (vegetables[4].resourceAmount > 0 && employeeArray[currentEmployee].position.x == 450 && employeeArray[currentEmployee].position.y == 140 && employeeArray[currentEmployee].mood > 0) {
                    setTimeout(function () {
                        fillResource(4);
                    }, 10000);
                }
                else {
                    console.log("Keine Tomaten Resourcen mehr verfügbar");
                }
        }
    }
    function fillResource(_vegetablesNumber) {
        vegetables[_vegetablesNumber].ingredientsAmount = ingredientAndResourceAmountOnion;
        vegetables[_vegetablesNumber].resourceAmount -= 25;
        paragraphOnionResource.innerHTML = "Zwiebel:" + vegetables[0].resourceAmount;
        paragraphOnion.innerHTML = "Zwiebel:" + vegetables[0].ingredientsAmount;
        paragraphCornResource.innerHTML = "Mais:" + vegetables[1].resourceAmount;
        paragraphCorn.innerHTML = "Mais:" + vegetables[1].ingredientsAmount;
        paragraphSaladResource.innerHTML = "Salat:" + vegetables[2].resourceAmount;
        paragraphSalad.innerHTML = "Salat:" + vegetables[2].ingredientsAmount;
        paragraphRedsaladResource.innerHTML = "Rotkraut:" + vegetables[3].resourceAmount;
        paragraphRedsalad.innerHTML = "Rotkraut:" + vegetables[3].ingredientsAmount;
        paragraphTomatoResource.innerHTML = "Tomate:" + vegetables[4].resourceAmount;
        paragraphTomato.innerHTML = "Tomate:" + vegetables[4].ingredientsAmount;
    }
    function displayCurrentOrder() {
        let paragraphForCurrentOrder = document.getElementById("currentOrderParagraph");
        paragraphForCurrentOrder.innerHTML = "" + employeeIngredient;
    }
    function displaySoldBread() {
        paragraphDöner = document.getElementById("soldDöner");
        paragraphYufka = document.getElementById("soldYufka");
        paragraphLahmacun = document.getElementById("soldLahmacun");
        for (let i = 0; i < employeeIngredient.length; i++) {
            if (employeeIngredient[i] == breadArray[0]) {
                counterDöner++;
                paragraphDöner.innerHTML = "Döner:" + counterDöner;
            }
            else if (employeeIngredient[i] == breadArray[1]) {
                counterYufka++;
                paragraphYufka.innerHTML = "Yufka:" + counterYufka;
            }
            else if (employeeIngredient[i] == breadArray[2]) {
                counterLahmacun++;
                paragraphLahmacun.innerHTML = "Lahmacun:" + counterLahmacun;
            }
        }
    }
    function displayTotalMood() {
        let totalMoodAmount = 0;
        for (let i = 0; i < humans.length; i++) {
            totalMoodAmount += humans[i].mood;
        }
        totalMoodAmount /= humans.length;
        totalMoodDiv.innerHTML = "Zufriedenheit:" + Math.floor(totalMoodAmount);
        if (totalMoodAmount < 40) {
            alert("Game Over");
        }
    }
    function employeePosition(_event) {
        let target = _event.target;
        let targetId = target.id;
        switch (targetId) {
            case "employee1Theke":
                allSelectElements = document.querySelectorAll("select");
                currentEmployee = parseFloat(allSelectElements[0].value);
                employeeArray[currentEmployee].takeOrder(450, 320);
                employeeArray[currentEmployee].mood -= 5;
                console.log(employeeArray[currentEmployee].mood);
                break;
            case "employee1Döner":
                allSelectElements = document.querySelectorAll("select");
                currentEmployee = parseFloat(allSelectElements[0].value);
                employeeArray[currentEmployee].cutKebab(245, 225);
                employeeArray[currentEmployee].mood -= 5;
                console.log(employeeArray[currentEmployee].mood);
                break;
            case "employee1Telefon":
                allSelectElements = document.querySelectorAll("select");
                currentEmployee = parseFloat(allSelectElements[0].value);
                resourceAmount = parseFloat(allInputElements[0].value);
                employeeArray[currentEmployee].buyResources(650, 315);
                employeeArray[currentEmployee].mood -= 5;
                // employeeThekeButton.classList.add("buttonNotAvailaible");
                // employeeDönerButton.classList.add("buttonNotAvailaible");
                // employeeTelefonButton.classList.add("buttonNotAvailaible");
                // employeePauseButton.classList.add("buttonNotAvailaible");
                // employeePrepareResourceButton.classList.add("buttonNotAvailaible");
                // employeeResourceButton.classList.add("buttonNotAvailaible");
                // employeePayButton.classList.add("buttonNotAvailaible");
                console.log("TELEFON");
                setTimeout(fillResourcesByTelephone, 10000);
                break;
            case "employee1Resourcen":
                allSelectElements = document.querySelectorAll("select");
                currentEmployee = parseFloat(allSelectElements[0].value);
                employeeArray[currentEmployee].fillResources(450, 140);
                employeeArray[currentEmployee].mood -= 5;
                console.log(employeeArray[currentEmployee].mood);
                break;
            case "employee1Pause":
                allSelectElements = document.querySelectorAll("select");
                currentEmployee = parseFloat(allSelectElements[0].value);
                customerValue = parseFloat(allSelectElements[3].value);
                employeeArray[currentEmployee].position.x = 650;
                employeeArray[currentEmployee].position.y = 140;
                // employeeThekeButton.classList.add("buttonNotAvailaible");
                // employeeDönerButton.classList.add("buttonNotAvailaible");
                // employeeTelefonButton.classList.add("buttonNotAvailaible");
                // employeePauseButton.classList.add("buttonNotAvailaible");
                // employeePrepareResourceButton.classList.add("buttonNotAvailaible");
                // employeeResourceButton.classList.add("buttonNotAvailaible");
                // employeePayButton.classList.add("buttonNotAvailaible");
                setTimeout(fillMotivation, customerValue);
        }
    }
    function fillResourcesByTelephone() {
        for (let i = 0; i < vegetables.length; i++) {
            vegetables[i].resourceAmount = resourceAmount;
            console.log(vegetables[i].resourceAmount);
        }
        paragraphTomatoResource.innerHTML = "Tomate:" + allInputElements[0].value;
        paragraphOnionResource.innerHTML = "Zwiebel:" + allInputElements[0].value;
        paragraphSaladResource.innerHTML = "Salat:" + allInputElements[0].value;
        paragraphRedsaladResource.innerHTML = "Rotkraut:" + allInputElements[0].value;
        paragraphCornResource.innerHTML = "Mais:" + allInputElements[0].value;
        // employeeThekeButton.classList.remove("buttonNotAvailaible");
        // employeeDönerButton.classList.remove("buttonNotAvailaible");
        // employeeTelefonButton.classList.remove("buttonNotAvailaible");
        // employeePauseButton.classList.remove("buttonNotAvailaible");
        // employeePrepareResourceButton.classList.remove("buttonNotAvailaible");
        // employeeResourceButton.classList.remove("buttonNotAvailaible");
        // employeePayButton.classList.remove("buttonNotAvailaible");
    }
    function fillMotivation() {
        console.log("Nach x Sekunden Motivation auffüllen");
        employeeArray[currentEmployee].takeNap(650, 140);
        console.log(employeeArray[currentEmployee].mood);
        // employeeThekeButton.classList.remove("buttonNotAvailaible");
        // employeeDönerButton.classList.remove("buttonNotAvailaible");
        // employeeTelefonButton.classList.remove("buttonNotAvailaible");
        // employeePauseButton.classList.remove("buttonNotAvailaible");
        // employeePrepareResourceButton.classList.remove("buttonNotAvailaible");
        // employeeResourceButton.classList.remove("buttonNotAvailaible");
        // employeePayButton.classList.remove("buttonNotAvailaible");
    }
    function addBread(_event) {
        let target = _event.target;
        let targetId = target.id;
        switch (targetId) {
            case "dönerButton":
                console.log("dönerButton");
                if (employeeArray[currentEmployee].position.x == 245 && employeeArray[currentEmployee].position.y == 225) {
                    employeeBread.push(breadArray[0]);
                    employeeIngredient.push(breadArray[0]);
                    displayCurrentOrder();
                }
                break;
            case "yufkaButton":
                console.log("yufkaButton");
                if (employeeArray[currentEmployee].position.x == 245 && employeeArray[currentEmployee].position.y == 225 && customerArray[0].customerSubclassOrder.length > employeeIngredient.length) {
                    employeeBread.push(breadArray[1]);
                    employeeIngredient.push(breadArray[1]);
                    displayCurrentOrder();
                }
                break;
            case "lahmacunButton":
                console.log("lahmacunButton");
                if (employeeArray[currentEmployee].position.x == 245 && employeeArray[currentEmployee].position.y == 225 && customerArray[0].customerSubclassOrder.length > employeeIngredient.length) {
                    employeeBread.push(breadArray[2]);
                    employeeIngredient.push(breadArray[2]);
                    displayCurrentOrder();
                }
                break;
        }
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
    function createOnion() {
        allInputElements = document.querySelectorAll("input");
        ingredientAndResourceAmountOnion = parseFloat(allInputElements[0].value);
        let onion = new Döner_Trainer.Onion(ingredientAndResourceAmountOnion, ingredientAndResourceAmountOnion);
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
    function createCorn() {
        allInputElements = document.querySelectorAll("input");
        ingredientAndResourceAmountCorn = parseFloat(allInputElements[0].value);
        let corn = new Döner_Trainer.Corn(ingredientAndResourceAmountCorn, ingredientAndResourceAmountCorn);
        vegetables.push(corn);
        //Paragraph für Zutat wird erstellt
        paragraphCorn = document.createElement("p");
        cornButton.appendChild(paragraphCorn);
        paragraphCorn.innerHTML = "Mais:" + allInputElements[0].value;
        paragraphCorn.classList.add("ingredientsValue");
        //Paragraph für Resource wird erstellt
        paragraphCornResource = document.createElement("p");
        cornResourceButton.appendChild(paragraphCornResource);
        paragraphCornResource.innerHTML = "Mais:" + allInputElements[0].value;
        paragraphCornResource.classList.add("resourceValue");
        imgDataCorn = Döner_Trainer.crc2.getImageData(0, 0, Döner_Trainer.crc2.canvas.width, Döner_Trainer.crc2.canvas.height);
    }
    //RedSalad Objekt wird kreiert
    function createRedSalad() {
        allInputElements = document.querySelectorAll("input");
        ingredientAndResourceAmountRedsalad = parseFloat(allInputElements[0].value);
        let redSalad = new Döner_Trainer.Redsalad(ingredientAndResourceAmountRedsalad, ingredientAndResourceAmountRedsalad);
        vegetables.push(redSalad);
        //Paragraph für Zutat wird erstellt
        paragraphRedsalad = document.createElement("p");
        redsaladButton.appendChild(paragraphRedsalad);
        paragraphRedsalad.innerHTML = "Rotkraut:" + allInputElements[0].value;
        paragraphRedsalad.classList.add("ingredientsValue");
        //Paragraph für Resource wird erstellt
        paragraphRedsaladResource = document.createElement("p");
        redsaladResourceButton.appendChild(paragraphRedsaladResource);
        paragraphRedsaladResource.innerHTML = "Rotkraut:" + allInputElements[0].value;
        paragraphRedsaladResource.classList.add("resourceValue");
        imgDataRedSalad = Döner_Trainer.crc2.getImageData(0, 0, Döner_Trainer.crc2.canvas.width, Döner_Trainer.crc2.canvas.height);
    }
    //Tomato Objekt wird kreiert
    function createTomatoe() {
        allInputElements = document.querySelectorAll("input");
        ingredientAndResourceAmountTomato = parseFloat(allInputElements[0].value);
        let tomato = new Döner_Trainer.Tomato(ingredientAndResourceAmountTomato, ingredientAndResourceAmountTomato);
        vegetables.push(tomato);
        //Paragraph für Zutat wird erstellt
        paragraphTomato = document.createElement("p");
        tomatoButton.appendChild(paragraphTomato);
        paragraphTomato.innerHTML = "Tomate:" + allInputElements[0].value;
        paragraphTomato.classList.add("ingredientsValue");
        //Paragraph für Resource wird erstellt
        paragraphTomatoResource = document.createElement("p");
        tomatoResourceButton.appendChild(paragraphTomatoResource);
        paragraphTomatoResource.innerHTML = "Tomate:" + allInputElements[0].value;
        paragraphTomatoResource.classList.add("resourceValue");
        imgDataTomato = Döner_Trainer.crc2.getImageData(0, 0, Döner_Trainer.crc2.canvas.width, Döner_Trainer.crc2.canvas.height);
    }
    //Salad Objekt wird kreiert
    function createSalad() {
        allInputElements = document.querySelectorAll("input");
        ingredientAndResourceAmountSalad = parseFloat(allInputElements[0].value);
        let salad = new Döner_Trainer.Salad(ingredientAndResourceAmountSalad, ingredientAndResourceAmountSalad);
        vegetables.push(salad);
        //Paragraph für Zutat wird erstellt
        paragraphSalad = document.createElement("p");
        saladButton.appendChild(paragraphSalad);
        paragraphSalad.innerHTML = "Salat:" + allInputElements[0].value;
        paragraphSalad.classList.add("ingredientsValue");
        //Paragraph für Resource wird erstellt
        paragraphSaladResource = document.createElement("p");
        saladResourceButton.appendChild(paragraphSaladResource);
        paragraphSaladResource.innerHTML = "Salat:" + allInputElements[0].value;
        paragraphSaladResource.classList.add("resourceValue");
        imgDataSalad = Döner_Trainer.crc2.getImageData(0, 0, Döner_Trainer.crc2.canvas.width, Döner_Trainer.crc2.canvas.height);
    }
    function createEmployee() {
        //Alle Selectelemente werden deklariert
        allSelectElements = document.querySelectorAll("select");
        //Das erste Selectelement wird deklariert
        employeeValue = parseFloat(allSelectElements[1].value);
        customerValue = parseFloat(allSelectElements[2].value);
        for (let i = 0; i < employeeValue; i++) {
            //Employee Objekt wird kreiert
            let employee = new Döner_Trainer.Employee();
            humans.push(employee);
            employeeArray.push(employee);
        }
        //Alle x Sekunden erscheint ein Kunde, je nach ausgewählter Einstellung
        setInterval(createCustomer, customerValue);
        setInterval(updateMoodCustomer, 1000);
    }
    //Customer Objekt wird kreiert
    function createCustomer() {
        if (customerArray.length < 3) {
            let customer = new Döner_Trainer.Customer();
            humans.push(customer);
            customerArray.push(customer);
            customer.orderMeal();
            console.log(customerArray[0].customerSubclassOrder);
            orderDiv.innerHTML = "Bestellung:" + customerArray[0].customerSubclassOrder;
        }
    }
    function checkOrder() {
        for (let i = 0; i < customerArray[0].customerSubclassOrder.length; i++) {
            if (customerArray[0].customerSubclassOrder[i] == employeeIngredient[i]) {
                customerArray[0].mood += 10;
                employeeArray[currentEmployee].mood += 5;
            }
            else {
                customerArray[0].mood -= 10;
                employeeArray[currentEmployee].mood -= 5;
                console.log(employeeArray[currentEmployee].mood);
            }
        }
        displaySoldBread();
        employeeIngredient.splice(0, employeeIngredient.length);
        customerArray.splice(0, 1);
        orderDiv.innerHTML = "Bestellung:";
        humans.splice(employeeValue, 1);
        orderDiv.innerHTML = "Bestellung:" + customerArray[0].customerSubclassOrder;
    }
    function updateMoodCustomer() {
        for (let i = 0; i < customerArray.length; i++) {
            customerArray[i].mood -= 3;
            console.log(customerArray[i].mood);
        }
    }
    function update() {
        Döner_Trainer.crc2.putImageData(imgDataOnion, 0, 0);
        Döner_Trainer.crc2.putImageData(imgDataCorn, 0, 0);
        Döner_Trainer.crc2.putImageData(imgDataRedSalad, 0, 0);
        Döner_Trainer.crc2.putImageData(imgDataSalad, 0, 0);
        Döner_Trainer.crc2.putImageData(imgDataTomato, 0, 0);
        for (let i = 0; i < humans.length; i++) {
            humans[i].draw();
            // humans[i].move(1 / 50);
        }
        for (let i = 0; i < vegetables.length; i++) {
            vegetables[i].draw();
        }
        displayTotalMood();
    }
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=Main.js.map