// --------------------------- To Write on screen -------------------------------

console.log("outside");
function setup() {
  noCanvas();
  let userinput = select("#userinput");
  userinput.input(changeText);
  
  function changeText() {
    let params = {
      active: true,
      currentWindow: true,
    };
    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {
      console.log("tabs: ", tabs);
      let message = userinput.value();
      console.log("message : ", message);
      let msg = {
        txt: message,
      };
      chrome.tabs.sendMessage(tabs[0].id, msg);
    }
  }
}
