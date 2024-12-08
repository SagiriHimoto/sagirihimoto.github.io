const KeyInput = document.getElementById("ValueName");
const AddButton = document.getElementById("AddButton");
const ResultTextArea = document.getElementById("ShowThemWhereItsAt");
const ViewSelector = document.getElementById("ViewSelect");
const SortSelector = document.getElementById("SortSelect");
/* chars value is used as a pool of characters when making random entries by pressing F8 */
var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var BiggyListyThingy = [];
var DebugMode = true;
var ThemeMode = false;
var CursorPos = 0;
var FocusInput = true;

/* This works as mobile css */
const EvilListOfEvil = [/Android/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i,/webOS/i];
function CheckUserAgentOrWindowSize() {
    if(visualViewport.width < visualViewport.height+200 || EvilListOfEvil.some((ItemFromEvilListOfEvil) => {return navigator.userAgent.match(ItemFromEvilListOfEvil);})) {
		if(DebugMode){
			console.log("Phone! Screen Resized ",visualViewport.width,"x",visualViewport.height)
			document.documentElement.style.setProperty('--body-padding', '0px')
			document.documentElement.style.setProperty('--body-row-direction', 'column')
			document.documentElement.style.setProperty('--cntainr-width', '100%')
			document.documentElement.style.setProperty('--cntainr-align-items', 'start')
			document.documentElement.style.setProperty('--cntainr2-width', 'calc(100% - 40px)')
			document.documentElement.style.setProperty('--cntainr2-padding-bottom', '0px')
			document.documentElement.style.setProperty('--namesakes-display', 'none')
			document.documentElement.style.setProperty('--outputresult-width', 'calc(100% - 4px)')
			document.documentElement.style.setProperty('--inputstuff-width', 'calc(100% - 8px)')
		}
	} else {
		if(DebugMode){
			console.log("Desktop! Screen Resized ",visualViewport.width,"x",visualViewport.height)
			document.documentElement.style.setProperty('--body-padding', '40px')
			document.documentElement.style.setProperty('--body-row-direction', 'row-reverse')
			document.documentElement.style.setProperty('--cntainr-width', '60vw')
			document.documentElement.style.setProperty('--cntainr-align-items', 'center')
			document.documentElement.style.setProperty('--cntainr2-width', '20w')
			document.documentElement.style.setProperty('--cntainr2-padding-bottom', '20px')
			document.documentElement.style.setProperty('--namesakes-display', 'block')
			document.documentElement.style.setProperty('--outputresult-width', '95%')
			document.documentElement.style.setProperty('--inputstuff-width', '95%')
		}
	}
}
CheckUserAgentOrWindowSize()
window.onresize = CheckUserAgentOrWindowSize

function ToggleDebugMode() {
	if (DebugMode) {
		DebugMode = false;
		document.getElementById("Toaster").style.top = "-60px";
		document.querySelector(".cntainr2").style.backgroundColor = "var(--dark-color)"
	} else {
		DebugMode = true;
		document.getElementById("Toaster").style.top = "0px";
		document.querySelector(".cntainr2").style.backgroundColor = "var(--darkest-color)"
	}
	document.querySelector("#Toaster").innerText = "Debug Mode: " + DebugMode;
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
	for (let i=1;i<=ResultTextArea.childElementCount;i++) {
		if (DebugMode) {console.log("Child" + i + "is" +window.getSelection().containsNode(document.querySelector("#ShowThemWhereItsAt > p:nth-child("+i+")"), true))}
		if (window.getSelection().containsNode(document.querySelector("#ShowThemWhereItsAt > p:nth-child("+i+")"))){
			BiggyListyThingy.splice(i-ErasedAmount-1,1);
			ErasedAmount++;
			event.preventDefault()
		} else if (window.getSelection().anchorNode.data == document.querySelector("#ShowThemWhereItsAt > p:nth-child("+i+")").innerText){
			if (window.getSelection().anchorOffset != window.getSelection().anchorNode.data.length) {BiggyListyThingy.splice(i-ErasedAmount-1,1)
			ErasedAmount++;
			event.preventDefault()}
		} else if (window.getSelection().focusNode.data == document.querySelector("#ShowThemWhereItsAt > p:nth-child("+i+")").innerText){
			if (window.getSelection().focusOffset != window.getSelection().focusNode.data.length) {BiggyListyThingy.splice(i-ErasedAmount-1,1)
			ErasedAmount++;
			event.preventDefault()}
			/* preventDefault() doesn't do anything when triggered by button,so conditioning is not needed */
		}
	}
	RedrawTextArea()
}
/* Removes the first Key and Value in array */
function RemoveFirst() {
	BiggyListyThingy.splice(0,1);
	RedrawTextArea()
}
/* Removes the last Key and Value in array */
function RemoveLast() {
	BiggyListyThingy.splice(BiggyListyThingy.length-1,1);
	RedrawTextArea()
}
function RemoveAll() {
	BiggyListyThingy = [];
	RedrawTextArea()
}
/* This big fella is the one doing the sorting and typing the text when it needs an update */
function RedrawTextArea() {
	let formattedOutput = '';
	let SortedBiggyListyThingy = '';
	switch(SortSelector.value) {
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
	switch(ViewSelector.value) {
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
	ResultTextArea.innerText = '';
	for(let i=0;i < formattedOutput.split("\n").length;i++){
		ResultTextArea.innerHTML += "<p>" + formattedOutput.split("\n")[i].replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;') + "</p>";/* This is done a separate step from join(), to prevent a bug with "Raw" display's square bracket apearing outside the paragraph. Paragraph tag opener could be placed in the previous step, but for consistency and more intuitive coding, I chose not to */
	}
	if (DebugMode) {console.log(formattedOutput)}
	ResultTextArea.style.height = ResultTextArea.scrollHeight - 4 + "px";
};
/* Checks if add button was pressed, duh */
AddButton.addEventListener("click", () => {
	if (KeyInput.value.indexOf("=") == -1) {
		if (document.getElementById("AddEqual").checked) {KeyInput.value += "="} else
		{if (DebugMode) {console.log("Value has no = sign, returned as error")}}
		return;
	}
	let key = KeyInput.value.split("=")[0].trim();
	let value = KeyInput.value.split("=")[1].trim();
	let newEntry = { Key: key,Value: value };
	BiggyListyThingy.push(newEntry);
	RedrawTextArea();
	KeyInput.value = "";
	KeyInput.focus();
});
KeyInput.addEventListener("focusin", (event) => {FocusInput = true;if(DebugMode){console.log("Currently inputing")}});
KeyInput.addEventListener("focusout", (event) => {FocusInput = false;if(DebugMode){console.log("No longer inputing")}});
/* ^^ using event listeners, because :state() is too new, and not supported on even slightly outdated browser versions */
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
		RedrawTextArea();
		break;
		case "Backspace":
		RemoveSelected()
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
		case "Enter":
		if(FocusInput){AddButton.click()}
		break;
	}
};