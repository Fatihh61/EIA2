namespace Döner_Trainer {


    export let crc2: CanvasRenderingContext2D;

    window.addEventListener("load", handleLoad);

    //Deklariere Formelement
    let form: HTMLFormElement;

    let orderDiv: HTMLDivElement;

    //Deklariere div für canvas
    let canvasContainer: HTMLDivElement;

    //Deklariere Superklassen als array
    let humans: Human[] = [];
    let vegetables: Vegetable[] = [];
    let employeeArray: Employee[] = [];

    //Deklariere Anzahl der Mitarbeiter und Kunden im Durschnitt/Zeit
    let employeeValue: number;
    let customerValue: number;

    //Deklariere FormData
    let formData: FormData;

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

    //Deklariere Button für Mitarbeiter Nummer 1 
    let employeeThekeButton: HTMLButtonElement;
    let employeeDönerButton: HTMLButtonElement;
    let employeeTelefonButton: HTMLButtonElement;
    let employeeResourceButton: HTMLButtonElement;
    let employeePauseButton: HTMLButtonElement;
    let employeePrepareResourceButton: HTMLButtonElement;

    //ImageData
    let imgDataKebabHouse: ImageData;
    let imgDataOnion: ImageData;
    let imgDataCorn: ImageData;
    let imgDataRedSalad: ImageData;
    let imgDataSalad: ImageData;
    let imgDataTomato: ImageData;

    let ingredientAmountOnion: number;
    let ingredientAmountCorn: number;
    let ingredientAmountSalad: number;
    let ingredientAmountRedsalad: number;
    let ingredientAmountTomato: number;

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
        orderDiv.classList.remove("isHidden");

        //Wertzuweisung für Zutaten an der Theke und isHidden remove
        onionButton = <HTMLButtonElement>document.getElementById("onionButton");
        onionButton.classList.remove("isHidden");
        cornButton = <HTMLButtonElement>document.getElementById("cornButton");
        cornButton.classList.remove("isHidden");
        saladButton = <HTMLButtonElement>document.getElementById("saladButton");
        saladButton.classList.remove("isHidden");
        redsaladButton = <HTMLButtonElement>document.getElementById("redsaladButton");
        redsaladButton.classList.remove("isHidden");
        tomatoButton = <HTMLButtonElement>document.getElementById("tomatoButton");
        tomatoButton.classList.remove("isHidden");

        //Wertzuweisung für Resourcen und isHidden remove
        onionResourceButton = <HTMLButtonElement>document.getElementById("onionResourcenButton");
        onionResourceButton.classList.remove("isHidden");
        cornResourceButton = <HTMLButtonElement>document.getElementById("cornResourcenButton");
        cornResourceButton.classList.remove("isHidden");
        saladResourceButton = <HTMLButtonElement>document.getElementById("saladResourcenButton");
        saladResourceButton.classList.remove("isHidden");
        redsaladResourceButton = <HTMLButtonElement>document.getElementById("redsaladResourcenButton");
        redsaladResourceButton.classList.remove("isHidden");
        tomatoResourceButton = <HTMLButtonElement>document.getElementById("tomatoResourcenButton");
        tomatoResourceButton.classList.remove("isHidden");

        //Wertzuweisung für Mitarbeiter und isHidden remove
        employeeThekeButton = <HTMLButtonElement>document.getElementById("employee1Theke");
        employeeThekeButton.classList.remove("isHidden");
        employeeDönerButton = <HTMLButtonElement>document.getElementById("employee1Döner");
        employeeDönerButton.classList.remove("isHidden");
        employeeTelefonButton = <HTMLButtonElement>document.getElementById("employee1Telefon");
        employeeTelefonButton.classList.remove("isHidden");
        employeeResourceButton = <HTMLButtonElement>document.getElementById("employee1Resourcen");
        employeeResourceButton.classList.remove("isHidden");
        employeePauseButton = <HTMLButtonElement>document.getElementById("employee1Pause");
        employeePauseButton.classList.remove("isHidden");
        employeePrepareResourceButton = <HTMLButtonElement>document.getElementById("employee1PrepareResource");
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
    function employeeTheke(_event: MouseEvent): void {

        console.log(_event.target);

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

                console.log("Fehlgeschlagen");
        }
    }

    function employeeDöner(_event: MouseEvent): void {

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
                console.log("Fehlgeschlagen");
        }
    }

    function employeeTelefon(_event: MouseEvent): void {

        let aktuellerMitarbeiter: number;

        allSelectElements = document.querySelectorAll("select");

        aktuellerMitarbeiter = parseFloat(allSelectElements[0].value);


        switch (aktuellerMitarbeiter) {
            case 1:
                employeeArray[0].buyResources(650, 315);
                break;
                employeeArray[1].buyResources(650, 315);
                break;
            case 3:
                employeeArray[2].buyResources(650, 315);
                break;
            default:
                console.log("Fehlgeschlagen");
        }
    }

    function employeeResourcen(_event: MouseEvent): void {

        let aktuellerMitarbeiter: number;

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
                console.log("Fehlgeschlagen");
        }
    }

    function employeePause(_event: MouseEvent): void {

        let aktuellerMitarbeiter: number;

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
                console.log("Fehlgeschlagen");
        }
    }

    function employeePrepareResource(_event: MouseEvent): void {


        let aktuellerMitarbeiter: number;

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
                console.log("Fehlgeschlagen");
        }
    }

    function onionIngredient(_event: MouseEvent): void {

        console.log("clicked onionIngredient");

        vegetables[0].ingredientsAmount -= 5;

        console.log(vegetables[0].ingredientsAmount);
    }

    function cornIngredient(_event: MouseEvent): void {

        console.log("clicked cornIngredient");

        vegetables[1].ingredientsAmount -= 5;

        console.log(vegetables[1].ingredientsAmount);
    }

    function saladIngredient(_event: MouseEvent): void {

        console.log("clicked saladIngredient");

        vegetables[2].ingredientsAmount -= 5;

        console.log(vegetables[2].ingredientsAmount);
    }

    function redsaladIngredient(_event: MouseEvent): void {

        console.log("clicked redsaladIngredient");

        vegetables[3].ingredientsAmount -= 5;

        console.log(vegetables[3].ingredientsAmount);
    }

    function tomatoIngredient(_event: MouseEvent): void {

        console.log("clicked tomatoIngredient");

        vegetables[4].ingredientsAmount -= 5;

        console.log(vegetables[4].ingredientsAmount);
    }

    function onionResource(_event: MouseEvent): void {

        console.log("clicked onionResource");

        vegetables[0].ingredientsAmount = ingredientAmountOnion;

        console.log(vegetables[0].ingredientsAmount);

        setTimeout(fillOnion, 30000);

        function fillOnion(): void {

            console.log("Fülle mich auf nach 30 Sekunden");
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

        imgDataOnion = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    //Corn Objekt wird kreiert
    function drawCorn(): void {

        allInputElements = document.querySelectorAll("input");
        ingredientAmountCorn = parseFloat(allInputElements[0].value);

        let corn: Corn = new Corn(ingredientAmountCorn, ingredientAmountCorn);

        vegetables.push(corn);

        imgDataCorn = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    //RedSalad Objekt wird kreiert
    function drawRedSalad(): void {

        allInputElements = document.querySelectorAll("input");
        ingredientAmountRedsalad = parseFloat(allInputElements[0].value);

        let redSalad: Redsalad = new Redsalad(ingredientAmountRedsalad, ingredientAmountRedsalad);

        vegetables.push(redSalad);

        imgDataRedSalad = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    //Tomato Objekt wird kreiert
    function drawTomatoe(): void {

        allInputElements = document.querySelectorAll("input");
        ingredientAmountTomato = parseFloat(allInputElements[0].value);

        let tomato: Tomato = new Tomato(ingredientAmountTomato, ingredientAmountTomato);

        vegetables.push(tomato);

        imgDataTomato = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    //Salad Objekt wird kreiert
    function drawSalad(): void {

        allInputElements = document.querySelectorAll("input");
        ingredientAmountSalad = parseFloat(allInputElements[0].value);

        let salad: Salad = new Salad(ingredientAmountSalad, ingredientAmountSalad);

        vegetables.push(salad);

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

            //Alle x Sekunden erscheint ein Kunde, je nach ausgewählter Einstellung
            // setInterval(createCustomer, customerValue);
        }
        //Alle x Sekunden erscheint ein Kunde, je nach ausgewählter Einstellung
        setInterval(createCustomer, customerValue);
    }

    //Customer Objekt wird kreiert
    function createCustomer(): void {

        // console.log("Alle x Sekunden bitte ausloggen");

        let customer: Customer = new Customer();
        humans.push(customer);
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
    }
}