function enterNumbers(input){
    var num1, num2, operator;
    num1 = document.getElementById('input1').value;
    num2 = document.getElementById('input2').value;
    operation = document.getElementById('operation').value;
    console.log(num1);
    
    if(operation === ''){
        document.getElementById('input1').value += input;
    }
    else {
        document.getElementById('input2').value += input;
    }
}

function enterOperation(input) {
    document.getElementById('operation').value = input;
}



function calculator () {
    var num1, num2, operation, answer;
    num1 = Number(document.getElementById('input1').value);
    num2 = Number(document.getElementById('input2').value);
    operation = document.getElementById('operation').value;
    switch (operation) {
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case '×':
        case '*':
            answer = num1 * num2;
            break;
        case '÷':
        case '/':
            answer = num1 / num2;
            break;
    }

    document.getElementById('answer').value = answer;
}

function reset() {
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('operation').value = '';
}