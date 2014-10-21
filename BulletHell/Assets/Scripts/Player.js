#pragma strict

var moveLeft: KeyCode;
var moveRight: KeyCode;
var moveUp: KeyCode;
var moveDown: KeyCode;
var screenWidth: float;
var screenHeight: float;
var speed: float = 6.0f;
var playerExplosion: GameObject;
var immunityTime: float;
var blinkSpeed: float;
var blink: boolean = true;
private var spawnTime: float;


function Start(){
	//rigidbody2D.position.y = Screen.height - 1;
//	var viewPos : Vector3 = camera.WorldToViewportPoint (rigidbody2D.position);
//	Debug.Log(viewPos);
	spawnTime = Time.time;
}

function Update(){
	movement();
	spawnBlink();
}

function movement(){
	
	// Ship Movement
	// Left, Right
	if(Input.GetKey(moveLeft)){
		rigidbody2D.velocity.x = -speed;
 	} else if(Input.GetKey(moveRight)){
		rigidbody2D.velocity.x = speed;
	} else {
		rigidbody2D.velocity.x = 0;
	}
	// Up, Down
	if(Input.GetKey(moveUp)){
		rigidbody2D.velocity.y = speed;
 	} else if(Input.GetKey(moveDown)){
		rigidbody2D.velocity.y = -speed;
	} else {
		rigidbody2D.velocity.y = 0;
	}
	
	
	// Keep in the frame Horizontally
	if(transform.position.x > screenWidth){
		transform.position.x = screenWidth;
	}
	if(transform.position.x < -screenWidth){
		transform.position.x = -screenWidth;
	}
	
	// Keep in the bottom porition of the screen
	if(transform.position.y > screenHeight){
		transform.position.y = screenHeight;
	}
	if(transform.position.y < -screenHeight){
		transform.position.y = -screenHeight;
	}
	
}

function spawnBlink(){
	if(Time.time < spawnTime + immunityTime){
		if(blink){
			yield WaitForSeconds(blinkSpeed);
			renderer.GetComponent(SpriteRenderer).color = Color.red;
			blink = false;
			}else{
			yield WaitForSeconds(blinkSpeed);
			renderer.GetComponent(SpriteRenderer).color = Color.white;
			blink = true;
			}
	} else{
		renderer.GetComponent(SpriteRenderer).color = Color.white;
	}
	yield WaitForSeconds(0.1);
}


function OnTriggerEnter2D(other: Collider2D){
	//Debug.Log("playerHit1");
	if(Time.time > spawnTime + immunityTime){
	Instantiate(playerExplosion, transform.position, transform.rotation);
	playerAndGuiManager.lives--;
	Destroy(gameObject);
	}
/*
	if(other.gameObject.tag == "bomb"){
		Destroy(other.gameObject);
		if(Script_gameManager.shield == true){
			Script_gameManager.shield = false;
		} else {
		// lives go away
			Script_gameManager.lives--;
		}
 	}
 	if(other.gameObject.tag == "powerup"){
		Destroy(other.gameObject);
		Script_gameManager.shield = true;
		Debug.Log("Shield");
 	}
 	*/
}

