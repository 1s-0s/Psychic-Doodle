console.log("chrome extension go? ");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log("We are here");
  let paragraphs = document.getElementsByTagName("h1");
  for (elt of paragraphs) {
    elt.style['background-color']="#FF00FF";
    elt.innerHTML = message.txt;
  }
  console.log(message.txt);
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
      sketch.stroke("red");
      sketch.strokeWeight(4);
      if(sketch.mouseIsPressed){
          sketch.line(sketch.mouseX,sketch.mouseY,sketch.pmouseX,sketch.pmouseY);
      }
  };
};

let myp5= new p5(s);
