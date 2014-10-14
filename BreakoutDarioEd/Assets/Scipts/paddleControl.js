#pragma strict

var moveLeft: KeyCode;
var moveRight: KeyCode;

var speed: float = 4.0f;

function Update () {
	if(Input.GetKey(moveLeft)){
		rigidbody.velocity.x = -speed;
	} else if (Input.GetKey(moveRight)){
		rigidbody.velocity.x = speed;
	} else {
		rigidbody.velocity.x = 0;
	}

}// Just moves the paddle