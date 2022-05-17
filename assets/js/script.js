// Dependencies
var quizDiv = document.getElementById("#quiz");
var startButton = document.getElementById("#start");
var timerElement = document.getElementById("#timer")

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

  console.log(quizQuestions[0]);


// Functions
function timerUpdate() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timerElement.textContent = timeLeft + " seconds left.";

        if(timeLeft === 0) {
            clearInterval(timerInterval);
            //Call function here for gameOver
        }
    }, 1000);
}


function runQuiz() {
    //start timer
    timerUpdate();
    //choose a question to ask user
    
    //did they choose correctly?
    //did they chose incorrectly?
    //if they chose incorrectly decrement remaining time
    //if they answered correctly display next question
    //when questions run out log the time left as their score
    //store intitials and score to localStorage
};

// User Interactions
startButton.addEventListener('click', runQuiz);

// Initialize
