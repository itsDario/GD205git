#pragma strict

var speed: int;


function Update () {
	rigidbody2D.velocity.y = -speed;
	if(transform.position.y	< -8.0f){
		Destroy(gameObject);
	}
}