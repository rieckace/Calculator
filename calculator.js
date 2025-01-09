document.addEventListener('DOMContentLoaded', function () {
    var operator = "";
    var FirstNumber = "";
    var SecondNumber = "";

    window.append = function (Number) {
        if (operator === "") {
            FirstNumber += Number;
            document.getElementById('calculator').value = FirstNumber;
        } else {
            SecondNumber += Number;
            document.getElementById('calculator').value = FirstNumber + operator + SecondNumber;
        }
    };

    window.setOperator = function (op) {
        if (FirstNumber === "") return;
        operator = op;
        document.getElementById('calculator').value = FirstNumber + " " + operator;
    };

    window.showresult = function () {
        if (FirstNumber === "" || SecondNumber === "" || operator === "") return;
        let res;
        switch (operator) {
            case '+':
                res = parseInt(FirstNumber) + parseInt(SecondNumber);
                break;
            case '-':
                res = parseInt(FirstNumber) - parseInt(SecondNumber);
                break;
            case '*':
                res = parseInt(FirstNumber) * parseInt(SecondNumber);
                break;
            case '/':
                res = parseInt(FirstNumber) / parseInt(SecondNumber);
                break;
            default:
                res = NaN;
        }
        document.getElementById('calculator').value = res;
        // Reset after calculation for new input
        FirstNumber = res.toString();
        SecondNumber = "";
        operator = "";
    };

    window.reset = function () {
        FirstNumber = "";
        SecondNumber = "";
        operator = "";
        document.getElementById('calculator').value = "";
    };

    const body = document.querySelector('body');
    const changeColorButton = document.getElementById('changeColorButton');
    const colors = ['pale-blue', 'teal', 'khaki', 'orange', 'violet', 'purple', 'blue-gray'];

    body.style.backgroundColor = 'silver';

    if (changeColorButton) {
        changeColorButton.addEventListener('click', function () {
            const colorIndex = Math.floor(Math.random() * colors.length);
            body.style.backgroundColor = colors[colorIndex];
        });
    }
});
