#pragma strict

var shot: GameObject;
var FireRate : float = 10;
var spawnRotation : Quaternion = Quaternion.AngleAxis(-90, Vector3.forward);

public class boxEnemy extends baseEnemy
{
	function Start(){
		setHealth(2);
		setColor(Color.red);
		setMoveSpeed(0);
		setBlinkSpeed(0.05);
	}
	
	function Update(){
		shoot();
		move();
	}

	function shoot(){	// Shooting
		if(Mathf.FloorToInt(Random.value * 10000.0) % 200 == 0){
//			Instantiate(shot,this.transform.position + Vector3(0,0,0), spawnRotation);
			Instantiate(shot,this.transform.position + Vector3(0,0,0), transform.rotation);
//			Instantiate(shot,this.transform.position + Vector3(0,0,0), Quaternion.identity);
			yield WaitForSeconds(0.2);
		}
	}
}