const quizData = [{
    question: "How many years to decompose glass?",
    a: "100",
    b: "30",
    c: "Inderminate Time",
    d: "10.000",
    correct: "c"

}, {
    question: "Which one was the first american president?",
    a: "Abraham Lincoln",
    b: "John Adans",
    c: "Millard Fillmore",
    d: "George W.",
    correct: "d"

}, {
    question: "What is the most used programming language in 2020?",
    a: "C++",
    b: "Python",
    c: "JS",
    d: "Java",
    correct: "b"

}, {
    question: "What is the most populos city in the world?",
    a: "Sao paulo",
    b: "Tokyo",
    c: "Shanghai",
    d: "Delhi",
    correct: "b"

}, {
    question: "What are the worst Star Wars movies?",
    a: "The Rise of Skywalker",
    b: "Solo: A Star Wars Story",
    c: "The Force Awakens",
    d: "The Phantom Menace",
    correct: "c"
}];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit")

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});