$(document).ready(function(){
var sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor, mi nec convallis sollicitudin, turpis arcu maximus odio, at gravida odio lorem id lacus. Etiam facilisis a lorem vel blandit. Cras consequat massa odio, non sagittis diam fringilla sit amet."
var openingText = "Choose whether the following statements made by Donald Trump are true or false. Two right out of three wins."
document.getElementById("text1").innerHTML = openingText;
$('#button1').css({display: "block"});

//START stop button from exit stage left
$('#button1').click(function(){
document.getElementById("text1").innerHTML = sampleText;
$(this).hide(function(){
	$('#button2, #button3').css({display:"block"});
});
});
//this code sends a Question object to the fact function or alt fact function when button clicked to tell if question was fact or alt fact
/*
$("#radio7").click(function(){
fact(qUestion1);
});

function Question(accuracy, text, answer){
this.accuracy = accuracy;
this.text = text;
this.answer = answer;
};

var trueQuestions = new Array();
trueQuestions[0] = new Question(true, "some text", "some text");
//use this line of code to insert text in the question box


//Tests whether question player answered true to actually is true
var fact = function(question){
if(question.accuracy === true){
}
};
///////////////
*/
//LAUNCHES GAME, TELLS YOU MAIN PLOT
function newGame () {

};

var randomizer = function() {
return Math.floor((Math.random() * 10) + 1);
};

newGame();
});


