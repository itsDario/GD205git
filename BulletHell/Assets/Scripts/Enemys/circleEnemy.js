#pragma strict

var shot: GameObject;
var fireRate : float = 10;
var fireTime : float;

public class circleEnemy extends baseEnemy
{	
	function Start(){
		setHealth(10);
		setColor(Color(0,0.5,0,1));
		setMoveSpeed(1);
		setBlinkSpeed(0.05);
	}
	
	function Update(){
		shoot();
		move();
	}
	
	function shoot(){	// Shooting
		if(Time.time >  fireTime + fireRate){
			for (var i = 0; i < 8; i++) {
				var spawnRotation : Quaternion = Quaternion.AngleAxis(i*45, Vector3.forward);
				Instantiate(shot,this.transform.position, spawnRotation);
			}
			fireTime = Time.time;
		}
	}
}