chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action == "pause") {
    	vids = document.getElementsByTagName("video");
    	for (var i = 0; i < vids.length; i++) {
    		vids[i].pause();
    }
    }
    var stopAllYouTubeVideos = () => {  //for pesky iframes
  		var iframes = document.querySelectorAll('iframe');
  		Array.prototype.forEach.call(iframes, iframe => { 
    		iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', 
  			func: 'pauseVideo' }), '*');
 			});
		}
	stopAllYouTubeVideos();

  });