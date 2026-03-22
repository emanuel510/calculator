const display = document.getElementById("Display");
function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}
function calculate(){
    try{
    display.value = eval(display.value);
    if(display.value === "Infinity" || display.value === "-Infinity"){
        display.value = "You can't divide by 0";
    }
    if(display.value === "NaN"){
        display.value = "You can't divide by 0";
    }
    if(display.value === "undefined"){
        display.value = "Wrong operation!";
    }
    }
    catch{
        display.value = `Wrong operation!`;
    }
}
