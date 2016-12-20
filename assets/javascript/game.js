var attacksWaged;
var playerSelected;
var player;
var enemies;
var characters = [];
var defender;



function setupGame(){
	attacksWaged = 0;
	playerSelected = false;
	characters =[];
	enemies = [];
	defender = null;
	//adding character objects to array
	characters.push(new Character(0, 'Luke', 150, 8, 10));
	characters.push(new Character(0, 'Han', 160, 9, 12));
	characters.push(new Character(0, 'Palpatine', 180, 15, 18));
	characters.push(new Character(0, 'Vader', 200, 12, 35));
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

$("#Vader").click(function() {
	if (!playerSelected) {
		$('#Vader').addClass('selected');
		$('#Vader').removeClass('imgHolder');
		player = characters[3];
		setupEnemies(3);
		playerSelected = true;
	}
	if (playerSelected && !defender) {
		setDefender('Vader');
		console.log('Vader');
	}
});

//listener for buttons
$('#attackButton').click(function attack(){
	var currentAttack;
	if ((player.hp > 0) && (defender.hp > 0)) {
		attacksWaged += 1;
		currentAttack = player.ap * attacksWaged;
		defender.hp = defender.hp - currentAttack;
		player.hp = player.hp - defender.cap;
		updateDisplay();
		console.log("attack");
	}
});

function lose() {

}

function slain() {
	$('#defenderDiv').text("");
	defender = null;
}


//updates hp's after attack
function updateDisplay() {
	if (player.hp <= 0) {
		lose();
	}
	else if (defender.hp <= 0) {
		slain();
	}
	else if {
		var p = "#" + player.name + "HP";
		var d = "#" + defender.name + "HP";
		$(p).text(player.hp);
		$(d).text(defender.hp);
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
			console.log('defender ran, found name ' + defenderName);
        }
    }
}

setupGame();









