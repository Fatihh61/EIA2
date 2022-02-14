namespace Döner_Trainer {

    export let crc2: CanvasRenderingContext2D;

    window.addEventListener("load", handleLoad);

    //Deklariere Formelement
    let form: HTMLFormElement;

    //Div Elemente für die Anzeige
    let orderDiv: HTMLDivElement;
    let totalMoodDiv: HTMLDivElement;
    let currentOrder: HTMLDivElement;
    let soldBread: HTMLDivElement;

    //Anzahl verkaufter Brotarten
    let counterDöner: number = 0;
    let counterYufka: number = 0;
    let counterLahmacun: number = 0;

    //Deklariere div für canvas
    let canvasContainer: HTMLDivElement;

    //Deklariere Superklassen als array
    let humans: Human[] = [];
    let vegetables: Vegetable[] = [];

    //Deklariere Subklasse als Array
    let employeeArray: Employee[] = [];
    let customerArray: Customer[] = [];

    //Deklariere Brotarten in einem Array
    let breadArray: string[] = ["döner", "yufka", "lahmacun"];
    let ingredientsArray: string[] = ["zwiebel", "mais", "salat", "rotkraut", "tomate"];

    //Deklariere Brotart und Zutaten, die Mitarbeiter verwendet
    let employeeBread: string[] = [];
    let employeeIngredient: string[] = [];

    //Deklariere Anzahl der Mitarbeiter und Kunden im Durschnitt/Zeit
    let employeeValue: number;
    let customerValue: number;

    //Deklariere Menge der Resource
    let resourceAmount: number;

    //Aktueller Mitarbeiter für die Positionsauswahl
    let currentEmployee: number;

    //Deklariere alle Input- und Selectelemente
    let allInputElements: NodeListOf<HTMLInputElement>;
    let allSelectElements: NodeListOf<HTMLSelectElement>;

    //Deklariere alle Button für die Zutaten an der Theke
    let onionButton: HTMLButtonElement;
    let cornButton: HTMLButtonElement;
    let saladButton: HTMLButtonElement;
    let redsaladButton: HTMLButtonElement;
    let tomatoButton: HTMLButtonElement;

    //Deklariere alle Button für die Resourcen
    let onionResourceButton: HTMLButtonElement;
    let cornResourceButton: HTMLButtonElement;
    let saladResourceButton: HTMLButtonElement;
    let redsaladResourceButton: HTMLButtonElement;
    let tomatoResourceButton: HTMLButtonElement;

    //Deklariere alle Button für die Brotarten
    let dönerButton: HTMLButtonElement;
    let yufkaButton: HTMLButtonElement;
    let lahmacunButton: HTMLButtonElement;

    //Deklariere Button für Mitarbeiter Nummer 1 
    let employeeThekeButton: HTMLButtonElement;
    let employeeDönerButton: HTMLButtonElement;
    let employeeTelefonButton: HTMLButtonElement;
    let employeeResourceButton: HTMLButtonElement;
    let employeePauseButton: HTMLButtonElement;
    let employeePayButton: HTMLButtonElement;

    //Ingredients als Paragraphen
    let paragraphOnion: HTMLParagraphElement;
    let paragraphTomato: HTMLParagraphElement;
    let paragraphSalad: HTMLParagraphElement;
    let paragraphRedsalad: HTMLParagraphElement;
    let paragraphCorn: HTMLParagraphElement;

    //Brotarten als Paragraph
    let paragraphDöner: HTMLParagraphElement;
    let paragraphYufka: HTMLParagraphElement;
    let paragraphLahmacun: HTMLParagraphElement;

    //Resourcen als Paragraphen
    let paragraphOnionResource: HTMLParagraphElement;
    let paragraphTomatoResource: HTMLParagraphElement;
    let paragraphSaladResource: HTMLParagraphElement;
    let paragraphRedsaladResource: HTMLParagraphElement;
    let paragraphCornResource: HTMLParagraphElement;

    //ImageData
    let imgDataKebabHouse: ImageData;
    let imgDataOnion: ImageData;
    let imgDataCorn: ImageData;
    let imgDataRedSalad: ImageData;
    let imgDataSalad: ImageData;
    let imgDataTomato: ImageData;

    //Menge der Zutaten an der Theke
    let ingredientAndResourceAmountOnion: number;
    let ingredientAndResourceAmountCorn: number;
    let ingredientAndResourceAmountSalad: number;
    let ingredientAndResourceAmountRedsalad: number;
    let ingredientAndResourceAmountTomato: number;

    function handleLoad(_event: Event): void {

        //Start Button von Startseite wird deklariert und listener drauf installiert
        let startButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#startButton");
        startButton.addEventListener("click", loadCanvas);
    }

    function loadCanvas(_event: MouseEvent): void {

        //Canvas wird deklariert
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        //Wertzuweisung für Formelement und isHidden remove
        form = <HTMLFormElement>document.querySelector("form");
        form.classList.add("isHidden");
        canvas.classList.remove("isHidden");

        //Wertzuweisung für Canvas und isHidden remove
        canvasContainer = <HTMLDivElement>document.getElementById("canvasContainer");
        canvasContainer.classList.remove("isHidden");

        //Wertzuweisung für die Div Elemente
        orderDiv = <HTMLDivElement>document.getElementById("order");
        totalMoodDiv = <HTMLDivElement>document.getElementById("totalMotivation");
        currentOrder = <HTMLDivElement>document.getElementById("currentOrder");
        soldBread = <HTMLDivElement>document.getElementById("soldBread");

        //Wertzuweisung für Zutaten an der Theke und isHidden remove
        onionButton = <HTMLButtonElement>document.getElementById("onionButton");
        cornButton = <HTMLButtonElement>document.getElementById("cornButton");
        saladButton = <HTMLButtonElement>document.getElementById("saladButton");
        redsaladButton = <HTMLButtonElement>document.getElementById("redsaladButton");
        tomatoButton = <HTMLButtonElement>document.getElementById("tomatoButton");

        //Wertzuweisung für Resourcen und isHidden remove
        onionResourceButton = <HTMLButtonElement>document.getElementById("onionResourcenButton");
        cornResourceButton = <HTMLButtonElement>document.getElementById("cornResourcenButton");
        saladResourceButton = <HTMLButtonElement>document.getElementById("saladResourcenButton");
        redsaladResourceButton = <HTMLButtonElement>document.getElementById("redsaladResourcenButton");
        tomatoResourceButton = <HTMLButtonElement>document.getElementById("tomatoResourcenButton");

        //Wertzuweisung für Brotarten und isHidden remove
        dönerButton = <HTMLButtonElement>document.getElementById("dönerButton");
        yufkaButton = <HTMLButtonElement>document.getElementById("yufkaButton");
        lahmacunButton = <HTMLButtonElement>document.getElementById("lahmacunButton");

        //Wertzuweisung für Mitarbeiter und isHidden remove
        employeeThekeButton = <HTMLButtonElement>document.getElementById("employee1Theke");
        employeeDönerButton = <HTMLButtonElement>document.getElementById("employee1Döner");
        employeeTelefonButton = <HTMLButtonElement>document.getElementById("employee1Telefon");
        employeeResourceButton = <HTMLButtonElement>document.getElementById("employee1Resourcen");
        employeePauseButton = <HTMLButtonElement>document.getElementById("employee1Pause");
        employeePayButton = <HTMLButtonElement>document.getElementById("giveOrder");

        //Steuerung für die Mitarbeiter
        employeeThekeButton.addEventListener("click", employeePosition);
        employeeDönerButton.addEventListener("click", employeePosition);
        employeeTelefonButton.addEventListener("click", employeePosition);
        employeeResourceButton.addEventListener("click", employeePosition);
        employeePauseButton.addEventListener("click", employeePosition);
        // employeePrepareResourceButton.addEventListener("click", employeePosition);
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

    function ingredient(_event: MouseEvent): void {

        let target: HTMLButtonElement = <HTMLButtonElement>_event.target;

        let targetId: string = <string>target.id;

        switch (targetId) {

            case "onionButton":
                if (vegetables[0].ingredientsAmount > 0 && employeeArray[currentEmployee].position.y == 320 && customerArray[0].customerSubclassOrder.length > employeeIngredient.length && employeeArray[currentEmployee].mood > 0) {

                    vegetables[0].subtractVegetable(vegetables[0]);

                    employeeIngredient.push(ingredientsArray[0]);

                    paragraphOnion.innerHTML = "Zwiebel:" + vegetables[0].ingredientsAmount;
                    displayCurrentOrder();
                }
                break;
            case "cornButton":
                if (vegetables[1].ingredientsAmount > 0 && employeeArray[currentEmployee].position.y == 320 && customerArray[0].customerSubclassOrder.length > employeeIngredient.length && employeeArray[currentEmployee].mood > 0) {

                    vegetables[1].subtractVegetable(vegetables[1]);

                    employeeIngredient.push(ingredientsArray[1]);

                    paragraphCorn.innerHTML = "Mais:" + vegetables[1].ingredientsAmount;
                    displayCurrentOrder();
                }
                break;
            case "saladButton":
                if (vegetables[2].ingredientsAmount > 0 && employeeArray[currentEmployee].position.y == 320 && customerArray[0].customerSubclassOrder.length > employeeIngredient.length && employeeArray[currentEmployee].mood > 0) {

                    vegetables[2].subtractVegetable(vegetables[2]);

                    employeeIngredient.push(ingredientsArray[2]);

                    paragraphSalad.innerHTML = "Salat:" + vegetables[2].ingredientsAmount;
                    displayCurrentOrder();
                }
                break;
            case "redsaladButton":
                if (vegetables[3].ingredientsAmount > 0 && employeeArray[currentEmployee].position.y == 320 && customerArray[0].customerSubclassOrder.length > employeeIngredient.length && employeeArray[currentEmployee].mood > 0) {

                    vegetables[3].subtractVegetable(vegetables[3]);

                    employeeIngredient.push(ingredientsArray[3]);

                    paragraphRedsalad.innerHTML = "Rotkraut:" + vegetables[3].ingredientsAmount;
                    displayCurrentOrder();
                }
                break;
            case "tomatoButton":
                if (vegetables[4].ingredientsAmount > 0 && employeeArray[currentEmployee].position.y == 320 && customerArray[0].customerSubclassOrder.length > employeeIngredient.length && employeeArray[currentEmployee].mood > 0) {

                    vegetables[4].subtractVegetable(vegetables[4]);

                    employeeIngredient.push(ingredientsArray[4]);

                    paragraphTomato.innerHTML = "Tomate:" + vegetables[4].ingredientsAmount;
                    displayCurrentOrder();
                }
                break;
        }
    }

    function resource(_event: MouseEvent): void {

        let target: HTMLButtonElement = <HTMLButtonElement>_event.target;

        let targetId: string = <string>target.id;

        switch (targetId) {

            case "onionResourcenButton":
                if (vegetables[0].resourceAmount > 0 && employeeArray[currentEmployee].position.y == 140 && employeeArray[currentEmployee].mood > 0) {

                    setTimeout(function (): void {
                        fillResource(0);
                    }, 10000);
                }
                break;
            case "cornResourcenButton":
                if (vegetables[1].resourceAmount > 0 && employeeArray[currentEmployee].position.y == 140 && employeeArray[currentEmployee].mood > 0) {

                    setTimeout(function (): void {
                        fillResource(1);
                    }, 10000);
                }
                break;
            case "saladResourcenButton":
                if (vegetables[2].resourceAmount > 0 && employeeArray[currentEmployee].position.y == 140 && employeeArray[currentEmployee].mood > 0) {

                    setTimeout(function (): void {
                        fillResource(2);
                    }, 10000);
                } 
                break;
            case "redsaladResourcenButton":
                if (vegetables[3].resourceAmount > 0 && employeeArray[currentEmployee].position.y == 140 && employeeArray[currentEmployee].mood > 0) {

                    setTimeout(function (): void {
                        fillResource(3);
                    }, 10000);
                }
                break;
            case "tomatoResourcenButton":
                if (vegetables[4].resourceAmount > 0 && employeeArray[currentEmployee].position.y == 140 && employeeArray[currentEmployee].mood > 0) {

                    setTimeout(function (): void {
                        fillResource(4);
                    }, 10000);
                } 
        }
    }

    function fillResource(_vegetablesNumber: number): void {

        vegetables[_vegetablesNumber].fillVegetable(vegetables[_vegetablesNumber], ingredientAndResourceAmountOnion);

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

    function displayCurrentOrder(): void {
        let paragraphForCurrentOrder: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("currentOrderParagraph");
        paragraphForCurrentOrder.innerHTML = "" + employeeIngredient;
    }

    function displaySoldBread(): void {

        paragraphDöner = <HTMLParagraphElement>document.getElementById("soldDöner");
        paragraphYufka = <HTMLParagraphElement>document.getElementById("soldYufka");
        paragraphLahmacun = <HTMLParagraphElement>document.getElementById("soldLahmacun");

        for (let i: number = 0; i < employeeIngredient.length; i++) {

            if (employeeIngredient[i] == breadArray[0]) {

                counterDöner++;
                paragraphDöner.innerHTML = "Döner:" + counterDöner;

            }
            else if (employeeIngredient[i] == breadArray[1]) {

                counterYufka++;
                paragraphYufka.innerHTML = "Yufka:" + counterYufka;
            } else if (employeeIngredient[i] == breadArray[2]) {

                counterLahmacun++;
                paragraphLahmacun.innerHTML = "Lahmacun:" + counterLahmacun;
            }
        }
    }

    function displayTotalMood(): void {

        let totalMoodAmount: number = 0;

        for (let i: number = 0; i < humans.length; i++) {
            totalMoodAmount += humans[i].mood;
        }
        totalMoodAmount /= humans.length;

        totalMoodDiv.innerHTML = "Zufriedenheit:" + Math.floor(totalMoodAmount);

        if (totalMoodAmount < 40) {
            alert("Game Over");
        }
    }

    function employeePosition(_event: MouseEvent): void {

        let target: HTMLButtonElement = <HTMLButtonElement>_event.target;

        let targetId: string = <string>target.id;

        allSelectElements = document.querySelectorAll("select");

        currentEmployee = parseFloat(allSelectElements[0].value);

        // resourceAmount = parseFloat(allInputElements[0].value);

        switch (targetId) {

            case "employee1Theke":
                employeeArray[currentEmployee].takePosition(450, 320);
                break;
            case "employee1Döner":
                employeeArray[currentEmployee].takePosition(245, 225);
                break;
            case "employee1Telefon":
                employeeArray[currentEmployee].takePosition(650, 315);

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
                employeeArray[currentEmployee].takePosition(450, 140);
                break;
            case "employee1Pause":

                allSelectElements = document.querySelectorAll("select");

                customerValue = parseFloat(allSelectElements[3].value);

                employeeArray[currentEmployee].position.x = 650;
                employeeArray[currentEmployee].position.y = 150;

                let currentNumber: number = currentEmployee;
                // employeeThekeButton.classList.add("buttonNotAvailaible");
                // employeeDönerButton.classList.add("buttonNotAvailaible");
                // employeeTelefonButton.classList.add("buttonNotAvailaible");
                // employeePauseButton.classList.add("buttonNotAvailaible");
                // employeePrepareResourceButton.classList.add("buttonNotAvailaible");
                // employeeResourceButton.classList.add("buttonNotAvailaible");
                // employeePayButton.classList.add("buttonNotAvailaible");

                setTimeout(function (): void {
                    fillMotivation(currentNumber);
                }, customerValue);
        }
    }

    function fillResourcesByTelephone(): void {

        for (let i: number = 0; i < vegetables.length; i++) {

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

    function fillMotivation(_currentEmployee: number): void {

        console.log("Nach x Sekunden Motivation auffüllen");

        employeeArray[_currentEmployee].takeNap(650, 150);

        // employeeThekeButton.classList.remove("buttonNotAvailaible");
        // employeeDönerButton.classList.remove("buttonNotAvailaible");
        // employeeTelefonButton.classList.remove("buttonNotAvailaible");
        // employeePauseButton.classList.remove("buttonNotAvailaible");
        // employeePrepareResourceButton.classList.remove("buttonNotAvailaible");
        // employeeResourceButton.classList.remove("buttonNotAvailaible");
        // employeePayButton.classList.remove("buttonNotAvailaible");
    }

    function addBread(_event: MouseEvent): void {

        let target: HTMLButtonElement = <HTMLButtonElement>_event.target;

        let targetId: string = <string>target.id;

        if (employeeArray[currentEmployee].position.x == 245 && employeeArray[currentEmployee].position.y == 225 && customerArray[0].customerSubclassOrder.length > employeeIngredient.length) {

            switch (targetId) {
                case "dönerButton":
                    console.log("dönerButton");
                    employeeBread.push(breadArray[0]);

                    employeeIngredient.push(breadArray[0]);

                    displayCurrentOrder();
                    break;
                case "yufkaButton":
                    console.log("yufkaButton");
                    employeeBread.push(breadArray[1]);

                    employeeIngredient.push(breadArray[1]);

                    displayCurrentOrder();
                    break;
                case "lahmacunButton":
                    console.log("lahmacunButton");
                    employeeBread.push(breadArray[2]);

                    employeeIngredient.push(breadArray[2]);

                    displayCurrentOrder();
                    break;
            }
        }
    }

    //Kebabhaus wird durch Canvas gezeichnet
    function drawKebabHouse(): void {

        //Äußeren Wände der Küche
        crc2.save();
        crc2.lineWidth = 10;
        crc2.strokeStyle = "black";
        crc2.strokeRect(0, 0, 800, 600);
        crc2.restore();

        //Rechteck innerhalb der Küche
        crc2.save();

        crc2.beginPath();
        crc2.lineWidth = 4;
        crc2.strokeRect(200, 100, 500, 250);
        crc2.strokeStyle = "black";
        crc2.closePath();

        crc2.restore();

        //Theke1
        crc2.save();

        crc2.beginPath();
        crc2.moveTo(700, 100);
        crc2.lineTo(800, 100);
        crc2.moveTo(700, 350);
        crc2.lineTo(800, 350);
        crc2.lineWidth = 4;
        crc2.fillStyle = "#5b3a29";
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.fill();
        crc2.closePath();

        crc2.restore();

        //Anzeigemenge für Zutaten

        crc2.save();

        crc2.beginPath();
        crc2.lineWidth = 4;
        crc2.strokeStyle = "black";
        crc2.moveTo(0, 500);
        crc2.lineTo(800, 500);
        crc2.stroke();
        crc2.closePath();

        crc2.restore();

        //Theke2
        crc2.save();

        crc2.beginPath();
        crc2.lineWidth = 4;
        crc2.strokeRect(0, 350, 800, 125);
        crc2.strokeStyle = "black";
        crc2.closePath();

        crc2.restore();

        //Dönerspieß
        crc2.save();

        crc2.beginPath();
        crc2.lineWidth = 3;
        crc2.fillStyle = "#b47636";
        crc2.arc(100, 225, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();

        crc2.restore();

        crc2.save();

        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.arc(100, 225, 1, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        crc2.restore();

        //Behälter für Ersatzzutaten
        let positionOfErsatzbehälter: number = 0;
        let numberAdditionErsatzbehälter: number = 100;
        let colorArray: string [] = ["red", "#420075", "green", "#fffc49", "#a476cf"];

        for (let i: number = 0; i <= 4; i++) {
            crc2.save();

            crc2.beginPath();
            crc2.lineWidth = 2;
            crc2.fillStyle = colorArray[i];
            crc2.strokeStyle = "black";
            crc2.fillRect(225 + positionOfErsatzbehälter, 25, 50, 50);
            crc2.strokeRect(225 + positionOfErsatzbehälter, 25, 50, 50);

            positionOfErsatzbehälter += numberAdditionErsatzbehälter;

            crc2.closePath();
            crc2.restore();
        }

        //"Hallo" Matte
        crc2.save();

        crc2.beginPath();
        crc2.lineWidth = 3;
        crc2.fillStyle = "#B8860B";
        crc2.strokeStyle = "black";
        crc2.fillRect(50, 525, 75, 50);
        crc2.strokeRect(50, 525, 75, 50);
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = "black";
        crc2.font = "25px Arial";
        crc2.fillText("Hallo", 57, 558);
        crc2.restore();

        imgDataKebabHouse = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    //Onion Objekt wird kreiert
    function createOnion(): void {

        allInputElements = document.querySelectorAll("input");
        ingredientAndResourceAmountOnion = parseFloat(allInputElements[0].value);

        let onion: Onion = new Onion(ingredientAndResourceAmountOnion, ingredientAndResourceAmountOnion);

        vegetables.push(onion);

        //Paragraph für Zutat wird erstellt
        paragraphOnion = <HTMLParagraphElement>document.createElement("p");
        onionButton.appendChild(paragraphOnion);
        paragraphOnion.innerHTML = "Zwiebel:" + allInputElements[0].value;
        paragraphOnion.classList.add("ingredientsValue");

        //Paragraph für Resource wird erstellt
        paragraphOnionResource = <HTMLParagraphElement>document.createElement("p");
        onionResourceButton.appendChild(paragraphOnionResource);
        paragraphOnionResource.innerHTML = "Zwiebel:" + allInputElements[0].value;
        paragraphOnionResource.classList.add("resourceValue");

        imgDataOnion = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    //Corn Objekt wird kreiert
    function createCorn(): void {

        allInputElements = document.querySelectorAll("input");
        ingredientAndResourceAmountCorn = parseFloat(allInputElements[0].value);

        let corn: Corn = new Corn(ingredientAndResourceAmountCorn, ingredientAndResourceAmountCorn);

        vegetables.push(corn);

        //Paragraph für Zutat wird erstellt
        paragraphCorn = <HTMLParagraphElement>document.createElement("p");
        cornButton.appendChild(paragraphCorn);
        paragraphCorn.innerHTML = "Mais:" + allInputElements[0].value;
        paragraphCorn.classList.add("ingredientsValue");

        //Paragraph für Resource wird erstellt
        paragraphCornResource = <HTMLParagraphElement>document.createElement("p");
        cornResourceButton.appendChild(paragraphCornResource);
        paragraphCornResource.innerHTML = "Mais:" + allInputElements[0].value;
        paragraphCornResource.classList.add("resourceValue");

        imgDataCorn = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    //RedSalad Objekt wird kreiert
    function createRedSalad(): void {

        allInputElements = document.querySelectorAll("input");
        ingredientAndResourceAmountRedsalad = parseFloat(allInputElements[0].value);

        let redSalad: Redsalad = new Redsalad(ingredientAndResourceAmountRedsalad, ingredientAndResourceAmountRedsalad);

        vegetables.push(redSalad);

        //Paragraph für Zutat wird erstellt
        paragraphRedsalad = <HTMLParagraphElement>document.createElement("p");
        redsaladButton.appendChild(paragraphRedsalad);
        paragraphRedsalad.innerHTML = "Rotkraut:" + allInputElements[0].value;
        paragraphRedsalad.classList.add("ingredientsValue");

        //Paragraph für Resource wird erstellt
        paragraphRedsaladResource = <HTMLParagraphElement>document.createElement("p");
        redsaladResourceButton.appendChild(paragraphRedsaladResource);
        paragraphRedsaladResource.innerHTML = "Rotkraut:" + allInputElements[0].value;
        paragraphRedsaladResource.classList.add("resourceValue");

        imgDataRedSalad = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    //Tomato Objekt wird kreiert
    function createTomatoe(): void {

        allInputElements = document.querySelectorAll("input");
        ingredientAndResourceAmountTomato = parseFloat(allInputElements[0].value);

        let tomato: Tomato = new Tomato(ingredientAndResourceAmountTomato, ingredientAndResourceAmountTomato);

        vegetables.push(tomato);

        //Paragraph für Zutat wird erstellt
        paragraphTomato = <HTMLParagraphElement>document.createElement("p");
        tomatoButton.appendChild(paragraphTomato);
        paragraphTomato.innerHTML = "Tomate:" + allInputElements[0].value;
        paragraphTomato.classList.add("ingredientsValue");

        //Paragraph für Resource wird erstellt
        paragraphTomatoResource = <HTMLParagraphElement>document.createElement("p");
        tomatoResourceButton.appendChild(paragraphTomatoResource);
        paragraphTomatoResource.innerHTML = "Tomate:" + allInputElements[0].value;
        paragraphTomatoResource.classList.add("resourceValue");

        imgDataTomato = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    //Salad Objekt wird kreiert
    function createSalad(): void {

        allInputElements = document.querySelectorAll("input");
        ingredientAndResourceAmountSalad = parseFloat(allInputElements[0].value);

        let salad: Salad = new Salad(ingredientAndResourceAmountSalad, ingredientAndResourceAmountSalad);

        vegetables.push(salad);

        //Paragraph für Zutat wird erstellt
        paragraphSalad = <HTMLParagraphElement>document.createElement("p");
        saladButton.appendChild(paragraphSalad);
        paragraphSalad.innerHTML = "Salat:" + allInputElements[0].value;
        paragraphSalad.classList.add("ingredientsValue");

        //Paragraph für Resource wird erstellt
        paragraphSaladResource = <HTMLParagraphElement>document.createElement("p");
        saladResourceButton.appendChild(paragraphSaladResource);
        paragraphSaladResource.innerHTML = "Salat:" + allInputElements[0].value;
        paragraphSaladResource.classList.add("resourceValue");

        imgDataSalad = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function createEmployee(): void {

        //Alle Selectelemente werden deklariert
        allSelectElements = document.querySelectorAll("select");

        //Das erste Selectelement wird deklariert
        employeeValue = parseFloat(allSelectElements[1].value);
        customerValue = parseFloat(allSelectElements[2].value);

        for (let i: number = 0; i < employeeValue; i++) {

            //Employee Objekt wird kreiert
            let employee: Employee = new Employee(Math.random() * 150 + 400, Math.random() * 135 + 125);
            humans.push(employee);
            employeeArray.push(employee);
        }
        //Alle x Sekunden erscheint ein Kunde, je nach ausgewählter Einstellung
        setInterval(createCustomer, customerValue);
        setInterval(updateMoodCustomer, 1000);
    }

    //Customer Objekt wird kreiert
    function createCustomer(): void {

        if (customerArray.length < 3) {

            let customer: Customer = new Customer(Math.random() * 400 + 200, 555);
            humans.push(customer);
            customerArray.push(customer);

            customer.orderMeal();
            // console.log(customerArray[0].customerSubclassOrder);

            orderDiv.innerHTML = "Bestellung:" + customerArray[0].customerSubclassOrder;
        }
    }

    function checkOrder(): void {

        for (let i: number = 0; i < customerArray[0].customerSubclassOrder.length; i++) {

            if (customerArray[0].customerSubclassOrder[i] == employeeIngredient[i]) {

                customerArray[0].mood += 10;
                employeeArray[currentEmployee].mood += 5;
            } else {

                customerArray[0].mood -= 10;
                employeeArray[currentEmployee].mood -= 5;
                // console.log(employeeArray[currentEmployee].mood);

            }
        }
        displaySoldBread();
        employeeIngredient.splice(0, employeeIngredient.length);

        customerArray.splice(0, 1);
        orderDiv.innerHTML = "Bestellung:";
        humans.splice(employeeValue, 1);
        orderDiv.innerHTML = "Bestellung:" + customerArray[0].customerSubclassOrder;
    }

    function updateMoodCustomer(): void {

        for (let i: number = 0; i < customerArray.length; i++) {
            customerArray[i].mood -= 3;
            // console.log(customerArray[i].mood);
        }
    }

    function update(): void {

        // crc2.putImageData(imgDataKebabHouse, 0, 0);
        crc2.putImageData(imgDataOnion, 0, 0);
        crc2.putImageData(imgDataCorn, 0, 0);
        crc2.putImageData(imgDataRedSalad, 0, 0);
        crc2.putImageData(imgDataSalad, 0, 0);
        crc2.putImageData(imgDataTomato, 0, 0);


        for (let i: number = 0; i < humans.length; i++) {
            humans[i].draw();
        }

        for (let i: number = 0; i < vegetables.length; i++) {
            vegetables[i].draw();
        }

        for (let i: number = 0; i < customerArray.length; i++) {
            customerArray[i].move(1 / 50);
            
        }

        // for (let i: number = 0; i < employeeArray.length; i++) {
        //     employeeArray[i].move(1 / 50);
            
        // }
        displayTotalMood();
    }
}