function MINE(a,b) {
  return a * b;
}

const MINE = function(a, b) {return a * b};

const next = MINE(4,5);

function constructors

const myFunction = new Function("a", "b", "return a * b");

const x = myFunction(5,4);


<!DOCTYPE html>
<html>
<body>

<p>JavaScript has an built-in function constructor.</p>
<p id="demo"></p>

<script>
var myFunction = new Function("a", "b", "return a * b");
document.getElementById("demo").innerHTML = myFunction(4, 10);
</script>

</body>
</html>

Plus, you don't have to use the constructor: shorter form -- 

var myFunction = function(a,b) {return a * b};
var x = myFunction(4,3);

SELF-invoking function -- add parentheses 
(function () {
  var x = "hello world";
});

Functions used as values 
Functions used as objects -- they have methods and properties 

function myF(a.b) {
  return arguments.length;
} 

function myFunction(a, b) {
    return a * b;
}

var txt = myFunction.toString();



