
const nums = document.querySelectorAll('#digit')
const operators = document.querySelectorAll('#operator')
const display = document.querySelector('#display')

let displayValue = 0
display.textContent = displayValue

let numArray = []

document.addEventListener('click', function(event){
    if(event.target.closest('#digit')){
        if(display.textContent == 0){
            display.textContent = event.target.textContent
        }else{
            display.textContent += event.target.textContent
        }
    }
    if(event.target.closest('#operator')){
        switch(event.target.textContent){
            case 'ac':
                numArray.length = 0
                display.textContent = 0
                break;
            case '+':
                numArray.push(parseInt(display.textContent))
                if(numArray.length == 1){
                    display.textContent = 0
                }else if(numArray.length > 1){
                    display.textContent = 0
                    first = numArray.shift()
                    second = numArray.shift()
                    newSum = add(first, second)
                    numArray.push(newSum)
                    display.textContent = newSum
                }
            break;
        }
    }
})


function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}


function operate(operator, num1, num2){
    switch(operator){
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2)
            break;
        case '*':
            multiply(num1, num2)
            break;
        case '/':
            divide(num1, num2)
             break;
    }
}