var box = document.getElementById("checkbox");
var state_label = document.getElementById("status");
box.onclick = calc;


chrome.runtime.sendMessage({data: "statecheck"}, function(response) { //get current state as popup is opened
  if (response.is_enabled == false) { //disabled
  	box.checked = true;
  	state_label.innerText = "Disabled"
  }
});

function calc() {
	if (box.checked == false) { //has just been enabled enabled
		chrome.runtime.sendMessage({newstate:true})
		state_label.innerText = "Enabled"
	}
	else { //
		chrome.runtime.sendMessage({newstate:false})
		state_label.innerText = "Disabled"

	}
}
