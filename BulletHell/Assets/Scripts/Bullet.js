#pragma strict

var speed: float;

function FixedUpdate () {
}

function Update(){
	rigidbody2D.velocity.y = speed;
	if(gameObject.transform.position.y > 5){
		Destroy(gameObject);
	}
}