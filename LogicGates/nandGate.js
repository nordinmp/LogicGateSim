class NandGate extends LogicGate 
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
    
    nandGate() 
    {
        if (!(this.input1Status && this.input2Status)) 
        {
            this.logicText = "true"; // Outputs true if either or both inputs are false.
        } 
        else 
        {
            this.logicText = "false"; // Outputs false if both inputs are true.
        }   
    }
  }