var lowest = 0, highest=20, i=0, rnd=0, arr=[], tot=0;
var numberRangeK =2000

for (i = lowest; i <= highest; i++) {//initialise the array
        arr[i]=0;
        }
    
    document.write("<font style='font-size: 6pt;'>");
    for(i=0; i<=numberRangeK; i++){
        rnd = Math.random() * 20; //document.write(rnd + " ");
        rnd=Math.round(rnd);
        arr[rnd]++;
        //document.write(rnd + " ");
        }
    document.write("</font><br/>");

    for (i = lowest; i <= highest; i++)
    {
        //tot += arr[i];
        document.write(String(i).length === 1 ? "0" : "");
        document.write(i + " : ");
        document.write(String(arr[i]).length === 2 ? "0" : "");
        document.write (arr[i] + " <img src='x' border='0' height='10px' style='background-color:#ff0000;' width='" + arr[i]  + "'/><br/>" );
        }
        //document.write("<br/> Total is " + tot);