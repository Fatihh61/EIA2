namespace Döner_Trainer {


    export let crc2: CanvasRenderingContext2D;

    window.addEventListener("load", handleLoad);

    //Deklariere Formelement
    let form: HTMLFormElement;

    //Deklariere div für canvas
    let canvasContainer: HTMLDivElement;

    //Deklariere Superklassen als array
    let humans: Human[] = [];
    let vegetables: Vegetable[] = [];

    //Deklariere Anzahl der Mitarbeiter und Kunden im Durschnitt/Zeit
    let employeeValue: number;
    let customerValue: number;

    //Deklariere FormData
    let formData: FormData;

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
    let onionResourcenButton: HTMLButtonElement;
    let cornResourcenButton: HTMLButtonElement;
    let saladResourcenButton: HTMLButtonElement;
    let redsaladResourcenButton: HTMLButtonElement;
    let tomatoResourcenButton: HTMLButtonElement;

    //Deklariere Button für Mitarbeiter Nummer 1 
    let employee1Name: HTMLParagraphElement;
    let employee1ThekeButton: HTMLButtonElement;
    let employee1DönerButton: HTMLButtonElement;
    let employee1TelefonButton: HTMLButtonElement;
    let employee1ResourcenButton: HTMLButtonElement;
    let employee1PauseButton: HTMLButtonElement;

    //Deklariere Button für Mitarbeiter Nummer 2
    let employee2Name: HTMLParagraphElement;
    let employee2ThekeButton: HTMLButtonElement;
    let employee2DönerButton: HTMLButtonElement;
    let employee2TelefonButton: HTMLButtonElement;
    let employee2ResourcenButton: HTMLButtonElement;
    let employee2PauseButton: HTMLButtonElement;

    //Deklariere Button für Mitarbeiter Nummer 3
    let employee3Name: HTMLParagraphElement;
    let employee3ThekeButton: HTMLButtonElement;
    let employee3DönerButton: HTMLButtonElement;
    let employee3TelefonButton: HTMLButtonElement;
    let employee3ResourcenButton: HTMLButtonElement;
    let employee3PauseButton: HTMLButtonElement;

    //ImageData

    let imgDataKebabHouse: ImageData;
    let imgDataOnion: ImageData;
    let imgDataCorn: ImageData;
    let imgDataRedSalad: ImageData;
    let imgDataSalad: ImageData;
    let imgDataTomato: ImageData;


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
        onionResourcenButton = <HTMLButtonElement>document.getElementById("onionResourcenButton");
        onionResourcenButton.classList.remove("isHidden");
        cornResourcenButton = <HTMLButtonElement>document.getElementById("cornResourcenButton");
        cornResourcenButton.classList.remove("isHidden");
        saladResourcenButton = <HTMLButtonElement>document.getElementById("saladResourcenButton");
        saladResourcenButton.classList.remove("isHidden");
        redsaladResourcenButton = <HTMLButtonElement>document.getElementById("redsaladResourcenButton");
        redsaladResourcenButton.classList.remove("isHidden");
        tomatoResourcenButton = <HTMLButtonElement>document.getElementById("tomatoResourcenButton");
        tomatoResourcenButton.classList.remove("isHidden");

        //Wertzuweisung für Mitarbeiter Nummer 1 und isHidden remove
        employee1Name = <HTMLParagraphElement>document.getElementById("employee1");
        employee1Name.classList.remove("isHidden");
        employee1ThekeButton = <HTMLButtonElement>document.getElementById("employee1Theke");
        employee1ThekeButton.classList.remove("isHidden");
        employee1DönerButton = <HTMLButtonElement>document.getElementById("employee1Döner");
        employee1DönerButton.classList.remove("isHidden");
        employee1TelefonButton = <HTMLButtonElement>document.getElementById("employee1Telefon");
        employee1TelefonButton.classList.remove("isHidden");
        employee1ResourcenButton = <HTMLButtonElement>document.getElementById("employee1Resourcen");
        employee1ResourcenButton.classList.remove("isHidden");
        employee1PauseButton = <HTMLButtonElement>document.getElementById("employee1Pause");
        employee1PauseButton.classList.remove("isHidden");

        //Wertzuweisung für Mitarbeiter Nummer 2 und isHidden remove
        employee2Name = <HTMLParagraphElement>document.getElementById("employee2");
        employee2Name.classList.remove("isHidden");
        employee2ThekeButton = <HTMLButtonElement>document.getElementById("employee2Theke");
        employee2ThekeButton.classList.remove("isHidden");
        employee2DönerButton = <HTMLButtonElement>document.getElementById("employee2Döner");
        employee2DönerButton.classList.remove("isHidden");
        employee2TelefonButton = <HTMLButtonElement>document.getElementById("employee2Telefon");
        employee2TelefonButton.classList.remove("isHidden");
        employee2ResourcenButton = <HTMLButtonElement>document.getElementById("employee2Resourcen");
        employee2ResourcenButton.classList.remove("isHidden");
        employee2PauseButton = <HTMLButtonElement>document.getElementById("employee2Pause");
        employee2PauseButton.classList.remove("isHidden");

        //Wertzuweisung für Mitarbeiter Nummer 3 und isHidden remove
        employee3Name = <HTMLParagraphElement>document.getElementById("employee3");
        employee3Name.classList.remove("isHidden");
        employee3ThekeButton = <HTMLButtonElement>document.getElementById("employee3Theke");
        employee3ThekeButton.classList.remove("isHidden");
        employee3DönerButton = <HTMLButtonElement>document.getElementById("employee3Döner");
        employee3DönerButton.classList.remove("isHidden");
        employee3TelefonButton = <HTMLButtonElement>document.getElementById("employee3Telefon");
        employee3TelefonButton.classList.remove("isHidden");
        employee3ResourcenButton = <HTMLButtonElement>document.getElementById("employee3Resourcen");
        employee3ResourcenButton.classList.remove("isHidden");
        employee3PauseButton = <HTMLButtonElement>document.getElementById("employee3Pause");
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

        window.setInterval(update, 20);
    }

    function onionContainer(_event: MouseEvent): void {

        console.log("Clicked");
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

        let onion: Onion = new Onion();

        onion.draw(600, 353);
        vegetables.push(onion);

        imgDataOnion = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    //Corn Objekt wird kreiert
    function drawCorn(): void {

        let mais: Corn = new Corn();

        mais.draw(500, 353);
        vegetables.push(mais);

        imgDataCorn = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    //RedSalad Objekt wird kreiert
    function drawRedSalad(): void {

        let redSalad: Redsalad = new Redsalad();

        redSalad.draw(300, 353);
        vegetables.push(redSalad);

        imgDataRedSalad = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    //Tomato Objekt wird kreiert
    function drawTomatoe(): void {

        let tomato: Tomato = new Tomato();

        tomato.draw(200, 353);
        vegetables.push(tomato);

        imgDataTomato = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    //Salad Objekt wird kreiert
    function drawSalad(): void {

        let salad: Salad = new Salad();

        salad.draw(400, 353);
        vegetables.push(salad);

        imgDataSalad = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function createEmployee(): void {

        //Wertzuweisung für FormData
        formData = new FormData(document.forms[0]);

        //Alle Input- und Selectelemente werden deklariert
        allInputElements = document.querySelectorAll("input");
        allSelectElements = document.querySelectorAll("select");

        //Das erste Selectelement wird deklariert
        employeeValue = parseFloat(allSelectElements[0].value);

        for (let i: number = 0; i < employeeValue; i++) {

            //Zufällige Startposition für die Mitarbeiter innerhalb der Küche
            let randomPositionX: number = Math.random() * 150 + 400;
            let randomPositionY: number = Math.random() * 135 + 125;

            //Employee Objekt wird kreiert
            let employee: Employee = new Employee();
            humans.push(employee);
            employee.draw(randomPositionX, randomPositionY)
            employee.drawMouthOfSmiley(randomPositionX, randomPositionY);
            console.log(employeeValue);

            customerValue = parseFloat(allSelectElements[1].value);

            //Alle x Sekunden erscheint ein Kunde, je nach ausgewählter Einstellung
            setInterval(createCustomer, customerValue);
        }
    }

    //Customer Objekt wird kreiert
    function createCustomer(): void {

        console.log("Alle x Sekunden bitte ausloggen");

        let customer: Customer = new Customer();
        humans.push(customer);
        customer.draw(85, 555);
        customer.drawMouthOfSmiley(85, 555);
    }

    function update(): void {

        console.log("Update wird immer aufgerufen");
        

        crc2.putImageData(imgDataKebabHouse, 0, 0);
        crc2.putImageData(imgDataOnion, 0, 0);
        crc2.putImageData(imgDataCorn, 0, 0);
        crc2.putImageData(imgDataRedSalad, 0, 0);
        crc2.putImageData(imgDataSalad, 0, 0);
        crc2.putImageData(imgDataTomato, 0, 0);


        // for (let i: number = 0; i < humans.length; i++) {
        //     humans[i].draw();
        // }
        // cageObject.draw();
    }
}