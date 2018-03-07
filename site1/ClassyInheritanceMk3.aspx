<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ClassyInheritanceMk3.aspx.cs" Inherits="ClassyInheritanceMk3" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>ok
    <script>
<asp:Calendar runat="server"></asp:Calendar>
        // This model supports overriding, calling base methods and the 
        // special one here... access private variables in the base class, unlike Mk2.
        // A little rough but not bettered!
        
        function Car(colour) {
            this.colour = colour;
            var pSpeed = 0;
            this.getSpeed = function ()  { return pSpeed; }
            this.setSpeed = function (s) { pSpeed = s; }
        }
        Car.prototype.speedUp = function () { this.setSpeed(this.getSpeed() + 10); }
        Car.prototype.toString = function () {
            return "A " + this.colour + " car travelling at " + this.getSpeed() + " mph";
        }

        function Taxi(colour) {
            Car.call(this, (colour || "grey"))
            this.price = 0;
        }
        Taxi.prototype = new Car();
        Taxi.prototype.base = new Car();//from here on... is to access the base vars

        Taxi.prototype.speedUp = function () {
            this.base.speedUp();
            this.base.speedUp();
            this.setSpeed(this.base.getSpeed());
        }

        var c1 = new Car("red"); c1.speedUp(); alert(c1);c1.
        var t = new Taxi(); t.speedUp(); t.speedUp(); t.speedUp(); alert(t);
        alert(c1);

        //       function GetMembers(obj) {
        //           var memberArray = [];
        //           for (var s in obj) {
        //               var i = 0;
        //               memberArray[memberArray.length] = typeof (obj[s])
        //               memberArray[memberArray.length] = s;  //inserted at the NEW length
        //           }
        //           return memberArray;
        //       }
        //        var t = new Taxi();
        TestReflection(c1, "car");
        TestReflection(t, "taxi");
        //        t.speedUp();t.speedUp();t.speedUp();
        //        alert(t);

        function GetMembers(obj) {
            var memberArray = [];
            for (var s in obj) {
                var i = 0;
                memberArray[memberArray.length] = typeof (obj[s])
                memberArray[memberArray.length] = s;  //inserted at the NEW length
            }
            return memberArray;
        };


        function TestReflection(anyObject, objName) {
            var props = GetMembers(anyObject);

            var resString = "<br/> Reflection on: " + objName + '<br/>';
            //var resString="";
            for (var i = 0; i < props.length; i += 2) {
                try {

                    resString += ('<br/>' + props[i] + " : " + props[i + 1] + " = " + String(anyObject[String(props[i + 1])]));
                } catch (e) { }
            }
            alert(resString);
           // document.write(resString);
        }
       
    </script>
    </div>
    </form>
</body>
</html>
