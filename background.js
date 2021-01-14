console.log("backgroudn running");
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    console.log("button clicked");
    let msg = {
        txt:"hello"
    }
    chrome.tabs.sendMessage(tab.id,msg);
}