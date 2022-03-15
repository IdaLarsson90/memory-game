/*
1. Slumpa platsen för alla korten
2. Kortet vänder sig när man klickar
3. När man valt två kort ska de jämföras
4. Är de lika ska de vara uppvända
5. Är de olika ska de vändas tillbaka
*/

const backElem = document.querySelectorAll('.back');
const cardsElem = document.querySelectorAll('.memory-card');
const overlayElem = document.querySelector('.overlay');
const closeElem = document.querySelector('.close');
const button = document.querySelectorAll('button');

let flippedCards = 0;
let firstCard = 0;
let secondCard = 0;
let firstCardIndex;
let flippedPairs = 0;

shuffle();

for (let i = 0; i < cardsElem.length; i++) {
    backElem[i].addEventListener('click', ()=> {
        if(flippedCards == 2) {
            return;
        } else {
        cardsElem[i].classList.add("flip");
        flippedCards++;
        pickedIndex = i;
            
            if (flippedCards === 2){
                secondCard = parseInt(cardsElem[i].getAttribute('data-card'));
                setTimeout(compareCards, 1000);
            } else {
                firstCard = parseInt(cardsElem[i].getAttribute('data-card'));
                firstCardIndex = pickedIndex;
            }
        }
    });
    
}
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', ()=>{
        overlayElem.classList.remove("show");
        console.log('klick');
        flippedPairs=0;
        flippedCards=0;
        for (let j = 0; j < cardsElem.length; j++) {
            cardsElem[j].classList.remove("flip");
        }
        setTimeout(shuffle, 800);
    });
}

closeElem.addEventListener('click', () => {
    overlayElem.classList.remove("show");
    flippedPairs=0;
    flippedCards=0;
    for (let j = 0; j < cardsElem.length; j++) {
        cardsElem[j].classList.remove("flip");
    }
    setTimeout(shuffle, 800);
});

function compareCards() {
    flippedCards = 0;
    if (firstCard === secondCard) {
        flippedPairs++;
        if (flippedPairs === 1) {
            overlayElem.classList.add("show");
        }
    } else {
        console.log("Inget par");
        cardsElem[firstCardIndex].classList.remove("flip");
        cardsElem[pickedIndex].classList.remove("flip");
    }
    console.log(`Flipped Pairs: ${flippedPairs}`);
}

function shuffle() {
    for( let i = 0; i < cardsElem.length; i++) { 
        let randomIndex = Math.floor(Math.random() * cardsElem.length);
        cardsElem[i].style.order = randomIndex;
    }
}

