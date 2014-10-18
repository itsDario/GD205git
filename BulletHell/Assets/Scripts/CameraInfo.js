#pragma strict
//var static cameraWidth: float;
//var static cameraheight: float;

function Start () {
//	Debug.Log(camera.pixelWidth);
}

function Update () {

}

/*
//check here for refrencing the camera
	// Creates 6 planes that represent the camera frustum.
	private var cam : Camera;
	private var planes : Plane[];
	function Start() {
		cam = Camera.main;
		planes = GeometryUtility.CalculateFrustumPlanes(cam);
		for(var i : int = 0; i < planes.Length; i++) {
			var p : GameObject = GameObject.CreatePrimitive(PrimitiveType.Plane);
			p.name = "Plane " + i.ToString();
			p.transform.position = -planes[i].normal * planes[i].distance;
			p.transform.rotation = Quaternion.FromToRotation(Vector3.up, planes[i].normal);
		}
	}
*/