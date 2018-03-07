//IE6,7,8
if (document.attachEvent) {
    document.getElementById("bulb").attachEvent('onmousedown', function () { light(1); });
    document.getElementById("bulb").attachEvent('onmouseup', function () { light(0); });
    window.attachEvent('onload', function () { setTimeout(setup, 3000); });
    window.attachEvent('onload', function () { document.getElementById("txt").innerHTML = "Made by an on-load"; });
}

//W3C, Firefox, IE9+
if(document.addEventListener){
    document.getElementById("bulb").addEventListener('mousedown',function(){light(1);},false);
    document.getElementById("bulb").addEventListener('mouseup', function () { light(0); }, false);
    window.addEventListener("load", function () { setTimeout(setup, 3000); });
    window.addEventListener("load", function () { document.getElementById("txt").innerHTML = "Made by a load"; });
    
}

function setup()
{
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


