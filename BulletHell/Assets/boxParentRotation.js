#pragma strict

var target: Transform;
var rotationSpeed = 3;
var myTransform : Transform;

function Start () {
	 myTransform = transform;
	 target = GameObject.FindWithTag("Player").transform;
}

function Update () {
	 lookAtPlayer();
}

function lookAtPlayer(){
	 //myTransform.rotation = Quaternion.Slerp(myTransform.rotation,Quaternion.LookRotation(target.position - myTransform.position), rotationSpeed*Time.deltaTime);
	transform.LookAt(target, Vector3.forward);
}
