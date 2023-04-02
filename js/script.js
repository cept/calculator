const numbers = document.querySelectorAll('.number');
const screen = document.querySelector('.calculator-screen');
const operators = document.querySelectorAll('.operator');
const equalSign = document.querySelector('.equal-sign');
const allClearBtn = document.querySelector('.allClear');
const decimal = document.querySelector('.decimal');
let prevNumber = '';
let currentNumber = '0';
let calculationOperator = '';

const updateScreen = (number) => {
    screen.value = number;
};

const inputNumber = (number) => {
    if(currentNumber === "0") {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

const inputOperator = (operator) => {
    if(calculationOperator === ''){
        prevNumber = currentNumber;

    }
    calculationOperator = operator;
    currentNumber = '0';
}

operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        inputOperator(event.target.value);
    });
});

equalSign.addEventListener('click', () => {
    let result = '';
    switch(calculationOperator){
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            return
    }

    currentNumber = result;
    calculationOperator = '';
    updateScreen(currentNumber);
});

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
};

allClearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
});

const inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
};

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

const inputPercent = (percent) => {
    if(currentNumber.includes('%')) {
        return;
    }
    currentNumber += percent;
}

const percent = document.querySelector('.percent');
percent.addEventListener('click', (event) => {
    inputPercent(event.target.value);
    updateScreen(currentNumber);
});