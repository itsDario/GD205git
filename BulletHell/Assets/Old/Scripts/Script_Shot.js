#pragma strict

var speed: float;

function Update () {
	rigidbody2D.velocity.y = speed;
	if(gameObject.transform.position.y > 8){
		Destroy(gameObject);
	}
	
	

}