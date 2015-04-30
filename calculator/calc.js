var button = document.getElementById("submitButton");
var sqrt = document.getElementById("submitButton√");
var Cos = document.getElementById("submitButtonCos");
var Tan = document.getElementById("submitButtonTan");
var Sin = document.getElementById("submitButtonSin");
button.addEventListener("click", function() {
    if(document.getElementById("DropdownMenu1").value == "+") {
        var num1 = document.getElementById('Number1').value;
        var num2 = document.getElementById('Number2').value;
        var answer = parseInt(num1) + parseInt(num2);
        document.getElementById('Answer').innerHTML = answer;
        if(parseInt(num1) === 9 && parseInt(num2) === 10) {
            document.getElementById('Answer').innerHTML = answer = 21;
        }
    }
}, true);
button.addEventListener("click", function() {
    if(document.getElementById("DropdownMenu1").value == "-") {
        var num1 = document.getElementById('Number1').value;
        var num2 = document.getElementById('Number2').value;
        var answer = parseInt(num1) - parseInt(num2);
        document.getElementById('Answer').innerHTML = answer;
    }
}, true);
button.addEventListener("click", function() {
    if(document.getElementById("DropdownMenu1").value == "x") {
        var num1 = document.getElementById('Number1').value;
        var num2 = document.getElementById('Number2').value;
        var answer = parseInt(num1) * parseInt(num2);
        document.getElementById('Answer').innerHTML = answer;
    }
}, true);
button.addEventListener("click", function() {
    if(document.getElementById("DropdownMenu1").value == "÷") {
        var num1 = document.getElementById('Number1').value;
        var num2 = document.getElementById('Number2').value;
        var answer = parseInt(num1) / parseInt(num2);
        document.getElementById('Answer').innerHTML = answer;
    }
}, true);
button.addEventListener("click", function() {
    if(document.getElementById("DropdownMenu1").value == "&") {
        var num1 = document.getElementById('Number1').value;
        var num2 = document.getElementById('Number2').value;
        var answer = parseInt(num1) & parseInt(num2);
        document.getElementById('Answer').innerHTML = answer;
    }
}, true);
button.addEventListener("click", function() {
    if(document.getElementById("DropdownMenu1").value == "mod") {
        var num1 = document.getElementById('Number1').value;
        var num2 = document.getElementById('Number2').value;
        var answer = parseInt(num1) % parseInt(num2);
        document.getElementById('Answer').innerHTML = answer;
    }
}, true);
button.addEventListener("click", function() {
    if(document.getElementById("DropdownMenu1").value == "^") {
        var num1 = document.getElementById('Number1').value;
        var num2 = document.getElementById('Number2').value;
        var answer = Math.pow(parseInt(num1), parseInt(num2));
        document.getElementById('Answer').innerHTML = answer;
    }
}, true);
sqrt.addEventListener("click", function() {
    var squart = document.getElementById('√').value;
    var answer = Math.sqrt(parseInt(squart));
    document.getElementById('Answer').innerHTML = answer;
}, true);
Cos.addEventListener("click", function() {
    var Cos1 = document.getElementById('Cos').value;
    var answer = Math.cos(parseInt(Cos1));
    document.getElementById('Answer').innerHTML = answer;
}, true);
Tan.addEventListener("click", function() {
    var Tan1 = document.getElementById('Tan').value;
    var answer = Math.tan(parseInt(Tan1));
    document.getElementById('Answer').innerHTML = answer;
}, true);
Sin.addEventListener("click", function() {
    var Sin1 = document.getElementById('Sin').value;
    var answer = Math.sin(parseInt(Sin1));
    document.getElementById('Answer').innerHTML = answer;
}, true);