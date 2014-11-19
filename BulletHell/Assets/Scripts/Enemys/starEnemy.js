#pragma strict

var target: Transform;
var shot: GameObject;
var FireRate : float = 10;
var lastShotTime : float; 
var followSpeed: float = 3;

public class starEnemy extends baseEnemy{
	function Start(){
		setHealth(1);
		setColor(Color(1,0.3,0.6,1));
//		setMoveSpeed(0);
		setBlinkSpeed(0.05);
			
		target = GameObject.FindWithTag("Player").transform;
	}
	
	function Update(){
		lookAndFollow();
		
		if(target == null){
			try{
			target = GameObject.FindWithTag("Player").transform;
			}catch(NullReferenceException){
				Debug.Log("noPlayer");
			}
		}
	}

	function lookAndFollow(){
//	transform.LookAt(target );
		if(target != null){
			var dir = target.transform.position - transform.position;
			var angle = Mathf.Atan2(dir.y, dir.x) * Mathf.Rad2Deg;
			transform.rotation = Quaternion.AngleAxis(angle + 90, Vector3.forward);
			transform.position += -transform.up*followSpeed*Time.deltaTime;
		}
	}
}