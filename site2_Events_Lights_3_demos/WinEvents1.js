// a function to react to MOUSEDOWN and MOUSEUP events 

function light(n)
{   
  var pic = document.getElementById("bulb");
  var box = document.getElementById("txt"); 
  var docStyle = document.getElementById("body").style;
                                
  if( n === 1 )
  {                   
    pic.src = "on.gif";
    box.innerHTML = "Button is Down";
    docStyle.backgroundColor="#ff0000";
 
  }           
  if( n === 0 )
  {                   
    pic.src = "off.gif";
    box.innerHTML= "Button is Up";
    docStyle.backgroundColor="#00ff00";
 
  }
}

function changepagetowhite() {
    var docStyle = document.getElementById("body").style;
    docStyle.backgroundColor = "#ffffff";
}

function changepagetoblack() {
    var docStyle = document.getElementById("body").style;
    docStyle.backgroundColor = "#000000";
}