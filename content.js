console.log("chrome extension go? ");

chrome.runtime.onMessage.addListener(gotMessage);
let currColor="#000000"
let currWeight=3;
function gotMessage(message, sender, sendResponse) {
  console.log("inside got message",message.flag);
  if(message.flag==true)
    currColor=message.color;
  else{
    currWeight=3*message.weight;
    console.log("currWeight: ",currWeight);
  }
    

}
// P5.js
let s = (sketch)=>{
  sketch.setup = ()=>{
      //to not select the text while writing the content 
      document.body.style['userSelect'] = "none"; 
      let h=document.body.clientHeight;
      let c=sketch.createCanvas(sketch.windowWidth,sketch.windowHeight);
      c.position(0,0);
      c.style('pinter-events','none');
      sketch.clear();
  };

  sketch.draw=()=>{
      sketch.stroke(currColor);
      sketch.strokeWeight(currWeight);
      if(sketch.mouseIsPressed){
          sketch.line(sketch.mouseX,sketch.mouseY,sketch.pmouseX,sketch.pmouseY);
      }
  };
};

let myp5= new p5(s);
