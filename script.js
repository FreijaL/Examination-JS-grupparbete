/**
 För att toggla SVG:en
 document.querySelector('figure').classList.add('scaffold')
 document.querySelector('figure').classList.add('head')
 document.querySelector('figure').classList.add('body')
 document.querySelector('figure').classList.add('arms')
 document.querySelector('figure').classList.add('legs')



// 1 - Decomposition ---------- bryta ner det stora till mindre delar
// 2 - Pattern recognition ---- upprepande av mönster / moment
// 3 - Abstraction ------------ abstrahera en lösning för att passa olika senarion
// 4 - Algorithm design ------- steg för steg instruktioner



// 1 - lista med alfabetet - "lettersOptions" (ta bort för varje gissningar?)
//   - lista med rätt gissade bokstäver - "correctLetters"
//   - lista med fel gissade bokstäver
//   - lista med random ord - "words"
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

*/
//FRÅGA TILL MAJA:  SKA VI ANVÄNDA "FIGURE" queryselectior
let imgGround = document.querySelector('#ground');
let imgScaffold = document.querySelector('#scaffold');
let imgHead = document.querySelector('#head');
let imgBody = document.querySelector('#body');
let imgArms = document.querySelector('#arms');
let imgLegs = document.querySelector('#legs');

// lista med variablerna som innehåller id för varje bild som dyker upp per fel gissning
let imgOpacity = [imgGround, imgScaffold, imgHead, imgBody, imgArms, imgLegs];

// // lista med alla bokstäver som går att gissa på - behöver vi den?
// let lettersOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "å", "ä", "ö"];

// lista med random ord
let words = ['adam', 'kamala', 'freija'];

// det ordet som slumpas fram läggs i den här variabeln
let correctWord = [];

// här splittas ordet i "correctWord" så att varje bokstav ligger i ett element i en array
let correctLetters = '';

// de <li> som skapas i HTML för att visa det ord som användaren gissar på
let correctWordElem = document.querySelector('.word');

// de <li> som skapas i HTML för att visa de ord som användaren gissat fel på
let wrongGuessesElem = document.querySelector('.nomatch');


// hjälp
let correctLetterGuess = [];
// hjälp
let wrongLetterGuess = [];


//skapar en funktion som startar spelet och hämtar ett random ord från listan words och lägger den i "correctWord"
function startGame() {

    let randomWord = Math.floor(Math.random() * words.length);
    correctWord.push(words[randomWord]);

    correctLetters = correctWord.toString().split('');
    console.log(correctLetters);

    // när vi fått ett random ord ska det skapas lika många <li> i ul('word') som antal bokstäver i ordet
    for (let i = 0; i < correctLetters.length; i++) {
        var wordListEl = document.createElement('li');
        wordListEl.innerHTML = '';
        correctWordElem.appendChild(wordListEl);
        console.log(wordListEl);
    }

    //lyssna efter tryck på tangentbordet
    let keyBoard = document.querySelector('body')
    keyBoard.addEventListener('keypress', fetchkey => {
        var fetchKey = fetchkey.key;

        //- vid tryck - jämför bokstav(tryck) med nuvarande ord "correctWord"
        for (let index = 0; index < correctLetters.length; index++) {
            //FRÅGA TILL MAJA: Hur får vi rätt index att hamna på rätt <li>?
            if (correctLetters.includes(fetchKey) === true) {
                console.log('WORK');
                wordListEl.innerHTML = fetchKey;
            } else {
                //FRÅGA TILL MAJA: Hur får vi alla index att hamna i "nomatch"?
                console.log('NOT WORK');
                wrongGuessesElem.textContent = fetchKey;
                console.log(wrongLetterGuess);

                // för varje fel gissad bokstav skapas lika många <li> - "noMatchListEl" i ul('nomatch') - "wrongGuessesElem"
                var noMatchListEl = document.createElement('li');
                noMatchListEl.innerHTML = "";
                wrongGuessesElem.appendChild(noMatchListEl);
                // noMatchListEl += fetchKey; - behövs?
                console.log(noMatchListEl);

                //FRÅGA TILL MAJA: Hur får vi en bild att visas per felaktigt tryck. 
                for (let img = 0; img < imgOpacity.length; img++) {
                    imgOpacity[0].style.opacity = 1;
                }
            }
        }
    });
    //FRÅGA TILL MAJA: Går inte att placera bokstäverna på rätt plats i ordet. Allt hamnar på sista rutan. 
}
//FRÅGA TILL MAJA: Är det värt att använda denna funktion för att få in bokstaven i arrayen "wrongLetterGuess"
///function newLetter() {
///    let letter = fetchKey;
///    wrongLetterGuess.push(letter);
///    wrongLetterGuess += letter;
///    console.log(wrongLetterGuess);
///
///}
///newLetter()


//Spelets huvudfunktion körs
startGame()
//Här testar vi att det funkar...
console.log(correctWord);

