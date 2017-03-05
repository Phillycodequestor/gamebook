$(document).ready(function(){
var openingText = "Choose whether the following statements made by Donald Trump are true or false. Two right out of three wins."
document.getElementById("text1").innerHTML = openingText;
$('#button1').css({display: "block"});

//Show true and false buttons
$('#button1').click(function(){
$(this).hide(function(){
$('#button2, #button3').css({display:"block"});
displayStatement();
});
});

//START need code to stop asking questions at 3

//constructor for false statement objects
function falseStatement(text, answer, value){
this.text = text;
this.answer = answer;
this.accuracy = value;
};

var statement = [];

statement[0] = new falseStatement("'As secretary of state, Hillary Clinton allowed thousands of criminal aliens to be released because their home countries wouldn’t take them back.' ... 10.21.2016", "A 2001 Supreme Court decision required these people to be released if their home countries wouldn’t take them back. While some critics believe the Bush and Obama administration should have done more to pressure these countries, it wasn’t Clinton’s optional decision to release them.", false);

statement[1] = new falseStatement("Hillary Clinton laughed at a 12-year-old rape victim: 'Her client she represented, (she) got him off and she's seen laughing at the girl who was raped.'","Clinton laughed at various points of a 1980s interview about the case – but never at the victim. For example, she said that her client had passed a polygraph lie test, and she added, with a laugh, 'which forever destroyed my faith in polygraphs.'", false);

statement[2] = new falseStatement("this is 3","ok",false);
statement[3] = new falseStatement("this is 4","ok",false);
statement[4] = new falseStatement("this is 5","ok",false);
statement[5] = new falseStatement("this is 6","ok", true);
statement[6] = new falseStatement("this is 7","ok",true);
statement[7] = new falseStatement("this is 8","ok",true);
statement[8] = new falseStatement("this is 9","ok",true);
statement[9] = new falseStatement("this is 10","ok",true);
//calls randomizer to select a statement
var i
var displayStatement = function(){
i = randomizer();
document.getElementById("text1").innerHTML = statement[i].text;
};
/////////////////////////////////////////////

//when button clicked, evaluates truthfulness of question
$("#button2").click(function(){
trueTest(true);
});
$("#button3").click(function(){
trueTest(false);
});

var trueTest = function(answer){
if(answer === statement[i].accuracy){
confirm("that's right");
}
else{
confirm("that's wrong");
}
};
///////////////////////////////////////////

var randomizer = function() {
return Math.floor((Math.random() * 10) + 1);
};

});


