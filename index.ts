import * as readlineSync from 'readline-sync'
import * as fs from 'fs'

type Suit = 'Diamonds' | 'Cups' | 'Hearts' | 'Spades'

const SUITS: Suit[] = ['Diamonds', 'Cups', 'Hearts', 'Spades']

type CardValue =
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | 'J'
  | 'Q'
  | 'K'
  | 'A'

const CARD_VALUES: CardValue[] = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
  'A'
]

type Card = {
  suit: Suit
  value: CardValue
}

const ACTIONS = ['Play', 'Scores', 'Exit']

let numberOfWins = 0
let numberOfLosses = 0

function loadScores() {
  const data = fs.readFileSync('scores.txt', 'utf-8')
  const parsedData = data.split('\r\n')
  numberOfWins = +parsedData[0]
  numberOfLosses = +parsedData[1]
}

function saveScores() {
  fs.writeFileSync('scores.txt', `${numberOfWins}\r\n${numberOfLosses}`)
}

function printMenu() {
  console.log('P - Play')
  console.log('S - Scores')
  console.log('E - Exit')
}

function getRandomCard() {
  //gera uma random card
  const suitIndex = Math.floor(Math.random() * SUITS.length)
  const cardValueIndex = Math.floor(Math.random() * CARD_VALUES.length)
  const card: Card = {
    suit: SUITS[suitIndex],
    value: CARD_VALUES[cardValueIndex]
  }
  return card
}

function play() {
  const generatedCard = getRandomCard()
  let tries = 6
  while (tries >= 1) {
    const suitChoice = getSuitFromUserInput()
    const cardValueChoice = getCardValueFromUserInput()
    if (
      SUITS[suitChoice] === generatedCard.suit &&
      CARD_VALUES[cardValueChoice] === generatedCard.value
    ) {
      console.log(
        `You Won!! The card was: ${generatedCard.value} of ${generatedCard.suit}`
      )
      numberOfWins += 1
      return
    }

    console.log(`Tip: The card is of suit: ${generatedCard.suit} `)
    tries -= 1
    console.log(`You failed! Tries left: ${tries}`)
  }
  numberOfLosses += 1
} //função do menu

function scores() {
  console.log(`You won ${numberOfWins} times and lost ${numberOfLosses} times`)
} //função do menu

function exit() {
  //função do menu
  console.log('Goodbye')
}

function determineAction() {
  // determina a acção do jogador
  const choice = readlineSync.keyInSelect(ACTIONS, 'Your next action?', {
    cancel: false
  })
  if (ACTIONS[choice] === 'Play') {
    play()
  }
  if (ACTIONS[choice] === 'Scores') {
    scores()
  }
  if (ACTIONS[choice] === 'Exit') {
    exit()
  }
  return choice
}

function getSuitFromUserInput() {
  const suitChoice = readlineSync.keyInSelect(SUITS, 'Which suit?', {
    cancel: false
  })
  return suitChoice
}

function getCardValueFromUserInput() {
  const cardValueChoice = readlineSync.keyInSelect(
    CARD_VALUES,
    'Which value?',
    { cancel: false }
  )
  return cardValueChoice
}

function main() {
  let choice: number
  loadScores()
  do {
    printMenu()
    choice = determineAction()
  } while (ACTIONS[choice] !== 'Exit')
  saveScores()
}

main()

//Tentar usar o readline dentro da função getUserInput.
// Ir ao google para ver como usar o readline
//Receber primeiro o input e depois verificar se é um P, S ou um E ou outra coisa qualquer.
// Imprimir user input
