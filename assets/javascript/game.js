var attacksWaged;
var playerSelected;
var player;
var enemies;
var characters = [];
var defender;

//asetup restart further, fix defender.cap error

function setupGame(){
	console.log('restart');
	attacksWaged = 0;
	playerSelected = false;
	characters =[];
	enemies = [];
	defender = null;
	//adding character objects to array
	characters.push(new Character(0, 'Luke', 150, 8, 10));
	characters.push(new Character(0, 'Han', 160, 11, 12));
	characters.push(new Character(0, 'Palpatine', 180, 15, 18));
	characters.push(new Character(0, 'vader', 200, 12, 35));
}

function Character(id, name, hp, ap, cap) {
	this.id = id;
	this.name = name;
	this.hp = hp;
	this.ap = ap;
	this.cap = cap;
}


//Event listeners for Characters 
$("#Luke").click(function() {
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
});

$("#Han").click(function() {
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
});

$("#Palpatine").click(function() {
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
});

$("#vader").click(function() {
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
});

//listener for buttons

$('#restartBtn').click(function () {
	setupGame();
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









