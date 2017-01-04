//next: why isn't the callback working?

//$('.container').css({opacity: 0, display: 'flex'}).animate({opacity: 1}, 1000);


/*
function Evildoer(name) {
this.name = name;
}

var darthtrump = new Evildoer("Darth Trump");
var darthpence = new Evildoer("Darth Pence");
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
$(document).ready(function(){

function Evildoer(name) {
this.name = name;
}
var darthpence = new Evildoer("Darth Pence");

//CHALLENGES YOU TO FIGHT DARTH PENCE
darthpence.fightsyou = function() {
	
$(document).keydown(function(event){
	if(event.which === 89) {
		//START HERE: WHY TEXT FADING IN AT THE END
		$('#text2').css("display", "none");
	var fighting = true;
	while (fighting){
		var number = Math.floor((Math.random() * 10) + 1);
		if (number < 4){
			$('#text3').delay(800).fadeIn(1000);
			fighting = false;
			}
		else if (number > 3  && number < 8) {
			
			$('#text4').delay(800).fadeIn(1000);
		
			//princess.free = true;
			fighting = false;
			//darthtrump.showdown();
												} 
		
		//gives you option to retreat
			else {
			
			$('#text5').delay(800).fadeIn(1000);
		   

			var fightprogresses = true;
			while(fightprogresses){
			
			$(document).keydown(function(event){
				if(event.which === 89){
				$('#text5').delay(800).fadeOut(1000);
				fightprogresses = false;
				
				}
			
			else if (event.which === 78) {
				fightprogresses = false;
				fighting = false;
			$('#text6').delay(800).fadeIn(1000);
//THESE NEED TO RETURN//darthtrump.showdown();
			}
			else {
				alert("You must answer Y or N.")
				}

			});
			};

			}

};					
}	
	
	
//if player chooses not to fight Pence
	else if (event.which === 78) {
			fighting = false;
			$('#text6').delay(800).fadeIn(1000);
			//darthtrump.showdown();
	}

	else {
		alert("You must answer Y or N.");
		//darthpence.fightsyou();
	}

});
};

										
//LAUNCHES GAME, TELLS YOU MAIN PLOT
function newGame () {

	$('#text1').fadeIn(1000);
	$(document).keydown(function(event){
	if (event.which === 89) {
	$('#text1').fadeOut(1000, function(){
	$('#text2').delay(800).fadeIn(1000);
});
	darthpence.fightsyou();
	
	}
	else if (event.which === 78) {
	alert("OK, Click refresh when you are ready, Young Jedi.");
	}
	else {
	alert("You must answer Y or N. Try again.")
	newGame();
	}
});
};

newGame();

});


