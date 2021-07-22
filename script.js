
const nums = document.querySelectorAll('#digit')
const operators = document.querySelectorAll('#operator')
const display = document.querySelector('#display')

let displayValue = 0
display.textContent = displayValue

let numArray = []
let working = false
let currentOperator = '';
let previousOperator = '';

document.addEventListener('click', function(event){
    if(event.target.closest('#digit')){
        if(display.textContent == 0 || working == true){
            display.textContent = event.target.textContent
            working = false
        }else{
            display.textContent += event.target.textContent
        }
    }
    if(event.target.closest('#operator')){

        switch(event.target.textContent){
            case 'ac':
                currentOperator = ''
                previousOperator = ''
                numArray.length = 0
                display.textContent = 0
                working = false
                break;
            case '+':
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
                    working = true
                }
            break;
            case '=':
                if(numArray.length == 1){
                    numArray.push(parseFloat(display.textContent))
                    first = numArray.shift()
                    second = numArray.shift()
                    newSum = operate(currentOperator, first, second)
                        if(Number.isInteger(newSum)){
                            display.textContent = newSum
                        } else{
                            display.textContent = newSum.toFixed(2)
                    }
                    
                    numArray.length = 0
                    working = false
                }
            break;
            case '-':
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
            case '.':
                let numTemp = parseInt(display.textContent.toFixed(2))
                display.textContent = numTemp;
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
    return num1 / num2;
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