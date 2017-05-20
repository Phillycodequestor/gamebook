//add a stopper when array gets full
$(document).ready(function(){

//Display introduction to game
var startGame = function (){
plays = 0;
var openingText = "Choose whether the following political claims are true or false. Two right out of three wins."
document.getElementById("text1").innerHTML = openingText;
$('#button1, h1, h3').toggle();
/////////////////////////
};

$('#button5').click(function(){
$(this).toggle();
plays = 0;
correct = 0;
if(used.length < 9){
startGame();
}
else {
	alert("We have run out of questions. Thanks for helping me test this prototype.");
}
});

//Show true and false buttons call function to start play
$('#button1').click(function(){
$(this).toggle()
$('h1, h3').toggle();
$('#button2, #button3').toggle();
pickStatement();
});
/////////////////////////


//Next Button: Picks new statement when button clicked, ends game after 3 turns
$("#button4").click(function(){
if(plays < 3){
pickStatement();
$("#button2, #button3").toggle();
$("#button4").toggle();
}
else {
endGame();
}
});

//display score and outcome
var endGame = function() {
$('#button4, #button5').toggle();
if(correct > 1){
document.getElementById("text1").innerHTML = "You got" + " " + correct + " " + "right. You win! <br /> <br /> Sources: " + "<a  target='_blank' href='http://factcheck.org'>factcheck.org,</a>" + " " + "<a target='_blank' href='http://politifact.com'>politifact.com,</a>" + " " + "<a target='_blank' href='https://www.thestar.com/news/world/uselection/2016/11/04/donald-trump-the-unauthorized-database-of-false-things.html#analysis'>The Toronto Star</a>";
}
else{
document.getElementById("text1").innerHTML = "You got" + " " + correct + " " + "right. You lose! <br /> <br /> Sources: " + "<a  target='_blank' href='http://factcheck.org'>factcheck.org,</a>" + " " + "<a target='_blank' href='http://politifact.com'>politifact.com,</a>" + " " + "<a target='_blank' href='https://www.thestar.com/news/world/uselection/2016/11/04/donald-trump-the-unauthorized-database-of-false-things.html#analysis'>The Toronto Star</a>";
}

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
statement[2] = new falseStatement("Donald Trump: As secretary of state, Hillary Clinton allowed thousands of criminal aliens to be released because their home countries wouldn’t take them back.", "A 2001 Supreme Court decision required these people to be released if their home countries wouldn’t take them back.", false);
statement[3] = new falseStatement("Nancy Pelosi: No, we (Democrats) don’t get much support from Wall Street.","Democratic House and Senate candidates pulled down nearly $47 million from bankers, stockbrokers, hedge fund officials, venture capitalists and private equity firms in the last election alone, according to tallies by the Center for Responsive Politics.",false);
statement[4] = new falseStatement("Donald Trump: How low has President Obama gone to tap my phones during the very sacred election process. This is Nixon/Watergate. Bad (or sick) guy!","This claim was based on news reports that in October the Foreign Intelligence Surveillance Court issued a warrant after evidence was presented of a server, possibly related to the Trump campaign, with alleged links to two Russian banks. Neither Trump nor his associates are named in the FISA order.",false);
statement[5] = new falseStatement("Donald Trump: One-third of counties have only one insurer on Affordable Care Act exchanges.","Of the approximately 9.2 million people enrolled in the Affordable Care Act exchanges in 2017, about 1.9 million could only purchase insurance from one company", true);
statement[6] = new falseStatement("The president is exempt from Title 18 Section 208 of the U.S. code,  which says federal executive branch employees can’t participate in government matters in which they or their immediate family has a financial interest.","Many presidents in the past have put their assets in a blind trust, which is when an independent trustee manages another person’s assets without the person’s input.",true);
statement[7] = new falseStatement(" Hillary Clinton: [Donald Trump] used undocumented labor to build the Trump Tower. He underpaid undocumented workers, and when they complained, he basically said what a lot of employers do: ‘You complain, I'll get you deported.’ ","Between 1979 and 1980, Trump hired a contractor to demolish a Manhattan building to make way for the eventual Trump Tower. That contractor in turn hired local union workers as well as 200 undocumented Polish workers to meet the tight deadlines.",true);
statement[8] = new falseStatement("Louisiana is losing a football field of land to the ocean every hour.","When scientists talk about land loss in Louisiana, they’re referring to the conversion of wetlands to open water. Before human interference, the interaction of natural processes led to a net increase of land in the region.",true);
statement[9] = new falseStatement("Former head of the U.S. Agency for International Development Raj Shah: Most U.S. foreign assistance no longer even goes to foreign governments. It is given to U.S. companies and nonprofits in the form of contracts and grants","The nonpartisan research arm of Congress reported in 2015 that only 4 percent of USAID assistance goes directly to foreign governments.",true);
statement[10] = new falseStatement("Donald Trump: In the first two job reports since I took the oath of office, we’ve already added nearly half a million new jobs.","The Bureau of Labor Statistics measures payrolls as of the week containing the 12th day of the month. Trump wasn’t sworn in until Jan. 20.",false);


/*
while(used.includes(i)){
i = randomizer();	
};
*/
//picks object index; filters repeat statements
var plays
var used = [];
var i;
var truth = true;
var pickStatement = function(){
while(truth){
i = randomizer();
for( var m = 0; m <= used.length; m++){
if(used[m] === i){
truth = true;
break;
}
else{
truth = false;
}
};
};
used.push(i);
truth = true;
plays++;
displayStatement();
};

var displayStatement = function(){
document.getElementById("text1").innerHTML = statement[i].text;
};

//when button clicked, evaluates truthfulness of question
$("#button2").click(function(){
trueTest(true);
$("#button2, #button3").toggle();
$("#button4").css({display: "block"});
});
$("#button3").click(function(){
trueTest(false);
$("#button2, #button3").toggle();
$("#button4").css({display: "block"});
});

var correct = 0;
var trueTest = function(answer){
if(answer === statement[i].accuracy){
document.getElementById("text1").innerHTML = "That's correct." + " " + "This claim is " + " " + statement[i].accuracy + "." + " " + statement[i].answer;
correct++;
}
else{
document.getElementById("text1").innerHTML = "That's incorrect." + " " + "This claim is " + " " + statement[i].accuracy + "." + " " + statement[i].answer; 
}
};
///////////////////////////////////////////

var randomizer = function() {
return Math.floor((Math.random() * 10) + 1);
};

startGame();
});


