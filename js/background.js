let enabled = true;
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
   	if (changeInfo.audible == true && enabled == true) { //tab starts playing audio
   		chrome.tabs.query({audible:true}, function(tabs){
    	for (var i = 0; i < tabs.length; i++) {
    		if (tabs[i].id !== tabId) {
    			chrome.tabs.sendMessage(tabs[i].id, { action: "pause" });
    		}
    	}
	});
   }
});
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	if (request.data=="statecheck") { //statecheck when popup window is re-opened
      	sendResponse({is_enabled: enabled});
  	}
  	else {
  		enabled = request.newstate;
  		return;
  	}
  });
