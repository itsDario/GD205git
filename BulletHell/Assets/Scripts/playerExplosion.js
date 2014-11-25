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
	
	if(playerAndGuiManager.lives <= 0){//Death
		Application.LoadLevel(2);
	}else{
    Instantiate (player, spawnPosition, Quaternion.identity);
	Destroy(gameObject);
	}
}