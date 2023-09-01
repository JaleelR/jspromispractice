
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

//done//make an object 
//the object needs a async function to have new carss  the cards
    //done  //axios.get("https://deckofcardsapi.com/api/deck/new/shuffle")

//next it needs to get the deck id 
  //done ///this.deck.id = res.data.deck_id

//done//create an draw 

const drawButton = document.getElementById("draw")
const cards = document.getElementById("cards")



document.addEventListener("DOMContentLoaded", () => {
    async function main() {
        await deck.NewDeckAndShuffle();
        console.log(deck.deckid)
    }
     main() 
})



let deck = {
    async NewDeckAndShuffle() {
        try {
            let res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle");
            this.deckid = res.data.deck_id;
        }
        catch (error) {
            console.log("Error", error)
        }
    },
    
    async draw() {
        try {
            let res2 = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckid}/draw/?count=1`)
            this.card = { 
                img: res2.data.cards[0].image, 
                cardsLeft: res2.data.remaining 
            }
             
        }
        catch (error) {
            console.log("Error", error)
        }
    }
}
    


async function drawACard() {
    try {

        await deck.draw()

        console.log(deck.card, deck.deckid)
       
        if (deck.card.cardsLeft > 0) {
            console.log(deck.card.cardsLeft)
            const img = document.createElement("img")
            img.src = deck.card.img
            cards.append(img)
        } else {
            console.log(deck.card.cardsLeft)
            console.log("no more cards left!")
        }
    }
    catch (error) {
        console.log(error)
        
    }
}

drawButton.addEventListener("click", () => {
    drawACard();
})

