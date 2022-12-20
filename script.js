var questionBox = document.querySelector("#question")



var questions = [{
    question: "What are the primitive data types?",
    answers: ["Number, string, Boolean, undefined.", 15, 3, 8],
    correctAnswer: "Number, string, Boolean, undefined."
},
{
    question: "What is a variable?",
    answers: [5, 15, 3, "A place to store data that will change."],
    correctAnswer: "A place to store data that will change."
},
{
    question: "What is a mouse event?",
    answers: [5, 15, "Mousedown, mouseover, mouseout.", 8],
    correctAnswer: "Mousedown, mouseover, mouseout."
},
]
console.log(questions[1].question)
questionBox.innerHTML = questions[1].question

// make a variable for the start button. Then we need to add an event listener to this button. Write a function that this add event listener calls.