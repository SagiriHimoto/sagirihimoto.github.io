const keyInput = document.getElementById("valuename");
const addButton = document.getElementById("addButton");
const resultTextArea = document.getElementById("showthemwhereitsat");
const viewSelector = document.getElementById("viewSelect");
const sortSelector = document.getElementById("sortSelect");
/* chars value is used as a pool of characters when making random entries by pressing F8 */
var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var BiggyListyThingy = [];
var DebugMode = false;
var ThemeMode = false;
var CursorPos = 0;

function ToggleDebugMode() {
	if (DebugMode) {
		DebugMode = false;
		document.getElementById("toaster").style.top = "-60px";
		document.querySelector(".cntainr2").style.backgroundColor = "var(--dark-color)"
	} else {
		DebugMode = true;
		document.getElementById("toaster").style.top = "0px";
		document.querySelector(".cntainr2").style.backgroundColor = "var(--darkest-color)"
	}
	document.querySelector("#toaster").innerText = "Debug Mode: " + DebugMode;
	console.log("Debug Mode: " + DebugMode)
}
function ToggleThemeMode() {
	if (ThemeMode) {
		ThemeMode = false;
		document.documentElement.style.setProperty('--text-color', '#000');
		document.documentElement.style.setProperty('--bg-color', '#fff');
		document.documentElement.style.setProperty('--dark-color', '#ddd');
		document.documentElement.style.setProperty('--darkest-color', '#ccc');
	} else {
		ThemeMode = true;
		document.documentElement.style.setProperty('--text-color', '#fff');
		document.documentElement.style.setProperty('--bg-color', '#00122e');
		document.documentElement.style.setProperty('--dark-color', '#000917');
		document.documentElement.style.setProperty('--darkest-color', '#000a1a');
	}
}
/* This function is only used by the delete selected button */
function RemoveSelected() {
	let ErasedAmount = 0;
	/* ^ This is here to avoid this function deleting an entry and skipping the next one because of out of sync indexing */
	for (let i=1;i<=document.querySelector("#showthemwhereitsat").childElementCount;i++) {
		if (DebugMode) {console.log("Child" + i + "is" +window.getSelection().containsNode(document.querySelector("#showthemwhereitsat > p:nth-child("+i+")"), true))}
		if (window.getSelection().containsNode(document.querySelector("#showthemwhereitsat > p:nth-child("+i+")"))){
			BiggyListyThingy.splice(i-ErasedAmount-1,1);
			ErasedAmount++;
		} else if (window.getSelection().anchorNode.data == document.querySelector("#showthemwhereitsat > p:nth-child("+i+")").innerText){
			if (window.getSelection().anchorOffset != window.getSelection().anchorNode.data.length) {BiggyListyThingy.splice(i-ErasedAmount-1,1)
			ErasedAmount++;}
		} else if (window.getSelection().focusNode.data == document.querySelector("#showthemwhereitsat > p:nth-child("+i+")").innerText){
			if (window.getSelection().focusOffset != window.getSelection().focusNode.data.length) {BiggyListyThingy.splice(i-ErasedAmount-1,1)
			ErasedAmount++;}
		}
	}
	redrawTextarea()
}
/* Removes the first Key and Value in array */
function RemoveFirst() {
	BiggyListyThingy.splice(0,1);
	redrawTextarea()
}
/* Removes the last Key and Value in array */
function RemoveLast() {
	BiggyListyThingy.splice(BiggyListyThingy.length-1,1);
	redrawTextarea()
}
function RemoveAll() {
	BiggyListyThingy = [];
	redrawTextarea()
}
/* This big fella is the one doing the sorting and typing the text when it needs an update */
function redrawTextarea() {
	let formattedOutput = '';
	let SortedBiggyListyThingy = '';
	switch(sortSelector.value) {
		case 'None':
		SortedBiggyListyThingy = BiggyListyThingy
		break;
		case 'Key':
		SortedBiggyListyThingy = BiggyListyThingy.sort((a, b)=> a.Key.localeCompare(b.Key, 'en', { sensitivity: 'base' }))
		break;
		case 'KeyDown':
		SortedBiggyListyThingy = BiggyListyThingy.sort((a, b)=> b.Key.localeCompare(a.Key, 'en', { sensitivity: 'base' }))
		break;
		case 'Value':
		SortedBiggyListyThingy = BiggyListyThingy.sort((a, b)=> a.Value.localeCompare(b.Value, 'en', { sensitivity: 'base' }))
		break;
		case 'ValueDown':
		SortedBiggyListyThingy = BiggyListyThingy.sort((a, b)=> b.Value.localeCompare(a.Value, 'en', { sensitivity: 'base' }))
		break;
	}
	switch(viewSelector.value) {
	case "Okten":
	formattedOutput = SortedBiggyListyThingy.map(entry => `${Object.values(entry)[0]}=${Object.values(entry)[1]}`).join("\n");
	break;
	case "Json":
	formattedOutput = SortedBiggyListyThingy.map(entry => `${Object.values(entry)[0]}: ${Object.values(entry)[1]}`).join("\n");
	break;
	case "Raw":
	formattedOutput = "[" + SortedBiggyListyThingy.map(entry => `{Key: ${Object.values(entry)[0]}, Value: ${Object.values(entry)[1]}}`).join(",\n") + "]";
	break;
	}
	resultTextArea.innerText = '';
	for(let i=0;i < formattedOutput.split("\n").length;i++){
		resultTextArea.innerHTML += "<p>" + formattedOutput.split("\n")[i] + "</p>"
	}
	if (DebugMode) {console.log(formattedOutput)}
	resultTextArea.style.height = resultTextArea.scrollHeight - 4 + "px";
};
/* Checks if add button was pressed, duh */
addButton.addEventListener("click", () => {
	if (keyInput.value.indexOf("=") == -1) {
		if (DebugMode) {console.log("Value has no = sign, returned as error")}
		return;
	}
	let key = keyInput.value.split("=")[0].trim();
	let value = keyInput.value.split("=")[1].trim();
	let newEntry = { Key: key,Value: value };
	BiggyListyThingy.push(newEntry);
	redrawTextarea();
	keyInput.value = "";
	keyInput.focus();
});
document.addEventListener("keydown", KeyPresser);
function KeyPresser(event) {
	if (DebugMode) {
		console.log(event)
	}
	switch(event.key){
		case "F8":
		event.preventDefault()
		let key = '';
		let value = '';
		let rankeyval = 0;
		let ranvalval = 0;
		for (let i=0;i<10;i++){
			rankeyval = Math.floor(Math.random() * chars.length);
			ranvalval = Math.floor(Math.random() * chars.length);
			key += chars.substring(rankeyval,rankeyval+1)
			value += chars.substring(ranvalval,ranvalval+1)
		}
		let newEntry = { Key: key,Value: value };
		BiggyListyThingy.push(newEntry);
		redrawTextarea();
		break;
		case "Backspace":
		/* Backspace doesn't use RemoveSelected() as that caused a bug during testing */
		let ErasedAmount = 0;
		/* ^ This is here to avoid this function deleting an entry and skipping the next one because of out of sync indexing */
		for (let i=1;i<=document.querySelector("#showthemwhereitsat").childElementCount;i++) {
			if (DebugMode) {console.log("Child" + i + "is" +window.getSelection().containsNode(document.querySelector("#showthemwhereitsat > p:nth-child("+i+")"), true))}
			if (window.getSelection().containsNode(document.querySelector("#showthemwhereitsat > p:nth-child("+i+")"))){
				BiggyListyThingy.splice(i-ErasedAmount-1,1);
				ErasedAmount++;
				event.preventDefault()
			} else if (window.getSelection().anchorNode.data == document.querySelector("#showthemwhereitsat > p:nth-child("+i+")").innerText){
				if (window.getSelection().anchorOffset != window.getSelection().anchorNode.data.length) {BiggyListyThingy.splice(i-ErasedAmount-1,1)
				ErasedAmount++;
				event.preventDefault()}
			} else if (window.getSelection().focusNode.data == document.querySelector("#showthemwhereitsat > p:nth-child("+i+")").innerText){
				if (window.getSelection().focusOffset != window.getSelection().focusNode.data.length) {BiggyListyThingy.splice(i-ErasedAmount-1,1)
				ErasedAmount++;
				event.preventDefault()}
			}
		}
		redrawTextarea()
		break;
		case "F9":
		event.preventDefault()
		ToggleThemeMode()
		break;
		case "F10":
		event.preventDefault()
		ToggleDebugMode()
		break;
		case "F5":
		if (!DebugMode) {event.preventDefault()
		if (confirm("Are you sure you want to reload the page? Your progress will be lost!!!!")) {
			window.location.reload();
		}}
		break;
	}
};