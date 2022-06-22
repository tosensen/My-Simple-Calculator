function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function modulus(a, b) {
    return a % b;
}






function calculate() {
    var a = parseInt(prompt("Enter the first number"));
    var b = parseInt(prompt("Enter the second number"));
    var operator = prompt("Enter operator you wish to use from the list below: +, -, *, /, %");
    var result;
    switch (operator) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
        case "%":
            result = modulus(a, b);
            break;
        default:
            alert("Invalid operator");
            break;
    }
    alert(result);
}
calculate();