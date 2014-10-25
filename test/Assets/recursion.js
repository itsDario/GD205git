#pragma strict
var lastX : int;
var lastY : int;
var x : int;
var y : int;

function Start () {
	for(var i = 0; i < 5; i++){  //for loop counting to 10
		randomCheck(x,y);               //call random check to check the randoms
		Debug.Log("x = " + x + "y = " + y);  // print the values
		lastX = x;                           // save the values
		lastY = y;
	}

}

function Update () {

}

function randomCheck(locX:float,locY:float){
	if((lastX < x + 1 && lastX > x - 1) || (lastY < y + 1 && lastY > y - 1)){
		x = Random.Range(1,3);
		y = Random.Range(1,3);
		Debug.Log("randomCheck was rerun");
		randomCheck(x,y);
	}
}