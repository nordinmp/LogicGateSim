let inputs = [];
let outputs = [];
let logicGates = [];
let gateChoice;

function setup() 
{
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 6; i = i + 1)
  {
    let newInput = new Input(65, 200 + (100 * i), i + 1);

    inputs.push(newInput);
  }

  for (let i = 0; i < 3; i = i + 1)
  {
    let newOutput = new Output(width - 60, 200 + (200 * i), i );

    outputs.push(newOutput);
  }


  // Logic gate options
  gateChoice = createSelect();
  gateChoice.position(25, height - 50);
  gateChoice.size(100,35)


  gateChoice.option('And Gate');
  gateChoice.option('Or Gate');

  gateChoice.option('Not Gate');
  gateChoice.option('Buffer Gate');

  gateChoice.option('Xor Gate');
  gateChoice.option('Xnor Gate');
  gateChoice.option('Nor Gate');  

  gateChoice.option('Nand Gate');

  // Set the selected option to "And Gate".
  gateChoice.selected('And Gate');

  // Buttons
  undoBtn = createButton('Undo');
  undoBtn.position(width - 90, height - 50);
  undoBtn.size(75,35)
  undoBtn.mousePressed(undoGate);
}

function draw() 
{
  background(220);

  push();
  fill(0,0,0,150);
  textSize(40);
  textAlign(CENTER);
  text('Logic Gate Simulator', width / 2, height / 3); // Position the title closer to the top
  
  textSize(16);
  text('Double click anywhere to make a new gate.', width / 2, height / 3 + 60); // Adjusted position
  text('Inputs are required but outputs are optional.', width / 2, height / 3 + 90); // Adjusted position
  text('Normal inputs are from 1 - 6, but if you use other logic gates as inputs they are from A - Z', width / 2, height / 3 + 120); // Adjusted position
  text('Choose different kinds of logic gates from the dropdown in the left corner.', width / 2, height / 3 + 150); // Adjusted position
  text('You can undo your logic gates in the right corner.', width / 2, height / 3 + 180); // Adjusted position
  text('Most logic gates have 2 inputs, except for Buffer- and Not Gates they only have 1.', width / 2, height / 3 + 210); // Adjusted position
  pop();

  line(150, 0, 150, height)

  line(width - 100, 0, width - 100, height)


  for (let i = 0; i < inputs.length; i = i + 1) 
  {
    inputs[i].showInput(); // This should draw the input on the canvas
    inputs[i].inputStatus(); // This updates the input's state
  }


  let conditionalLinesDrawnFlags = [];

  for (let i = 0; i < logicGates.length; i = i + 1)
  { 


    logicGates[i].update();

    if (logicGates[i].gateOption == "And Gate")
    {
      logicGates[i].andGate();
    }

    else if (logicGates[i].gateOption == "Or Gate")
    {
      logicGates[i].orGate();
    }

    else if (logicGates[i].gateOption == "Not Gate")
    {
      logicGates[i].notGate();
    }

    else if (logicGates[i].gateOption == "Nand Gate")
    {
      logicGates[i].nandGate();
    }
    
    else if (logicGates[i].gateOption == "Nor Gate")
    {
      logicGates[i].norGate();
    }

    else if (logicGates[i].gateOption == "Xor Gate")
    {
      logicGates[i].xorGate();
    }
    else if (logicGates[i].gateOption == "Xnor Gate")
    {
      logicGates[i].xnorGate();
    }

    else if (logicGates[i].gateOption == "Buffer Gate")
    {
      logicGates[i].bufferGate();
    }
    
    logicGates[i].setupInputs();

    conditionalLinesDrawnFlags[i] = true;

    logicGates[i].drawConditionalLines();

  }

  for (let i = 0; i < logicGates.length; i = i + 1)
  {
      if (conditionalLinesDrawnFlags[i])
      {
        logicGates[i].drawLogicGate();
      }
  }

  for (let i = 0; i < outputs.length; i = i + 1)
  { 
    outputs[i].drawOutput();
  }

}

function doubleClicked() 
{

  // Prompt for input numbers
  promptInput = prompt("What inputs do you want to use? eg. 1 2");

  // Check if promptInput is not empty
  if (!promptInput) {
    console.log("No input was provided.");
    return; // Return early if no input was provided
  }  
  promptInputNumbers = split(promptInput, " ");
  promptOutput = prompt("What output do you want to use? eg. 2");

  promptOutputNumbers = split(promptOutput, " ");



  // Check if any existing gate is already using the specified output
  let outputInUse = false;
  for (let i = 0; i < logicGates.length; i++) {
     if (logicGates[i].outputNum1 == promptOutputNumbers[0]) {
       outputInUse = true;
       console.log("Output is already in use by another gate.");
       break; // Exit the loop as soon as we find the output is in use
     }
  }

  // Only create a new LogicGate if the output is not in use
  if (!outputInUse) {
    let gateType = gateChoice.value(); // Correctly get the selected value

    // Directly create and push a new gate based on the selected option
    let newGate;
    switch(gateType) {
      case 'And Gate':
        newGate = new AndGate(mouseX, mouseY, promptInputNumbers[0], promptInputNumbers[1], promptOutputNumbers[0], gateChoice.value());
        break;
      case 'Or Gate':
        newGate = new OrGate(mouseX, mouseY, promptInputNumbers[0], promptInputNumbers[1], promptOutputNumbers[0], gateChoice.value());
        break;
      case 'Not Gate':
        newGate = new NotGate(mouseX, mouseY, promptInputNumbers[0], promptOutputNumbers[0], gateChoice.value());
        break;
      case 'Buffer Gate':
        newGate = new BufferGate(mouseX, mouseY, promptInputNumbers[0], promptOutputNumbers[0], gateChoice.value());
        break;
      case 'Xor Gate':
        newGate = new XorGate(mouseX, mouseY, promptInputNumbers[0], promptInputNumbers[1], promptOutputNumbers[0], gateChoice.value());
        break;
      case 'Xnor Gate':
        newGate = new XnorGate(mouseX, mouseY, promptInputNumbers[0], promptInputNumbers[1], promptOutputNumbers[0], gateChoice.value());
        break;
      case 'Nor Gate':
        newGate = new NorGate(mouseX, mouseY, promptInputNumbers[0], promptInputNumbers[1], promptOutputNumbers[0], gateChoice.value());
        break;
      case 'Nand Gate':
        newGate = new NandGate(mouseX, mouseY, promptInputNumbers[0], promptInputNumbers[1], promptOutputNumbers[0], gateChoice.value());
        break;
      default:
        console.log("Invalid gate type. Please try again.");
        console.log(gateChoice.value, gateType);
        return; // Exit the function if an invalid gate type is selected
    }

    if (newGate) {
      logicGates.push(newGate);
    }
  }
}

function undoGate() 
{
  if (logicGates.length > 0)
  {
    logicGates.splice(logicGates.length - 1, 1);
  }
}

function mousePressed() {
  for (let i = 0; i < logicGates.length; i = i + 1)
  { 
    logicGates[i].pressed();
  }
}

function mouseReleased() {
  // Quit dragging
for (let i = 0; i < logicGates.length; i = i + 1)
  { 
    logicGates[i].released();
  }
}