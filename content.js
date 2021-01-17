console.log("chrome extension go? ");

chrome.runtime.onMessage.addListener(gotMessage);
let eraseEnable = false;
let spread = 10;
let numDots = 50;
let currColor = "#000000"
let currWeight = 3;
let currShape = "pointShape";
let currTool = "";
function gotMessage(message, sender, sendResponse) {
  console.log("inside got message", message.flag);
  if (message.flag == 0)
    currColor = message.color;
  else if (message.flag == 1) {
    currWeight = 3 * message.weight;
    console.log("currWeight: ", currWeight);
  }
  else if (message.flag == 2) {
    currShape = message.shape;
    console.log("shape: ", currShape);
  }
  else if (message.flag == 3) {
    currTool = message.tool;
    console.log("tool: ", currTool);
  }

}
// P5.js
let s = (sketch) => {
  sketch.setup = () => {
    //to not select the text while writing the content 
    document.body.style['userSelect'] = "none";
    let h = document.body.clientHeight;
    let c = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
    c.position(0, 0);
    c.style('pinter-events', 'none');
    sketch.clear();
  };

  // function toggleErase() {
  //   if (eraseEnable) {
  //     sketch.noErase();
  //     eraseEnable = false;
  //   }
  //   else {
  //     sketch.erase(10, 10);
  //     eraseEnable = true;
  //   }
  // }


  sketch.draw = () => {
    sketch.stroke(currColor);
    sketch.strokeWeight(currWeight);
    if (sketch.mouseIsPressed) {
      //console.log("shape: ",shape);
      if (currShape === "lineShape") {
        // currTool = "";
        sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
      }
      else if (currShape === "circleShape") {
        // currTool = "";
        sketch.ellipse(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
      }
      else if (currShape === "ellipseShape") {
        // currTool = "";
        sketch.ellipse(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
      }
      else if (currShape === "triangleShape") {
        // currTool = "";
        sketch.triangle(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY, sketch.pmouseX, sketch.pmouseY);
      }
      else if (currShape === "squareShape") {
        // currTool = "";
        sketch.rect(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
      }
      else {
        // currTool = "";
        sketch.point(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
      }
      //USING TOOLS
      if (currTool === "bucketTool") {
        sketch.background(currColor);
      }
      else if (currTool === "eraserTool") {
        // toggleErase();
        currShape = "";
        // currColor = "";
        sketch.erase(100, 100);
      }
      else if (currTool === "sprayTool") {
        currShape = "";
        for (let i = 0; i < numDots; i++) {
          let x = sketch.mouseX + sketch.random(-spread, spread);
          let y = sketch.mouseY + sketch.random(-spread, spread);
          sketch.point(x, y);
        }
        //sketch.noCursor();
      }
      else if (currTool === "brushTool") {
        currShape = "";
        // sketch.noErase();
        sketch.fill(currColor);
      }
    }
  };
};

let myp5 = new p5(s);
