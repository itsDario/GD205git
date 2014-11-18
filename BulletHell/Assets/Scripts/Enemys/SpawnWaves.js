#pragma strict

var redEnemy1 : GameObject;
var circleEnemy : GameObject;
var boxEnemy : GameObject;
var starEnemy : GameObject;
var spawnValues : Vector3;
var hazardCount : int;
var spawnWait : float;
var startWait : float;
var waveWait : float;
var lastCircleSpawnTime: float;
var lastBoxSpawnTime: float;

function Start () {
	triangleEnemySpawn();
	lastCircleSpawnTime = Time.time;
	lastBoxSpawnTime = Time.time;
}

function Update(){
	circleEnemySpawn();
	boxEnemySpawn();
	starEnemySpawn();
}

function triangleEnemySpawn(){
    yield WaitForSeconds (startWait);
    while (true)
    {
        for ( var i : int= 0; i < hazardCount; i++)
        {
             var spawnPosition : Vector3 = new Vector3 (Random.Range (-spawnValues.x, spawnValues.x), spawnValues.y, spawnValues.z);
             //var spawnRotation : Quaternion= Quaternion.identity;
            var spawnRotation : Quaternion = Quaternion.AngleAxis(-90, Vector3.forward);
            Instantiate (redEnemy1, spawnPosition, spawnRotation);
            yield WaitForSeconds (spawnWait);
        }
        yield WaitForSeconds (waveWait);
    }
}

function circleEnemySpawn(){
	var circleSpawnPosition : Vector3 = new Vector3 (0,5,0);
	if(Time.time > lastCircleSpawnTime + 10){
        Instantiate (circleEnemy, circleSpawnPosition, Quaternion.identity);
        lastCircleSpawnTime = Time.time;
	}
}

function boxEnemySpawn(){
	var boxSpawnPosition : Vector3 = new Vector3 (0,5,0);
	boxSpawnPosition.x = Random.value * 3 - 1.5;
	if(Time.time > lastBoxSpawnTime + 21){
        Instantiate (boxEnemy, boxSpawnPosition, Quaternion.identity);
        lastBoxSpawnTime = Time.time;
	}
}

function starEnemySpawn(){
	
}