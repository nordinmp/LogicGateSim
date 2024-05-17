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
        this.inputs = inputs;
        this.outputs = outputs;
        this.width = 50;
        this.height = 50;
    }
  
    drawLogicGate()
    {
        fill(0);
        textSize(16);

        textAlign(CENTER);
        rect(this.x, this.y, this.width, this.height);
        text(this.gateOption, this.x + this.width/2, this.y + this.height + 20);

        this.input1 = this.inputs[this.inputNum1 - 1];
        this.input2 = this.inputs[this.inputNum2 - 1];
        this.input1Status = this.input1.inputStatus();
        this.output1 = this.outputs[this.outputNum1 - 1];
    
        if (this.inputNum2 === 0) {
            this.drawLines(this.input1.x, this.input1.y);
            this.drawLines(this.output1.x, this.output1.y);
        } else {
            this.drawLines(this.input1.x, this.input1.y);
            this.drawLines(this.input2.x, this.input2.y);
            this.drawLines(this.output1.x, this.output1.y);

            this.input2Status = this.input2.inputStatus();

        }


        this.draggable();
    }
  
    drawLines(otherX, otherY) 
    {
        push();
        strokeWeight(4);
        line(otherX + 7, otherY + 7, this.x + this.width/2, this.y + this.height/2);
        pop();
    }
  
    draggable() 
    {
        cursor(ARROW);
        if (mouseX >= this.x && mouseX <= this.x + 50 && mouseY >= this.y && mouseY <= this.y + 50) 
        {
            cursor("grab");
            if (mouseIsPressed) 
            {
                this.x = mouseX - 50 / 2;
                this.y = mouseY - 50 / 2;
            }
        }
    }   
}