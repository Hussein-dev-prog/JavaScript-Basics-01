const element = document.getElementById('validate')
element.addEventListener("click", () => {
    var first_number = document.getElementById("first_number").value;
    var second_number = document.getElementById("second_number").value;
    var Division = first_number / second_number ;
    var Reminder = first_number % second_number ;

    alert ("The Reminder is: "+ Reminder)  
    
    ; });