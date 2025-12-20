'use strict'

const encoded = "bWFtYQ=="
const secretWord = atob(encoded).toLowerCase(); // hardcoded naam (max 7)

const board = document.getElementById("board");
const input = document.getElementById("guessInput");
const button = document.getElementById("guessBtn");

const MAX_LEN = 20;
const wordList = ["luk", "pup", "maarten", "papa", "griet", "mama", "hannes", "lukas", "mattijs", "lander", "heleen"];

const handleKeyDown = (e) =>
{
    if (e.key === "Enter")
    {
        checkGuess();
    }
}

button.addEventListener("click", checkGuess);
document.addEventListener("keydown", handleKeyDown);

function checkGuess()
{
    const guess = input.value.toLowerCase();

    if (guess.length === 0 || guess.length > 20)
    {
        alert("De naam is te lang of te kort.");
        return;
    }

    if(!wordList.includes(guess.toLowerCase()))
    {
        alert("Not in wordlist.");
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