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
    let employee1ThekeButton;
    let employee1DönerButton;
    let employee1TelefonButton;
    let employee1ResourceButton;
    let employee1PauseButton;
    let employee1PrepareResourceButton;
    //ImageData
    let imgDataKebabHouse;
    let imgDataOnion;
    let imgDataCorn;
    let imgDataRedSalad;
    let imgDataSalad;
    let imgDataTomato;
    let ingredientAmountOnion;
    let ingredientAmountCorn;
    let ingredientAmountSalad;
    let ingredientAmountRedsalad;
    let ingredientAmountTomato;
    let employee1ThekeBoolean = true;
    let employee1DönerBoolean = true;
    let employee1TelefonBoolean = true;
    let employee1ResourceBoolean = true;
    let employee1PauseBoolean = true;
    let employee1PrepareBoolean = true;
    let employee2ThekeBoolean = true;
    let employee2DönerBoolean = true;
    let employee2TelefonBoolean = true;
    let employee2ResourceBoolean = true;
    let employee2PauseBoolean = true;
    let employee2PrepareBoolean = true;
    let employee3ThekeBoolean = true;
    let employee3DönerBoolean = true;
    let employee3TelefonBoolean = true;
    let employee3ResourceBoolean = true;
    let employee3PauseBoolean = true;
    let employee3PrepareBoolean = true;
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
        //Wertzuweisung für Mitarbeiter Nummer 1 und isHidden remove
        employee1ThekeButton = document.getElementById("employee1Theke");
        employee1ThekeButton.classList.remove("isHidden");
        employee1DönerButton = document.getElementById("employee1Döner");
        employee1DönerButton.classList.remove("isHidden");
        employee1TelefonButton = document.getElementById("employee1Telefon");
        employee1TelefonButton.classList.remove("isHidden");
        employee1ResourceButton = document.getElementById("employee1Resourcen");
        employee1ResourceButton.classList.remove("isHidden");
        employee1PauseButton = document.getElementById("employee1Pause");
        employee1PauseButton.classList.remove("isHidden");
        employee1PrepareResourceButton = document.getElementById("employee1PrepareResource");
        employee1PrepareResourceButton.classList.remove("isHidden");
        employee1ThekeButton.addEventListener("click", employee1Theke);
        employee1DönerButton.addEventListener("click", employee1Döner);
        employee1TelefonButton.addEventListener("click", employee1Telefon);
        employee1ResourceButton.addEventListener("click", employee1Resourcen);
        employee1PauseButton.addEventListener("click", employee1Pause);
        employee1PrepareResourceButton.addEventListener("click", employee1PrepareResource);
        onionButton.addEventListener("click", onionIngredient);
        cornButton.addEventListener("click", cornIngredient);
        saladButton.addEventListener("click", saladIngredient);
        redsaladButton.addEventListener("click", redsaladIngredient);
        tomatoButton.addEventListener("click", tomatoIngredient);
        onionResourceButton.addEventListener("click", onionResource);
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
    function employee1Theke(_event) {
        console.log(_event.target);
        let aktuellerMitarbeiter;
        allSelectElements = document.querySelectorAll("select");
        aktuellerMitarbeiter = parseFloat(allSelectElements[0].value);
        console.log(aktuellerMitarbeiter);
        switch (aktuellerMitarbeiter) {
            case 1:
                employee2DönerBoolean = true;
                employee3DönerBoolean = true;
                employee2TelefonBoolean = true;
                employee3TelefonBoolean = true;
                employee2ResourceBoolean = true;
                employee3ResourceBoolean = true;
                employee2PauseBoolean = true;
                employee3PauseBoolean = true;
                employee2PrepareBoolean = true;
                employee3PrepareBoolean = true;
                console.log(employee1ThekeBoolean);
                // employeeArray[0].takeOrder(450, 320);
                if (employee1ThekeBoolean === true) {
                    employeeArray[0].takeOrder(450, 320);
                    employee1ThekeBoolean = !employee1ThekeBoolean;
                    employee2ThekeBoolean = !employee2ThekeBoolean;
                    employee3ThekeBoolean = !employee3ThekeBoolean;
                    console.log(employee1ThekeBoolean);
                }
                break;
            case 2:
                employee1DönerBoolean = true;
                employee3DönerBoolean = true;
                employee1TelefonBoolean = true;
                employee3TelefonBoolean = true;
                employee1ResourceBoolean = true;
                employee3ResourceBoolean = true;
                employee1PauseBoolean = true;
                employee3PauseBoolean = true;
                employee1PrepareBoolean = true;
                employee3PrepareBoolean = true;
                // employeeArray[1].takeOrder(450, 320);
                if (employee2ThekeBoolean === true) {
                    employeeArray[1].takeOrder(450, 320);
                    employee1ThekeBoolean = !employee1ThekeBoolean;
                    employee2ThekeBoolean = !employee2ThekeBoolean;
                    employee3ThekeBoolean = !employee3ThekeBoolean;
                }
                break;
            case 3:
                employee1DönerBoolean = true;
                employee2DönerBoolean = true;
                employee1TelefonBoolean = true;
                employee2TelefonBoolean = true;
                employee1ResourceBoolean = true;
                employee2ResourceBoolean = true;
                employee1PauseBoolean = true;
                employee2PauseBoolean = true;
                employee1PrepareBoolean = true;
                employee2PrepareBoolean = true;
                // employeeArray[2].takeOrder(450, 320);
                if (employee3ThekeBoolean === true) {
                    employeeArray[2].takeOrder(450, 320);
                    employee1ThekeBoolean = !employee1ThekeBoolean;
                    employee2ThekeBoolean = !employee2ThekeBoolean;
                    employee3ThekeBoolean = !employee3ThekeBoolean;
                }
                break;
            default:
                console.log("Fehlgeschlagen");
        }
    }
    function employee1Döner(_event) {
        let aktuellerMitarbeiter;
        allSelectElements = document.querySelectorAll("select");
        aktuellerMitarbeiter = parseFloat(allSelectElements[0].value);
        switch (aktuellerMitarbeiter) {
            case 1:
                employee2ThekeBoolean = true;
                employee3ThekeBoolean = true;
                employee2TelefonBoolean = true;
                employee3TelefonBoolean = true;
                employee2ResourceBoolean = true;
                employee3ResourceBoolean = true;
                employee2PauseBoolean = true;
                employee3PauseBoolean = true;
                employee2PrepareBoolean = true;
                employee3PrepareBoolean = true;
                // employeeArray[0].cutKebab(245, 225);
                if (employee1DönerBoolean === true) {
                    employeeArray[0].cutKebab(245, 225);
                    employee1DönerBoolean = !employee1DönerBoolean;
                    employee2DönerBoolean = !employee2DönerBoolean;
                    employee3DönerBoolean = !employee3DönerBoolean;
                }
                break;
            case 2:
                employee1ThekeBoolean = true;
                employee3ThekeBoolean = true;
                employee1TelefonBoolean = true;
                employee3TelefonBoolean = true;
                employee1ResourceBoolean = true;
                employee3ResourceBoolean = true;
                employee1PauseBoolean = true;
                employee3PauseBoolean = true;
                employee1PrepareBoolean = true;
                employee3PrepareBoolean = true;
                // employeeArray[1].cutKebab(245, 225);
                if (employee2DönerBoolean === true) {
                    employeeArray[1].cutKebab(245, 225);
                    employee1DönerBoolean = !employee1DönerBoolean;
                    employee2DönerBoolean = !employee2DönerBoolean;
                    employee3DönerBoolean = !employee3DönerBoolean;
                }
                break;
            case 3:
                employee1ThekeBoolean = true;
                employee2ThekeBoolean = true;
                employee1TelefonBoolean = true;
                employee2TelefonBoolean = true;
                employee1ResourceBoolean = true;
                employee2ResourceBoolean = true;
                employee1PauseBoolean = true;
                employee2PauseBoolean = true;
                employee1PrepareBoolean = true;
                employee2PrepareBoolean = true;
                //employeeArray[2].cutKebab(245, 225);
                if (employee3DönerBoolean === true) {
                    employeeArray[2].cutKebab(245, 225);
                    employee1DönerBoolean = !employee1DönerBoolean;
                    employee2DönerBoolean = !employee2DönerBoolean;
                    employee3DönerBoolean = !employee3DönerBoolean;
                }
                break;
            default:
                console.log("Fehlgeschlagen");
        }
    }
    function employee1Telefon(_event) {
        let aktuellerMitarbeiter;
        allSelectElements = document.querySelectorAll("select");
        aktuellerMitarbeiter = parseFloat(allSelectElements[0].value);
        switch (aktuellerMitarbeiter) {
            case 1:
                employee2ThekeBoolean = true;
                employee3ThekeBoolean = true;
                employee2DönerBoolean = true;
                employee3DönerBoolean = true;
                employee2ResourceBoolean = true;
                employee3ResourceBoolean = true;
                employee2PauseBoolean = true;
                employee3PauseBoolean = true;
                employee2PrepareBoolean = true;
                employee3PrepareBoolean = true;
                // employeeArray[0].buyResources(650, 315);
                if (employee1TelefonBoolean === true) {
                    employeeArray[0].buyResources(650, 315);
                    employee1TelefonBoolean = !employee1TelefonBoolean;
                    employee2TelefonBoolean = !employee2TelefonBoolean;
                    employee3TelefonBoolean = !employee3TelefonBoolean;
                }
                break;
            case 2:
                employee1ThekeBoolean = true;
                employee3ThekeBoolean = true;
                employee1DönerBoolean = true;
                employee3DönerBoolean = true;
                employee1ResourceBoolean = true;
                employee3ResourceBoolean = true;
                employee1PauseBoolean = true;
                employee3PauseBoolean = true;
                employee1PrepareBoolean = true;
                employee3PrepareBoolean = true;
                // employeeArray[1].buyResources(650, 315);
                if (employee2TelefonBoolean === true) {
                    employeeArray[1].buyResources(650, 315);
                    employee1TelefonBoolean = !employee1TelefonBoolean;
                    employee2TelefonBoolean = !employee2TelefonBoolean;
                    employee3TelefonBoolean = !employee3TelefonBoolean;
                }
                break;
            case 3:
                employee1ThekeBoolean = true;
                employee2ThekeBoolean = true;
                employee1DönerBoolean = true;
                employee2DönerBoolean = true;
                employee1ResourceBoolean = true;
                employee2ResourceBoolean = true;
                employee1PauseBoolean = true;
                employee2PauseBoolean = true;
                employee1PrepareBoolean = true;
                employee2PrepareBoolean = true;
                // employeeArray[2].buyResources(650, 315);
                if (employee3TelefonBoolean === true) {
                    employeeArray[2].buyResources(650, 315);
                    employee1TelefonBoolean = !employee1TelefonBoolean;
                    employee2TelefonBoolean = !employee2TelefonBoolean;
                    employee3TelefonBoolean = !employee3TelefonBoolean;
                }
                break;
            default:
                console.log("Fehlgeschlagen");
        }
    }
    function employee1Resourcen(_event) {
        let aktuellerMitarbeiter;
        allSelectElements = document.querySelectorAll("select");
        aktuellerMitarbeiter = parseFloat(allSelectElements[0].value);
        switch (aktuellerMitarbeiter) {
            case 1:
                employee2ThekeBoolean = true;
                employee3ThekeBoolean = true;
                employee2DönerBoolean = true;
                employee3DönerBoolean = true;
                employee2TelefonBoolean = true;
                employee3TelefonBoolean = true;
                employee2PauseBoolean = true;
                employee3PauseBoolean = true;
                employee2PrepareBoolean = true;
                employee3PrepareBoolean = true;
                // employeeArray[0].fillResources(450, 140);
                if (employee1ResourceBoolean === true) {
                    employeeArray[0].fillResources(450, 140);
                    employee1ResourceBoolean = !employee1ResourceBoolean;
                    employee2ResourceBoolean = !employee2ResourceBoolean;
                    employee3ResourceBoolean = !employee3ResourceBoolean;
                }
                break;
            case 2:
                employee1ThekeBoolean = true;
                employee3ThekeBoolean = true;
                employee1DönerBoolean = true;
                employee3DönerBoolean = true;
                employee1TelefonBoolean = true;
                employee3TelefonBoolean = true;
                employee1PauseBoolean = true;
                employee3PauseBoolean = true;
                employee1PrepareBoolean = true;
                employee3PrepareBoolean = true;
                // employeeArray[1].fillResources(450, 140);
                if (employee2ResourceBoolean === true) {
                    employeeArray[1].fillResources(450, 140);
                    employee1ResourceBoolean = !employee1ResourceBoolean;
                    employee2ResourceBoolean = !employee2ResourceBoolean;
                    employee3ResourceBoolean = !employee3ResourceBoolean;
                }
                break;
            case 3:
                employee1ThekeBoolean = true;
                employee2ThekeBoolean = true;
                employee1DönerBoolean = true;
                employee2DönerBoolean = true;
                employee1TelefonBoolean = true;
                employee2TelefonBoolean = true;
                employee1PauseBoolean = true;
                employee2PauseBoolean = true;
                employee1PrepareBoolean = true;
                employee2PrepareBoolean = true;
                //employeeArray[2].fillResources(450, 140);
                if (employee3ResourceBoolean === true) {
                    employeeArray[2].fillResources(450, 140);
                    employee1ResourceBoolean = !employee1ResourceBoolean;
                    employee2ResourceBoolean = !employee2ResourceBoolean;
                    employee3ResourceBoolean = !employee3ResourceBoolean;
                }
                break;
            default:
                console.log("Fehlgeschlagen");
        }
    }
    function employee1Pause(_event) {
        let aktuellerMitarbeiter;
        allSelectElements = document.querySelectorAll("select");
        aktuellerMitarbeiter = parseFloat(allSelectElements[0].value);
        switch (aktuellerMitarbeiter) {
            case 1:
                employee2ThekeBoolean = true;
                employee3ThekeBoolean = true;
                employee2DönerBoolean = true;
                employee3DönerBoolean = true;
                employee2TelefonBoolean = true;
                employee3TelefonBoolean = true;
                employee2ResourceBoolean = true;
                employee3ResourceBoolean = true;
                employee2PrepareBoolean = true;
                employee3PrepareBoolean = true;
                //employeeArray[0].takeNap(650, 140);
                if (employee1PauseBoolean === true) {
                    employeeArray[0].takeNap(650, 140);
                    employee1PauseBoolean = !employee1PauseBoolean;
                    employee2PauseBoolean = !employee2PauseBoolean;
                    employee3PauseBoolean = !employee3PauseBoolean;
                }
                break;
            case 2:
                employee1ThekeBoolean = true;
                employee3ThekeBoolean = true;
                employee1DönerBoolean = true;
                employee3DönerBoolean = true;
                employee1TelefonBoolean = true;
                employee3TelefonBoolean = true;
                employee1ResourceBoolean = true;
                employee3ResourceBoolean = true;
                employee1PrepareBoolean = true;
                employee3PrepareBoolean = true;
                // employeeArray[1].takeNap(650, 140);
                if (employee2PauseBoolean === true) {
                    employeeArray[1].takeNap(650, 140);
                    employee1PauseBoolean = !employee1PauseBoolean;
                    employee2PauseBoolean = !employee2PauseBoolean;
                    employee3PauseBoolean = !employee3PauseBoolean;
                }
                break;
            case 3:
                employee1ThekeBoolean = true;
                employee2ThekeBoolean = true;
                employee1DönerBoolean = true;
                employee2DönerBoolean = true;
                employee1TelefonBoolean = true;
                employee2TelefonBoolean = true;
                employee1ResourceBoolean = true;
                employee2ResourceBoolean = true;
                employee1PrepareBoolean = true;
                employee2PrepareBoolean = true;
                // employeeArray[2].takeNap(650, 140);
                if (employee3PauseBoolean === true) {
                    employeeArray[2].takeNap(650, 140);
                    employee1PauseBoolean = !employee1PauseBoolean;
                    employee2PauseBoolean = !employee2PauseBoolean;
                    employee3PauseBoolean = !employee3PauseBoolean;
                }
                break;
            default:
                console.log("Fehlgeschlagen");
        }
    }
    function employee1PrepareResource(_event) {
        let aktuellerMitarbeiter;
        allSelectElements = document.querySelectorAll("select");
        aktuellerMitarbeiter = parseFloat(allSelectElements[0].value);
        switch (aktuellerMitarbeiter) {
            case 1:
                employee2ThekeBoolean = true;
                employee3ThekeBoolean = true;
                employee2DönerBoolean = true;
                employee3DönerBoolean = true;
                employee2TelefonBoolean = true;
                employee3TelefonBoolean = true;
                employee2ResourceBoolean = true;
                employee3ResourceBoolean = true;
                employee2PauseBoolean = true;
                employee3PauseBoolean = true;
                // employeeArray[0].prepareResource(650, 225);
                if (employee1PrepareBoolean === true) {
                    employeeArray[0].prepareResource(650, 225);
                    employee1PrepareBoolean = !employee1PrepareBoolean;
                    employee2PrepareBoolean = !employee2PrepareBoolean;
                    employee3PrepareBoolean = !employee3PrepareBoolean;
                }
                break;
            case 2:
                employee1ThekeBoolean = true;
                employee3ThekeBoolean = true;
                employee1DönerBoolean = true;
                employee3DönerBoolean = true;
                employee1TelefonBoolean = true;
                employee3TelefonBoolean = true;
                employee1ResourceBoolean = true;
                employee3ResourceBoolean = true;
                employee1PauseBoolean = true;
                employee3PauseBoolean = true;
                // employeeArray[1].prepareResource(650, 225);
                if (employee2PrepareBoolean === true) {
                    employeeArray[1].prepareResource(650, 225);
                    employee1PrepareBoolean = !employee1PrepareBoolean;
                    employee2PrepareBoolean = !employee2PrepareBoolean;
                    employee3PrepareBoolean = !employee3PrepareBoolean;
                }
                break;
            case 3:
                employee1ThekeBoolean = true;
                employee2ThekeBoolean = true;
                employee1DönerBoolean = true;
                employee2DönerBoolean = true;
                employee1TelefonBoolean = true;
                employee2TelefonBoolean = true;
                employee1ResourceBoolean = true;
                employee2ResourceBoolean = true;
                employee1PauseBoolean = true;
                employee2PauseBoolean = true;
                // employeeArray[2].prepareResource(650, 225);
                if (employee3PrepareBoolean === true) {
                    employeeArray[2].prepareResource(650, 225);
                    employee1PrepareBoolean = !employee1PrepareBoolean;
                    employee2PrepareBoolean = !employee2PrepareBoolean;
                    employee3PrepareBoolean = !employee3PrepareBoolean;
                }
                break;
            default:
                console.log("Fehlgeschlagen");
        }
    }
    function onionIngredient(_event) {
        console.log("clicked onionIngredient");
        vegetables[0].ingredientsAmount -= 5;
        console.log(vegetables[0].ingredientsAmount);
    }
    function cornIngredient(_event) {
        console.log("clicked cornIngredient");
        vegetables[1].ingredientsAmount -= 5;
        console.log(vegetables[1].ingredientsAmount);
    }
    function saladIngredient(_event) {
        console.log("clicked saladIngredient");
        vegetables[2].ingredientsAmount -= 5;
        console.log(vegetables[2].ingredientsAmount);
    }
    function redsaladIngredient(_event) {
        console.log("clicked redsaladIngredient");
        vegetables[3].ingredientsAmount -= 5;
        console.log(vegetables[3].ingredientsAmount);
    }
    function tomatoIngredient(_event) {
        console.log("clicked tomatoIngredient");
        vegetables[4].ingredientsAmount -= 5;
        console.log(vegetables[4].ingredientsAmount);
    }
    function onionResource(_event) {
        console.log("clicked onionResource");
        vegetables[0].ingredientsAmount = ingredientAmountOnion;
        console.log(vegetables[0].ingredientsAmount);
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
        imgDataOnion = Döner_Trainer.crc2.getImageData(0, 0, Döner_Trainer.crc2.canvas.width, Döner_Trainer.crc2.canvas.height);
    }
    //Corn Objekt wird kreiert
    function drawCorn() {
        allInputElements = document.querySelectorAll("input");
        ingredientAmountCorn = parseFloat(allInputElements[0].value);
        let corn = new Döner_Trainer.Corn(ingredientAmountCorn, ingredientAmountCorn);
        vegetables.push(corn);
        imgDataCorn = Döner_Trainer.crc2.getImageData(0, 0, Döner_Trainer.crc2.canvas.width, Döner_Trainer.crc2.canvas.height);
    }
    //RedSalad Objekt wird kreiert
    function drawRedSalad() {
        allInputElements = document.querySelectorAll("input");
        ingredientAmountRedsalad = parseFloat(allInputElements[0].value);
        let redSalad = new Döner_Trainer.Redsalad(ingredientAmountRedsalad, ingredientAmountRedsalad);
        vegetables.push(redSalad);
        imgDataRedSalad = Döner_Trainer.crc2.getImageData(0, 0, Döner_Trainer.crc2.canvas.width, Döner_Trainer.crc2.canvas.height);
    }
    //Tomato Objekt wird kreiert
    function drawTomatoe() {
        allInputElements = document.querySelectorAll("input");
        ingredientAmountTomato = parseFloat(allInputElements[0].value);
        let tomato = new Döner_Trainer.Tomato(ingredientAmountTomato, ingredientAmountTomato);
        vegetables.push(tomato);
        imgDataTomato = Döner_Trainer.crc2.getImageData(0, 0, Döner_Trainer.crc2.canvas.width, Döner_Trainer.crc2.canvas.height);
    }
    //Salad Objekt wird kreiert
    function drawSalad() {
        allInputElements = document.querySelectorAll("input");
        ingredientAmountSalad = parseFloat(allInputElements[0].value);
        let salad = new Döner_Trainer.Salad(ingredientAmountSalad, ingredientAmountSalad);
        vegetables.push(salad);
        imgDataSalad = Döner_Trainer.crc2.getImageData(0, 0, Döner_Trainer.crc2.canvas.width, Döner_Trainer.crc2.canvas.height);
    }
    function createEmployee() {
        //Wertzuweisung für FormData
        formData = new FormData(document.forms[0]);
        //Alle Input- und Selectelemente werden deklariert
        allInputElements = document.querySelectorAll("input");
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