console.log("aur kya bolti public? ");

chrome.storage.sync.set({ on: false }, () => {
  console.log("running from content");

  chrome.runtime.onMessage.addListener(gotMessage);

  let spread = 5;
  let numDots = 5;
  let currColor = "#000000";
  let currWeight = 3;
  let currOperation = "lineShape";
  let begin = false;
  // chrome.storage.sync.get(["on"], (result) => {
  //   on = result.on;
  //   console.log("inside sketch 0: ", result.on);
  // });

  function gotMessage(message, sender, sendResponse) {
    // console.log("inside got message", message.flag);
    // if(message.flag === -1){
    //   on=message.start;
    // }
    if (message.flag == 0) currColor = message.color;
    else if (message.flag == 1) {
      currWeight = 3 * message.weight;
      console.log("currWeight: ", currWeight);
    } else if (message.flag == 2) {
      currOperation = message.shape;
      console.log("shape: ", currOperation);
    } else if (message.flag == 3) {
      currOperation = message.tool;
      console.log("tool: ", currOperation);
    }
  }
  // P5.js
  let s = (sketch) => {
    sketch.setup = () => {
      document.body.style["userSelect"] = "none";
      let h = document.body.clientHeight;
      let c = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
      c.position(0, 0);
      c.style("pointer-events", "none");
      sketch.clear();
    };
    sketch.mouseClicked = () => {
      chrome.storage.sync.get(["on"], (result) => {
        begin = result.on;
      });
        console.log("mouse is clicked0 and begin is ",begin);
        if(begin===true){
          console.log("mouse is clicked1 and begin is ",begin);
          if (currOperation === "circleShape") {
            sketch.ellipse(sketch.mouseX, sketch.mouseY, 200, 200);
          } else if (currOperation === "ellipseShape") {
            sketch.ellipse(sketch.mouseX, sketch.mouseY, 300, 200);
          } else if (currOperation === "triangleShape") {
            let x1 = sketch.mouseX;
            let y1 = sketch.mouseY;
            let x2 = x1 + 100;
            let y2 = y1 - 100;
            let x3 = x1 + 200;
            let y3 = y1;
    
            sketch.triangle(x1, y1, x2, y2, x3, y3);
          } else if (currOperation === "squareShape") {
            sketch.rect(sketch.mouseX, sketch.mouseY, 200, 200);
          }
        }
      
      
    };

    sketch.draw = () => {
      //chrome.storage.sync.get(["on"], (result) => {
        //begin = result.on;
        console.log("drawing0 and begin is ",begin);
        if (begin === true) {
          
          console.log("drawing1 and begin is ",begin);

          sketch.stroke(currColor);
          sketch.strokeWeight(currWeight);
          if (sketch.mouseIsPressed) {
            if (currOperation === "lineShape") {
              sketch.line(
                sketch.mouseX,
                sketch.mouseY,
                sketch.pmouseX,
                sketch.pmouseY
              );
            }
            //USING TOOLS
            if (currOperation === "bucketTool") {
              sketch.noErase();
              sketch.background(currColor);
            } else if (currOperation === "eraserTool") {
              sketch.clear();
            } else if (currOperation === "sprayTool") {
              for (let i = 0; i < numDots; i++) {
                let x = sketch.mouseX + sketch.random(-spread, spread);
                let y = sketch.mouseY + sketch.random(-spread, spread);
                sketch.point(x, y);
              }
            } else if (currOperation === "brushTool") {
              sketch.noErase();
              sketch.fill(currColor);
            }
          }
        }
      //});
    };
  };

  let myp5 = new p5(s);
});
