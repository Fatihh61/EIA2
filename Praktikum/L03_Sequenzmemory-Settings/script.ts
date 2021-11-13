namespace L03_Sequenzmemory_Neu {


    //Formular für die Karteneinstellungen
    let form: HTMLFormElement;

    let gamefield: HTMLDivElement;

    //Start Button um das Spiel zu starten
    let startButton: HTMLButtonElement;

    //Div Element für die span Elemente
    let container: HTMLDivElement;

    //Timer der runterzählt
    let countdown: HTMLElement;

    //Array wo die Sequenzeingabe reingeschossen wird
    let sequenceArray: string[];

    //Array wo die Sequenzeingabe reingeschossen wird
    let sequenceArrayOriginal: string[];

    //Sequenzeingabe
    let sequenzeingabe: HTMLInputElement;

    //FormData für die Auswertung des Formulars
    let formData: FormData;

    //Countdown
    let timer: HTMLElement;

    //Karten 
    let span: HTMLSpanElement;

    //Eingegebene Sequenz in Buchstaben
    let buchstabe: HTMLElement;

    let überprüfZahl: number;

    let event: HTMLElement;

    let information: string;

    let allInputElements: NodeListOf<HTMLInputElement>;

    let allSelectElements: NodeListOf<HTMLSelectElement>;

    let backOfCard2: string;

    let background2: string;

    let fontColor2: string;

    let sizeOfCard2: string;

    let font2: string;

    let schwierigkeitsgrad: number;




    window.addEventListener("load", handleLoad);


    function handleLoad(_event: Event): void {

        form = <HTMLFormElement>document.querySelector("form");

        startButton = <HTMLButtonElement>document.querySelector("button");

        startButton.addEventListener("click", loadMemoryField);
        console.log(_event);
    }



    function loadMemoryField(_event: MouseEvent): void {

        container = <HTMLDivElement>document.getElementById("container_for_span");

        countdown = <HTMLElement>document.getElementById("countdown");

        form.classList.add("isHidden");
        container.classList.remove("isHidden");
        countdown.classList.remove("isHidden");
        console.log(_event);

        createCards();
    }



    function createCards(): void {

        //Input von Sequence wird genommen
        sequenzeingabe = <HTMLInputElement>document.getElementById("input");
        console.log(sequenzeingabe);

        //Eingegebene Sequenz wird in Buchstaben gesplitted und in ein Array geschossen
        sequenceArray = sequenzeingabe.value.split("");
        sequenceArrayOriginal = sequenzeingabe.value.split("");
        console.log(sequenceArray);

        formData = new FormData(document.forms[0]);
        console.log(formData);

        allInputElements = document.querySelectorAll("input");
        allSelectElements = document.querySelectorAll("select");

        for (let i: number = sequenceArray.length - 1; i >= 0; i--) {

            //Eingabe im Array wird nun geshuffled und das Array wird gewürfelt
            let randomNumber: number;
            let shuffledCards: string;

            //debugger;
            randomNumber = Math.floor(Math.random() * (i + 1));
            shuffledCards = sequenceArray[i];
            sequenceArray[i] = sequenceArray[randomNumber];
            sequenceArray[randomNumber] = shuffledCards;

            //Karten werden nun als span Element erstellt und an jeden span ein zufälliger Buchstabe angeheftet
            span = document.createElement("span");
            buchstabe = document.createElement("p");

            //debugger;
            span.appendChild(buchstabe);
            span.classList.add("card");
            buchstabe.innerHTML = (sequenceArray[i]);
            container.appendChild(span);
            //buchstabe.classList.add("isHidden");
            buchstabe.classList.add("buchstabe");

            //Grö0e der Karte wird übergeben
            sizeOfCard2 = allInputElements[0].value;
            span.style.width = sizeOfCard2 + "px";
            span.style.height = sizeOfCard2 + "px";

            //Hintergrundfarbe des Spielfelds wird übergeben
            background2 = allInputElements[1].value;
            gamefield = <HTMLDivElement>document.getElementById("container_for_span");
            gamefield.style.backgroundColor = background2;

            //Farbe für Kartenrücken wird übergen
            backOfCard2 = allInputElements[2].value;
            span.style.backgroundColor = backOfCard2;

            //Schriftfarbe wird übergeben
            fontColor2 = allInputElements[3].value;
            buchstabe.style.color = fontColor2;

            //Schriftfamilie wird übergeben
            font2 = allSelectElements[0].value;
            buchstabe.style.fontFamily = font2;


            /*span.addEventListener("click", function (): void {

                buchstabe.classList.remove("isHidden");


            });
            */
        }

        setTimeout(function (): void { buchstabe.classList.add("isHidden"); }, 3000);


        let pElement: NodeListOf<HTMLElement> = document.querySelectorAll("p");

        console.log(pElement);


        span.addEventListener("click", checkCards);









        startGame();


    }


    function checkCards(_event: MouseEvent): void {


        let array: string[] = [];

        let target: HTMLElement = <HTMLElement>_event.target;
        console.log(target);

        let textContent: string = <string>target.textContent;
        console.log(textContent);
        array.push(textContent);



        buchstabe.classList.remove("isHidden");

        /*for (let i: number = 0; i > 10; i++) {

            if (sequenceArrayOriginal[i] == array[i]) {

                console.log("Well done");


            } else {
                alert("Game Over");

            }

        }*/

        if (sequenceArrayOriginal[0] == array[0]) {
            console.log("Richtige Reihenfolge, mach weiter!");
        } else if (sequenceArrayOriginal[1] == array[1]) {
            console.log("Richtige Reihenfolge, mach weiter!");
        } else if (sequenceArrayOriginal[2] == array[2]) {
            console.log("Richtige Reihenfolge, mach weiter!");
        } else if (sequenceArrayOriginal[3] == array[3]) {
            console.log("Richtige Reihenfolge, mach weiter!");
        } else if (sequenceArrayOriginal[4] == array[4]) {
            console.log("Richtige Reihenfolge, mach weiter!");
        } else if (sequenceArrayOriginal[4] == array[4]) {
            console.log("Richtige Reihenfolge, mach weiter!");
        } else if (sequenceArrayOriginal[5] == array[5]) {
            console.log("Richtige Reihenfolge, mach weiter!");
            console.log(sequenceArrayOriginal);
            console.log(array);
        } else if (sequenceArrayOriginal[6] == array[6]) {
            console.log("Richtige Reihenfolge, mach weiter!");
        } else {
            alert("Game over");
        }
    }








    function startGame(): void {

        schwierigkeitsgrad = parseFloat(allSelectElements[1].value);

        timer = <HTMLElement>document.getElementById("countdown");

        let counting: number = setInterval(myCountdown, 1000);


        function myCountdown(): void {

            timer.innerHTML = "Remaining Time: " + schwierigkeitsgrad;

            schwierigkeitsgrad--;

            if (schwierigkeitsgrad == 0) {
                stopTimer();
            }
        }


        function stopTimer(): void {

            console.log("Ende");
            clearInterval(counting);
        }
    }
}