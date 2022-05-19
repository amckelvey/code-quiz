// Dependencies
var promptDiv = document.getElementById("prompt");
var startButton = document.getElementById("start");
var timerElement = document.getElementById("timer");
var quizDiv = document.getElementById("quiz");
var questionH1 = document.getElementById("question-holder");
var answerButton1 = document.getElementById("answer1-button");
var answerButton2 = document.getElementById("answer2-button");
var answerButton3 = document.getElementById("answer3-button");
var answerButton4 = document.getElementById("answer4-button");

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
for (i = 0; i < quizQuestions.length; i++) {
    
}

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


function runQuiz(e) {
  e.preventDefault();
    //hide the prompt
    timerUpdate();
    
    //did they choose correctly?
    //did they chose incorrectly?
    //if they chose incorrectly decrement remaining time
    //if they answered correctly display next question
    //when questions run out log the time left as their score
    //store intitials and score to localStorage
};

// User Interactions
startButton.addEventListener("click", runQuiz);

// Initialize
