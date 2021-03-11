const element = document.getElementById('validate')
element.addEventListener("click", () => {
    var first_number = document.getElementById("first_number").value;
    var second_number = document.getElementById("second_number").value;
    var Total = first_number * second_number ;
    alert (first_number + " *  "+ second_number +" =  "+ Total)  
    
    ; });