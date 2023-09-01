
// PART 1




//1
//Make a request to the Numbers API(http://numbersapi.com/) to get a fact about your favorite number.
//(Make sure you get back JSON by including the json query key, specific to this API.Details./

//add html to see 
//add async and await and remvoe then and catch,  add try catch 
const url = "http://numbersapi.com/7?json"

async function getFact() {
    try {
  res = await axios.get(url)
        console.log("------Part 1", res.data.text)
            return res.data.text
        }
        catch(error)  {
            console.log(error)
        }
}




//2

//Figure out how to get data on multiple numbers in a single request.
//Make that request and when you get the data back, put all of the number facts on the page.
//add async and await 
//remove then 
//
const multipleNumbers = document.getElementById("numbersfacts");
const favNumber = document.getElementById("favoritenumberfacts");
const favNum = document.getElementById("favoritenumber");

//2 part 2

async function getMultipleNumbers() {
    res = await axios.get(`http://numbersapi.com/1..5,10`)
    for (let answer in res.data) {
        const li = document.createElement("li")
        li.textContent = res.data[answer]
        favNumber.append(li)
    }
}

getMultipleNumbers();





// let numberList = [];
// numberList.push(await axios.get(`http://numbersapi.com/1..5,10`))


// Promise.all(numberList)

//     .then(res => {
//         console.log(res[0].data)
//         for (let answer in res[0].data) {
//             const li = document.createElement("li")
//             li.textContent = res[0].data[answer]
//             favNumber.append(li)
//         }
//     })

//     .catch(err => console.log("error!", err))














/**
 * Use the API to get 4 facts on your favorite number. 
 * 1. call getFacts function
 * 2. return the facts in the function
 * Once you have them all, put them on the page. 
 * 1.  create li tag 
 * 2. add clue text (from the request) to the li
 * It’s okay if some of the facts are repeats.
 */

//remove then statements 
//could also make a loop?
// also add .atch and try

//#3


async function get4facts() {
    try { 
  
        for (let i = 0; i < 5; i++) {
          let fact = await getFact();
        const li2 = document.createElement("li")
        li2.textContent = fact;
        favNum.append(li2);
    }
    }
    catch (error){
        console.log("ERROR!", error)
    }
}
get4facts()






//part 2




//1
//Make a request to the Deck of Cards API to request a single card from a newly shuffled deck.
//shuffle cards    
//draw from  brand new deck 
        //actually just do this https://deckofcardsapi.com/api/deck/new/draw/?count=1
        //itll create a new request for you with new cards and them being shufflled, change deck_id to new

//Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).  //
//data.cards[0].value
//data.cards[]

    //remove .then   .catch
    //add await and async
 async function createDeckShuffleAndDrawCard() {
    try {
        res = await axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
        console.log(`${res.data.deck_id}: ${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
    }
    catch (error) {
        console.log("ERROR!", error)   
    }
}
createDeckShuffleAndDrawCard();





// 2.
// Make a request to the deck of cards API to request a single card from a newly shuffled deck.
//https://deckofcardsapi.com/api/deck/new/draw/?count=1
//Once you have the card, make a request to the same API to get one more card from the same deck.
//call the same api call but with the deck_id,  check remainder
//https://deckofcardsapi.com/api/deck/deck_id/draw/?count=1

// Once you have both cards, console.log the values and suits of both cards.
//add async and await
async function Get2Cards() {
    try { 
    res = await axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
    res2 = await axios.get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`)
                
    console.log(`deck: ${res.data.deck_id}: ${res.data.cards[0].value} of ${res.data.cards[0].suit} ---   deck: ${res2.data.deck_id}: ${res2.data.cards[0].value} of ${res2.data.cards[0].suit}`)
    }
    catch (error) {
         console.log("ERROR!", error)
     }

}


Get2Cards()
