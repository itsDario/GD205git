#pragma strict

var hurtInvader: AudioClip;
private var initPosition: float;
var moveDist: float;
var iBomb: GameObject;

function Start () {
	initPosition = transform.position.x;
}

function Update () {
	transform.position.x = initPosition + Mathf.Sin(Time.time) * moveDist;
	// Shoot Sometimes
	
	if(Mathf.FloorToInt(Random.value * 10000.0) % 2000 == 0){
		Instantiate(
			iBomb,
			this.transform.position, 
			Quaternion.identity
		);
			
	}
}

function OnTriggerEnter2D (other: Collider2D){
	if(other.tag == "shot"){
		Debug.Log("Hit");
		audio.PlayOneShot(hurtInvader);
		Script_gameManager.score += 10;
		Destroy(gameObject);
		Destroy(other.gameObject);
	}
}
