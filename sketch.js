let inputs = [];
let outputs = [];
let logicGates = [];
let gateChoice;

function setup() 
{
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 6; i = i + 1)
  {
    let newInput = new Input(50, 200 + (100 * i), i + 1);

    inputs.push(newInput);
  }

  for (let i = 0; i < 3; i = i + 1)
  {
    let newOutput = new Output(width - 50, 200 + (200 * i), i );

    outputs.push(newOutput);
  }


  // Logic gate options
  gateChoice = createSelect();
  gateChoice.position(25, height - 20);

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


  // Knapper
  
}

function draw() 
{
  background(220);

  line(150, 0, 150, height)

  line(width - 100, 0, width - 100, height)


  for (let i = 0; i < inputs.length; i = i + 1) 
  {
    inputs[i].showInput(); // This should draw the input on the canvas
    inputs[i].inputStatus(); // This updates the input's state
  }

  for (let i = 0; i < logicGates.length; i = i + 1)
  { 
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
    
    logicGates[i].drawLogicGate();

  }

  for (let i = 0; i < outputs.length; i = i + 1)
  { 
    outputs[i].drawOutput();
  }
}


class Input
{
  constructor(x, y, inputNum)
  {
    this.x = x;
    this.y = y;

    this.num = inputNum;
    
    this.checkbox = createCheckbox();
    this.checkbox.position(this.x, this.y);
  }
  
  showInput()
  {
    fill(0); 
    textSize(16);  
    textAlign(CENTER,CENTER);
    
    text('Input ' + this.num, this.x+10, this.y+35);
  }

  inputStatus()
  {
    if (!this.checkbox.checked())
    {
      return false;
    }
    return true;  
  }
}

class Output
{
  constructor(x, y, listNum)
  {
    this.x = x;
    this.y = y;
    this.logicText = "false";

    this.listNum = listNum;

    this.colorR = 0
    this.colorB = 0
    this.colorG = 0
  }
  
  drawOutput() 
  {
    push();
    fill(this.colorR, this.colorG, this.colorB)

    rect(this.x, this.y, 20, 20);
    pop();

    if (logicGates.length > 0)
    {
      // Check all logic gates to see if they are connected with output
      for (let i = 0; i < logicGates.length; i = i + 1)
      {
        this.outputNum = logicGates[i].outputNum1 - 1
        
        // If they have the same number, they are connected
        if (this.outputNum == this.listNum) 
        {
          // And they text of Output should be changed accordingly
          this.logicText = logicGates[i].logicText;


          if (this.logicText === "true")
          {
            this.colorR = 255;
            this.colorG = 255;
            this.colorB = 0;
          } 
          else
          {
            this.colorR = 0;
            this.colorB = 0;
            this.colorG = 0;
          }
        } 
      }
    }

    text("Output", this.x + 10, this.y + 40);
    text(this.logicText, this.x + 10, this.y + 66);
  }
}

function doubleClicked() 
{
  // Prompt for input numbers
  promptInput = prompt("What inputs do you want to use? eg. 1 2");
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
        newGate = new BufferGate(mouseX, mouseY, promptInputNumbers[0] , promptOutputNumbers[0], gateChoice.value());
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

        console.log(gateChoice.value , gateType);
        return; // Exit the function if an invalid gate type is selected
    }

    if (newGate) {
      logicGates.push(newGate);
    }
  }
}