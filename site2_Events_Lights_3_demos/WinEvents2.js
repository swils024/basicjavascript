window.onload=function(){
setTimeout(setup,5000);
}

//window.onload=function(){
//    document.getElementById("txt").innerHTML="Made by an on-load";
//}



function setup()
{
    var box = document.getElementById("txt");
    document.getElementById("bulb").onmouseover = function () { box.innerHTML += "MouseMovedOn Bulb"; }
    document.getElementById("bulb").onmousedown= function(){light(1);};
    document.getElementById("bulb").onmouseup= function(){light(0);};
    document.getElementById("txt").innerHTML="Click here! The engine is running!"
    document.getElementById("bulb").src = "off.gif";
    
}


function light(n)
{   
  var pic = document.getElementById("bulb");
  var box = document.getElementById("txt"); 
  var docStyle = document.getElementById("body").style;
                                
  if( n === 1 )
  {                   
    pic.src = "on.gif";
    box.innerHTML = "Button is Down";
    docStyle.backgroundColor="#ffffcc";
 
  }           
  if( n === 0 )
  {                   
    pic.src = "off.gif";
    box.innerHTML= "Button is Up";
    docStyle.backgroundColor="#cccccc";
 
  }
}




