
var oAjax; //makin it global - doesn't have to be...
var globalOption;

function make_request(option)	// execute an HTTPRequest 
{	

    globalOption = option;
	oAjax = new XMLHttpRequest(); // for IE7, Mozilla, Safari ...	

	oAjax.onreadystatechange = function(){show_results();	};		// nominate a response handler...
	
	switch(option)//which button got us here?  See buttons' details on the html page.
	{
	    case 1:
	        oAjax.open("GET", "data.txt", true); 	// make the request, true--> async
	        break;
	    case 2:
            oAjax.open("GET", "WebService2.asmx/DoubleThis?numIn=35", true); 
            break;
        case 3:
            oAjax.open("GET", "WebService.asmx/TuTimes?a=21", true); 	
            break;
        case 4:
            oAjax.open("GET", "DataService.asmx/CustCity?whatCity=London&tableOrJSON=2", true);
            break;
    }
    oAjax.send(null);
}

function show_results()
{
    if (oAjax.readyState === 4 && oAjax.status === 200 && globalOption === 4) {

        //document.getElementById('myDiv').innerHTML = oAjax.responseText;//.responseXML.documentElement.childNodes[0].data;
        document.getElementById('myDiv').innerHTML = oAjax.responseXML.documentElement.childNodes[0].data;
    }
    else {
        document.getElementById('myDiv').innerHTML = oAjax.responseText;
    }
}
