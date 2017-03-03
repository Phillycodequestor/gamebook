$(document).ready(function(){
var openingText = "Choose whether the following statements made by Donald Trump are true or false. Two right out of three wins."
document.getElementById("text1").innerHTML = openingText;
$('#button1').css({display: "block"});

$('#button1').click(function(){
document.getElementById("text1").innerHTML = statement[1].text;
$(this).hide(function(){
	$('#button2, #button3').css({display:"block"});
});
});

//constructor for statement objects
function falseStatement(text,answer){
this.text = text;
this.answer = answer;
this.accuracy = false;
};

var statement = [];

statement[0] = new falseStatement("'As secretary of state, Hillary Clinton allowed thousands of criminal aliens to be released because their home countries wouldn’t take them back.' ... 10.21.2016", "A 2001 Supreme Court decision required these people to be released if their home countries wouldn’t take them back. While some critics believe the Bush and Obama administration should have done more to pressure these countries, it wasn’t Clinton’s optional decision to release them.");

statement[1] = new falseStatement("Hillary Clinton laughed at a 12-year-old rape victim: 'Her client she represented got him off and she's seen laughing at the girl who was raped.'","Clinton laughed at various points of a 1980s interview about the case – but never at the victim. For example, she said that her client had passed a polygraph lie test, and she added, with a laugh, 'which forever destroyed my faith in polygraphs.'");

//START create 6 false states and put in array

//this code sends a Question object to the fact function or alt fact function when button clicked to tell if question was fact or alt fact
/*
$("#radio7").click(function(){
fact(qUestion1);
});

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

//newGame();
});


