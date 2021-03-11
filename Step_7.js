function MyFunction(){
    const element = document.getElementById('validate')
element.addEventListener("click", () => {
    var shoe_size = document.getElementById("shoe_size").value;
    var year = document.getElementById("year").value;
    var Total = shoe_size * 2 ;
    Total+=5 ; 
    Total*=50;
    Total-=year;
    Total+=1766;

    alert ("The Total is: "+Total)  
    
    ; });
}
MyFunction();