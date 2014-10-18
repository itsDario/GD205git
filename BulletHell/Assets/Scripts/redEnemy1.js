#pragma strict

//private var initPosition: float;
private var health: int;
//var moveDist: float;
//var iBomb: GameObject;
var enemyExplosion: GameObject;
var moveSpeed: float;

function Start () {
//	initPosition = transform.position.x;
	health = 5;
}

function Update () {

	if(transform.position.y <= -5){
		Destroy(gameObject);
	}
	//Debug.Log(SteeringAgent.AgentList);
	//transform.position.x = initPosition + Mathf.Sin(Time.time) * moveDist;
	// Shoot Sometimes
	/*
	if(Mathf.FloorToInt(Random.value * 10000.0) % 2000 == 0){
		Instantiate(
			iBomb,
			this.transform.position, 
			Quaternion.identity
		);	
	}
	*/
	//transform.position.y -= moveSpeed * Time.deltaTime;
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