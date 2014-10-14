#pragma strict

var prefab: GameObject;   //this is for importing the Bick Object for use on this script

var brickY: float;
var brickX: float;

var brickYSpace: float;
var brickXSpace: float;

function Start () {   //runs once
	for(var bY = brickY; bY < 7; bY++){   //runs in the Y direction
		for(var bX = brickX; bX < 16; bX++){  //runs in the X direction
			var pos = Vector3(bX * brickXSpace - 9, bY * brickYSpace - 0.9,0);  //Sets the position of the brick 
			var newBrick = Instantiate(prefab, pos, Quaternion.identity); //Plces a brick
			
			//newBrick.renderer.material.color = Color(1.0/bY, bX/15.0, bX/15.0, 1);
			
			//newBrick.renderer.material.color = Color(1.0/bY, bX/15.0, bX/15.0, 1);
			
			//newBrick.renderer.material.color = Color(1.0/bY, bX/15.0, (1 - 1.0/bY), 1);
			 
			if(bY <= 7){
				newBrick.renderer.material.color = Color(0, 1, 0, 1);
				}
			if(bY <= 6){
				newBrick.renderer.material.color = Color(0.2, 0.8, 0, 1);
				}
			if(bY <= 5){
				newBrick.renderer.material.color = Color(0.4, 0.6, 0, 1);
				}
			if(bY <= 4){
				newBrick.renderer.material.color = Color(0.6, 0.4, 0, 1);
				}
			if(bY <= 3){
				newBrick.renderer.material.color = Color(0.8, 0.2, 0, 1);
				}
			if(bY <= 2){
				newBrick.renderer.material.color = Color(1, 0, 0, 1);
				}
			
		}
	}
}