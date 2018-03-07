

var oAjax;  //makin it global - doesn't have to be...
																
function make_request(option)	// execute an HTTPRequest 
{	
    document.getElementsByTagName("TITLE")[0].innerHtml = "";
    document.getElementById('Div1').innerHTML="";			
 						
	if (window.XMLHttpRequest)	
	    {oAjax = new XMLHttpRequest();} // for IE7, Mozilla, Safari ...	
	else if (window.ActiveXObject)
	    {oAjax = new ActiveXObject("Microsoft.XMLHTTP");}  // IE6
	else 
	    {return false;}// or quit...
	if(oAjax.overrideMimeType)//this property is absent in some (older) IE versions
	    {    
	        oAjax.overrideMimeType('text/xml'); 
	        //oAjax.overrideMimeType('text/html; charset=iso-8859-1'); //handles accents, £'s €'s etc.
	        //oAjax.overrideMimeType('text/plain; charset=x-user-defined'); // says "don't interpret the data, its binary!"  
            document.title = "I'm overriding the mimetype";//note because there's only one Title node in a web document...
	    }	
	
	var theCity = document.getElementById('Text1').value;
	oAjax.open("GET", "DataService.asmx/CustCity?whatCity=" + theCity +"&tableOrJSON=" + option, true); 	// make the request, true--> async
    oAjax.send(null);	
	oAjax.onreadystatechange = function(){show_results(option);	};		// nominate a response handler...
}


function show_results(option)
{
    try{//show progress = = = = = = = = = = = = = =
        document.getElementById('Div1').innerHTML += oAjax.readyState + " " ;
    }catch(e){}
    try{
        document.getElementById('Div1').innerHTML += "(" + oAjax.status  + ") ";
    }catch(e){}


  if(oAjax.readyState===4 && oAjax.status=== 200)// the magic combination
  {  
        var s = oAjax.responseXML.documentElement.childNodes[0].data;

        if(option==2) //lets try to read the json object
       {
            eval("var arr = " +  s + ";");
            try{
            document.getElementById('Div1').innerHTML += //EASTC is a london company...
                                            "<br/><br/>" 
                                            + arr["EASTC"]["CompanyName"] + "<br/>"
                                            + arr.EASTC.ContactName + "<br/>"
                                           + arr["EASTC"].Phone + "<br/>";
             }catch(e)
             {
                        for(ss in arr){var firstCoName = ss;break;} // just pick up the name of the 1st company - note [0] couldn't be used.
                        
                         document.getElementById('Div1').innerHTML += 
                                            "<br/><br/>" 
                                            + arr[firstCoName]["CompanyName"] + "<br/>"
                                            + arr[firstCoName]["ContactName"] + "<br/>"
                                           + arr[firstCoName]["Phone"] + "<br/>";

             
             }                              
               s=s.replace(new RegExp( "}," , "g" ), " },<br/>" );  //cosmetics ;-)
        }
       
        document.getElementById('myDiv').innerHTML = s; // oAjax.responseXML.documentElement.firstChild;
        oAjax.onreadystatechange =null;//needed to avoid IE memory leak.  Careful!  Not below the next "}" 
  }
        //not here please!
}
