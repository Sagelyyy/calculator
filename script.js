
const nums = document.querySelectorAll('#digit')
const operators = document.querySelectorAll('#operator')
const display = document.querySelector('#display')

let displayValue = 0
display.textContent = displayValue

let numArray = []
let summed = false
let working = false
let isDecimal = false;
let currentOperator = '';
let previousOperator = '';
let digitCount = 0

document.addEventListener('click', function(event){
    if(event.target.closest('#digit')){
        switch(event.target.textContent){
            case '0':
            case '1':
            case '2':
            case '3': 
            case '4':
            case '5':
            case '6': 
            case '7':
            case '8':
            case '9': 
                if(display.textContent == 0 || working == true || summed == true){
                    digitCount++
                    display.textContent = event.target.textContent
                    working = false
                    summed = false
                }else if(digitCount < 11){
                    digitCount++
                    display.textContent += event.target.textContent
                }
            break;
            case '.':
                if(display.textContent == 0 && display.textContent != '0.'){
                    isDecimal = true
                    display.textContent += event.target.textContent
                }else if(display.textContent > 0 && isDecimal == false){
                    isDecimal = true
                    display.textContent += event.target.textContent
                }
            break;
        }
    }
    if(event.target.closest('#operator')){

        switch(event.target.textContent){
            case 'ac':
                digitCount = 0;
                currentOperator = '';
                previousOperator = '';
                numArray.length = 0;
                display.textContent = 0;
                working = false;
                isDecimal = false;
                break;
            case '+':
                digitCount = 0;
                previousOperator = currentOperator
                currentOperator = '+'
                    numArray.push(parseFloat(display.textContent))
                if(numArray.length == 1){
                    display.textContent = 0
                }else if(numArray.length > 1){
                    first = numArray.shift()
                    second = numArray.shift()
                    if(previousOperator){
                        newSum = operate(previousOperator,first, second)
                    }else{
                        newSum = operate(currentOperator,first, second)
                    }
                    numArray.push(newSum)
                    display.textContent = newSum

                }
                working = true
            break;
            case '=':
                let isExponent = false
                digitCount = 0;
                summed = true
                if(numArray.length == 1){
                    numArray.push(parseFloat(display.textContent))
                    first = numArray.shift()
                    second = numArray.shift()
                    newSum = operate(currentOperator, first, second)
                    if(newSum.toString().length > 11){
                        display.textContent = newSum.toExponential(5)
                        isExponent = true
                    }
                    if(isExponent == false){
                        display.textContent = newSum
                    }
                    numArray.length = 0
                }
            isExponent = false
            break;
            case '-':
                digitCount = 0;
                previousOperator = currentOperator
                currentOperator = '-'
                numArray.push(parseFloat(display.textContent))
                if(numArray.length == 1){
                    display.textContent = 0
                }else if(numArray.length > 1){
                    first = numArray.shift()
                    second = numArray.shift()
                    if(previousOperator){
                        newSum = operate(previousOperator,first, second)
                    }else{
                        newSum = operate(currentOperator,first, second)
                    }
                    numArray.push(newSum)
                    display.textContent = newSum
                    working = true
                }
                break;
            case '*':
                digitCount = 0;
                previousOperator = currentOperator
                currentOperator = '*'
                numArray.push(parseFloat(display.textContent))
                if(numArray.length == 1){
                    display.textContent = 0
                }else if(numArray.length > 1){
                    first = numArray.shift()
                    second = numArray.shift()
                    if(previousOperator){
                        newSum = operate(previousOperator,first, second)
                    }else{
                        newSum = operate(currentOperator,first, second)
                    }
                    numArray.push(newSum)
                    display.textContent = newSum
                    working = true
                }
                break;
            case '/':
                digitCount = 0;
                previousOperator = currentOperator
                currentOperator = '/'
                numArray.push(parseFloat(display.textContent))
                if(numArray.length == 1){
                    display.textContent = 0
                }else if(numArray.length > 1){
                    first = numArray.shift()
                    second = numArray.shift()
                    if(previousOperator){
                        newSum = operate(previousOperator,first, second)
                    }else{
                        newSum = operate(currentOperator,first, second)
                    }
                    numArray.push(newSum)
                    display.textContent = newSum
                    working = true
                }
                break;

            case '%':
                let percentTemp = divide(parseInt(display.textContent), 100)
                display.textContent = percentTemp.toFixed(2)
                break;

            case '+/-':
                if(parseInt(display.textContent) > 0){
                    display.textContent = -Math.abs(parseInt(display.textContent))
                }else{
                    display.textContent = Math.abs(parseInt(display.textContent))
                }
        }
    }
})


function add(num1, num2){
    previousOperator = '+';
    return num1 + num2;
}

function subtract(num1, num2){
    previousOperator = '-';
    return num1 - num2;
}

function multiply(num1, num2){
    previousOperator = '*';
    return num1 * num2;
}

function divide(num1, num2){
    previousOperator = '/';
    if(num2 != 0){
        return num1 / num2;
    } else{
        return 'Nah bro'
    }
}


function operate(operator, num1, num2){
    switch(operator){
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2)
        case '*':
            return multiply(num1, num2)
        case '/':
            return divide(num1, num2)
    }
}