import * as readline from "readline";

type Suit = "Diamonds" | "Cups" | "Hearts" | "Spades";

const SUITS = ["Diamonds", "Cups", "Hearts", "Spades"];

type CardValue =
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "J"
  | "Q"
  | "K"
  | "A";

const CARD_VALUES = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

type Card = {
  suit: Suit;
  value: CardValue;
};

function printMenu() {
  console.log("P - Play");
  console.log("S - Scores");
  console.log("E - Exit");
}

function getUserInput() {}

function getRandomCard() {}

function main() {
  printMenu();
}

main();
