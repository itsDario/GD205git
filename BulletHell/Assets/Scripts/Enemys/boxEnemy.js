#pragma strict

var target: Transform;
var shot: GameObject;
var FireRate : float = 10;
var lastShotTime : float; 

public class boxEnemy extends baseEnemy
{
	function Start(){
		setHealth(4);
		setColor(Color.red);
		setMoveSpeed(1);
		setBlinkSpeed(0.05);
		lastShotTime = Time.time;
			
		target = GameObject.FindWithTag("Player").transform;
	}
	
	function Update(){
		shoot();
		move();
		lookAtPlayer();
		if(target == null){
			target = GameObject.FindWithTag("Player").transform;
		}
	}

	function shoot(){	// Shooting
//		if(Mathf.FloorToInt(Random.value * 10000.0) % 200 == 0){
//			Instantiate(shot,transform.position + Vector3(0,0,0), transform.rotation);
//			yield WaitForSeconds(0.2);
//		}
		if(Time.time > lastShotTime + 2){
			lastShotTime = Time.time;
			Instantiate(shot,transform.position + Vector3(0,0,0), transform.rotation);
			yield WaitForSeconds(0.05);
			Instantiate(shot,transform.position + Vector3(0,0,0), transform.rotation);
			yield WaitForSeconds(0.05);
			Instantiate(shot,transform.position + Vector3(0,0,0), transform.rotation);
		}
	}

	function lookAtPlayer(){
//	transform.LookAt(target );
		if(target != null){
			var dir = target.transform.position - transform.position;
			var angle = Mathf.Atan2(dir.y, dir.x) * Mathf.Rad2Deg;
			transform.rotation = Quaternion.AngleAxis(angle + 90, Vector3.forward);
		}
	}
}