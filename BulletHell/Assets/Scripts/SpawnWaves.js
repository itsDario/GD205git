#pragma strict

var redEnemy1 : GameObject;
var spawnValues : Vector3;
var hazardCount : int;
var spawnWait : float;
var startWait : float;
var waveWait : float;

function Start () {
    SpawnWaves ();
}

function SpawnWaves () {
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