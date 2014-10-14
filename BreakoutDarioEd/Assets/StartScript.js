#pragma strict
var y: float;
var x: float;
var floatyness: float;

function Start () {
 x = 0.5;
 y = 1;
 floatyness = 0.02;

}

function Update () {
	x += floatyness;
	y = Mathf.Cos(x) / 30;// - Mathf.Cos(Time.deltaTime);
	//y + 0;
	Debug.Log(y);
	transform.position.y = y + 0.4;
	
	if(Input.anyKey){
        Application.LoadLevel (1);
	}
}

