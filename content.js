console.log("aur kya bolti public? ");

chrome.runtime.onMessage.addListener(gotMessage);
let eraseEnable = false;
let spread =5;
let numDots = 5;
let currColor = "#000000"
let currWeight = 3;
let currOperation = "lineShape";
let on=true;
function gotMessage(message, sender, sendResponse) {
  console.log("inside got message", message.flag);
  if(message.flag === -1){
    on=message.start;
  }
  else if (message.flag == 0)
    currColor = message.color;
  else if (message.flag == 1) {
    currWeight = 3 * message.weight;
    console.log("currWeight: ", currWeight);
  }
  else if (message.flag == 2) {
    currOperation = message.shape;
    console.log("shape: ", currOperation);
  }
  else if (message.flag == 3) {
    currOperation = message.tool;
    console.log("tool: ", currOperation);
  }

}
// P5.js
let s = (sketch) => {
  sketch.setup = () => {
    if(on){
      //to not select the text while writing the content 
      document.body.style['userSelect'] = "none";
      let h = document.body.clientHeight;
      let c = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
      c.position(0, 0);
      c.style('pointer-events', 'none');
      sketch.clear();
    }
    
  };
  sketch.mouseClicked=()=>{
    if (currOperation === "circleShape") {
     
      sketch.ellipse(sketch.mouseX, sketch.mouseY, 200, 200);
    }
    else if (currOperation === "ellipseShape") {
     
      sketch.ellipse(sketch.mouseX, sketch.mouseY, 300, 200);
    }
    else if (currOperation === "triangleShape") {
      let x1=sketch.mouseX;
      let y1=sketch.mouseY;
      let x2=x1+100;
      let y2=y1-100;
      let x3=x1+200;
      let y3=y1;
      
      sketch.triangle(x1, y1, x2, y2, x3, y3);
    }
    else if (currOperation === "squareShape") {
     
      sketch.rect(sketch.mouseX, sketch.mouseY, 200, 200);
      
    }
  }


  sketch.draw = () => {
    sketch.stroke(currColor);
    sketch.strokeWeight(currWeight);
    if (sketch.mouseIsPressed) {
      
      if (currOperation === "lineShape") {
        sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
      }
      //USING TOOLS
      if (currOperation === "bucketTool") {
        sketch.noErase();
        sketch.background(currColor);
      }
      else if (currOperation === "eraserTool") {
        sketch.clear();
        
      }
      else if (currOperation === "sprayTool") {
        for (let i = 0; i < numDots; i++) {
          let x = sketch.mouseX + sketch.random(-spread, spread);
          let y = sketch.mouseY + sketch.random(-spread, spread);
          sketch.point(x, y);
        }
        
      }
      else if (currOperation === "brushTool") {
        sketch.noErase();
        sketch.fill(currColor);
      }
    }
  };
};

let myp5 = new p5(s);
