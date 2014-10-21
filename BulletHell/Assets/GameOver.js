#pragma strict

function Start () {

}

function Update () {
	waitandStart();
}

function waitandStart(){
	yield WaitForSeconds(3);
	Application.LoadLevel(1);
}