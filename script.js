var questionBox = document.querySelector("#question")



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
console.log(questions[1].question)
// questionBox.innerHTML = questions[1].question



// make a variable for the start button. 
// Then we need to add an event listener to this button. 
// Write a function that this add event listener calls.

var startButton = "start";
function keydownAction()