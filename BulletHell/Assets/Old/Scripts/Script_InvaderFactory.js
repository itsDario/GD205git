#pragma strict

var invader: GameObject;

function Invade () {
	for(var i=0; i<12; i++){
		for(var j=0; j<6; j++){
			var pos = Vector2(i*2 - 11, j*1.5 - 1);
			var newInvader = Instantiate(invader, pos, Quaternion.identity);
		}
	}
}

function Update(){
	
	if(Script_gameState.state == GameState.StartingPlay){
		Invade();
		Script_gameState.state = GameState.GamePlay;
	}
}
		