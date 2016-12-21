var attacksWaged;
var playerSelected;
var player;
var enemies;
var characters = [];
var defender;

//clickfunctions
function clickLuke(){
		if (!playerSelected) {
				$('#Luke').addClass('selected');
				$('#Luke').removeClass('imgHolder');
				player = characters[0];
				setupEnemies(0);
				playerSelected = true;
				$("#yourChar").text("Your Character:");
		}
		else if (playerSelected && !defender) {
			setDefender('Luke');
			console.log('luke defender');
			}
}

function clickHan(){
	if (!playerSelected) {
		$('#Han').addClass('selected');
		$('#Han').removeClass('imgHolder');
		player = characters[1];
		setupEnemies(1);
		playerSelected = true;
		$("#yourChar").text("Your Character:");
	}
	if (playerSelected && !defender) {
		setDefender('Han');
		console.log('Han');
	}
}

function clickPalpatine(){
	if (!playerSelected) {
		$('#Palpatine').addClass('selected');
		$('#Palpatine').removeClass('imgHolder');
		player = characters[2];
		setupEnemies(2);
		playerSelected = true;
		$("#yourChar").text("Your Character:");
	}
	if (playerSelected && !defender) {
		setDefender('Palpatine');
		console.log('Palpatine');
	}
}

function clickVader(){
	if (!playerSelected) {
		$('#vader').addClass('selected');
		$('#vader').removeClass('imgHolder');
		player = characters[3];
		setupEnemies(3);
		playerSelected = true;
	}
	if (playerSelected && !defender) {
		setDefender('vader');
		console.log('vader');
	}
}

//asetup restart further, fix defender.cap error

function setupGame(){
	console.log('restart');
	attacksWaged = 0;
	playerSelected = false;
	characters =[];
	enemies = [];
	defender = null;
	//adding character objects to array
	characters.push(new Character(0, 'Luke', 150, 20, 10));
	characters.push(new Character(0, 'Han', 160, 11, 12));
	characters.push(new Character(0, 'Palpatine', 180, 15, 18));
	characters.push(new Character(0, 'vader', 200, 12, 35));
}

function resetDivs(){
	$('#top').html('<div id="Luke" class="imgHolder" >		<h2><span class = "charName">Luke Skywalker</span></h2>	  	<img class="character" src="assets/images/oldLuke.png" alt="Luke">	  	<h2><span id = "LukeHP" class = "charHP">150</span></h2>	</div>	<div class = "imgHolder" id = "Han">		<h2><span class = "charName">Han Solo</span></h2>	  	<img class="character" src="assets/images/hanSolo.jpg" alt="Han Solo">	  	<h2><span id = "HanHP" class = "charHP">160</span></h2>	</div>	<div class = "imgHolder" id = "Palpatine">		<h2><span class = "charName" >Emperor Palpatine</span></h2>	  	<img class="character" src="assets/images/palpatine.png" alt="Palpatine">	  	<h2><span id = "PalpatineHP" class = "charHP">180</span></h2>	</div>	<div class = "imgHolder" id = "vader">		<h2><span class = "charName">Darth vader</span></h2>	  	<img class="character" src="assets/images/vader.jpg" alt="vader">	  	<h2><span id ="vaderHP" class = "charHP">200</span></h2>	</div>');
	

	//Luke.addEventListener('click', lukeClick)

	$("#Luke").click(function() {
	clickLuke();
	});

	$("#Han").click(function() {
	clickHan();
	});	

	$("#Palpatine").click(function() {
	clickPalpatine();
	});

	$("#vader").click(function() {
	clickVader();
	});		

	setupGame();

	$('#bottom').html("");
	$('#defenderDiv').html("");
	$('#attackInfo').html("");
}

function Character(id, name, hp, ap, cap) {
	this.id = id;
	this.name = name;
	this.hp = hp;
	this.ap = ap;
	this.cap = cap;
}




$(document).ready(function() {


//Event listeners for Characters 
$("#Luke").click(function() {
	clickLuke();
	});


$("#Han").click(function() {
	clickHan();
});

$("#Palpatine").click(function() {
	clickPalpatine();
});

$("#vader").click(function() {
	clickVader();
});

//listener for buttons

$('#restartBtn').click(function () {
	resetDivs();
	$('#restartBtn').addClass('invisible');
});


$('#attackButton').click(function attack(){
	var currentAttack;
	if(!defender){
		$('#attackInfo').text("No defender selected.");
	}
	else if ((player.hp > 0) && (defender.hp > 0) && defender) {
		attacksWaged += 1;
		currentAttack = player.ap * attacksWaged;
		defender.hp = defender.hp - currentAttack;
		player.hp = player.hp - defender.cap;
		updateDisplay();
		updateStory(currentAttack, defender.cap);
		console.log("attack");
	}
});

});

function lose() {

}

function slain() {
	$('#defenderDiv').text("");
	var s = "You have defeated " + defender.name + ". Select your next foe.";
	$('#attackInfo').html(s);
	defender = null;

	//change div to you win
	if (enemies.length === 0) {
		$('#attackInfo').html('you win!!!!!!');
		$('#restartBtn').removeClass('invisible');
	}
}


//you attacked player for x damage, defender attacked you for x damage
function updateStory(x, y) {
	var s = "You attacked " + defender.name + " for " + x + " damage. <br>" + defender.name + " attacked you for " + y + " damage.";
	$('#attackInfo').html(s);
}


//updates hp's after attack
function updateDisplay() {
	var p = "#" + player.name + "HP";
	var d = "#" + defender.name + "HP";
	if (defender.hp > 0){
		$(p).text(player.hp);
	}
	$(d).text(defender.hp);
	if (player.hp <= 0) {
		lose();
	}
	if (defender.hp <= 0) {
		slain();
	}
}



function setupEnemies(x) {
	var div;
	characters.splice(x, 1);
	enemies = characters;
	for (i in enemies) {
		div = "#" + enemies[i].name;
		$(div).appendTo(bottom);
	}
}

function setDefender(defenderName) {
	var div;
    for(i in enemies) {
        if(enemies[i].name === defenderName){
            div = "#" + enemies[i].name;
			$(div).appendTo(defenderDiv);
			$(div).removeClass('imgHolder');
			$(div).addClass('selected');
			defender = enemies[i];
			enemies.splice(i, 1);
			console.log('defender ran, found name ' + defenderName);
        }
    }
}

setupGame();









