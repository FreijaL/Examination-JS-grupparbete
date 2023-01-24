/**
 För att toggla SVG:en
 document.querySelector('figure').classList.add('scaffold')
 document.querySelector('figure').classList.add('head')
 document.querySelector('figure').classList.add('body')
 document.querySelector('figure').classList.add('arms')
 document.querySelector('figure').classList.add('legs')
*/


// 1 - Decomposition ---------- bryta ner det stora till mindre delar
// 2 - Pattern recognition ---- upprepande av mönster / moment
// 3 - Abstraction ------------ abstrahera en lösning för att passa olika senarion
// 4 - Algorithm design ------- steg för steg instruktioner



// 1 - lista med alfabetet (ta bort för varje gissningar)
//   - lista med rätt gissade bokstäver
//   - lista med fel gissade bokstäver
//   - lista med random ord
//   - max antal gissningar
//   - antal gissningar användaren gjort
// 2 - vid varje tangenttryck ska en function köras som jämför tryck med if (bokstav)= true else(bokstav) = false
//   - vid varje fel gissning ska bokstav pushas till listan med fel gissade + 1 opacity på bilden
//   - vid varje rätt gissning ska bokstav pushas till listan med rätt gissade + bokstav till ordet (på rätt ställe)
//   - eventListener på tangenterna (alt knappar)
// 3 - 
/* 4 -
- skapar en funktion som startar spelet och hämtar ett ord från listan words och lägger den i "currentWord"
- lyssna efter tryck på tangentbordet
- vid tryck - jämför bokstav(tryck) med nuvarande ord "currentWord"
- if - villkor: vid rätt gissning ska bokstaven ska finnas i currentWord och finnas i alfabetet
    + ska bokstaven pushas till listan med rätt gissade 
    + tas bort från alfabetet 
    + bokstaven ska sättas på rätt plats 
    (+ "felmeddelande" på redan tryckta bokstäver)
    + När correctLetterGuess är === currentWord ska spelet sluta och section class="you-won" visas. 
    + (För VG: eventuellt lägga till poängräknare)
- else if - villkor: Bokstaven i alfabetet men finns inte i currentWord 
    + vid fel gissning ska bokstaven pushas till listan med fel gissade "wrongLetterGuess" och visas i class="nomatch"
    + tas bort från alfabetet för att inte kunna gissas igen. Ska ej kunna vara klickbar.
    + Opacity 1 += läggs till på gubben(SVGn) med en loop
    + Spelets slut, alternativ 1: 
        -när sista opacityn är satt på "imgLegs" ska spelet sluta. Ska visas i section class"game-over"
            + Spelet slut, alternativ 2:
        - när wrongLetterGuess är satt till 5 bokstäver ska spelet sluta. Ska visas i section class"game-over"
    + (För VG: eventuellt lägga till poängräknare)

- else - villkor: Om bokstaven inte finns i letterOptions
-  lägg till ett felmeddelande (testa ny bokstav)
- 
-

*/

let imgScaffold = document.querySelector('figure').classList.add('scaffold');
let imgHead = document.querySelector('figure').classList.add('head');
let imgBody = document.querySelector('figure').classList.add('body');
let imgArms = document.querySelector('figure').classList.add('arms');
let imgLegs = document.querySelector('figure').classList.add('legs');

let lettersOptions = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","å","ä","ö"];
let words = ['adam', 'kamala', 'freija'];
let currentWord = [];
let correctLetterGuess = [];

let correctWord = document.querySelector('.word');
let currentLetters = '';
//skapar en funktion som startar spelet och hämtar ett ord från listan words och lägger den i "currentWord"
function startGame() {
   
    let randomWord = Math.floor(Math.random() * words.length);
    currentWord.push(words[randomWord]);


    currentLetters = currentWord.toString();
    console.log(currentLetters);
    // när vi fått ett random ord ska det skapas li i ul('word') = antal bokstäver i ordet
    currentWord.forEach (letter => {
        let listEl = document.createElement('li');
        listEl.innerHTML = '';
        currentWord.appendChild(listEl);
        console.log(letter);
    });


}
startGame()
console.log(currentWord);

// gör currentWord till sträng så att vi kan leta fram specifik bokstav senare
// let currentLetters = currentWord.toString();
// console.log(currentLetters);


//lyssna efter tryck på tangentbordet
let keyBoard = document.querySelector('body')
keyBoard.addEventListener('keypress', fetchkey => {

//- vid tryck - jämför bokstav(tryck) med nuvarande ord "currentWord"
    if (currentLetters.includes(fetchkey.key) == true) {
        console.log('WORK');
    } else {
        console.log('NOT WORK');
    }

});

