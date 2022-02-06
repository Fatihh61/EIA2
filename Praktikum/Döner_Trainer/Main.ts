namespace Döner_Trainer {


    export let crc2: CanvasRenderingContext2D;

    window.addEventListener("load", handleLoad);

    let form: HTMLFormElement;

    let canvasContainer: HTMLDivElement;

    let humans: Human[] = [];
    let vegetables: Vegetable[] = [];

    let employeeValue: number;
    let customerValue: number;

    let formData: FormData;

    let allInputElements: NodeListOf<HTMLInputElement>;
    let allSelectElements: NodeListOf<HTMLSelectElement>;

    let onionbutton: HTMLButtonElement;


    function handleLoad(_event: Event): void {

        let startButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#startButton");
        startButton.addEventListener("click", loadCanvas);
    }

    function loadCanvas(_event: MouseEvent): void {

        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        form = <HTMLFormElement>document.querySelector("form");
        form.classList.add("isHidden");
        canvas.classList.remove("isHidden");

        canvasContainer = <HTMLDivElement> document.getElementById("canvasContainer");
        canvasContainer.classList.remove("isHidden");

        onionbutton = <HTMLButtonElement> document.getElementById("onionButton");
        onionbutton.classList.remove("isHidden");

        onionbutton.addEventListener("click", onionContainer);

        drawKebabHouse();
        drawOnion();
        drawCorn();
        drawSalad();
        drawRedSalad();
        drawTomatoe();
        createEmployee();
    }

    function onionContainer(_event: MouseEvent): void {

        console.log("Clicked");
        

    }


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

        //Behälter für Zutaten
        crc2.save();

        let positionOfBehälter: number = 0;
        let numberAdditionBehälter: number = 100;

        for (let i: number = 0; i <= 4; i++) {

            crc2.save();

            crc2.beginPath();
            crc2.lineWidth = 2;
            crc2.ellipse(245 + positionOfBehälter, 415, 23, 30, 0, 0, 2 * Math.PI);
            crc2.strokeStyle = "black";
            crc2.stroke();


            positionOfBehälter += numberAdditionBehälter;

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
    }

    function drawOnion(): void {

        let onion: Zwiebel = new Zwiebel();
        
        onion.draw(250, 425);
        vegetables.push(onion);
    }

    function drawCorn(): void {

        let mais: Mais = new Mais();
        
        mais.draw(350, 425);
        vegetables.push(mais);
    }

    function drawRedSalad(): void {

        let redSalad: Rotkraut = new Rotkraut();
        
        redSalad.draw(550, 425);
        vegetables.push(redSalad);
    }

    function drawTomatoe(): void {

        let tomatoe: Tomate = new Tomate();
        
        tomatoe.draw(650, 425);
        vegetables.push(tomatoe);
    }

    function drawSalad(): void {

        let salad: Salat = new Salat();
        
        salad.draw(450, 425);
        vegetables.push(salad);
    }

    function createEmployee(): void {

        //FormData wird übertragen
        formData = new FormData(document.forms[0]);

        //Alle Input- und Selectelemente werden deklariert
        allInputElements = document.querySelectorAll("input");
        allSelectElements = document.querySelectorAll("select");

        //Das erste Selectelement wird deklariert
        employeeValue = parseFloat(allSelectElements[0].value);

        for (let i: number = 0; i < employeeValue; i++) {

            //Zufällige Startposition für die Mitarbeiter
            let randomPositionX: number = Math.random() * 150 + 400;
            let randomPositionY: number = Math.random() * 135 + 125;

            //Mitarbeiter werden erstellt
            let employee: Employee = new Employee();
            humans.push(employee);
            employee.draw(randomPositionX, randomPositionY)
            employee.drawMouthOfSmiley(randomPositionX, randomPositionY);
            console.log(employeeValue);

            // console.log(humans);
            // console.log(randomPositionX);
            // console.log(randomPositionY);

            customerValue = parseFloat(allSelectElements[1].value);

            console.log(customerValue);
            

            setInterval(createCustomer, customerValue);
        }
    }

    function createCustomer(): void {

        console.log("Alle x Sekunden bitte ausloggen");

        let customer: Customer = new Customer();
        humans.push(customer);
        customer.draw(85, 555);
        customer.drawMouthOfSmiley(85, 555);
    }
}