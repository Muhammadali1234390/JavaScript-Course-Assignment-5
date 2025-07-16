    function calculator() {
        let num1 = Number(prompt("Enter first number"));
        if (num1 === 0) {
            alert("Error! First number cannot be zero.");
            return;
        }

        let num2 = Number(prompt("Enter second number"));
        if (num2 === 0) {
            alert("Error! Second number cannot be zero.");
            return;
        }

        let sign = prompt("Enter operation sign");

        if(sign == "+"){
            alert("Answer:\n" + (num1 + num2));
        }
        else if(sign == "-"){
            alert("Answer:\n" + (num1 - num2));
        }
        else if(sign == "*"){
            alert("Answer:\n" + (num1 * num2));
        }
        else if(sign == "/"){
            alert("Answer:\n" + (num1 / num2));
        }
        else{
            alert("Please enter a valid operation sign (+, -, *, /)");
        }
    }

    calculator(); // function call