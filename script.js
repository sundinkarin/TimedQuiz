var questionBox = document.querySelector("#question")

var currentQuestion = 0

var answers = document.querySelector(".option")
function checkAnswer() {
    console.log("check answer worked.")

    callNextQuestion()
}
// for (var i = 0; i < answers.length; i++) {
answers.addEventListener("click", checkAnswer)
// }

var questions = [
    {
        question: "Which is not a primitive data type?",
        answers: ["number", "string", "Boolean", "object"],
        correctAnswer: "object"
    },
    {
        question: "How do you define a variable?",
        answers: ["var", "=", "true", "div"],
        correctAnswer: "var"
    },
    {
        question: "What is not a mouse event?",
        answers: ["mousedown", "multiple", "mouseover", "mouseout"],
        correctAnswer: "multiple"
    },
    {
        question: "How do you define an object?",
        answers: ["()", "<>", "{}", "[]"],
        correctAnswer: "[]"
    },
    {
        question: "Why are arrays used?",
        answers: ["data storage", "unrelated objects", "for complexity", "mouseout"],
        correctAnswer: "data storage"
    },
    {
        question: "How are loops used?",
        answers: ["Loops check a condition.", "runs only once", "not recommended", "logical operator"],
        correctAnswer: "Loops check a condition."
    },
    {
        question: "What lets you group a series of statements to perform a specific task?",
        answers: ["loops", "functions", "object", "statement"],
        correctAnswer: "functions"
    },
    {
        question: "What is another name for Local and Global Variables?",
        answers: ["data", "loops", "arrays", "scope"],
        correctAnswer: "scope"
    },
]
console.log(questions[0].question)




// make a variable for the start button. 
// Then we need to add an event listener to this button. 
// Write a function that this add event listener calls.

var startButton = document.querySelector("#start")
var opt1 = document.querySelector("#op1")
var opt2 = document.querySelector("#op2")
var opt3 = document.querySelector("#op3")
var opt4 = document.querySelector("#op4")

startButton.addEventListener("click", callNextQuestion
);
function callNextQuestion() {
    console.log("button clicked!");




    // for (let i = 0; i < questions.length; i++) {
    questionBox.innerHTML = questions[currentQuestion].question
    opt1.innerHTML = questions[currentQuestion].answers[0]
    opt2.innerHTML = questions[currentQuestion].answers[1]
    opt3.innerHTML = questions[currentQuestion].answers[2]
    opt4.innerHTML = questions[currentQuestion].answers[3]

    currentQuestion++

    console.log(currentQuestion)
    // }

    finishGame()
    // currentQuestion = currentQuestion + 1
}
// setInterval(function () { element.innerHTML += "Hello" }, 1000);
function finishGame() {
    console.log("game finished");
}