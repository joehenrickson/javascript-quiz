

var questions = [{
    question: "Commonly used datatypes DO NOT include _______.", 
    answers: ["A. Strings", "B. Booleans", "C. Alerts", "D. Numbers"],
    correctAnswer: "C. Alerts"
},
{
    question: "The condition in an if/else statement is enclosed with __________.",
    answers: ["A. Quotes", "B. Curly Brackets", "C. Parenthesis", "D. Square Brackets"],
    correctAnswer: "C. Parenthesis"
},
{
    question: "Arrays in Javascript can be used to store ________.",
    answers: ["A. Numbers and Strings", "B. Other Arrays", "C. Booleans", "D. All of the Above"],
    correctAnswer: "D. All of the Above"
},
{
    question: "String values must be enclosed within __________ when being assigned to variables.",
    answers: ["A. Commas", "B. Curly Brackets", "C. Quotes", "D. Parenthesis"],
    correctAnswer: "C. Quotes"
},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is _________",
    answers: ["A. Javascript", "B. Terminal/Bash", "C. for loops", "D. console log"],
    correctAnswer: "D. console log"
}
];

function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "Time: " + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

document.getElementById("pull").onclick = function () {
    document.getElementById("remove").remove();

    var div = document.createElement('div');
    div.classList.add('question')
       div.innerHTML = "<h1>Commonly used data types DO NOT include...</h1>" 
       document.getElementsByTagName('body')[0].appendChild(div);

    var ul = document.createElement('ul');
    ul.classList.add('multChoice')
    ul.innerHTML = 
    "<li>Strings</li><li>Booleans</li><li>Alerts</li><li>Numbers</li>"
    document.getElementsByTagName('div')[0].appendChild(ul);
    var sixtySeconds = 60,
        display = document.querySelector('#timer');
    startTimer(sixtySeconds, display);

};




  