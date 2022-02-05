namespace Döner_Trainer {


    export let crc2: CanvasRenderingContext2D;

    window.addEventListener("load", handleLoad);

    let form: HTMLFormElement;

    let humans: Human[] = [];

    let employeeValue: number;
    let customerValue: number;

    let formData: FormData;

    let allInputElements: NodeListOf<HTMLInputElement>;
    let allSelectElements: NodeListOf<HTMLSelectElement>;


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

        crc2.save();
        crc2.lineWidth = 10;
        crc2.strokeStyle = "black";
        crc2.strokeRect(0, 0, 800, 600);
        crc2.restore();

        drawKebabHouse();
        createEmployee();
    }


    function drawKebabHouse(): void {

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
            console.log(employeeValue);

            // console.log(humans);
            // console.log(randomPositionX);
            // console.log(randomPositionY);

            let number: number = 15000;

            

            setInterval(createCustomer, number);
        }
    }

    function createCustomer(): void {

        console.log("Alle 15 Sekunden bitte ausloggen");

        let customer: Customer = new Customer();
        humans.push(customer);
        customer.draw(85, 555);
    }
}