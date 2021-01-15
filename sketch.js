// --------------------------- To Write on screen -------------------------------

console.log("outside");
function setup() {
  noCanvas();
  //COLORS
  document.getElementById("redColor").addEventListener("click",()=>{changeColor('#FF0000')});
  document.getElementById("orangeColor").addEventListener("click",()=>{changeColor('#F26202')});
  document.getElementById("yellowColor").addEventListener("click",()=>{changeColor('#EAAE00')});
  document.getElementById("greenColor").addEventListener("click",()=>{changeColor('#00FF00')});
  document.getElementById("blueColor").addEventListener("click",()=>{changeColor('#0000FF')});
  document.getElementById("whiteColor").addEventListener("click",()=>{changeColor('#FFFFFF')});
  document.getElementById("blackColor").addEventListener("click",()=>{changeColor('#000000')});
  document.getElementById("violetColor").addEventListener("click",()=>{changeColor('#5829BB')});
  document.getElementById("pinkColor").addEventListener("click",()=>{changeColor('#E61A8D')});

  //STROKES
  document.getElementById("1x").addEventListener("click",()=>{changeStroke(1)});
  document.getElementById("2x").addEventListener("click",()=>{changeStroke(2)});
  document.getElementById("3x").addEventListener("click",()=>{changeStroke(3)});
  document.getElementById("4x").addEventListener("click",()=>{changeStroke(4)});
  document.getElementById("5x").addEventListener("click",()=>{changeStroke(5)});

  //SHAPES
  // document.getElementById("point").addEventListener("click",()=>{changeShape("point")});
  // document.getElementById("line").addEventListener("click",()=>{changeShape("line")});
  // document.getElementById("circle").addEventListener("click",()=>{changeShape("circle")});
  // document.getElementById("ellipse").addEventListener("click",()=>{changeShape("ellipse")});
  // document.getElementById("square").addEventListener("click",()=>{changeShape("square")});
  // document.getElementById("rectangle").addEventListener("click",()=>{changeShape("rectangle")});


   //to change the color
  function changeColor(currcolor){
    let params = {
      active: true,
      currentWindow: true,
    };

    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {
      let msg = {
        color: currcolor,
        flag:0
      };
      console.log("color",msg.color);
      chrome.tabs.sendMessage(tabs[0].id, msg);
    }
  };
  //to change the stroke
  function changeStroke(currWeight){
    let params = {
      active: true,
      currentWindow: true,
    };

    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {
      let msg = {
        weight: currWeight,
        flag:1
      };
      console.log("weight",msg.weight);
      chrome.tabs.sendMessage(tabs[0].id, msg);
    }
  }
}


 //to change the shape
//  function changeShape(currShape){
//   let params = {
//     active: true,
//     currentWindow: true,
//   };

//   chrome.tabs.query(params, gotTabs);

//   function gotTabs(tabs) {
//     let msg = {
//       shape: currShape,
//       flag:2
//     };
//     console.log("clicked shape",msg.shape);
//     chrome.tabs.sendMessage(tabs[0].id, msg);
//   }
// };




// let userinput = select("#userinput");
// userinput.input(changeText);

// function changeText() {
//   let params = {
//     active: true,
//     currentWindow: true,
//   };
//   chrome.tabs.query(params, gotTabs);

//   function gotTabs(tabs) {
//     console.log("tabs: ", tabs);
//     let message = userinput.value();
//     console.log("message : ", message);
//     let msg = {
//       txt: message,
//     };

// }
