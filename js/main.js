/*
var christiethehutt = new Evildoer("Christie the Hutt");

var princess = new Object();
princess.name = "Princess Hillarleia";
princess.free = false;

var voter = new Object();

//Evaluates whether you beat Pence and freed princess//
darthtrump.showdown = function() {
if (princess.free === true){
	alert("Darth Trump appears breathing heavily (He just walked up 48 flights of steps because the elevators broke at Trump Towers). He issues a challenge: Convince a Trump supporter of his choosing to switch to Hillarleia, and he will drop out of the election. Click OK or hit return to begin.");
	darthtrump.finalchallenge();
}
	else {
var random = Math.floor((Math.random() * 10) + 1);
if (random < 6) {
	alert("Darth Trump appears breathing heavily (He just walked up 48 flights of steps because the elevators broke at Trump Towers). He issues a challenge: Convince a Trump supporter of his choosing to switch to Hillarleia, and he will drop out of the election. He also will set the princess free. Click OK or hit return to begin. ");
	darthtrump.finalchallenge();
}
else {
	alert("Darth Trump appears breathing heavily (He just walked up 48 flights of steps because the elevators broke at Trump Towers). He chooses not to free the princess, even if you convince a Trump supporter not to vote for him. So you lose. GAME OVER. ")
	}
	
};
};

//Executes the final challenge, calls the decides method
darthtrump.finalchallenge = function() {
	var argument = prompt("Trump plucks a supporter from the audience for the challenge. Now pick an argument to pursuade him to change his vote.\n A) Trump wants to pursue a trade policy that veers from globalization despite warnings from economists. \n B) Trump suggests using stop-and-frisk policing to address crime in cities despite it being ruled unconstitutional. \n C) Trump made fun of a beauty contestant.\n Choose A, B, or C")
if (argument === "A" || argument === "a" || argument === "B" || argument === "b" || argument === "C" || argument === "c") {
	if (voter.decides()) {
		alert("The Trump supporter likes your argument. YOU WIN!!!!");
		newGame();
		}
	else {
		alert("Once a Trumper, always a Trumper. YOU LOSE!!!");
		newGame();
	}
		}
else {
	alert("Please enter A, B, or C without characters or spaces, Young Jedi.");
	darthtrump.finalchallenge();
	}
	};

//Decides whether you convince voter switch
voter.decides = function() {
	var decider = Math.floor((Math.random() * 10) + 1);
	if (decider > 5){
		return true;
	}
	else {
		return false;
	}
	
};

*/
var keepfighting = true; 
$(document).ready(function(){

function Evildoer(name) {
this.name = name;
};

var darthpence = new Evildoer("Darth Pence");
var darthtrump = new Evildoer("Darth Trump");

//asks player if he'll fight; initiates the duel
darthpence.fightsyou = function(){
$("#radio3, #radio4").click(function(){
//PLAYER PICKS Y
if(radio('radio3')) {
$('#text2').hide();
fightoutcome();
}
//PLAYER PICKS N*********
else {
$('#text2').hide();
$('#text6').fadeIn(4000);
darthtrump.showdown();
}
});
};

//returns true or false based on button chosen
var radio = function(key){
var buttonId = key;
var x = document.getElementById(buttonId).checked;
if(x){
return true;
}
else {
return false;
}
};

//LAUNCHES GAME, TELLS YOU MAIN PLOT
function newGame () {
$("#radio1, #radio2").click(function(){
if (radio('radio1')) {
$('#text1').hide();
$('#text2').fadeIn(4000);
darthpence.fightsyou();
}
else  {
alert("OK, Click refresh when you are ready, Young Jedi.");
}
});
};

//calls randomizer, tells you if you won, lost, have option to retreat (calls fightorflight())
var fightoutcome = function(){
while(keepfighting){
document.getElementById("radio5").checked = false;
var number = randomizer();
//PLAYER LOSES DUEL
if (number < 4){
keepfighting = false;
playerloses();
}
//PLAYER WINS DUEL
else if (number > 3  && number < 8) {
$('#text4').fadeIn(4000);
//princess.free = true;
keepfighting = false;
$('#button').click(function(){
$('#text4').hide("explode");
//darthtrump.showdown();
});
}
//PLAYER GIVEN OPTION TO RETREAT
else {
$('#text5').fadeIn(4000);
keepfighting = false;
}
};
$("#radio5, #radio6").click(function(){
//START HERE Will radio button reflect correct value if called twice?
keepfighting = fightorflight();
fightoutcome();
});
};

//darthtrump.showdown = function(){};

//code to pick random number, returns it to fightoutcome function,
var randomizer = function() {
return Math.floor((Math.random() * 10) + 1);
};
var playerloses = function() {
$('#text3').fadeIn(4000);
};

//returns true or false to fightoutcome based on whether player chooses to keep fighting
var fightorflight = function() {
if(radio('radio5')){
$('#text5').hide();
return true;
}
else {
$('#text5').hide();
$('#text6').fadeIn(4000);
return false;
}
}; 

newGame();
});


