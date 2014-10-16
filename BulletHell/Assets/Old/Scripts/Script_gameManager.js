#pragma strict

static var score: int;
static var lives: int;
static var level: int;
static var shield: boolean;
var powerup: GameObject;

function InitializeGame(){
	score = 0;
	lives = 3;
	level = 1;
	shield = false;
	
}


function Start () {
	InitializeGame();
}

function Update(){
	if(lives < 0){
		Script_gameState.state = GameState.GameOver;
	}
	
	if(Mathf.FloorToInt(Random.value * 10000) % 200 == 0){
		Instantiate(
					powerup,
					Vector3(Mathf.FloorToInt(Random.Range(-10, 0)),
						8, 0),
					Quaternion.identity
		);
	}
			
}

function OnGUI(){
	GUI.Box(Rect(10, 10, 90, 30), "Score: " + score);
	GUI.Box(Rect(Screen.width-100, 10, 90, 30), "Lives: " + lives);
	
	if(Script_gameState.state ==  GameState.PressStart){
		Debug.Log("StartingScreen");
		if(GUI.Button(Rect(Screen.width/2 - 150,
					    Screen.height/2 - 50,
					    300, 50),"Click Me to Start"))
		{
		Script_gameState.state = GameState.StartingPlay;
		}

	}
	
	if(Script_gameState.state ==  GameState.GameOver){
		if(GUI.Button(Rect(Screen.width/2 - 150,
					    Screen.height/2 - 50,
					    300, 50),"Game Over - Click to Play Again"))
		{
		InitializeGame();
		Script_gameState.state = GameState.StartingPlay;
		}

	}
	


}
