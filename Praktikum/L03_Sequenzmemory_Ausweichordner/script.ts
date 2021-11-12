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

    let backOfCard: FormDataEntryValue | null;

    let background: FormDataEntryValue | null;

    let fontColor: FormDataEntryValue | null;

    let sizeOfCard: FormDataEntryValue | null;

    let font: FormDataEntryValue | null;

    let schwierigkeitsgrad: FormDataEntryValue | null;




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
            buchstabe.classList.add("isHidden");
            buchstabe.classList.add("buchstabe");
            span.addEventListener("click", checkCards);
        }


    
        startGame();

        formData = new FormData(document.forms[0]);
        console.log(formData);

        backOfCard = formData.get("back_of_card");
        span.style.backgroundColor = backOfCard.toString();

        background = formData.get("background");
        gamefield = <HTMLDivElement> document.getElementById("container_for_span");
        gamefield.style.backgroundColor = background.toString();

        fontColor = formData.get("fontColor");
        buchstabe.style.color = fontColor.toString();

        sizeOfCard = formData.get("cardsize");
        span.style.width = sizeOfCard + "px";
        span.style.height = sizeOfCard + "px";

        font = formData.get("font");
        buchstabe.style.fontFamily = font.toString();
        console.log(font);

        schwierigkeitsgrad = formData.get("schwierigkeitsgrad");

    }


    function checkCards(_event: MouseEvent): void {

        let target: HTMLElement = <HTMLElement>_event.target;
        console.log(target);

        if (target.classList.contains("card")) {
            buchstabe.classList.remove("isHidden");
        }
    }





    function startGame(): void {

        

        timer = <HTMLElement>document.getElementById("countdown");

        //let time: HTMLElement = <HTMLElement> document.getElementById("time");

        let counting: number = setInterval(myCountdown, 1000);

        let counter: number = 120;


        function myCountdown(): void {

            timer.innerHTML = "Remaining Time: " + counter;

            //console.log(counter);
            counter--;

            if (counter == 0) {
                stopTimer();
            }


        }


        function stopTimer(): void {

            console.log("Ende");
            clearInterval(counting);
        }
    }


}