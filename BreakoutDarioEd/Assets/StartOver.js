#pragma strict

function Start () {

}

function Update () {
	startOver();
}

function startOver(){
	yield WaitForSeconds (3);
	Application.LoadLevel (0);
}