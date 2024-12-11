// Variables for the game
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// HTML elements
const guessInput = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitBtn');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const resetBtn = document.getElementById('resetBtn');

// Event listener for the guess button
submitBtn.addEventListener('click', () => {
  const userGuess = parseInt(guessInput.value);
  
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = 'Please enter a valid number between 1 and 100.';
    return;
  }

  attempts++;
  attemptsDisplay.textContent = `Attempts: ${attempts}`;

  if (userGuess === randomNumber) {
    message.textContent = `Congratulations! You guessed the correct number: ${randomNumber}.`;
    message.style.color = 'green';
    gameOver();
  } else if (userGuess < randomNumber) {
    message.textContent = 'Too low! Try again.';
    message.style.color = 'orange';
  } else {
    message.textContent = 'Too high! Try again.';
    message.style.color = 'orange';
  }
});

// Event listener for the reset button
resetBtn.addEventListener('click', () => {
  resetGame();
});

// Function to end the game
function gameOver() {
  guessInput.disabled = true;
  submitBtn.disabled = true;
  resetBtn.classList.remove('hidden');
}

// Function to reset the game
function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  attemptsDisplay.textContent = `Attempts: 0`;
  message.textContent = '';
  guessInput.value = '';
  guessInput.disabled = false;
  submitBtn.disabled = false;
  resetBtn.classList.add('hidden');
}
