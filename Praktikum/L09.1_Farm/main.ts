namespace L09_Farm {


    window.addEventListener("load", handleLoad);

    //Tiere/Objekte werden deklariert 
    let dog: Animal = new Animal("Crack", "ein Hund", "Fleisch", 10, 250, "wuuuuuuuuuff");
    let cat: Animal = new Animal("Gilbert", "eine Katze", "Whiskas", 5, 100, "miaaaaauuuuu");
    let horse: Animal = new Animal("Pony", "ein Pferd", "Heu", 20, 300, "yahüüüüüüüüüüüüüüü");
    let cow: Animal = new Animal("Milka", "eine Kuh", "Graß", 20, 300, "muuuuuuuuuuh");
    let lion: Animal = new Animal("Memphis", "ein Löwe", "Vegan", 1, 100, "wrooooooaaaaaaaaaah");

    //Array der Objekte wird deklariert
    let animalsArray: Animal[] = [dog, cat, horse, cow, lion];

    //handleLoad wird aufgerufen
    function handleLoad(): void {




        singTheLyrics();

        //setTimeout(singTheLyrics(), 3000);

    }

    function singTheLyrics(): void {

        setTimeout(function(): void {

            let displayFoodStock: HTMLDivElement = <HTMLDivElement>document.getElementById("displayFoodStock");
            let displayLyrics: HTMLDivElement = <HTMLDivElement>document.getElementById("displayLyrics");

            for (let i: number = 0; i < animalsArray.length; i++) {

                let pElementForLyrics: HTMLParagraphElement = document.createElement("p");
                displayLyrics.appendChild(pElementForLyrics);
                pElementForLyrics.innerHTML = animalsArray[i].sing();

            }



        },         3000);


    }













}