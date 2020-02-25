function sum() {

    

    var numOne = document.getElementById("numOne").value;

    var numTwo = document.getElementById("numTwo").value;  
    
    var result = Number(numOne) + Number(numTwo)
    
    document.getElementById("result").innerHTML= result;
}