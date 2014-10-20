#pragma strict

public static var lives: int;
public static var score: int;

var lifeIcon: Texture2D;

function Start () {
	lives = 3;
	score = 0;
}

function Update () {

if(lives < 0){
	//Death
}

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
 }