let cardArr = []
let sum = 0
let isAlive = false
hasBlackJack = false
let message = " "

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1 ){
        let message_El = document.getElementById("message-el")
        hasAce = true
        message = "You've got an ACE"
        message_El.textContent = message
        let AceOF = window.prompt("Entre com o Valor do AS", "")
        return AceOF
    } else {
        return randomNumber
    }   
}

function startGame(){
    isAlive = true
    renderGame()
    let first_card = getRandomCard()
    let second_card = getRandomCard()
    cardArr = [first_card, second_card]
    sum = first_card + second_card
    renderGame()
}

function renderGame() {
    let cardEl = document.getElementById("card-el")
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cardArr.length; i++) {
        cardEl.textContent += cardArr[i] + " "
      }
   
    let sumEl = document.querySelector("#sum-el")
    sumEl.textContent = "Sum: " + sum

    let message_El = document.getElementById("message-el")
    
    if (sum == 21){
        message = "You Win"
        hasBlackJack= true
    } else if (sum <= 20) {
        message = "Do you want draw a new card?"
    } else {
        message = "You lost O JOGO"
        isAlive = false
    }
    message_El.textContent = message
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cardArr.push(card)
        renderGame()
    }
    
}