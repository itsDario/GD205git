#pragma strict

private var health: int;
private var moveSpeed: float;
private var blinkSpeed: float;
private var color: Vector4;
var enemyExplosion: GameObject;

function move(){
	transform.position.y -= moveSpeed * Time.deltaTime;
}

function blink(){
	renderer.GetComponent(SpriteRenderer).color = Color.white;
	yield WaitForSeconds(blinkSpeed);
	renderer.GetComponent(SpriteRenderer).color = color;
}

function setHealth(newHealth: int){
//	Debug.Log("health set");
	health = newHealth;
}

function setColor(newColor:Vector4){
	color = newColor;
	renderer.GetComponent(SpriteRenderer).color = color;
}

function setMoveSpeed(newSpeed:float){
	moveSpeed = newSpeed;
}

function setBlinkSpeed(newBlinkSpeed:float){
	blinkSpeed = newBlinkSpeed;
}

function OnTriggerEnter2D (other: Collider2D){
	if(other.gameObject.tag == "Shot" || other.gameObject.tag == "player"){
		//Script_gameManager.score += 10;
		blink();
		health--;
		if(health <= 0){
			Instantiate(enemyExplosion, transform.position, transform.rotation);
			Destroy(gameObject);
		}
		Destroy(other.gameObject);
	}
}