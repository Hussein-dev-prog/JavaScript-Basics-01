const element = document.getElementById('validate')
element.addEventListener("click", () => {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var city = document.getElementById("city").value;
    alert( "Hello, "+"\r\n"+"Nome : "+name +"\r\n"+"Prénom : "+ surname +"\r\n"+"Ville : "+ city)  
    
    ; });

       
       
    