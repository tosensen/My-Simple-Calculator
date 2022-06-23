let first = parseInt(prompt("Enter your first number"));
let operator = prompt("Enter operator you wish to use from the list below: +, -, *, /, %");
let second = parseInt(prompt("Enter your second number"));

if (operator === "+") {
    let addition = first + second;
    alert(addition);
} else if(operator ==="-"){
    let subtraction = first - second;
    alert(subtraction);
} else if(operator ==="*"){
    let multiplication = first * second;
    alert(multiplication);
} else if(operator ==="/"){
    let division = first / second;
    alert(division);
} else if(operator ==="%"){
    let modulus = first % second;
    alert(modulus);
} else (
    alert("Invalid Input"));

    
