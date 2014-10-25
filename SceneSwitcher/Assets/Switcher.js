#pragma strict

function OnGUI () {
    // Make a background box
    GUI.Box (Rect (Screen.width/2-50,Screen.height/2-110,100,120), Application.loadedLevelName);

    // Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
    if (GUI.Button (Rect (Screen.width/2-40,Screen.height/2-80,80,20), "level 1")) {
        Application.LoadLevel (0);
    }
    
    if (GUI.Button (Rect (Screen.width/2-40,Screen.height/2-50,80,20), "level 2")) {
        Application.LoadLevel (1);
    }
    
    if (GUI.Button (Rect (Screen.width/2-40,Screen.height/2-20,80,20), "level 3")) {
        Application.LoadLevel (2);
    }
    
    if (GUI.Button (Rect (Screen.width/2-40,Screen.height/2+10,80,20), "next leve")) {
        Application.LoadLevel (2);
    }
}