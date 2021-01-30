var inputText = document.querySelector(".input-text");
var btn = document.querySelector(".btnClick")
var outputText = document.querySelector(".output-div");

function clickHandler(){
var isPrime = true;
if(parseInt(inputText.value) || inputText.value == 0){
    
    var finalString = "";
    var numberFromUser = parseInt(inputText.value);
    if(numberFromUser == 0){

        finalString = "Zero is neither prime nor composite";
    }else
    
    if(numberFromUser == 1){
        finalString = "1 is unity : neither prime nor composite";
    
    }else
    
    if(numberFromUser == 2){
        finalString = "Number 2 is prime";
    }  
    else
    
    if(numberFromUser == 3){
        finalString = "Number 3 is prime";
    }  
    
    else{
        for(var i=2 ; i<=numberFromUser/2 ; i++){

        if(numberFromUser%i == 0){
            finalString = "Number " + numberFromUser + " is not prime";
            isPrime = false;
            break;
        }
    }

        if(isPrime == true){
            finalString = "Number " + numberFromUser + " is Prime";
        }
    }
}else{
    finalString = "Please Enter numeric values only";
        alert("Please Enter numeric values only");
}


outputText.innerText = finalString;

}

if(btn!=null){
    btn.addEventListener("click",clickHandler);
}