// Dependencies
var quizDiv = document.getElementById("#quiz");
var startButton = docuement.getElementById("#start");


// State
var timeLeft = 75;
var quizQuestions = [
    {
      question: "Commonly used data types do NOT include:",
      answers: {
        a: "strings",
        b: "booleans",
        c: "alerts",
        d: "numbers"
      },
      correctAnswer: "c"
    },
    {
      question: "The conditions in an if/else statement are enclosed within?",
      answers: {
        a: "quotes",
        b: "curly brackets",
        c: "parenthesis",
        d: "square brackets"
      },
      correctAnswer: "c"
    },
    {
      question: "Arrays in JavaScript can be used to store:",
      answers: {
        a: "numbers and strings",
        b: "other arrays",
        c: "booleans",
        d: "All of the above"
      },
      correctAnswer: "d"
    }
  ];


// Functions
function runQuiz() {
    //start timer
    //choose a question to ask user
    //did they choose correctly?
    //did they chose incorrectly?
    //if they chose incorrectly decrement remaining time
    //if they answered correctly display next question
    //when questions run out log the time left as their score
    //store intitials and score to localStorage
}

// User Interactions
buttonElement.addEventListener('click', runQuiz);

// Initialize
