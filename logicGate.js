class LogicGate 
{
  constructor(x, y, inputNum1, inputNum2, outputNum1, gateOption) 
  {
    this.x = x;
    this.y = y;
    this.logicText = "false";
    
    this.inputNum1 = int(inputNum1);
    this.inputNum2 = int(inputNum2);

    this.outputNum1 = int(outputNum1);
    
    this.gateOption = gateOption;
    
    fill(0); 
    textSize(16); 
    textAlign(CENTER);
  }

  notGate() 
  {
    // Check that the input number is valid
    if (this.inputNum1 <= 0 || this.inputNum1 > inputs.length || this.inputNum2 <= 0 || this.inputNum2 > inputs.length) {
      console.error('Invalid input numbers:', this.inputNum1, this.inputNum2);
      return; // Exit the method if the input numbers are invalid
    }

    this.input1 = inputs[this.inputNum1 - 1]

    this.input1Status = this.input1.inputStatus();

    this.output1 = outputs[this.outputNum1 - 1]

    this.drawLines(this.input1.x, this.input1.y);

    this.drawLines(this.output1.x, this.output1.y);

    if(this.input1Status === false)
    {
      this.logicText = "true";  
    } else 
    {
      this.logicText = "false";
    }
  }

  bufferGate() 
  {
    // Check that the input number is valid
    if (this.inputNum1 <= 0 || this.inputNum1 > inputs.length || this.inputNum2 <= 0 || this.inputNum2 > inputs.length) {
      console.error('Invalid input numbers:', this.inputNum1, this.inputNum2);
      return; // Exit the method if the input numbers are invalid
    }

    this.input1 = inputs[this.inputNum1 - 1]

    this.input1Status = this.input1.inputStatus();

    this.output1 = outputs[this.outputNum1 - 1]

    this.drawLines(this.input1.x, this.input1.y);

    this.drawLines(this.output1.x, this.output1.y);

    if(this.input1Status === true)
    {
      this.logicText = "true";  
    } else 
    {
      this.logicText = "false";
    }
  }

  orGate() 
  {
    // Check that the input number is valid
    if (this.inputNum1 <= 0 || this.inputNum1 > inputs.length || this.inputNum2 <= 0 || this.inputNum2 > inputs.length) {
      console.error('Invalid input numbers:', this.inputNum1, this.inputNum2);
      return; // Exit the method if the input numbers are invalid
    }

    this.input1 = inputs[this.inputNum1 - 1]
    this.input2 = inputs[this.inputNum2 - 1]

    this.input1Status = this.input1.inputStatus();
    this.input2Status = this.input2.inputStatus();

    this.output1 = outputs[this.outputNum1 - 1]

    this.drawLines(this.input1.x, this.input1.y);
    this.drawLines(this.input2.x, this.input2.y);

    this.drawLines(this.output1.x, this.output1.y);

    if(this.input1Status === true || this.input2Status === true)
    {
      this.logicText = "true";  
    } else 
    {
      this.logicText = "false";
    }
  }

  andGate() 
  {
    // Check that the input number is valid
    if (this.inputNum1 <= 0 || this.inputNum1 > inputs.length || this.inputNum2 <= 0 || this.inputNum2 > inputs.length) {
      console.error('Invalid input numbers:', this.inputNum1, this.inputNum2);
      return; // Exit the method if the input numbers are invalid
    }

    this.input1 = inputs[this.inputNum1 - 1]
    this.input2 = inputs[this.inputNum2 - 1]

    this.input1Status = this.input1.inputStatus();
    this.input2Status = this.input2.inputStatus();

    this.output1 = outputs[this.outputNum1 - 1]

    this.drawLines(this.input1.x, this.input1.y);
    this.drawLines(this.input2.x, this.input2.y);

    this.drawLines(this.output1.x, this.output1.y);

    if(this.input1Status === true && this.input2Status === true)
    {
      this.logicText = "true";  
    } else 
    {
      this.logicText = "false";
    }
  }

  nandGate() 
  {
    // Check that the input number is valid
    if (this.inputNum1 <= 0 || this.inputNum1 > inputs.length || this.inputNum2 <= 0 || this.inputNum2 > inputs.length) {
      console.error('Invalid input numbers:', this.inputNum1, this.inputNum2);
      return; // Exit the method if the input numbers are invalid
    }

    this.input1 = inputs[this.inputNum1 - 1]
    this.input2 = inputs[this.inputNum2 - 1]

    this.input1Status = this.input1.inputStatus();
    this.input2Status = this.input2.inputStatus();

    this.output1 = outputs[this.outputNum1 - 1]

    this.drawLines(this.input1.x, this.input1.y);
    this.drawLines(this.input2.x, this.input2.y);

    this.drawLines(this.output1.x, this.output1.y);

    if(this.input1Status === false || this.input2Status === false)
    {
      this.logicText = "true";  
    } 
    else if(this.input1Status === false && this.input2Status === false)
    {
      this.logicText = "true";  
    } 
    else 
    {
      this.logicText = "false";
    }
  }

  norGate() 
  {
    // Check that the input number is valid
    if (this.inputNum1 <= 0 || this.inputNum1 > inputs.length || this.inputNum2 <= 0 || this.inputNum2 > inputs.length) {
      console.error('Invalid input numbers:', this.inputNum1, this.inputNum2);
      return; // Exit the method if the input numbers are invalid
    }

    this.input1 = inputs[this.inputNum1 - 1]
    this.input2 = inputs[this.inputNum2 - 1]

    this.input1Status = this.input1.inputStatus();
    this.input2Status = this.input2.inputStatus();

    this.output1 = outputs[this.outputNum1 - 1]

    this.drawLines(this.input1.x, this.input1.y);
    this.drawLines(this.input2.x, this.input2.y);

    this.drawLines(this.output1.x, this.output1.y);

    if(this.input1Status === false || this.input2Status === false)
    {
      this.logicText = "true";  
    } 
    else 
    {
      this.logicText = "false";
    }
  }

  xorGate() 
  {
    // Check that the input number is valid
    if (this.inputNum1 <= 0 || this.inputNum1 > inputs.length || this.inputNum2 <= 0 || this.inputNum2 > inputs.length) {
      console.error('Invalid input numbers:', this.inputNum1, this.inputNum2);
      return; // Exit the method if the input numbers are invalid
    }

    this.input1 = inputs[this.inputNum1 - 1]
    this.input2 = inputs[this.inputNum2 - 1]

    this.input1Status = this.input1.inputStatus();
    this.input2Status = this.input2.inputStatus();

    this.output1 = outputs[this.outputNum1 - 1]

    this.drawLines(this.input1.x, this.input1.y);
    this.drawLines(this.input2.x, this.input2.y);

    this.drawLines(this.output1.x, this.output1.y);


    if ((this.input1Status && !this.input2Status) || (!this.input1Status && this.input2Status)) 
    {
    this.logicText = "true";
    } 
    else 
    {
    this.logicText = "false";
    }  
  }

  xnorGate() 
  {
    // Check that the input number is valid
    if (this.inputNum1 <= 0 || this.inputNum1 > inputs.length || this.inputNum2 <= 0 || this.inputNum2 > inputs.length) {
      console.error('Invalid input numbers:', this.inputNum1, this.inputNum2);
      return; // Exit the method if the input numbers are invalid
    }

    this.input1 = inputs[this.inputNum1 - 1]
    this.input2 = inputs[this.inputNum2 - 1]

    this.input1Status = this.input1.inputStatus();
    this.input2Status = this.input2.inputStatus();

    this.output1 = outputs[this.outputNum1 - 1]

    this.drawLines(this.input1.x, this.input1.y);
    this.drawLines(this.input2.x, this.input2.y);

    this.drawLines(this.output1.x, this.output1.y);


    if ((!this.input1Status && !this.input2Status) || (this.input1Status && this.input2Status)) 
    {
    this.logicText = "true";
    } 
    else 
    {
    this.logicText = "false";
    }  
  }

  drawLogicGate() 
  {
    rect(this.x, this.y, 50, 50);

    text(this.gateOption, this.x + 25, this.y + 70);
  }

  drawLines(otherX, otherY)
  {
    push();
    strokeWeight(4);
    line(otherX + 7, otherY + 7, this.x + 25, this.y + 25,);
    pop();
  }

  draggable() 
  {
    cursor(ARROW);

    // Check if mouse is in box
    if (mouseX >= this.x && mouseX <= this.x + 50 && mouseY >= this.y && mouseY <= this.y + 50) 
    {
      cursor("grab");
      if (mouseIsPressed) 
      {
        // Set box position to moouse position
        this.x = mouseX - 50 / 2;
        this.y = mouseY - 50 / 2;
      }
    } 
  }
}