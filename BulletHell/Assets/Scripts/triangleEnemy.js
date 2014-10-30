#pragma strict

var shot: GameObject;
var FireRate : float = 10;
var spawnRotation : Quaternion = Quaternion.AngleAxis(-90, Vector3.forward);

public class triangleEnemy extends baseEnemy
{
	function Start(){
		setHealth(2);
		setColor(Color.red);
		setMoveSpeed(4);
		setBlinkSpeed(0.1);
	}
	
	function Update(){
		shoot();
		move();
	}

	function shoot(){	// Shooting
		if(Mathf.FloorToInt(Random.value * 10000.0) % 200 == 0){
			Instantiate(shot,this.transform.position, spawnRotation);	
		}
	}
}