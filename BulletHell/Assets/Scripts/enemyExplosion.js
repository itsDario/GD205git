#pragma strict

var Destroyed: AudioClip;

function Start () {
	audio.PlayOneShot(Destroyed);
	playerAndGuiManager.score += 100;
}

function Update () {
	waitThenDestroy();
}

function waitThenDestroy(){
	//yield WaitForSeconds(2);
	Destroy(gameObject, 2);
}