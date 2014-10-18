#pragma strict

var shootKey: KeyCode;
var shotSound: AudioClip;
var shot: GameObject;
var FireRate : float = 10;
var lastfired : float; 

function Start () {

}

function Update () {
	shoot();
}

function shoot(){	// Shooting
	if(Input.GetButton("Fire1")){
		if (Time.time - lastfired > 1 / FireRate){
			lastfired = Time.time;
			audio.PlayOneShot(shotSound);
			var pos: Vector2 = this.transform.position + Vector2(0,0.5);
			Instantiate(shot, pos, Quaternion.identity);
		}
	}
}