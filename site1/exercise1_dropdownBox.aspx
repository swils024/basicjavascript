<%@ Page Language="C#" AutoEventWireup="true" CodeFile="exercise1_dropdownBox.aspx.cs" Inherits="exercise1" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>

</head>
<body id="theBody" >
  <input type='text' id='tRed' value='ff'/>
  <input type='text' id='tGreen' value='00'/>

  <input type='button' id='b1'  value='click me' />
    <select id="Select1">
        <option>33</option>
        <option>66</option>
        <option>99</option>
        <option>bb</option>
        <option>ff</option>
    </select> 
 
</body>
</html>
<script>

    ei('Select1').onchange = f1;
    ei("b1").onclick = f1;

    function f1() {

        var s =  ei('Select1');//or we could use "this" here.  tc.

        var r = ei('tRed').value;
        var g = ei('tGreen').value;
        var b = s[s.selectedIndex].value;
        document.bgColor = "#" + r + g + b;
        //alert("#" + r + g + b);
    }

       
    



//     ei('theBody').onload = function () {
//        //============== 2nd part of exercise ==========
//       
//        var x = et('input');
//        for (var i = 0; i < x.length; i++) {
//            x[i].onmouseover = colourUp;
//            x[i].onmouseout = colourDown;
//        }
//        function colourUp() {
//            this.oldie = this.style.backgroundColor;
//            this.style.backgroundColor = '#ffffff';
//        }
//        function colourDown() {
//            this.style.backgroundColor = this.oldie;
//        }
//        //=============================================
        var b1 = document.getElementById('b1');
        b1.onmouseover = function () {  this.value = 'don\'t click me';}
        b1.onmouseout = function f2() { this.value = 'click me'; }

//        
//       

//    }

    function ei(id) {
        return document.getElementById(id)
    }

    function et(tagName) {
        return document.getElementsByTagName(tagName)
    }



</script>
