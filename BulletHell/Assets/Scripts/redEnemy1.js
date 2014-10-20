#pragma strict

//private var initPosition: float;
private var health: int;
//var moveDist: float;
//var iBomb: GameObject;
var enemyExplosion: GameObject;
var moveSpeed: float;

var shotSound: AudioClip;
var shot: GameObject;
var FireRate : float = 10;
private var lastfired : float; 

function Start () {
//	initPosition = transform.position.x;
	health = 3;
}

function Update () {

	if(transform.position.y <= -5){
		Destroy(gameObject);
	}
	
	shoot();
	
	transform.position.y -= moveSpeed * Time.deltaTime;
	
	//Debug.Log(SteeringAgent.AgentList);
	//transform.position.x = initPosition + Mathf.Sin(Time.time) * moveDist;
	// Shoot Sometimes
	/*
	*/
}

function shoot(){	// Shooting
	if(Mathf.FloorToInt(Random.value * 10000.0) % 200 == 0){
		Instantiate(
			shot,
			this.transform.position + Vector2(0,-0.5), 
			Quaternion.identity
		);	
	}
	/*
		if (Time.time - lastfired > (Random.Range(0.5,2)) / FireRate){
			lastfired = Time.time;
			audio.PlayOneShot(shotSound);
			var pos: Vector2 = this.transform.position + Vector2(0,-0.5);
			Instantiate(shot, pos, Quaternion.identity);
	}
	yield WaitForSeconds(2);
	var pos: Vector2 = this.transform.position + Vector2(0,-0.5);
	Instantiate(shot, pos, Quaternion.identity);
	*/
}

function OnTriggerEnter2D (other: Collider2D){
	if(other.gameObject.tag == "Shot"){
		//Script_gameManager.score += 10;
		health--;
		if(health <= 0){
			Instantiate(enemyExplosion, transform.position, transform.rotation);
			Destroy(gameObject);
		}
		Destroy(other.gameObject);
	}
}