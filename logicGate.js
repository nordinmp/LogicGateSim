class LogicGate 
{
    constructor(x, y, inputId1, inputId2, outputNum1, gateOption, width = 50, height = 50) 
    {
        this.x = x;
        this.y = y;
        this.logicText = "false";
        this.inputId1 = inputId1; // Changed to string identifier
        this.inputId2 = inputId2; // Changed to string identifier
        this.outputNum1 = int(outputNum1);
        this.gateOption = gateOption;
        this.inputs = inputs;
        this.outputs = outputs;
        this.width = width;
        this.height = height;

        this.dashOffset = 0;

        // object dragging
        this.dragging = false;
        this.mouseOver = false;

        this.gateImg =[
            loadImage('assets/and.png'),
            loadImage('assets/buffer.png'),
            loadImage('assets/nand.png'),
            loadImage('assets/nor.png'),
            loadImage('assets/not.png'),
            loadImage('assets/or.png'),
            loadImage('assets/xnor.png'),
            loadImage('assets/xor.png')
        ]
    }
  
    drawLogicGate()
    {
        fill(0);
        textSize(16);

        textAlign(CENTER);

        // Assuming logicGatesArray is accessible and contains all your LogicGate instances
        const indexInArray = logicGates.indexOf(this) + 1;
        const inputLetterIndex = this.numberToLetter(indexInArray);

        // Display the gate option and its index in the array
        text(this.gateOption, this.x + this.width/2, this.y + this.height + 20);
        text("Input " + inputLetterIndex, this.x + this.width/2, this.y + this.height + 50);


        if (this.inputId1) {
            // Determine if inputId1 is a number or a letter
            if (!isNaN(parseInt(this.inputId1))) {
                // inputId1 is a number, use checkboxes or similar UI elements to select inputs
                // Assuming you have a method or a way to get the input based on its number
                this.input1 = this.inputs[this.inputId1 - 1]; // Replace getInputById with your actual method to fetch input by ID
                this.input1Status = this.input1? this.input1.inputStatus() : null;
            } else if (typeof this.inputId1 === 'string') {
                // inputId1 is a letter, find the corresponding gate
                const gate = this.findGateByLetter(this.inputId1);
                //console.log(firstGate);
                if (gate) {
                    this.input1 = gate;
                    this.input1Status = gate.inputStatus();
                } else {
                    // Handle the case where no gate is found for inputId1
                    console.warn('No gate found for inputId1:', this.inputId1);
                }
            } else {
                // Handle the case where inputId1 is neither a number nor a letter
                console.warn('Expected inputId1 to be a number or a letter.');
            }
        }
        
        if (this.inputId2) {
            // Determine if inputId2 is a number or a letter
            if (!isNaN(parseInt(this.inputId2))) {
                // inputId2 is a number, use checkboxes or similar UI elements to select inputs
                this.input2 = this.inputs[this.inputId2 - 1]; // Replace getInputById with your actual method to fetch input by ID
                this.input2Status = this.input2? this.input2.inputStatus() : null;
            } else if (typeof this.inputId2 === 'string') {
                // inputId2 is a letter, find the corresponding gate
                const gate = this.findGateByLetter(this.inputId2);
                //console.log(secondGate)

                if (gate) {
                    this.input2 = gate;
                    this.input2Status = gate.inputStatus();
                } else {
                    // Handle the case where no gate is found for inputId2
                    console.warn('No gate found for inputId2:', this.inputId2);
                }
            } else {
                // Handle the case where inputId2 is neither a number nor a letter
                console.warn('Expected inputId2 to be a number or a letter.');
            }
        }



        this.output1;

        // Before assigning this.output1, check if outputNum1 is defined and not empty
        if (typeof this.outputNum1!== 'undefined' && this.outputNum1!== '') {
            this.output1 = this.outputs[this.outputNum1 - 1];
        }
        //console.log(this.output1)

        if (this.logicText == "true")
        {
            this.dashOffset = (this.dashOffset + 1) % 20;
        }

        if (this.output1 == undefined && this.inputId2 === 0)
        {
            this.drawLines(this.input1.x, this.input1.y, true);
        }
        else if (this.inputId2 === 0) 
        {
            this.drawLines(this.input1.x, this.input1.y, true);
            this.drawLines(this.output1.x, this.output1.y, false);
        }
        else if (this.output1 == undefined)
        {
            this.drawLines(this.input1.x, this.input1.y, true);
            this.drawLines(this.input2.x, this.input2.y, true);
        }
        else 
        {
            this.drawLines(this.input1.x, this.input1.y, true);
            this.drawLines(this.input2.x, this.input2.y, true);
            this.drawLines(this.output1.x, this.output1.y, false);
        }


       
        this.drawGateImage();
        this.draggable();

    }
      
    drawGateImage() {
        switch (this.gateOption) {
            case "And Gate":
                image(this.gateImg[0], this.x, this.y);
                this.gateImg[0].resize(62.03, 50);
                break;
            case "Buffer Gate":
                image(this.gateImg[1], this.x, this.y);
                this.gateImg[1].resize(43.3 , 50);
                break;
            case "Nand Gate":
                image(this.gateImg[2], this.x, this.y);
                this.gateImg[2].resize(74.6, 50);
                break;
            case "Nor Gate":
                image(this.gateImg[3], this.x, this.y);
                this.gateImg[3].resize(74.32, 50);
                break;
            case "Not Gate":
                image(this.gateImg[4], this.x, this.y);
                this.gateImg[4].resize(56.5, 50);
                break;
            case "Or Gate":
                image(this.gateImg[5], this.x, this.y);
                this.gateImg[5].resize(63.69, 50);
                break;
            case "Xnor Gate":
                image(this.gateImg[6], this.x, this.y);
                this.gateImg[6].resize(81.54, 50);
                break;
            case "Xor Gate":
                image(this.gateImg[7], this.x, this.y);
                this.gateImg[7].resize(69.86, 50);
                break;
            default:
                console.warn("Unknown gate option:", this.gateOption);
                break;
        }
    }

    drawLines(otherX, otherY, InOrOut) {
        push();
        strokeWeight(4);
        stroke(0);
        drawingContext.setLineDash([5, 15]);

        // if InOrOut is true then draw lines pos if not draw negative
        drawingContext.lineDashOffset = InOrOut? this.dashOffset : -this.dashOffset;
        line(this.x + this.width / 2 -25, this.y + this.height / 2, otherX + 7, otherY + 7);
        drawingContext.setLineDash([]); // Reset line dash to solid
        pop();
    }
  
    draggable() {
        cursor(ARROW);
        // Check if the mouse is within the gate bounds
        if (mouseX >= this.x && mouseX <= this.x + 50 && mouseY >= this.y && mouseY <= this.y + 50) {
            cursor("grab");
            // If the mouse is pressed, start moving the gate
            if (mouseIsPressed) {
                let newX = mouseX - 50 / 2; // New X position
                let newY = mouseY - 50 / 2; // New Y position
    
                // Check for collision with other gates
                for (let otherGate of logicGates) {
                    if (otherGate!== this) { // Exclude the current gate from the check
                        // Calculate distance between centers of the two gates
                        let dx = newX - otherGate.x;
                        let dy = newY - otherGate.y;
    
                        // Check if the distance is less than half the sum of their widths and heights
                        // This is a simple way to detect overlap
                        if (Math.abs(dx) < 50 && Math.abs(dy) < 50) {
                            // Adjust the new position to avoid overlap
                            if (newX < otherGate.x) {
                                newX -= 10; // Move left
                            } else if (newX > otherGate.x) {
                                newX += 10; // Move right
                            }
                            if (newY < otherGate.y) {
                                newY -= 10; // Move up
                            } else if (newY > otherGate.y) {
                                newY += 10; // Move down
                            }
                        }
                    }
                }
    
                // Update the gate's position after adjustment
                this.x = newX;
                this.y = newY;
            }
        }
    }

    letterToNumber(letter) 
    {
        const offset = letter.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
        return Math.max(Math.min(offset, 26), 1); // Ensures the result is between 1 and 26
    }

    numberToLetter(number) {
        const letter = String.fromCharCode('A'.charCodeAt(0) + number - 1);
        return letter.toUpperCase(); // Ensures the result is always uppercase
    }

    findGateByLetter(letter) 
    {
        const number = this.letterToNumber(letter.toUpperCase()); // Convert letter to uppercase and then to number

        if (number > 0 && number <= logicGates.length) {
            return logicGates[number - 1]; // Arrays are zero-indexed, so subtract 1 from the number
        } else {
            console.log(`No gate found at position ${number}.`);
            return null; // Return null if no gate is found at the specified position
        }
    }

    inputStatus()
    {    
        //console.log(this.logicText);

        if (this.logicText == "true")
        {
            return true;
        } else 
        {
            return false; 
        }
         
    }
}