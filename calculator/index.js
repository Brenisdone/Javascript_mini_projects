const display = document.getElementById('display');
let append = true;
function appendtoDisplay(key){
    if(append){
        display.value += key;
    }
    else if(!append){
        display.value = "";
        append = true;
        display.value += key;
    }
}

function clearDisplay(){
    display.value = "";
    append = true;
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'ERR';
        append = false;
    }
}