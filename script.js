let display = document.getElementById("display");
let angleMode = document.getElementsByName("angleMode");
let selectedTrigFunc = null;

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function setMode(mode) {
    angleMode = mode;
}

function input(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
    selectedTrigFunc = null;
}

function deleteChar(){
    display.value = display.value.slice(0,-1);
}

function selectTrigFunc(func){
    selectedTrigFunc = func;
    display.value += `Math.${func}(`;
}

function calculate(){
    try{
        let value = parseFloat(display.value.match(/\d+(\.\d+)?/)[0]);
        if(angleMode === "radians"){
            value = toRadians(value);
        switch (selectedTrigFunc) {
            case "sin":
                display.value = Math.sin(value);
                break;
            case "cos":
                display.value = Math.cos(value);
                break;
            case "tan":
                display.value = Math.tan(value);
                break;
            default:
                display.value = "Error";
        }
        selectedTrigFunc = null;
    }else{
        display.value = eval(display.value);
    }
    }catch(error){
        display.value = "Error";
    }
}
