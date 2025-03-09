$(document).ready(function() {
    let currentInput = "";
    let operator = "";
    let previousInput = "";

    // Function ot update the screen
    function updateScreen(value) {
        $('#screen').text(value);
    }

    // Handles button clicks
    $(".btn").click(function() {
        const value = $(this).data("value");
        
        // When equals buttons is selected, expression is evaluated
        if (value === "=") {
            try {
                // Removes any non-mathematical characters
                currentInput = currentInput.replace(/[^0-9+\-*/.]/g, "");
                currentInput = eval(currentInput);
                updateScreen(currentInput);
            } catch (error) {
                currentInput = "Error"; // Error for invalid expression
                updateScreen(currentInput);
            }
        } else if(value === "C") {
            // Clears the screen when 'C' is selected
            currentInput = "";
            updateScreen(currentInput);
        } else {
            // Checks if currentInput is 0, and resets if the user presses a number
            if (currentInput === "0" && value !== "/" && value !== "*" && value !== "+" && value !== "-") {
                currentInput = value;
            } else {
                // If it's an operatot, ensure we don't pass another opeator
                if (["+", "-", "*", "/"].includes(value) && ["+","-","*","/"].includes(currentInput.slice(-1))) {
                    return; // prevendings appending consectutive operators
                } else {
                    currentInput += value;
                }
            }
            updateScreen(currentInput);
        }
    });

    // Hover effect to show button interaction
    $(".btn").hover(function() {
        $(this).css("background", "#666");
    }, function() {
        $(this).css("background", "#444");
    });
 });