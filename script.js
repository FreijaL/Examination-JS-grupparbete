// lista med random ord
let words = ['adam', 'kamala', 'freija', 'frontend', 'backend', 'fullstack', 'computer', 'maja', 'javascript'];

// det ordet som slumpas fram läggs i denna
let correctWord = [];

// här splittas ordet i "correctWord" så att varje bokstav ligger i ett element i en array
let correctLetters = '';

// de <li> som skapas i HTML ul class=word för att visa det ord som användaren gissar på
let correctWordElem = document.querySelector('.word');

// de <li> som skapas i HTML ul class=nomatch för att visa de ord som användaren gissat fel på
let wrongGuessesElem = document.querySelector('.nomatch');

// räknar hur många bokstäver som man gissat rätt på *******
let correctGuesses = 0;

// array för att hålla kolla på vilka bokstäver man redan gissat på *******
let currentCorrectGuesses = [];

// en boolean som avgör om spelet är över - (vunnit/förlorat) ******2
let gameFinished = false;

// var i HTML som poängen ska visas
let counterElem = document.getElementById('counter');

// här sparas spelarens poäng
let count = 0;

// där alla fel-gissningar sparas
let wrongLetterGuess = [];

//skapar en funktion som startar spelet och hämtar ett random ord från listan "words" och lägger den i "correctWord"
function startGame() {

    let randomWord = Math.floor(Math.random() * words.length);
    correctWord.push(words[randomWord]);

    correctLetters = correctWord.toString().split('');

    // när vi fått ett random ord ska det skapas lika många <li> i ul('word') som antal bokstäver i ordet
    for (let i = 0; i < correctLetters.length; i++) {
        var wordListEl = document.createElement('li');
        wordListEl.innerHTML = '';
        correctWordElem.appendChild(wordListEl);
    };
    //lyssna efter tryck på tangentbordet
    let keyBoard = document.querySelector('body');
    keyBoard.addEventListener('keypress', fetchkey => {
        var fetchKey = fetchkey.key;

        // kollar om gissningen finns i arrayn som är rätt gissade *******
        if (!currentCorrectGuesses.toString().includes(fetchKey)) {
            // vid tryck - kollar om gissningen (trycket av en bokstav) finns i korrekt ord ("correctLetters")
            if (correctLetters.includes(fetchKey) && gameFinished == false) {
                // loopar igenom korrekt ord ("correctLetters") en gång för varje rätt gissning
                for (let i = 0; i < correctLetters.length; i++) {
                    //jämför om gissningen stämmer överens med något av bokstavens index i "correctLetters"
                    if (correctLetters[i] === fetchKey) {
                        // om gissningen stämmer läggs bokstaven in i rätt <li>-element
                        let listElem = document.querySelectorAll("li");
                        listElem[i].innerHTML = fetchKey;
                        // Poängräknare
                        count += 10;
                        counterElem.innerHTML = 'Your amazing score is: ' + count;
                        // varje gång man gissar rätt bokstav ökas med 1
                        correctGuesses++;

                        //lägger till rättgissade bokstäverna i array *******
                        currentCorrectGuesses.push(correctLetters[i]);
                    }

                    // Kollar om man gissat rätt på alla bokstäver i ordet *******
                    if (correctGuesses === correctLetters.length) {
                        // Denna kod körs när man vunnit ********
                        let winningElem = document.querySelector('.winning');
                        winningElem.style.display = "flex";
                        // boolean uppdateras när man vunnit ******2
                        gameFinished = true;
                    }
                };

                // detta if block förtsätter att köra om spelet INTE är över ******2
            } else if (gameFinished == false) {
                // vid fel gissning läggs den bokstaven in i ett <li>-element i ul class=nomatch
                wrongGuessesElem.textContent += fetchKey;
                wrongLetterGuess.push(fetchKey);

                // för varje fel gissning visas en del av gubben och vid den femte fel-gissningen visas section class=game-over
                if (wrongLetterGuess.length === 1) {
                    document.querySelector('figure').classList.add('scaffold')
                } else if (wrongLetterGuess.length === 2) {
                    document.querySelector('figure').classList.add('head')
                } else if (wrongLetterGuess.length === 3) {
                    document.querySelector('figure').classList.add('body')
                } else if (wrongLetterGuess.length === 4) {
                    document.querySelector('figure').classList.add('arms')
                } else if (wrongLetterGuess.length === 5) {
                    document.querySelector('figure').classList.add('legs')
                    let gameOverElem = document.querySelector('.game-over');
                    gameOverElem.style.display = "flex";
                    let gameOverWordElem = document.querySelector('.word-revealed');
                    gameOverWordElem.textContent = correctWord;

                    // uppdaterar boolean när man har förlorat ******2
                    gameFinished = true;
                };
            };
        };
    });
};

// Spelets huvudfunktion körs
startGame();