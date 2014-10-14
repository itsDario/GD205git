#pragma strict

function OnTriggerEnter(ballInfo: Collider){
	ballInfo.gameObject.SendMessage("ResetBall");
	ScoreHealth.lives --;
}// resets ball after of falls of the screen
		