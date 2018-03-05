//var a = "hello";
//var msg = a + " dolly";
//alert(msg);

//var messageStart = "hello there";
//var messageFull = messageStart + "dolly";
//var a1 = "123";
//var b1 = "10";
//var c1 = a1 * b1; //multiplied
//var d1 = a1 + b1; //joined not added

//var intA = Number(a1);
//var intB = Number(b1);
//var e1 = intA + intB;

//var n = prompt("What is your name: ", "John Joe");

//alert(c1 + " " + d1 + " " + e1 + " " + n);

// function variable. Must be declared before use:
//var addTwo = function (numOne, numTwo) {
//    var res = numOne + numTwo;
//    return res;
//}

//var aa = 12;
//var bb = twoTimes(aa);
//var cc = addTwo(aa, bb);
//document.getElementById("d1").innerText = cc;

//function twoTimes(numInt) {
//    var result = 2 * numInt;
//    return result
//}

// This is an object
var car = {
    width: 10,
    colour: "red",
    doubleMyWidth: function () { this.width *= 2; }

}
// an embedded quote should be escaped with a backslash
alert("This is a \" string ");

// Use the object 'car'
car.colour = "blue";
car.doubleMyWidth();
var width = car.width;

car.wheels = 4;
car.licensed = true;

var colours = ["red", "white", "yellow", "green", "blue"]
var boolColour = true;
colours.push("black","brown")
colours.sort();

alert(colours[1]);
alert(colours.length);

var things = [{ cc: 50, speed: 100 }, { cc: 10, speed: 16 }, { cc: 50, speed: 106 }]
things.sort();

var bmdas = (3 - 2) * 4
var q = 10;
q++;
var r = q + q;
++q;
alert(r);

q = 14
q % 5;
alert(q);

// JS is hugely about objects
// Two ways to declare and create objects:
// 1. By var x= {} syntax ( to define and use one object )
// 2. By function(){this...} and later: var t = new obj2();
//    (to define a constructor to create many objects)

var obj1 = {
    colour: "red",
    length: 10,
    width: 10,
    height: 15,
    growTaller: function () {
        height += 5;
    }
}

function obj2(oHeight,startColour) {
    this.colour = startColour;
    this.height = oHeight;
    this.growTaller = function () {
        height = +5;
    }
}

//var t = new obj1();         // not allowed
obj1.colour = "blue";

var s = new obj2();
obj2.colour = "blue";
s.colour = "green";

var s1 = new obj2(12, "yellow");
var t1 = new obj2(20, "blue");
var u1 = new obj2(6, "orange");
var z = Math.abs(1.2345678);
z = z.toFixed(2);
alert(z);

obj2.prototype.perimeter = 106;
obj2.prototype.getArea = function () { return this.width * height; }

String.prototype.halflength = function () { return this.length / 2; }

var myString = "Hello";
alert(myString.halflength());

function abs(x) {
    if (x >= 0) {
        return x;
    }
    else {
        return -x;
    }
}
// factiorial(4) --> is 4 * 3 * 2 = 24
function factorial(n) { 
    var res = 1;
    while (n > 1) {
        res *= n;
        n--;
    }

    return res;
}

function factorial2(n) {
    var res = 1
    for (var c = 1; c <= n; c++) {
        res *= c;
    }

    return res;
}

// Using recursion
function factorialR(n) {
    if (n > 2)
        return n * factorialR(n - 1);
    else
        return n;
}

function GoToTheDoor() {
    // If not yet at the door
    // Take one step and GoToTheDoor()
}

var myfactorial = factorialR(4);
alert(myfactorial);

//var r = ++q + ++q;
//window.onload(function)