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