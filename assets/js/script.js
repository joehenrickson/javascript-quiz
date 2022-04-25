
var start = document.querySelector("#start");
var quiz = document.querySelector("#quiz");
var display = document.querySelector('#time');
var question = document.querySelector("#question");
var answerA = document.querySelector("#A");
var answerB = document.querySelector("#B");
var answerC = document.querySelector("#C");
var answerD = document.querySelector("#D");
var scoreDiv = document.querySelector("#scoreContainer");
var leaderList = document.querySelector("#leaderboards");
var restart = document.querySelector("#restart");
var leaderboard = [];
var beginning;

var questions = [{
    question: "Commonly used datatypes DO NOT include _______.", 
    answerA : "Strings", 
    answerB : "Booleans", 
    answerC : "Alerts", 
    answerD : "Numbers",
    correct : "C"
},
{
    question: "The condition in an if/else statement is enclosed with __________.",
    answerA : "Quotes", 
    answerB : "Curly Brackets", 
    answerC : "Parenthesis", 
    answerD : "Square Brackets",
    correct : "C"
},
{
    question: "Arrays in Javascript can be used to store ________.",
    answerA : "Numbers and Strings", 
    answerB : "Other Arrays", 
    answerC : "Booleans", 
    answerD : "All of the Above",
    correct : "D"
},
{
    question: "String values must be enclosed within __________ when being assigned to variables.",
    answerA : "Commas", 
    answerB : "Curly Brackets",
    answerC : "Quotes", 
    answerD : "Parenthesis",
    correct : "C"
},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is _________",
    answerA : "Javascript", 
    answerB : "Terminal/Bash", 
    answerC : "for loops", 
    answerD : "console log",
    correct : "D" 
}
];

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let timerB;
let score = 0;
var timer;


// display a question
function displayQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    answerA.innerHTML = q.answerA;
    answerB.innerHTML = q.answerB;
    answerC.innerHTML = q.answerC;
    answerD.innerHTML = q.answerD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    runningQuestion = 0;
    count = 0;
    score = 0;
    displayQuestion();
    quiz.style.display = "block";
    

    
    startTimer(60, display);
}

// timer 
function startTimer(duration, display) {
    timer = duration;
    var seconds;

    beginning = setInterval(function () {
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;

        if (--timer <= 0) {
            clearInterval(beginning);
            timer = duration;
        }
    }, 1000);
}


// checkAnswer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        
    }else{
        // answer is wrong
        timer -= 10;
        
    }
    count = 0;
    runningQuestion++;
    if(runningQuestion < lastQuestion){
        displayQuestion();
    }else{
    
        clearInterval(timerB);
        scoreDisplay();
    }
}

// scoring
function scoreDisplay(){
    scoreDiv.style.display = "block";
    quiz.style.display = "none";
    clearInterval(beginning);
    
    const scorePerCent = Math.round(100 * score/questions.length);
    var userName = prompt("Enter your initials for the leaderboard.");
     
    leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
    if (!leaderboard){
        leaderboard = [];
    }

    leaderboard.push({name: userName, score: scorePerCent});

    leaderboard.sort(function(a, b) {
        return b.score - a.score;
      });

    for (var i = 0;i < leaderboard.length; i++){
        var player = leaderboard[i].name + ": " + leaderboard[i].score +"%";

        var li = document.createElement("li");
        li.textContent = player;
        leaderList.appendChild(li);
    }

    restart.addEventListener("click", function(){
        scoreDiv.style.display = "none";
        startQuiz();
        quiz.style.display = "block";
    })
   
    
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    
}






  