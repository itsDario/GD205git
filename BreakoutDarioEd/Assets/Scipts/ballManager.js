#pragma strict

var hitSound : AudioClip;
var paddle : GameObject;

var launchkey : KeyCode;

private var onPaddle : boolean;

function Start () {
	//yield WaitForSeconds(2);
	ResetBall(); //Called the reset ball function

}

function Update (){
	if(onPaddle){     // puts the ball on top of the paddle
		transform.position.x = paddle.transform.position.x;
		transform.position.y = paddle.transform.position.y + 0.4;
	}
	
	if(onPaddle && Input.GetKey(launchkey)){ // Calls launch ball if the ball is on the paddle
		onPaddle = false;
		LaunchBall();
	}
	ballCheck();
}

function ResetBall(){  // removes velocity and sets the ball on the paddle
	rigidbody.velocity.x = 0;
	rigidbody.velocity.y = 0;
	
	onPaddle = true;
	
	//Debug.Log("Reset");
}

function OnCollisionEnter(whatDidIHit: Collision){   //checks what i hit
	if(whatDidIHit.gameObject.tag == "Paddle"){       // if its the paddle bouce the ball back. direction depends on where on the paddle the ball hit
		rigidbody.velocity.x = (rigidbody.position.x - whatDidIHit.rigidbody.position.x) * 3;
		rigidbody.velocity.y = 5;
		//Debug.Log(rigidbody.velocity.y);
 	}
 	else if(whatDidIHit.gameObject.tag == "Wall"){        // was going to add something but didnt get to it
 		//rigidbody.velocity.x = rigidbody.velocity.x * -1;
 		//transform.position.x = 8.33;
 	}
 	else {
		ScoreHealth.score++;
		//DDebug.Log(ScoreHealth.score);
		audio.PlayOneShot(hitSound);
 	}
}

function LaunchBall() {  //launches the ball
	rigidbody.velocity.y = -3;
	//Debug.Log("Launch");
}

function ballCheck(){
	if(rigidbody.velocity.y < 3 && rigidbody.velocity.y > -3){
		rigidbody.velocity.y *= 3;
	}
	
	if(rigidbody.velocity.x < 2 && rigidbody.velocity.x > -2){
		rigidbody.velocity.x *= 2;
	}
}