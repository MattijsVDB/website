'use strict'

const encoded = "bGV2ZW50ZQ=="
const secretWord = atob(encoded).toLowerCase(); // hardcoded naam (max 7)

const board = document.getElementById("board");
const input = document.getElementById("guessInput");
const button = document.getElementById("guessBtn");

const MAX_LEN = 7;

button.addEventListener("click", checkGuess);

function checkGuess() {
    const guess = input.value.toLowerCase();

    if (guess.length === 0 || guess.length > 7) {
        alert("Ik denk niet dat er iemand mee doet met een naam langer dan 7 letters.");
        return;
    }

    const row = document.createElement("div");
    row.className = "row";

    // Eerst tellen we letters van het geheime woord
    const letterCount = {};
    for (let letter of secretWord) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    }

    // Eerste pass: juiste plek
    const result = Array(guess.length).fill("absent");

    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === secretWord[i]) {
            result[i] = "correct";
            letterCount[guess[i]]--;
        }
    }

    // Tweede pass: juiste letter, verkeerde plek
    for (let i = 0; i < guess.length; i++) {
        if (
            result[i] === "absent" &&
            secretWord.includes(guess[i]) &&
            letterCount[guess[i]] > 0
        ) {
            result[i] = "present";
            letterCount[guess[i]]--;
        }
    }

    // Tiles maken
    for (let i = 0; i < guess.length; i++) {
        const tile = document.createElement("div");
        tile.className = `tile ${result[i]}`;
        tile.textContent = guess[i];
        row.appendChild(tile);
    }

    board.appendChild(row);
    input.value = "";

    if (guess === secretWord) {
        alert("🎉 Juist geraden!");
    }
}