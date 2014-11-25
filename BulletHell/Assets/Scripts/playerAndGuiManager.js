#pragma strict

public static var lives: int;
public static var score: int;
var font : Font;

var myStyle: GUIStyle  = new GUIStyle();

var lifeIcon: Texture2D;

function Start () {
	lives = 3;
	score = 0;
	
 	myStyle.font = font;
 	myStyle.normal.textColor = Color.white;
}

function Update () {
//Debug.Log(score);

}

 function OnGUI(){
 	GUI.Box (Rect (0,Screen.height - 50,140, 50), "");
 	var rect = Rect(5,Screen.height - 50,Screen.width , 50); //Adjust the rectangle position and size for your own needs
 	GUILayout.BeginArea(rect);
 	GUILayout.BeginHorizontal();
 
 	for(var i = 0; i < lives;i++){
 		GUILayout.Label(lifeIcon); //assign your heart image to this texture
 	}
 		
 	
 	
 	GUILayout.FlexibleSpace();
 	GUILayout.EndHorizontal();
 	GUILayout.EndArea();
 	
 	GUI.Box (Rect (Screen.width / 2,Screen.height - 30,140, 50), "Score " + score , myStyle);
 }