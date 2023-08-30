// 3
// Build an HTML page that lets you draw cards from a deck.
//done//create an html page 
    //done//add div for cards

// When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card.
//https://deckofcardsapi.com/api/deck/new/
    
//done//create a new deck 
//done//each time the deck is used pull from old deck
//make sure it doesnt pull below 0

    //done//make a button
//done//add a listener to the button that will draw a card when you press it 
//`https://deckofcardsapi.com/api/deck/${res2}/draw/?count=1`
//done//event listener does the api call when submitted

    
// Every time you click the button, display a new card, until there are no cards left in the deck.
//when button is clicked after you draw, show card you drew untill remaining cards == 0.'
const drawButton = document.getElementById("draw")
const cards = document.getElementById("cards")


let currentcards = "";
document.addEventListener("DOMContentLoaded", () => {
    function currentDeck() {
        return axios.get("https://deckofcardsapi.com/api/deck/new/")
            .then(res => {
                console.log(res,  res.data.remaining)
                currentcards = res.data.deck_id;
            })
            .catch(e => console.log(e))

    }
    currentDeck();
})

    





function drawACard() {
    axios.get(`https://deckofcardsapi.com/api/deck/${currentcards}/draw/?count=1`)
        .then(res2 => {
            if (res2.data.remaining > 0) {
                console.log(res2.data.remaining)
                console.log(res2.data.deck_id, res2.data.remaining)
                const img = document.createElement("img")
                img.src = res2.data.cards[0].image
                cards.append(img)
            } else {
                console.log(res2.data.remaining)
                 console.log("no more cards left!")
            }
        })
       .catch(error => {
            console.log(error)
        })
}


drawButton.addEventListener("click", () => {
    drawACard();
})

