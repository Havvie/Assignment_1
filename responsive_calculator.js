$(document).ready(function () {
    let currentValue = 0;
    let equation = '';

    function updateScreen() {
        $('s#screen').text(currentValue);
    }

    $('.btn').click(function () {
        let value = $(this).data('value');
        if (value === 'C') {
            currentValue = '0'; // Reset screen
        } else if (value === '=') {
            try {
                currentValue = eval(currentValue).toString();
                screen.text(equation);
            } catch (e) {
                currentValue = 'Error'; // Shows error if 
            }
        } else {
            if (currentValue ==='0') {
                currentValue = value;
            } else {
                currentValue += value;
            }
            updateScreen();
        }
    });
});