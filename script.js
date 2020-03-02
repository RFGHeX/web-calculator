function sum() {



    var numOne = document.getElementById("numOne").value;

    var numTwo = document.getElementById("numTwo").value;

    var opSelector = document.getElementById("operator")

    var operation = opSelector.options[opSelector.selectedIndex].value;


    switch (operation) {
        case "add":
            var result = parseInt(numOne) + parseInt(numTwo)
            break;
        case "subtract":
            var result = parseInt(numOne) - parseInt(numTwo)
            break;
        case "multiply":
            var result = parseInt(numOne) * parseInt(numTwo)
            break;
        case "divide":
            var result = parseInt(numOne) / parseInt(numTwo)
            break;
        default:
            var result = "What are you doing silly?!"
    }


    document.getElementById("result").innerHTML = result;
}