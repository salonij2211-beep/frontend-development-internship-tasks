let display = document.getElementById("display");


// Add Value Function
function appendValue(value){

  display.value += value;

}


// Clear Display Function
function clearDisplay(){

  display.value = "";

}


// Calculate Function
function calculate(){

  try{

    display.value = eval(display.value);

  }

  catch{

    display.value = "Error";

  }

}