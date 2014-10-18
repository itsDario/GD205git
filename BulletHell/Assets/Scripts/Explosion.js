#pragma strict

var Destroyed: AudioClip;

function Start () {
	audio.PlayOneShot(Destroyed);
}

function Update () {
	waitThenDestroy();
}

function waitThenDestroy(){
	//yield WaitForSeconds(2);
	Destroy(gameObject, 2);
}