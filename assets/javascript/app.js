var number = 30;

var intervalId;

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

// Questions array
var questions = [{
    question: "Where is Fiona originally from?",
    answerList: ["Duloc", "Florin", "Mordor", "Far Far Away"],
    answer: 3
},{
    question: "What are you doing in my_____",
    answerList: ["Kingdom", "Swamp", "House", "Garden"],
    answer: 1
},{
    question: "Who is Donkey married to?",
    answerList: ["Dragon", "Mrs. Donkey", "Fiona", "Cercei Lanister"],
    answer: 0
},{
    question: "What's the name of the giant gingerbread man?",
    answerList: ["Bongo", "Congo", "Tango", "Mongo"],
    answer: 3
},{
    question: "Which of these characters is NOT a Shrek villain?",
    answerList: ["Lord Farquaad", "Prince Charming", "Puss", "Fairy Godmother"],
    answer: 2
},{
    question: "What animal did King Harold turn into?",
    answerList: ["Dragon", "Horse", "Sheep", "Frog"],
    answer: 3
},{
    question: "Which animation studio produced the Shrek movies?",
    answerList: ["Pixar", "DreamWorks", "Disney", "Sony"],
    answer: 3
}];

$("#start").on("click", function() {

    // Hide Start button
    $(this).hide();

    // Display initial time countdown
    $("#time").html("<h2>Time Remaining: 30 Seconds</h2>" + "<br>");

    // Start timer countdown
    run();
   
    