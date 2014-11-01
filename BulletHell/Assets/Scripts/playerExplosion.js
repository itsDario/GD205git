#pragma strict

var player : GameObject;
var spawnPosition : Vector3;
var Destroyed: AudioClip;

function Start () {
//	Debug.Log("Playerexplostion");
	audio.PlayOneShot(Destroyed);
	waitThenDestroy();
}

function Update () {
}

function waitThenDestroy(){
	yield WaitForSeconds(2);
	
    Instantiate (player, spawnPosition, Quaternion.identity);
	Destroy(gameObject);
}