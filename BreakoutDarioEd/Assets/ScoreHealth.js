#pragma strict

static var score: int;
static var lives: int;

function Start () {
	score = 0;
	lives = 3;
}

function OnGUI () {	
	GUI.Box(Rect(10,Screen.height - 40,90,30), "Score: "+score);
	GUI.Box(Rect(Screen.width - 100, Screen.height - 40, 90, 30), "Lives: "+lives);
}

function Update(){
	if(lives <1){
        Application.LoadLevel (2);
	}
}