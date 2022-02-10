namespace Döner_Trainer {


    export let crc2: CanvasRenderingContext2D;

    window.addEventListener("load", handleLoad);

    //Deklariere Formelement
    let form: HTMLFormElement;

    let orderDiv: HTMLDivElement;
    let totalMotivationDiv: HTMLDivElement;

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
    let ingredientsArray: string[] = ["zwiebel", "tomate", "mais", "salat", "rotkraut"];

    //Deklariere Anzahl der Mitarbeiter und Kunden im Durschnitt/Zeit
    let employeeValue: number;
    let customerValue: number;

    //Deklariere FormData
    let formData: FormData;

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
    let employeePrepareResourceButton: HTMLButtonElement;

    //Ingredients als Paragraphen
    let paragraphOnion: HTMLParagraphElement;
    let paragraphTomato: HTMLParagraphElement;
    let paragraphSalad: HTMLParagraphElement;
    let paragraphRedsalad: HTMLParagraphElement;
    let paragraphCorn: HTMLParagraphElement;

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
    let ingredientAmountOnion: number;
    let ingredientAmountCorn: number;
    let ingredientAmountSalad: number;
    let ingredientAmountRedsalad: number;
    let ingredientAmountTomato: number;

    //Deklariere Brotart und Zutaten, die Mitarbeiter verwendet
    let employeeBread: string[] = [];
    let employeeIngredient: string[] = [];


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

        orderDiv = <HTMLDivElement>document.getElementById("order");
        totalMotivationDiv = <HTMLDivElement> document.getElementById("totalMotivation");

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
        employeePrepareResourceButton = <HTMLButtonElement>document.getElementById("employee1PrepareResource");


        //Steuerung für die Mitarbeiter
        employeeThekeButton.addEventListener("click", employeeTheke);
        employeeDönerButton.addEventListener("click", employeeDöner);
        employeeTelefonButton.addEventListener("click", employeeTelefon);
        employeeResourceButton.addEventListener("click", employeeResourcen);
        employeePauseButton.addEventListener("click", employeePause);
        employeePrepareResourceButton.addEventListener("click", employeePrepareResource);

        //Zutat wird angeklickt und geleert
        onionButton.addEventListener("click", onionIngredient);
        cornButton.addEventListener("click", cornIngredient);
        saladButton.addEventListener("click", saladIngredient);
        redsaladButton.addEventListener("click", redsaladIngredient);
        tomatoButton.addEventListener("click", tomatoIngredient);

        //Ressource wird angeklickt und Zutat aufgefüllt
        onionResourceButton.addEventListener("click", onionResource);
        tomatoResourceButton.addEventListener("click", tomatoResource);
        saladResourceButton.addEventListener("click", saladResource);
        redsaladResourceButton.addEventListener("click", redsaladResource);
        cornResourceButton.addEventListener("click", cornResource);

        //Brotart wird angeklickt und hinzugefügt
        dönerButton.addEventListener("click", addDöner);
        yufkaButton.addEventListener("click", addYufka);
        lahmacunButton.addEventListener("click", addLahmacun);

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

    function displayTotalMotivation(): void {

        let totalMotivationAmount: number = 0;
       
        for (let i: number = 0; i < humans.length; i++) {
            totalMotivationAmount += humans[i].motivation;
        }
        totalMotivationAmount /= humans.length;
        

        totalMotivationDiv.innerHTML = "" + Math.floor(totalMotivationAmount);

        if (totalMotivationAmount < 20) {

            alert("Game Over");
        }
    }

    //Mitarbeiter 1 Tastatur
    function employeeTheke(_event: MouseEvent): void {

        allSelectElements = document.querySelectorAll("select");

        currentEmployee = parseFloat(allSelectElements[0].value);

        // console.log(currentEmployee);

        employeeArray[currentEmployee].takeOrder(450, 320);
        employeeArray[currentEmployee].motivation -=5;
        console.log(employeeArray[currentEmployee].motivation);
    }

    function employeeDöner(_event: MouseEvent): void {

        allSelectElements = document.querySelectorAll("select");

        currentEmployee = parseFloat(allSelectElements[0].value);

        employeeArray[currentEmployee].cutKebab(245, 225);
        employeeArray[currentEmployee].motivation -=5;
        // console.log(employeeArray[currentEmployee].motivation);
    }

    function employeeTelefon(_event: MouseEvent): void {

        allSelectElements = document.querySelectorAll("select");

        currentEmployee = parseFloat(allSelectElements[0].value);

        employeeArray[currentEmployee].buyResources(650, 315);
        employeeArray[currentEmployee].motivation -=5;
        // console.log(employeeArray[currentEmployee].motivation);
    }

    function employeeResourcen(_event: MouseEvent): void {

        allSelectElements = document.querySelectorAll("select");

        currentEmployee = parseFloat(allSelectElements[0].value);

        employeeArray[currentEmployee].fillResources(450, 140);
        employeeArray[currentEmployee].motivation -=5;
        // console.log(employeeArray[currentEmployee].motivation);
    }

    function employeePause(_event: MouseEvent): void {

        allSelectElements = document.querySelectorAll("select");

        currentEmployee = parseFloat(allSelectElements[0].value);

        customerValue = parseFloat(allSelectElements[3].value);

        // employeeArray[aktuellerMitarbeiter].position.x = 650;
        // employeeArray[aktuellerMitarbeiter].position.y = 140;

        setTimeout(fillMotivation, customerValue);

        function fillMotivation(): void {

            // console.log("Nach x Sekunden Motivation auffüllen");
            
            employeeArray[currentEmployee].takeNap(650, 140);

            // console.log(employeeArray[currentEmployee].motivation);
        }
    }

    function employeePrepareResource(_event: MouseEvent): void {

        allSelectElements = document.querySelectorAll("select");

        currentEmployee = parseFloat(allSelectElements[0].value);

        employeeArray[currentEmployee].prepareResource(650, 225);
        employeeArray[currentEmployee].motivation -=5;
        // console.log(employeeArray[currentEmployee].motivation);
    }







    function addDöner(_event: MouseEvent): void {

        employeeBread.push(breadArray[0]);

        console.log(employeeBread);
    }

    function addYufka(_event: MouseEvent): void {

        employeeBread.push(breadArray[1]);

        console.log(employeeBread);
    }

    function addLahmacun(_event: MouseEvent): void {

        employeeBread.push(breadArray[2]);

        console.log(employeeBread);
    }








    function onionIngredient(_event: MouseEvent): void {

        // console.log("clicked onionIngredient");

        if (vegetables[0].ingredientsAmount > 0) {

            vegetables[0].ingredientsAmount -= 5;

            console.log("Zwiebel -5");
            

            paragraphOnion.innerHTML = "Zwiebel:" + vegetables[0].ingredientsAmount;
        } else {

            console.log(vegetables[0].ingredientsAmount);

            console.log("Keine Zwiebel Zutat mehr  verfügbar");
        }
    }

    function onionResource(_event: MouseEvent): void {

        // console.log("clicked onionResource");

        if (vegetables[0].resourceAmount > 0) {

            setTimeout(fillOnion, 10000);
            console.log("Wird nach 10 Sekunden aufgefüllt");

        } else {

            console.log("Keine Zwiebel Resourcen mehr verfügbar");


        }
    }

    function fillOnion(): void {

        console.log("Fülle mich auf nach 10 Sekunden");

        vegetables[0].ingredientsAmount = ingredientAmountOnion;

        console.log(vegetables[0].ingredientsAmount);

        vegetables[0].resourceAmount -= 25;

        paragraphOnionResource.innerHTML = "Zwiebel:" + vegetables[0].resourceAmount;

        console.log(vegetables[0].resourceAmount);

        paragraphOnion.innerHTML = "Zwiebel:" + vegetables[1].ingredientsAmount;
    }





    function cornIngredient(_event: MouseEvent): void {

        // console.log("clicked cornIngredient");

        if (vegetables[1].ingredientsAmount > 0) {

            vegetables[1].ingredientsAmount -= 5;

            paragraphCorn.innerHTML = "Mais:" + vegetables[1].ingredientsAmount;
        } else {

            console.log(vegetables[1].ingredientsAmount);

            console.log("Keine Mais Zutat mehr  verfügbar");
        }
    }

    function cornResource(_event: MouseEvent): void {

        // console.log("clicked onionResource");

        if (vegetables[1].resourceAmount > 0) {

            setTimeout(fillCorn, 10000);
            console.log("Wird nach 10 Sekunden aufgefüllt");
        } else {

            console.log("Keine Mais Resourcen mehr verfügbar");


        }
    }

    function fillCorn(): void {

        console.log("Fülle mich auf nach 10 Sekunden");

        vegetables[1].ingredientsAmount = ingredientAmountCorn;

        console.log(vegetables[1].ingredientsAmount);

        paragraphCorn.innerHTML = "Mais:" + vegetables[1].ingredientsAmount;

        vegetables[1].resourceAmount -= 25;

        paragraphCornResource.innerHTML = "Mais:" + vegetables[1].resourceAmount;

        console.log(vegetables[1].resourceAmount);
    }





    function saladIngredient(_event: MouseEvent): void {

        // console.log("clicked saladIngredient");

        if (vegetables[2].ingredientsAmount > 0) {

            vegetables[2].ingredientsAmount -= 5;

            paragraphSalad.innerHTML = "Salat:" + vegetables[2].ingredientsAmount;
        } else {

            console.log(vegetables[2].ingredientsAmount);

            console.log("Keine Salat Zutat mehr  verfügbar");
        }
    }

    function saladResource(_event: MouseEvent): void {

        // console.log("clicked onionResource");

        if (vegetables[2].resourceAmount > 0) {

            setTimeout(fillSalad, 10000);
            console.log("Wird nach 10 Sekunden aufgefüllt");

        } else {

            console.log("Keine Salat Resourcen mehr verfügbar");


        }
    }

    function fillSalad(): void {

        console.log("Fülle mich auf nach 10 Sekunden");

        vegetables[2].ingredientsAmount = ingredientAmountOnion;

        console.log(vegetables[2].ingredientsAmount);

        paragraphSalad.innerHTML = "Salat:" + vegetables[2].ingredientsAmount;

        vegetables[2].resourceAmount -= 25;

        paragraphSaladResource.innerHTML = "Salat:" + vegetables[2].resourceAmount;

        console.log(vegetables[2].resourceAmount);
    }






    function redsaladIngredient(_event: MouseEvent): void {

        // console.log("clicked redsaladIngredient");

        if (vegetables[3].ingredientsAmount > 0) {

            vegetables[3].ingredientsAmount -= 5;

            paragraphRedsalad.innerHTML = "Rotkraut:" + vegetables[3].ingredientsAmount;
        } else {

            console.log(vegetables[3].ingredientsAmount);

            console.log("Keine Rotkraut Zutat mehr  verfügbar");
        }
    }

    function redsaladResource(_event: MouseEvent): void {

        // console.log("clicked onionResource");

        if (vegetables[3].resourceAmount > 0) {

            setTimeout(fillRedsalad, 10000);
            console.log("Wird nach 10 Sekunden aufgefüllt");

        } else {

            console.log("Keine Rotkraut Resourcen mehr verfügbar");


        }
    }

    function fillRedsalad(): void {

        console.log("Fülle mich auf nach 10 Sekunden");

        vegetables[3].ingredientsAmount = ingredientAmountOnion;

        console.log(vegetables[3].ingredientsAmount);

        paragraphRedsalad.innerHTML = "Rotkraut:" + vegetables[3].ingredientsAmount;

        vegetables[3].resourceAmount -= 25;

        paragraphRedsaladResource.innerHTML = "Rotkraut:" + vegetables[3].resourceAmount;

        console.log(vegetables[3].resourceAmount);
    }







    function tomatoIngredient(_event: MouseEvent): void {

        // console.log("clicked tomatoIngredient");

        if (vegetables[4].ingredientsAmount > 0) {

            vegetables[4].ingredientsAmount -= 5;

            paragraphTomato.innerHTML = "Tomate:" + vegetables[4].ingredientsAmount;
        } else {

            console.log(vegetables[4].ingredientsAmount);

            console.log("Keine Tomaten Zutat mehr  verfügbar");
        }
    }

    function tomatoResource(_event: MouseEvent): void {

        // console.log("clicked onionResource");

        if (vegetables[4].resourceAmount > 0) {

            setTimeout(fillTomato, 10000);
            console.log("Wird nach 10 Sekunden aufgefüllt");

        } else {

            console.log(vegetables[4].resourceAmount);

            console.log("Keine Tomaten Resourcen mehr verfügbar");


        }
    }

    function fillTomato(): void {

        console.log("Fülle mich auf nach 10 Sekunden");

        vegetables[4].ingredientsAmount = ingredientAmountOnion;

        console.log(vegetables[4].ingredientsAmount);

        paragraphTomato.innerHTML = "Tomate:" + vegetables[4].ingredientsAmount;

        vegetables[4].resourceAmount -= 25;

        paragraphTomatoResource.innerHTML = "Tomate:" + vegetables[4].resourceAmount;

        console.log(vegetables[4].resourceAmount);
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

        for (let i: number = 0; i <= 4; i++) {
            crc2.save();

            crc2.beginPath();
            crc2.lineWidth = 2;
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
    function drawOnion(): void {

        allInputElements = document.querySelectorAll("input");
        ingredientAmountOnion = parseFloat(allInputElements[0].value);

        let onion: Onion = new Onion(ingredientAmountOnion, ingredientAmountOnion);

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
    function drawCorn(): void {

        allInputElements = document.querySelectorAll("input");
        ingredientAmountCorn = parseFloat(allInputElements[0].value);

        let corn: Corn = new Corn(ingredientAmountCorn, ingredientAmountCorn);

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
    function drawRedSalad(): void {

        allInputElements = document.querySelectorAll("input");
        ingredientAmountRedsalad = parseFloat(allInputElements[0].value);

        let redSalad: Redsalad = new Redsalad(ingredientAmountRedsalad, ingredientAmountRedsalad);

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
    function drawTomatoe(): void {

        allInputElements = document.querySelectorAll("input");
        ingredientAmountTomato = parseFloat(allInputElements[0].value);

        let tomato: Tomato = new Tomato(ingredientAmountTomato, ingredientAmountTomato);

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
    function drawSalad(): void {

        allInputElements = document.querySelectorAll("input");
        ingredientAmountSalad = parseFloat(allInputElements[0].value);

        let salad: Salad = new Salad(ingredientAmountSalad, ingredientAmountSalad);

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

        //Wertzuweisung für FormData
        formData = new FormData(document.forms[0]);

        //Alle Selectelemente werden deklariert
        allSelectElements = document.querySelectorAll("select");

        //Das erste Selectelement wird deklariert
        employeeValue = parseFloat(allSelectElements[1].value);

        for (let i: number = 0; i < employeeValue; i++) {

            //Employee Objekt wird kreiert
            let employee: Employee = new Employee();
            humans.push(employee);
            employeeArray.push(employee);

            customerValue = parseFloat(allSelectElements[2].value);
        }
        //Alle x Sekunden erscheint ein Kunde, je nach ausgewählter Einstellung
        setInterval(createCustomer, customerValue);
        // displayTotalMotivation();
    }

    //Customer Objekt wird kreiert
    function createCustomer(): void {

        // console.log("Alle x Sekunden bitte ausloggen");

        let customer: Customer = new Customer();
        humans.push(customer);
        // displayTotalMotivation();
        
    }








    function update(): void {

        // console.log("Update wird immer aufgerufen");

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
        displayTotalMotivation();
    }
}