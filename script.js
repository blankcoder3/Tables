const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const feedbackElement = document.getElementById('feedback');

let currentQuestion = {};

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 29) + 2; // Random number from 2 to 30
    const num2 = Math.floor(Math.random() * 10) + 1; // Random number from 1 to 10
    currentQuestion = {
        num1: num1,
        num2: num2,
        answer: num1 * num2
    };
    questionElement.textContent = `What is ${num1} x ${num2}?`;
    answerElement.value = '';
    feedbackElement.textContent = '';
}

function checkAnswer() {
    const userAnswer = parseInt(answerElement.value);
    if (userAnswer === currentQuestion.answer) {
        feedbackElement.textContent = 'Correct!';
        setTimeout(generateQuestion, 1000); // Move to next question after 1 second
    } else {
        feedbackElement.textContent = `Incorrect! The correct answer is ${currentQuestion.answer}.`;
        setTimeout(generateQuestion, 2000); // Move to next question after 2 seconds
    }
}

// Event listener for the submit button
submitButton.addEventListener('click', checkAnswer);

// Event listener for the Enter key
answerElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

// Start the quiz
generateQuestion();
