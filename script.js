var num1 = parseInt (prompt('Input a Number: '));
var opr = prompt("Select a Basic Math Operator: + - * / ");
var num2 = parseInt (prompt('Input another Number: '));



if (opr === '+') {
    alert(num1 + num2);
    console.log (num1 + num2)
}
    else if (opr === '-' ){
        alert(num1 - num2);
        console.log (num1 - num2)   
    }
    else if (opr === '*' ){
        alert(num1 * num2);
        console.log (num1 * num2)   
    }
    else if (opr === '/' ){
        alert(num1 / num2);
        console.log (num1 / num2)   
    }

