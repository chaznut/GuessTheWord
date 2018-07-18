const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const wordArray = ['cat','dog', 'chicken', 'robot', 'pasta', 'train', 'donkey', 'rabbit', 'motor','denver', 'bamboo', 'tree'];
var randomItem = wordArray[Math.floor(Math.random()*wordArray.length)];
const game1 = new Hangman(randomItem, randomItem.length + 1)

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.getStatusMessage()

console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.getPuzzle()
    guessesEl.textContent = game1.getStatusMessage()
})