$(document).ready(function() {
    let currentInput = "";
    let operator = "";
    let previousInput = "";

    // Select screen element to display calculations
    const screen = $('#screen');

    // Function to update the screen
    function handleNumber(number) {
        currentInput += number;
        screen.text(currentInput);
    }

    // Handles button clicks
    function handleOperator(op) {
        if (currentInput === '') return;
        if (previousInput !== '') {
            calculate(); // Calculate the results first in order
        }
        operator = op;
        previousInput = currentInput;
        currentInput = ''; // Clears current input for next number
    }

    // Function that clears input
    function clearInput() {
        currentInput = '';
        previousInput = '';
        operator = '';
        screen.text('0');
    }

    // Function to calcuate the result
    function calculate()  {
        if (previousInput === '' || currentInput === '') return;
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }

        currentInput = result.toString();
        operator = '';
        previousInput = '';
        screen.text(currentInput);
    }
    // Function to handle the decimal point
    function handleDecimal() {
        // Only allows decimal if input doesn't already contain one
        if (!currentInput.includes('.')) {
            currentInput += '.';
            screen.text(currentInput);
        }
    }
    // Add event listeners for buttons using jQuery
    $('.btn').click(function() {
        const value = $(this).data('value');
        if (value === 'C') {
            clearInput();
        } else if (value === '=') {
            calculate(); // Calculate teh result when selecting '='
        } else if (['+', '-', '*', '/'].includes(value)) {
            handleOperator(value);
        } else if (value === '.') {
            handleDecimal(); // Handles decimal point
        } else {
            handleNumber(value);
        }
    });
 });