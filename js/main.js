$(document).ready(function(){
var openingText = "Choose whether the following political claims are true or false. Two right out of three wins."
document.getElementById("text1").innerHTML = openingText;
$('#button1').css({display: "block"});

//Show true and false buttons call function to start play
$('#button1').click(function(){
$(this).fadeOut(800, function(){
$('#button2, #button3, #button4').css({display:"block"});
pickStatement();
$("#button4").prop('disabled', true);
});
});
/////////////////////////


//Next Button: Picks new statement when button clicked, ends game after 3 turns
$("#button4").click(function(){
if(used.length < 3){
pickStatement();
$("#button2, #button3").prop('disabled', false);
$("#button4").prop('disabled', true);
}
else {
endGame();
}
});

//START display score and outcome
var endGame = function() {
$('#button2, #button3, #button4, #box1').fadeOut(500, function(){
$("#box2").fadeIn(3000);
if(correct > 1){
document.getElementById("text2").innerHTML = "You got" + " " + correct + " " + "right. You win!";
}
else{
document.getElementById("text2").innerHTML = "You got" + " " + correct + " " + "right. You lose!";
}
});
};

//constructor for false statement objects
function falseStatement(text, answer, value){
this.text = text;
this.answer = answer;
this.accuracy = value;
};

var statement = [];
statement[0] = new falseStatement();
statement[1] = new falseStatement("Donald Trump: Hillary Clinton laughed at a 12-year-old rape victim: 'Her client she represented, (she) got him off and she's seen laughing at the girl who was raped.'","Clinton laughed at various points of a 1980s interview about the case – but never at the victim. For example, she said that her client had passed a polygraph lie test, and she added, with a laugh, 'which forever destroyed my faith in polygraphs.'", false);
statement[2] = new falseStatement("Donald Trump: As secretary of state, Hillary Clinton allowed thousands of criminal aliens to be released because their home countries wouldn’t take them back.", "A 2001 Supreme Court decision required these people to be released if their home countries wouldn’t take them back. While some critics believe the Bush and Obama administrations should have done more to pressure these countries, it wasn’t Clinton’s optional decision to release them.", false);
statement[3] = new falseStatement("Nancy Pelosi: No, we (Democrats) don’t get much support from Wall Street.","Democratic House and Senate candidates pulled down nearly $47 million from bankers, stockbrokers, hedge fund officials, venture capitalists and private equity firms in the last election alone, according to tallies by the Center for Responsive Politics.",false);
statement[4] = new falseStatement("this is 5","ok",false);
statement[5] = new falseStatement("Donald Trump: One-third of counties have only one insurer on Affordable Care Act exchanges.","Of the approximately 9.2 million people enrolled in the Affordable Care Act exchanges in 2017, about 1.9 million could only purchase insurance from one company", true);
statement[6] = new falseStatement("The president is exempt from Title 18 Section 208 of the U.S. code,  which says federal executive branch employees can’t participate in government matters in which they or their immediate family has a financial interest.","Many presidents in the past have put their assets in a blind trust, which is when an independent trustee manages another person’s assets without the person’s input.",true);
statement[7] = new falseStatement(" Hillary Clinton: [Donald Trump] used undocumented labor to build the Trump Tower. He underpaid undocumented workers, and when they complained, he basically said what a lot of employers do: ‘You complain, I'll get you deported.’ ","Between 1979 and 1980, Trump hired a contractor to demolish a Manhattan building to make way for the eventual Trump Tower. That contractor in turn hired local union workers as well as 200 undocumented Polish workers to meet the tight deadlines.",true);
statement[8] = new falseStatement("this is 9","ok",true);
statement[9] = new falseStatement("this is 10","ok",true);
statement[10] = new falseStatement("this is 11","ok",true);

//picks object index; filters repeat statements
var used = [];
var i;
var pickStatement = function(){
i = randomizer();
while(used.includes(i)){
i = randomizer();	
};
used.push(i);
displayStatement();
};

var displayStatement = function(){
document.getElementById("text1").innerHTML = statement[i].text;
};

//when button clicked, evaluates truthfulness of question
$("#button2").click(function(){
trueTest(true);
$("#button2, #button3").prop('disabled', true);
$("#button4").prop('disabled', false);
});
$("#button3").click(function(){
trueTest(false);
$("#button2, #button3").prop('disabled', true);
$("#button4").prop('disabled', false);
});

var correct = 0;
var trueTest = function(answer){
if(answer === statement[i].accuracy){
document.getElementById("text1").innerHTML = "That's correct!" + " " + statement[i].answer;
correct++;
}
else{
document.getElementById("text1").innerHTML = "That's incorrect" + " " + statement[i].answer;
}
};
///////////////////////////////////////////

var randomizer = function() {
return Math.floor((Math.random() * 10) + 1);
};

});


