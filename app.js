
// PART 1




//1
const url = "http://numbersapi.com/7?json"

function getFact() {
    return axios.get(url)
        .then(res => {
            return  res.data.text
        })
        .catch(error => {
             console.log(error)
        })
}




//2
const multipleNumbers = document.getElementById("numbersfacts");
const favNumber = document.getElementById("favoritenumberfacts");
const favNum = document.getElementById("favoritenumber");


function xxx() {
    let num = [];
    for (i = 0; i < 10; i++) {
        num.push(axios.get(`http://numbersapi.com/${i}/trivia?json`))
    }
    return num
}

const numbers = xxx();
 

numbers.forEach(num => {
    num.then(num => {
    const liNumbers =  document.createElement("li")    
    liNumbers.textContent = num.data.text
    multipleNumbers.append(liNumbers)
    })
    .catch(error => {
        console.log(error)
    })
})




//2 part 2
    let numberList = [];
numberList.push(axios.get(`http://numbersapi.com/1..5,10`))


Promise.all(numberList)
    
    .then(res => {
        console.log(res[0].data)
        for (let answer in res[0].data) {
            const li = document.createElement("li")
            li.textContent = res[0].data[answer]
            favNumber.append(li)
        }
    })
    
.catch(err => console.log("error!", err))


   











/**
 * Use the API to get 4 facts on your favorite number. 
 * 1. call getFacts function
 * 2. return the facts in the function
 * Once you have them all, put them on the page. 
 * 1.  create li tag 
 * 2. add clue text (from the request) to the li
 * It’s okay if some of the facts are repeats.
 */


    // const li2 = document.createElement("li")
    // li2.textContent = res
// favNum.append(li2)





//#3
getFact().then(data => {
    console.log(data);  // You can access the data here
});


function get4facts() {
    
    getFact().then(res => {
     const li2 = document.createElement("li")
        li2.textContent = res
        favNum.append(li2)  
  })
    getFact().then(res => {
     const li2 = document.createElement("li")
        li2.textContent = res
        favNum.append(li2)  
  })
    getFact().then(res => {
     const li2 = document.createElement("li")
        li2.textContent = res
        favNum.append(li2)  
  })
    getFact().then(res => {
     const li2 = document.createElement("li")
        li2.textContent = res
        favNum.append(li2)  
  })
  
      
} 
get4facts()
 





//part 2

//1


//Make a request to the Deck of Cards API to request a single card from a newly shuffled deck.
//get brand new deck 
//https://deckofcardsapi.com/api/deck/new/ //keep deck_id 

//shuffle cards    
// or you can use https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1

//draw from  brand new deck 
//actually just do this lol https://deckofcardsapi.com/api/deck/new/draw/?count=1
//itll create a new request for you with new cards and them being shufflled, change deck_id to new

//Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).  //
//data.cards[0].value
//data.cards[]

function createDeckShuffleAndDrawCard() {
    return axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
        .then(res => {
            console.log(`${res.data.deck_id}: ${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
  })
.catch(e => console.log("ERROR!", e))
}
createDeckShuffleAndDrawCard();





// 2.
// Make a request to the deck of cards API to request a single card from a newly shuffled deck.
         //https://deckofcardsapi.com/api/deck/new/draw/?count=1
//Once you have the card, make a request to the same API to get one more card from the same deck.
    //call the same api call but with the deck_id,  check remainder
        //https://deckofcardsapi.com/api/deck/deck_id/draw/?count=1
         
// Once you have both cards, console.log the values and suits of both cards.

function Get2Cards() {
    axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
        .then(res => {
            console.log(`${res.data.deck_id}: ${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
            return res.data.deck_id
        }).then(res2 => {
           axios.get(`https://deckofcardsapi.com/api/deck/${res2}/draw/?count=1`)
                .then(res3 => {
                    console.log(`${res3.data.deck_id}: ${res3.data.cards[0].value} of ${res3.data.cards[0].suit} `)
                   
                })
                .catch(e => console.log("ERROR!", e))
          
        })

}
Get2Cards()


// 3
// Build an HTML page that lets you draw cards from a deck.
//done//create an html page 
    //add div for cards

// When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card.
    //https://deckofcardsapi.com/api/deck/new/
    //make a button
//add a listener to the button that will draw a card when you press it 
//`https://deckofcardsapi.com/api/deck/${res2}/draw/?count=1`

    
// Every time you click the button, display a new card, until there are no cards left in the deck.
//when button is clicked after you draw, show card you drew untill remaining cards == 0.
