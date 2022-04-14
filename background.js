let sele = chrome.contextMenus.create({
            'type':'normal',
            'title':'Tex2Word',
            'contexts':['selection'],
            'id':'cn'
            }
        )
var message;
chrome.contextMenus.onClicked.addListener((info,sele)=>{
    console.log(info.selectionText);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {latex: info.selectionText}, function(response) {
          console.log("Success!")
        });
      });
});

