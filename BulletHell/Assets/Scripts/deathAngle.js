#pragma strict

var speed: float;

function Start () {

}

function Update () {
	transform.Rotate (Vector3.forward * -90 * Time.deltaTime);
	rigidbody2D.velocity.y = -speed;
	if(gameObject.transform.position.y < -5){
		Destroy(gameObject);
	}
	//renderer.GetComponent(SpriteRenderer).color = Color.yellow;
}