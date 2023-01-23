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



// Hej hej från Kamala
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
// 4 - 

let imgScaffold = document.querySelector('figure').classList.add('scaffold');
let imgHead = document.querySelector('figure').classList.add('head');
let imgBody = document.querySelector('figure').classList.add('body');
let imgArms = document.querySelector('figure').classList.add('arms');
let imgLegs = document.querySelector('figure').classList.add('legs');



