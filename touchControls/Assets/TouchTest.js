#pragma strict

function Start () {

}

function Update () {
    for (var touch : Touch in Input.touches) {
        if (touch.phase == TouchPhase.Began) {
            Debug.Log(touch.position);
        }
    }
}