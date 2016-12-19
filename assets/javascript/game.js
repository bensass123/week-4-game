var attacksWaged;
var playerSelected;
var player;
var enemies;
var characters = [];
var noDefender;
var defender;


function setupGame(){
	attacksWaged = 0;
	playerSelected = false;
	noDefender = true;
}

function Character(id, name, hp, ap, cap) {
	this.id = id;
	this.name = name;
	this.hp = hp;
	this.ap = ap;
	this.cap = cap;
}



//adding character objects to array
characters.push(new Character(0, 'Luke', 150, 8, 10));
characters.push(new Character(0, 'Han', 160, 9, 12));
characters.push(new Character(0, 'Palpatine', 180, 15, 18));
characters.push(new Character(0, 'Vader', 200, 12, 35));





//Event listeners for Characters 
$("#Luke").click(function() {
	if (!playerSelected) {
		$('#Luke').addClass('selected');
		$('#Luke').removeClass('imgHolder');
		player = characters[0];
		setupEnemies(0);
		playerSelected = true;
	}
	if (playerSelected && noDefender) {
		setDefender('Luke');
	}
});

$("#Han").click(function() {
	if (!playerSelected) {
		$('#Han').addClass('selected');
		$('#Han').removeClass('imgHolder');
		player = characters[1];
		setupEnemies(1);
		playerSelected = true;
	}
	if (playerSelected && noDefender) {
		setDefender('Han');
	}
});

$("#Palpatine").click(function() {
	if (!playerSelected) {
		$('#Palpatine').addClass('selected');
		$('#Palpatine').removeClass('imgHolder');
		player = characters[2];
		setupEnemies(2);
		playerSelected = true;
	}
	if (playerSelected && noDefender) {
		setDefender('Palpatine');
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
	if (playerSelected && noDefender) {
		setDefender('Vader');
	}
});

function setupEnemies(x) {
	var div;
	characters.splice(x, 1);
	enemies = characters;
	for (i in enemies) {
		div = "#" + enemies[i].name;
		$(div).appendTo(bottom);
	}
}

function setDefender(defender) {
	var div;
    for(i = 0; i < enemies.length; i++) {
        if(enemies[i].name === defender) {
            div = "#" + defender;
			$(div).appendTo(defender);
			defender = enemies[i];
        }
    }
}

setupGame();









