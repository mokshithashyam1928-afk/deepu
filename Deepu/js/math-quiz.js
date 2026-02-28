// ====================================
// MATH QUIZ LOGIC
// ====================================

let currentMathQuestion = 1;
let mathScore = 0;

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    initializeMathQuiz();
});

function initializeMathQuiz() {
    // Add event listeners to all option buttons
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.addEventListener('click', handleMathAnswer);
    });
}

function handleMathAnswer(e) {
    const selectedButton = e.currentTarget;
    const isCorrect = selectedButton.getAttribute('data-answer') === '1';
    const errorMessage = document.getElementById(`error-math-${currentMathQuestion}`);
    
    if (isCorrect) {
        // Disable all buttons
        const allButtons = document.querySelectorAll(`#math-question-${currentMathQuestion} .option-btn`);
        allButtons.forEach(btn => {
            btn.style.pointerEvents = 'none';
        });
        
        // Highlight selected answer
        selectedButton.classList.add('selected');
        
        // Hide error message if shown
        if (errorMessage) {
            errorMessage.style.display = 'none';
            errorMessage.textContent = '';
        }
        
        // Update score
        mathScore++;
        
        // Move to next question or show result
        setTimeout(() => {
            if (currentMathQuestion < 3) {
                showMathQuestion(currentMathQuestion + 1);
            } else {
                showMathQuizResult();
            }
        }, 1000);
    } else {
        // Show error message
        if (errorMessage) {
            errorMessage.textContent = 'It is wrong, try again!';
            errorMessage.style.display = 'block';
        }
        
        // Briefly highlight wrong answer
        selectedButton.classList.add('selected');
        setTimeout(() => {
            selectedButton.classList.remove('selected');
        }, 500);
    }
}

function showMathQuestion(questionNumber) {
    // Hide all questions
    document.querySelectorAll('.quiz-question').forEach(q => {
        q.classList.remove('active');
    });
    
    // Show target question
    const targetQuestion = document.getElementById(`math-question-${questionNumber}`);
    if (targetQuestion) {
        currentMathQuestion = questionNumber;
        targetQuestion.classList.add('active');
    }
}

function showMathQuizResult() {
    // Hide all questions
    document.querySelectorAll('.quiz-question').forEach(q => {
        q.classList.remove('active');
    });
    
    // Show result
    const result = document.getElementById('mathQuizResult');
    if (result) {
        result.classList.remove('hidden');
        result.classList.add('active');
        createConfetti();
    }
}

// ====== CONFETTI ANIMATION ======
function createConfetti() {
    const container = document.getElementById('confettiContainer') || document.body;
    const confettiPieces = 50;
    const colors = ['#d946a6', '#9333ea', '#ffc0cb', '#ffd6e8', '#fff9e6'];
    
    for (let i = 0; i < confettiPieces; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.top = '-10px';
        confetti.innerHTML = ['🎉', '🎊', '💖', '✨', '🎈'][Math.floor(Math.random() * 5)];
        confetti.style.fontSize = (Math.random() * 20 + 15) + 'px';
        confetti.style.animation = `fallDown ${Math.random() * 3 + 2}s ease-in forwards`;
        
        container.appendChild(confetti);
        
        // Remove after animation
        setTimeout(() => confetti.remove(), 5000);
    }
}
