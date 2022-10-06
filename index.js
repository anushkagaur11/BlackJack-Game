let hasBlackJAck = false
let isAlive = false
let sum = 0
let cards = [0]
let message = ""
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let player = {
    Name: "Anushka",
    Chips: 110
}
let playerEl = document.getElementById("player-el")
playerEl.textContent() = player.Name + ": $" + player.Chips
function getRandomCard() {
    let rand = Math.floor(Math.random() * 13) + 1
    if (rand === 1) {
        return 11
    } else if (rand > 10) {
        return 10
    } else {
        return rand
    }
}
function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}
function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i += 1) {
        cardsEl.textContent += " " + cards[i]
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        hasBlackJAck = true
        message = "Wohoo! You've got BlackJack 🥳"
    } else {
        isAlive = false
        message = "You're out of the game! 😭"
    }
    messageEl.textContent = message
}
function newCard() {
    if (isAlive === true && hasBlackJAck === false) {
        console.log("Draw a new card from the deck")
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
}
