ISSUE: 
-> shapes
-> no going back from erase mode


TODO:
-> reset button
-> on-off button
-> selecting element


// --------------------------------------------------------------------------------------------------------------------
if (sketch.mouseIsPressed) {
      //console.log("shape: ",shape);
      if (currShape === "lineShape") {
        // currTool = "";
        toggleErase();
        sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
      }
      else if (currShape === "circleShape") {
        toggleErase();
        // currTool = "";
        sketch.ellipse(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
      }
      else if (currShape === "ellipseShape") {
        toggleErase();
        // currTool = "";
        sketch.ellipse(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
      }
      else if (currShape === "triangleShape") {
        toggleErase();
        // currTool = "";
        sketch.triangle(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY, sketch.pmouseX, sketch.pmouseY);
      }
      else if (currShape === "squareShape") {
        toggleErase();
        // currTool = "";
        sketch.rect(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
        //sketch.scale(sketch.pmouseX, sketch.pmouseY);
      }
      //USING TOOLS
      if (currTool === "bucketTool") {
        toggleErase();
        sketch.background(currColor);
      }
      else if (currTool === "eraserTool") {
        // alert("erasing ");
        // toggleErase();
        eraseEnable=true;
        currShape = "";
        // sketch.fill('white');
        // sketch.noStroke();
        // sketch.ellipse(sketch.mouseX, sketch.mouseY, 30, 30);
        //p5.instanc.drawingContext.globalCompositeOperation = 'destination-out';
        sketch.erase();
        // alert("erased");
        
      }
      else if (currTool === "sprayTool") {
        toggleErase();
        // currShape = "";
        console.log("inside sprayTool: ", currColor);
        for (let i = 0; i < numDots; i++) {
          let x = sketch.mouseX + sketch.random(-spread, spread);
          let y = sketch.mouseY + sketch.random(-spread, spread);
          sketch.point(x, y);
        }
        //sketch.noCursor();
      }
      else if (currTool === "brushTool") {
        //currShape = "";
        toggleErase();
        sketch.fill(currColor);
        //sketch.ellipse(sketch.mouseX, sketch.mouseY, 50, 50);
      }
    }
    // --------------------------
    https://www.linkedin.com/posts/abdurrahman-163a63127_gripjan21-grip-dataanalytics-ugcPost-6757147054973218816-KFQY
    https://www.linkedin.com/posts/p-charith-0068281aa_gripjan21-tsf-github-ugcPost-6752862262064758784-J4JE
    https://www.linkedin.com/posts/anmol-1810rs_gripjan21-task8-datascience-ugcPost-6756161865862172672-8T1R
    https://www.linkedin.com/posts/thejaswin-s-22252318b_task2-gripjan21-gripdec20-ugcPost-6755756364598915072-VMob
    https://www.linkedin.com/posts/abdurrahman-163a63127_gripjan21-computervision-cv-ugcPost-6756069120178995200-ORHF