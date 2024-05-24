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
    fill(this.colorR, this.colorG, this.colorB);

    rect(this.x, this.y, 20, 20);
    pop();

    let isConnected = false; // Flag to track if the output is connected to any existing logic gate

    if (logicGates.length > 0)
    {
      // Check all logic gates to see if they are connected with output
      for (let i = 0; i < logicGates.length; i++)
      {
        this.outputNum = logicGates[i].outputNum1 - 1;

        // If they have the same number, they are connected
        if (this.outputNum == this.listNum) 
        {
          isConnected = true; // Mark as connected
          // Update the text of Output according to the connected logic gate
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
          break; // No need to continue checking other gates once we found a match
        }
      }
    }

    // If no connection is found, reset the output to "false"
    if (!isConnected)
    {
      this.logicText = "false";
      this.colorR = 0;
      this.colorB = 0;
      this.colorG = 0;
    }

    text("Output", this.x + 10, this.y + 40);
    text(this.logicText, this.x + 10, this.y + 66);
  }
}