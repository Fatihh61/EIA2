namespace L09_Farm {


    window.addEventListener("load", handleLoad);

    //Tiere/Objekte werden deklariert 
    let dog: Animal = new Animal("Crack", "ein Hund", "Fleisch", 10, 250, "wuuuuuuuuuff", 10);
    let cat: Animal = new Animal("Gilbert", "eine Katze", "Whiskas", 5, 100, "miaaaaauuuuu", 5);
    let horse: Animal = new Animal("Pony", "ein Pferd", "Heu", 20, 300, "yahüüüüüüüüüüüüüüü", 20);
    let cow: Animal = new Animal("Milka", "eine Kuh", "Graß", 20, 300, "muuuuuuuuuuh", 20);
    let lion: Animal = new Animal("Memphis", "ein Löwe", "Vegan", 1, 100, "wrooooooaaaaaaaaaah", 1);


    let num: number = 1;

    //Array der Objekte wird deklariert
    let animalsArray: Animal[] = [dog, cat, horse, cow, lion];

    //handleLoad wird aufgerufen
    function handleLoad(): void {

        let displayFoodStock: HTMLDivElement = <HTMLDivElement>document.getElementById("displayFoodStock");

        /*for (let i: number = 0; i < animalsArray.length; i++) {

            pElementForFoodStock = document.createElement("p");
            displayFoodStock.appendChild(pElementForFoodStock);
            pElementForFoodStock.innerHTML = animalsArray[i].eat();

        }
        */




        setTimeout(dogSing, 3000);
        //setTimeout(singTheLyrics, 3000);



    }

    function dogSing(): void {

        num--;

        let displayFoodStock: HTMLDivElement = <HTMLDivElement>document.getElementById("displayFoodStock");
        let displayLyrics: HTMLDivElement = <HTMLDivElement>document.getElementById("displayLyrics");

        let pElementForLyrics: HTMLParagraphElement = document.createElement("p");
        displayLyrics.appendChild(pElementForLyrics);
        pElementForLyrics.innerHTML = animalsArray[0].sing();

        dog.foodRatio -= dog.eatenAmount;
        

        let pElementForFoodStock: HTMLParagraphElement = document.createElement("p");
        displayFoodStock.appendChild(pElementForFoodStock);
        pElementForFoodStock.innerHTML = animalsArray[0].eat();

        
        



        setTimeout(catSing, 3000);
    }

    function catSing(): void {

        let displayFoodStock: HTMLDivElement = <HTMLDivElement>document.getElementById("displayFoodStock");
        let displayLyrics: HTMLDivElement = <HTMLDivElement>document.getElementById("displayLyrics");

        let pElementForLyrics: HTMLParagraphElement = document.createElement("p");
        displayLyrics.appendChild(pElementForLyrics);
        pElementForLyrics.innerHTML = animalsArray[1].sing();

        cat.foodRatio -= cat.eatenAmount;

        let pElementForFoodStock: HTMLParagraphElement = document.createElement("p");
        displayFoodStock.appendChild(pElementForFoodStock);
        pElementForFoodStock.innerHTML = animalsArray[1].eat();



        

        setTimeout(horseSing, 3000);
    }

    function horseSing(): void {

        let displayFoodStock: HTMLDivElement = <HTMLDivElement>document.getElementById("displayFoodStock");
        let displayLyrics: HTMLDivElement = <HTMLDivElement>document.getElementById("displayLyrics");

        let pElementForLyrics: HTMLParagraphElement = document.createElement("p");
        displayLyrics.appendChild(pElementForLyrics);
        pElementForLyrics.innerHTML = animalsArray[2].sing();

        horse.foodRatio -= horse.eatenAmount;

        let pElementForFoodStock: HTMLParagraphElement = document.createElement("p");
        displayFoodStock.appendChild(pElementForFoodStock);
        pElementForFoodStock.innerHTML = animalsArray[2].eat();

      

        setTimeout(cowSing, 3000);
    }

    function cowSing(): void {

        let displayFoodStock: HTMLDivElement = <HTMLDivElement>document.getElementById("displayFoodStock");
        let displayLyrics: HTMLDivElement = <HTMLDivElement>document.getElementById("displayLyrics");

        let pElementForLyrics: HTMLParagraphElement = document.createElement("p");
        displayLyrics.appendChild(pElementForLyrics);
        pElementForLyrics.innerHTML = animalsArray[3].sing();

        cow.foodRatio -= cow.eatenAmount;

        let pElementForFoodStock: HTMLParagraphElement = document.createElement("p");
        displayFoodStock.appendChild(pElementForFoodStock);
        pElementForFoodStock.innerHTML = animalsArray[3].eat();

        setTimeout(lionSing, 3000);
    }

    function lionSing(): void {

        let displayFoodStock: HTMLDivElement = <HTMLDivElement>document.getElementById("displayFoodStock");
        let displayLyrics: HTMLDivElement = <HTMLDivElement>document.getElementById("displayLyrics");
        

        let pElementForLyrics: HTMLParagraphElement = document.createElement("p");
        displayLyrics.appendChild(pElementForLyrics);
        pElementForLyrics.innerHTML = animalsArray[4].sing();

        lion.foodRatio -= lion.eatenAmount;

        let pElementForFoodStock: HTMLParagraphElement = document.createElement("p");
        displayFoodStock.appendChild(pElementForFoodStock);
        pElementForFoodStock.innerHTML = animalsArray[4].eat();
        
        if (num == 0) {

            let createButton: HTMLButtonElement = document.createElement("button");
            let divButton: HTMLDivElement = <HTMLDivElement>document.getElementById("displayButton");
            createButton.innerHTML = "Start new Day";
            divButton.appendChild(createButton);

            createButton.addEventListener("click", handleLoad);

            num = 1;
            

            
            return;
        }

        setTimeout(dogSing, 3000);

        
    }




    //setTimeout(singTheLyrics, 3000);


    function singTheLyrics(): void {



        let displayFoodStock: HTMLDivElement = <HTMLDivElement>document.getElementById("displayFoodStock");
        let displayLyrics: HTMLDivElement = <HTMLDivElement>document.getElementById("displayLyrics");
        console.log("Test");


        for (let i: number = 0; i < animalsArray.length; i++) {

            //setTimeout(function(): void {

            let pElementForLyrics: HTMLParagraphElement = document.createElement("p");
            displayLyrics.appendChild(pElementForLyrics);
            pElementForLyrics.innerHTML = animalsArray[i].sing();

            let pElementForFoodStock: HTMLParagraphElement = document.createElement("p");
            displayFoodStock.appendChild(pElementForFoodStock);
            pElementForFoodStock.innerHTML = animalsArray[i].eat();

            //},         3000);


        }
    }













}