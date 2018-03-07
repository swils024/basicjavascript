<%@ Page Language="C#" AutoEventWireup="true" CodeFile="JQUERY_Demo.aspx.cs" Inherits="test1" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style>
        .picStyle {
            width: 400px;
            height: 200px;
            display: inline;
            position: absolute;
        }

        #div4 {
            background: red;
            margin-top: 230px;
            width: 400px;
            height: 200px;
        }
    </style>
    <script src="jquery-1.4.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui-1.8.24.custom.min.js" type="text/javascript"></script>
    <script type="text/javascript">

        $(function () {//wait til page loads

            $('#div4').click(function () {

                $(this).animate({ "left": "600px" }, 2000).animate({ "background-color": "yellow" }, 10000);

            }
            )

            //$('img').css("opacity", "0.3");

            $('img').hover(
                function () { $(this).animate({ "opacity": "1.0" }, 500); }
                ,
                function () { $(this).animate({ "opacity": "0.3" }, 500); }
            );

            var x = 1;
            
            //f1();
            function f1() {

                $('#div' + x).fadeOut(1800);
                x == 3 ? x = 1 : x++;
                $('#div' + (x)).fadeIn(1800);
                setTimeout(f1, 3000);
            }

        });

    </script>
</head>
<body>

    <div id='div1' class="picStyle">
        <img src="images/pic1.jpg" width="400px" height="200px" />
    </div>
    <div id='div2' class="picStyle">
        <img src="images/pic3.jpg" width="400px" height="200px" />
    </div>
    <div id='div3' class="picStyle">
        <img src="images/pic5.jpg" width="400px" height="200px" />
    </div>

    <div id="div4" style="width: 500px; height: 200px; top: 20px; position: relative;">
        Hello there
    </div>
    <a href="#" id="link1">Click here</a>

</body>

</html>
