console.log("chrome extension go? ");

chrome.runtime.onMessage.addListener(gotMessage);
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

  sketch.draw = () => {
    sketch.stroke(currColor);
    sketch.strokeWeight(currWeight);
    if (sketch.mouseIsPressed) {
      //console.log("shape: ",shape);
      if (currShape === "lineShape") {
        sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
      }
      else if (currShape === "circleShape") {
        sketch.ellipse(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
      }
      else if (currShape === "ellipseShape") {
        sketch.ellipse(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
      }
      else if (currShape === "triangleShape") {
        sketch.triangle(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY, sketch.pmouseX, sketch.pmouseY);
      }
      else if (currShape === "squareShape") {
        sketch.rect(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
      }
      else {
        sketch.point(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
      }
      //USING TOOLS
      if (currTool === "bucketTool") {
        sketch.fill(currColor);
      }
      // else if (currTool === "eraserTool") {
      //   sketch.fill('white');
      // }
      // else if(currTool === "sprayTool"){
      //   sketch.erase();
      // }
      // else if(currTool === "scissorsTool"){
      //   sketch.erase();
      // }
    }
  };
};

let myp5 = new p5(s);
