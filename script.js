let display = document.getElementById("display");
let angleMode = 'degrees'; // Default mode is degrees
let selectedFunc = null; // To store selected function (like sqrt, log)
let selectedTrigFunc = null; // To store selected trig function

// Set the mode (degrees or radians)
function setMode(mode) {
  angleMode = mode;
}

// Handle input
function input(value) {
  display.value += value;
}

// Clear display
function clearDisplay() {
  display.value = "";
  selectedFunc = null; // Reset selected function
  selectedTrigFunc = null; // Reset trig function
}

// Delete last character
function deleteChar() {
  display.value = display.value.slice(0, -1);
}

// Select trigonometric function (sin, cos, tan)
function selectTrigFunc(func) {
  selectedTrigFunc = func;
  display.value = func + "("; // Show selected trig function on display
}

// Select general function (sqrt, log)
function selectFunc(func) {
  selectedFunc = func;
  display.value = func + "("; // Show selected function on display
}

// Convert degrees to radians
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

// Calculate result based on the input
function calculate() {
  try {
    let value = parseFloat(display.value.match(/\d+(\.\d+)?/)[0]); // Extract number from display
    if (selectedTrigFunc) {
      if (angleMode === 'degrees') {
        value = toRadians(value); // Convert degrees to radians if necessary
      }
      switch (selectedTrigFunc) {
        case 'sin':
          display.value = Math.sin(value);
          break;
        case 'cos':
          display.value = Math.cos(value);
          break;
        case 'tan':
          display.value = Math.tan(value);
          break;
        default:
          display.value = "Error";
      }
      selectedTrigFunc = null; // Reset trig function after calculation
    } else if (selectedFunc) {
      switch (selectedFunc) {
        case 'sqrt':
          display.value = Math.sqrt(value);
          break;
        case 'log':
          display.value = Math.log(value);
          break;
        default:
          display.value = "Error";
      }
      selectedFunc = null; // Reset selected function after calculation
    } else {
      // If no special function is selected, calculate normally
      display.value = eval(display.value);
    }
  } catch (error) {
    display.value = "Error";
  }
}
