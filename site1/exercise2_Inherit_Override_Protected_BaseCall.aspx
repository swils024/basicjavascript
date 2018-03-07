<%@ Page Language="C#" AutoEventWireup="true" CodeFile="exercise2_Inherit_Override_Protected_BaseCall.aspx.cs" Inherits="exercise2" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <script>

            function Car(colour) {
                this.colour = colour;
                var pSpeed = 0;
                this.getSpeed = function () { return pSpeed; }
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
            Taxi.prototype.base = new Car();
            Taxi.prototype.speedUp = function () {
                this.base.speedUp();
                this.base.speedUp();
                this.setSpeed(this.base.getSpeed());
            }

            var c1 = new Car("red"); c1.speedUp();
            alert(c1);
            var t = new Taxi(); t.speedUp(); t.speedUp(); t.speedUp();


            alert(t);
            

           


        </script>
    </div>
    </form>
</body>
</html>
