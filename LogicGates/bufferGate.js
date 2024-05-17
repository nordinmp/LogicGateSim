class BufferGate extends LogicGate 
{
    constructor(x, y, inputNum1, outputNum1, gateOption) 
    {

        super(x, y, inputNum1, 0, outputNum1, gateOption);

        this.x = x;
        this.y = y;
        this.inputNum1 = int(inputNum1);
        this.outputNum1 = int(outputNum1);
        this.gateOption = gateOption;
    }
    
    bufferGate() 
    {
        if (this.input1Status === true) 
        {
            this.logicText = "true";
        } 
        else 
        {
            this.logicText = "false";
        }
    }
  }