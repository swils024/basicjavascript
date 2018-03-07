//window.onload = function () {
    //alert('hi');
if (typeof LIB1 == "undefined" || !LIB1) {
    var LIB1 =
        {
            starter: function () {
                var d = new Date();
                var ele = document.getElementById('Text1');
                ele.value = 'hello there ' + d.toDateString();

                ele.onclick = function () { alert('clicked'); }

                ele.onmouseover = function () { this.style.backgroundColor = "yellow"; }

                ele.onmouseout = function () { this.style.backgroundColor = "white"; }

                var b = document.getElementById('Button1')

                b.onclick = function () {
                    if (ele.style.visibility != "hidden")
                        ele.style.visibility = "hidden";
                    else
                        ele.style.visibility = "visible";
                }
            }

        }

    LIB1.starter();
}
