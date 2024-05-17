class AndGate extends LogicGate 
{
    constructor(x, y, inputNum1, inputNum2, outputNum1, gateOption) 
    {
        super(x, y, inputNum1, inputNum2, outputNum1, gateOption);


        this.x = x;
        this.y = y;
        this.inputNum1 = int(inputNum1);
        this.inputNum2 = int(inputNum2);
        this.outputNum1 = int(outputNum1);
        this.gateOption = gateOption;
    }

    andGate() 
    {
        if (this.input1Status === true && this.input2Status === true) 
        {
            this.logicText = "true";
        }
        else 
        {
            this.logicText = "false";
        }        
    }
  }