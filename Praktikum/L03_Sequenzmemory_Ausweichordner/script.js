"use strict";
var L03_Sequenzmemory_Neu;
(function (L03_Sequenzmemory_Neu) {
    //Formular für die Karteneinstellungen
    let form;
    let gamefield;
    //Start Button um das Spiel zu starten
    let startButton;
    //Div Element für die span Elemente
    let container;
    //Timer der runterzählt
    let countdown;
    //Array wo die Sequenzeingabe reingeschossen wird
    let sequenceArray;
    //Array wo die Sequenzeingabe reingeschossen wird
    let sequenceArrayOriginal;
    //Sequenzeingabe
    let sequenzeingabe;
    //FormData für die Auswertung des Formulars
    let formData;
    //Countdown
    let timer;
    //Karten 
    let span;
    //Eingegebene Sequenz in Buchstaben
    let buchstabe;
    let überprüfZahl;
    let event;
    let information;
    let backOfCard;
    let background;
    let fontColor;
    let sizeOfCard;
    let font;
    let schwierigkeitsgrad;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        form = document.querySelector("form");
        startButton = document.querySelector("button");
        startButton.addEventListener("click", loadMemoryField);
        console.log(_event);
    }
    function loadMemoryField(_event) {
        container = document.getElementById("container_for_span");
        countdown = document.getElementById("countdown");
        form.classList.add("isHidden");
        container.classList.remove("isHidden");
        countdown.classList.remove("isHidden");
        console.log(_event);
        createCards();
    }
    function createCards() {
        //Input von Sequence wird genommen
        sequenzeingabe = document.getElementById("input");
        console.log(sequenzeingabe);
        //Eingegebene Sequenz wird in Buchstaben gesplitted und in ein Array geschossen
        sequenceArray = sequenzeingabe.value.split("");
        sequenceArrayOriginal = sequenzeingabe.value.split("");
        console.log(sequenceArray);
        for (let i = sequenceArray.length - 1; i >= 0; i--) {
            //Eingabe im Array wird nun geshuffled und das Array wird gewürfelt
            let randomNumber;
            let shuffledCards;
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
        gamefield = document.getElementById("container_for_span");
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
    function checkCards(_event) {
        let target = _event.target;
        console.log(target);
        if (target.classList.contains("card")) {
            buchstabe.classList.remove("isHidden");
        }
    }
    function startGame() {
        timer = document.getElementById("countdown");
        //let time: HTMLElement = <HTMLElement> document.getElementById("time");
        let counting = setInterval(myCountdown, 1000);
        let counter = 120;
        function myCountdown() {
            timer.innerHTML = "Remaining Time: " + counter;
            //console.log(counter);
            counter--;
            if (counter == 0) {
                stopTimer();
            }
        }
        function stopTimer() {
            console.log("Ende");
            clearInterval(counting);
        }
    }
})(L03_Sequenzmemory_Neu || (L03_Sequenzmemory_Neu = {}));
//# sourceMappingURL=script.js.map