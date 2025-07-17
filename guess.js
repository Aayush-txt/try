let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guesses = [];

function makeguess() {
    const input = document.getElementById('getinput');
    const guess = parseInt(input.value);
    const answer = document.getElementById('answer');
    const attemptsDisplay = document.getElementById('attempts');

    if (isNaN(guess) || guess < 1 || guess > 100) {
        answer.textContent = 'Please enter a valid number between 1 and 100';
        answer.className = 'answer empty';
        return;
    }

    if (guesses.includes(guess)) {
        answer.textContent = 'You already guessed that number!';
        answer.className = 'answer empty';
    return;
    }

    attempts++;
    guesses.push(guess);
    attemptsDisplay.textContent = attempts;

            

    if (guess === secretNumber) {
        answer.textContent = `🎉 Congratulations! You guessed it in ${attempts} attempts!`;
        answer.className = 'answer correct';
        document.getElementById('inputbutton').disabled = true;
        input.disabled = true;
    } else if (guess < secretNumber) {
        answer.textContent = `📈 Too low! Try a higher number.`;
        answer.className = 'answer low';
    } else {
        answer.textContent = `📉 Too high! Try a lower number.`;
        answer.className = 'answer high';
    }

    input.value = '';
    input.focus();
}
