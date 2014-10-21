#pragma strict

var player : GameObject;
var spawnPosition : Vector3;
var Destroyed: AudioClip;

function Start () {
	audio.PlayOneShot(Destroyed);
}

function Update () {
	waitThenDestroy();
}

function waitThenDestroy(){
	yield WaitForSeconds(2);
	
    Instantiate (player, spawnPosition, Quaternion.identity);
	Destroy(gameObject);
}