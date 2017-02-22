

/*
var princess = new Object();
princess.name = "Princess Hillarleia";
princess.free = false;

darthtrump.showdown = function() {
if (princess.free === true){
darthtrump.finalchallenge();
}
else {
Call randomizer here to determine if game will continue
}
};

//Executes the final challenge, calls the decides method
darthtrump.finalchallenge = function() {
May or may not need this
};

*/
 
$(document).ready(function(){
//Recalls fightoutcome if you don't retreat
$("#radio5").click(function(){
$('#text5').hide();
fightoutcome();
});
$("#radio6").click(function(){
$('#text5').hide();
$('#text6').fadeIn(4000);
});

//Constructor fo Evildoers
function Evildoer(name) {
this.name = name;
};
var darthpence = new Evildoer("Darth Pence");
var darthtrump = new Evildoer("Darth Trump");
//////////

//this code send a Question object to the fact function or alt fact function when button clicked to tell if question was fact or alt fact
$("#radio7").click(function(){
fact(qUestion);
});

function Question(accuracy){
this.accuracy = accuracy;
};

var qUestion = new Question(true);

var fact = function(question){
if(question === true){
var tally //START FIND SINTAX TO += VARIABLE
}
};
///////////////


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
document.getElementById("radio5").checked = false;
var number = randomizer();
//PLAYER LOSES DUEL
if (number < 4){
playerloses();
}
//PLAYER WINS DUEL
else if (number > 3  && number < 8) {
$('#text4').fadeIn(4000);
//princess.free = true;
$('#button1').click(function(){
$('#text4').hide("explode", {pieces: 64}, 600, function(){
$('#text8').fadeIn(10000);
});
});
$('#button2').click(function(){
$('#text8').hide("explode", {pieces: 64}, 600, function(){
$('#text9').fadeIn(10000);
});
});
}
//PLAYER GIVEN OPTION TO RETREAT
else {
$('#text5').fadeIn(4000);
}
};

//code to pick random number, returns it to fightoutcome function,
var randomizer = function() {
return Math.floor((Math.random() * 10) + 1);
};
var playerloses = function() {
$('#text3').fadeIn(4000);
};

newGame();
});


