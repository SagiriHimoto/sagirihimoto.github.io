var cursorPos = 0;
var canType = true;
var enableDebug = false;
var currentlyUsedFont = "font";
var specialSymbolSize = "0px";
function toggleDebug() {
	if (enableDebug) {
		enableDebug = false;
		specialSymbolSize = "0px";
		if (document.getElementsByClassName("italicizer") !== undefined) {
			for (let index = 0; index < document.getElementsByClassName("italicizer").length; index++) {
				document.getElementsByClassName("italicizer")[index].style.width = "0px";
			}
		}
	} else {
		enableDebug = true;
		specialSymbolSize = "24px";
		if (document.getElementsByClassName("italicizer") !== undefined) {
			for (let index = 0; index < document.getElementsByClassName("italicizer").length; index++) {
				document.getElementsByClassName("italicizer")[index].style.width = "24px";
			}
		}
	}
}
function addImg(coordXadd,coordYadd,widthadd,srcImg) {
	if (widthadd === undefined) {
		widthadd = 24;
	}
	if (srcImg === undefined) {
		srcImg = currentlyUsedFont;
	}
	if (document.querySelector("#textgoeshere > .symbol:nth-child(" + (cursorPos + 1) + ")") !== null) {
	document.querySelector("#textgoeshere > .symbol:nth-child(" + (cursorPos + 1) + ")").insertAdjacentHTML("afterend", "<img src='"+srcImg+".png' draggable='false' class='symbol beforecursor' style='width:"+widthadd+"px;object-position: -" +coordXadd+ "px -" +coordYadd+ "px;' />");
	} else { 
	document.querySelector("#textgoeshere").innerHTML += "<img src='"+srcImg+".png' draggable='false' class='symbol beforecursor' style='width:"+widthadd+"px;object-position: -" +coordXadd+ "px -" +coordYadd+ "px;' />";
	}
	/* var audio = new Audio('Beat.wav');
	audio.play(); */
	cursorPos += 1;
}
function addItalicizer(d) {
	if (canType) {
		if (document.querySelector("#textgoeshere > .symbol:nth-child(" + (cursorPos + 1) + ")") !== null) {
		document.querySelector("#textgoeshere > .symbol:nth-child(" + (cursorPos + 1) + ")").insertAdjacentHTML("afterend", "<img src='font.png' draggable='false' class='symbol beforecursor italicizer' style='width:"+specialSymbolSize+";object-position: -0px -120px;' />");
		} else { 
		document.querySelector("#textgoeshere").innerHTML += "<img src='font.png' draggable='false' class='symbol beforecursor italicizer' style='width:"+specialSymbolSize+";object-position: -0px -120px;' />";
		}
		cursorPos += 1;
	} else {
		if (enableDebug){
		console.warn("W-Code 09: Warning!","\nCan't add 'italicizer'\nVariable canType is FALSE")
		}
	}
}
document.addEventListener("keydown", KeyCheck);
function KeyCheck(event)
{ if (canType) {
var KeyID = event.key;
switch(KeyID)
{
case "Backspace":
if (document.querySelector("#textgoeshere > .symbol:nth-child(" + (cursorPos + 1) + ")") !== null) {
	for (let index = 0; index < document.querySelector("#textgoeshere > .symbol:nth-child(" + (cursorPos + 1) + ")").classList.length; index++) {
		if (document.querySelector("#textgoeshere > .symbol:nth-child(" + (cursorPos + 1) + ")").classList[index] == "unerasable") {
			console.warn("W-Code 01: Warning!","\nCan't erase(backspace)\nClass == 'unerasable'")
			return;
		}
	}
	document.querySelector("#textgoeshere > .symbol:nth-child(" + (cursorPos + 1) + ")").remove();
	cursorPos -= 1;
} else {
	if (enableDebug){
	console.warn("W-Code 05: Warning!","\nCan't backspace\nTrouble recogning '.symbol' Element!")
	}
}
break;
case "Delete":
if (document.querySelector("#textgoeshere > .symbol:nth-child(" + (cursorPos + 2) + ")") !== null) {
	for (let index = 0; index < document.querySelector("#textgoeshere > .symbol:nth-child(" + (cursorPos + 1) + ")").classList.length; index++) {
		if (document.querySelector("#textgoeshere > .symbol:nth-child(" + (cursorPos + 2) + ")").classList[index] == "unerasable") {
			console.warn("W-Code 02: Warning!","\nCan't erase(delete)\nClass == 'unerasable'")
			return;
		}
	}
	document.querySelector("#textgoeshere > .symbol:nth-child(" + (cursorPos + 2) + ")").remove();
} else {
	if (enableDebug){
	console.warn("W-Code 06: Warning!","\nCan't delete\nTrouble recogning '.symbol' Element!")
	}
}
break;
case "ArrowLeft":
if (document.querySelector("#textgoeshere > .symbol:nth-child(" + (cursorPos + 1) + ")") !== null) {
	for (let index = 0; index < document.querySelector("#textgoeshere > .symbol:nth-child(" + (cursorPos + 1) + ")").classList.length; index++) {
		if (document.querySelector("#textgoeshere > .symbol:nth-child(" + (cursorPos + 1) + ")").classList[index] == "unerasable") {
			if (enableDebug){
			console.warn("W-Code 07: Warning!","\nCan't move past(Left) '.symbol'\nClass == 'unerasable'")
			}
			return;
		}
	}
	document.querySelector("#textgoeshere > .symbol:nth-child(" + (cursorPos + 1) + ")").classList.add('aftercursor');
	document.querySelector("#textgoeshere > .symbol:nth-child(" + (cursorPos + 1) + ")").classList.remove('beforecursor');
	cursorPos -= 1;
} else {
	if (enableDebug){
	console.warn("W-Code 03: Warning!","\nCan't move typing cursor(left)\nTrouble recogning '.symbol' Element!")
	}
}
break;
case "ArrowRight":
if (document.querySelector("#textgoeshere > .symbol:nth-child(" + (cursorPos + 2) + ")") !== null) {
	for (let index = 0; index < document.querySelector("#textgoeshere > .symbol:nth-child(" + (cursorPos + 2) + ")").classList.length; index++) {
		if (document.querySelector("#textgoeshere > .symbol:nth-child(" + (cursorPos + 2) + ")").classList[index] == "unerasable") {
			if (enableDebug){
			console.warn("W-Code 08: Warning!","\nCan't move past(Right) '.symbol'\nClass == 'unerasable'")
			}
			return;
		}
	}
	document.querySelector("#textgoeshere > .symbol:nth-child(" + (cursorPos + 2) + ")").classList.remove('aftercursor');
	document.querySelector("#textgoeshere > .symbol:nth-child(" + (cursorPos + 2) + ")").classList.add('beforecursor');
	cursorPos += 1;
} else {
	if (enableDebug){
	console.warn("W-Code 04: Warning!","\nCan't move typing cursor(right)\nTrouble recogning '.symbol' Element!")
	}
}
break;
case "Enter":
if (document.querySelector("#textgoeshere > .symbol:nth-child(" + (cursorPos + 1) + ")") !== null) {
document.querySelector("#textgoeshere > .symbol:nth-child(" + (cursorPos + 1) + ")").insertAdjacentHTML("afterend", "<div class='symbol beforecursor break' />");
} else { 
document.querySelector("#textgoeshere").innerHTML += "<div class='symbol beforecursor break' />";
}
cursorPos += 1;
break;
case "Shift":
case "Control":
case "F1":
case "F2":
case "F3":
case "F4":
case "F6":
case "F7":
case "F8":
case "F9":
case "F13":
case "F14":
case "F15":
case "F16":
case "F17":
case "F18":
case "F19":
case "F20":
case "F21":
case "F22":
case "F23":
case "F24":
case "End":
case "Home":
case "Unidentified":
case "ArrowUp":
case "ArrowDown":
event.preventDefault()
break;
case "F11":
case "F12":
case "PageUp":
case "PageDown":
case "NumLock":
case "CapsLock":
break;
case "F5":
event.preventDefault()
if (confirm("Are you sure you want to reload the page? Your progress will be lost!!!!")) {
	window.location.reload();
}
break;
case "F10":
event.preventDefault()
toggleDebug()
/* if (enableDebug) {
	document.querySelector("#debugMenu").style.top = "0px";
} else {
	document.querySelector("#debugMenu").style.top = "-60px";	
} */
break;
case "Tab":
event.preventDefault()
addImg(60,90,60)
break;
case " ":
event.preventDefault()
addImg(0,0,18)
break;
case "@":
addImg(0,30)
break;
case "`":
addImg(0,60,12)
break;
case "!":
addImg(24,0,15)
break;
case "A":
addImg(24,30)
break;
case "a":
addImg(24,60)
break;
case "B":
addImg(48,30)
break;
case "b":
addImg(48,60,21)
break;
case "C":
addImg(72,30)
break;
case "c":
addImg(72,60,21)
break;
case "D":
addImg(96,30)
break;
case "d":
addImg(96,60,21)
break;
case "E":
addImg(120,30)
break;
case "e":
addImg(120,60,21)
break;
case "F":
addImg(144,30)
break;
case "f":
addImg(144,60,18)
break;
case "G":
addImg(168,30)
break;
case "g":
addImg(168,60,21)
break;
case "H":
addImg(192,30,21)
break;
case "h":
addImg(192,60,21)
break;
case "I":
addImg(216,30,21)
break;
case "i":
addImg(216,60,9)
break;
case "J":
addImg(240,30,21)
break;
case "j":
addImg(240,60,12)
break;
case "K":
addImg(264,30,21)
break;
case "k":
addImg(264,60,18)
break;
case "L":
addImg(288,30,21)
break;
case "l":
addImg(288,60,9)
break;
case "M":
addImg(312,30)
break;
case "m":
addImg(312,60)
break;
case "N":
addImg(336,30)
break;
case "n":
addImg(336,60,21)
break;
case "O":
addImg(360,30)
break;
case "o":
addImg(360,60,21)
break;
case "P":
addImg(384,30)
break;
case "p":
addImg(384,60,21)
break;
case "Q":
addImg(408,30)
break;
case "q":
addImg(408,60,21)
break;
case "R":
addImg(432,30)
break;
case "r":
addImg(432,60,18)
break;
case "S":
addImg(456,30)
break;
case "s":
addImg(456,60,21)
break;
case "T":
addImg(480,30,21)
break;
case "t":
addImg(480,60,15)
break;
case "U":
addImg(504,30)
break;
case "u":
addImg(504,60,21)
break;
case "V":
if (event.ctrlKey) {
	navigator.clipboard.readText()
  .then(text => {
    console.log('Pasted content: ', text);
	printSystemText(text);
  })
  .catch(err => {
    console.error('Failed to read clipboard contents: ', err);
  });
} else {
addImg(528,30)
}
break;
case "v":
if (event.ctrlKey) {
	navigator.clipboard.readText()
  .then(text => {
    console.log('Pasted content: ', text);
	printSystemText(text);
  })
  .catch(err => {
    console.error('Failed to read clipboard contents: ', err);
  });
} else {
addImg(528,60,18)
}
break;
case "W":
addImg(552,30)
break;
case "w":
addImg(552,60)
break;
case "X":
addImg(576,30)
break;
case "x":
addImg(576,60)
break;
case "Y":
addImg(600,30,21)
break;
case "y":
addImg(600,60,21)
break;
case "Z":
addImg(624,30)
break;
case "z":
addImg(624,60,21)
break;
case "?":
addImg(744,0,21)
break;
case "\"":
addImg(48,0,18)
break;
case "#":
addImg(72,0,24)
break;
case "$":
addImg(96,0,21)
break;
case "%":
addImg(120,0,24)
break;
case "&":
addImg(144,0,24)
break;
case "'":
addImg(168,0,12)
break;
case "(":
addImg(192,0,15)
break;
case ")":
addImg(216,0,15)
break;
case "*":
addImg(240,0,24)
break;
case "+":
addImg(264,0,21)
break;
case ",":
addImg(288,0,9)
break;
case "-":
addImg(312,0,21)
break;
case ".":
addImg(336,0,9)
break;
case "/":
addImg(360,0,15)
break;
case "0":
addImg(384,0,24)
break;
case "1":
addImg(408,0,15)
break;
case "2":
addImg(432,0,24)
break;
case "3":
addImg(456,0,24)
break;
case "4":
addImg(480,0,24)
break;
case "5":
addImg(504,0,24)
break;
case "6":
addImg(528,0,24)
break;
case "7":
addImg(552,0,24)
break;
case "8":
addImg(576,0,24)
break;
case "9":
addImg(600,0,24)
break;
case ":":
addImg(624,0,9)
break;
case ";":
addImg(648,0,9)
break;
case "<":
addImg(672,0,18)
break;
case "=":
addImg(696,0,21)
break;
case ">":
addImg(720,0,18)
break;
case "[":
addImg(648,30,15)
break;
case "\\":
addImg(672,30,15)
break;
case "]":
addImg(696,30,15)
break;
case "^":
addImg(720,30,24)
break;
case "_":
addImg(744,30,24)
break;
default:
addImg(24,90,36)
break;
}
/* switch(KeyID)
{
case "Backspace":
break;
case " ":
break;
case "Enter":
var audio = new Audio('EnterGuitar.wav');
audio.play();
break;
default:
break;
} */
	if (document.querySelector("#textgoeshere > .symbol:nth-child(" + (cursorPos + 12) + ")") !== null) {
		document.querySelector("#cursor").scrollIntoView({ behavior: "smooth", block: "end"});
	} else {
		document.querySelector("#emptyspace").scrollIntoView({ behavior: "smooth", block: "end"});
	}
} else {console.log("canType = false")};
}
function printSystemText(whattotypeout,systextcolor) {
	canType = false
	if (systextcolor === undefined) {
		systextcolor = currentlyUsedFont;
	}
	console.log("String: " + whattotypeout + "\nLength: " + whattotypeout.length)
	for (let i = 0; i < whattotypeout.length; i++) {
		switch(whattotypeout[i])
			{
			case " ":
			addImg(0,0,18,systextcolor)
			break;
			case "@":
			addImg(0,30,24,systextcolor)
			break;
			case "`":
			addImg(0,60,12,systextcolor)
			break;
			case "\n":
			if (document.querySelector("#textgoeshere > .symbol:nth-child(" + (cursorPos + 1) + ")") !== null) {
			document.querySelector("#textgoeshere > .symbol:nth-child(" + (cursorPos + 1) + ")").insertAdjacentHTML("afterend", "<div class='symbol beforecursor break' />");
			} else { 
			document.querySelector("#textgoeshere").innerHTML += "<div class='symbol beforecursor break' />";
			}
			cursorPos += 1;
			break;
			case "!":
			addImg(24,0,15,systextcolor)
			break;
			case "A":
			addImg(24,30,24,systextcolor)
			break;
			case "a":
			addImg(24,60,24,systextcolor)
			break;
			case "B":
			addImg(48,30,24,systextcolor)
			break;
			case "b":
			addImg(48,60,21,systextcolor)
			break;
			case "C":
			addImg(72,30,24,systextcolor)
			break;
			case "c":
			addImg(72,60,21,systextcolor)
			break;
			case "D":
			addImg(96,30,24,systextcolor)
			break;
			case "d":
			addImg(96,60,21,systextcolor)
			break;
			case "E":
			addImg(120,30,24,systextcolor)
			break;
			case "e":
			addImg(120,60,21,systextcolor)
			break;
			case "F":
			addImg(144,30,24,systextcolor)
			break;
			case "f":
			addImg(144,60,18,systextcolor)
			break;
			case "G":
			addImg(168,30,24,systextcolor)
			break;
			case "g":
			addImg(168,60,21,systextcolor)
			break;
			case "H":
			addImg(192,30,21,systextcolor)
			break;
			case "h":
			addImg(192,60,21,systextcolor)
			break;
			case "I":
			addImg(216,30,21,systextcolor)
			break;
			case "i":
			addImg(216,60,9,systextcolor)
			break;
			case "J":
			addImg(240,30,21,systextcolor)
			break;
			case "j":
			addImg(240,60,12,systextcolor)
			break;
			case "K":
			addImg(264,30,21,systextcolor)
			break;
			case "k":
			addImg(264,60,18,systextcolor)
			break;
			case "L":
			addImg(288,30,21,systextcolor)
			break;
			case "l":
			addImg(288,60,9,systextcolor)
			break;
			case "M":
			addImg(312,30,24,systextcolor)
			break;
			case "m":
			addImg(312,60,24,systextcolor)
			break;
			case "N":
			addImg(336,30,24,systextcolor)
			break;
			case "n":
			addImg(336,60,21,systextcolor)
			break;
			case "O":
			addImg(360,30,24,systextcolor)
			break;
			case "o":
			addImg(360,60,21,systextcolor)
			break;
			case "P":
			addImg(384,30,24,systextcolor)
			break;
			case "p":
			addImg(384,60,21,systextcolor)
			break;
			case "Q":
			addImg(408,30,24,systextcolor)
			break;
			case "q":
			addImg(408,60,21,systextcolor)
			break;
			case "R":
			addImg(432,30,24,systextcolor)
			break;
			case "r":
			addImg(432,60,18,systextcolor)
			break;
			case "S":
			addImg(456,30,24,systextcolor)
			break;
			case "s":
			addImg(456,60,21,systextcolor)
			break;
			case "T":
			addImg(480,30,21,systextcolor)
			break;
			case "t":
			addImg(480,60,15,systextcolor)
			break;
			case "U":
			addImg(504,30,24,systextcolor)
			break;
			case "u":
			addImg(504,60,21,systextcolor)
			break;
			case "V":
			addImg(528,30,24,systextcolor)
			break;
			case "v":
			addImg(528,60,18,systextcolor)
			break;
			case "W":
			addImg(552,30,24,systextcolor)
			break;
			case "w":
			addImg(552,60,24,systextcolor)
			break;
			case "X":
			addImg(576,30,24,systextcolor)
			break;
			case "x":
			addImg(576,60,24,systextcolor)
			break;
			case "Y":
			addImg(600,30,21,systextcolor)
			break;
			case "y":
			addImg(600,60,21,systextcolor)
			break;
			case "Z":
			addImg(624,30,24,systextcolor)
			break;
			case "z":
			addImg(624,60,21,systextcolor)
			break;
			case "?":
			addImg(744,0,21)
			break;
			case "\"":
			addImg(48,0,18)
			break;
			case "#":
			addImg(72,0,24)
			break;
			case "$":
			addImg(96,0,21)
			break;
			case "%":
			addImg(120,0,24)
			break;
			case "&":
			addImg(144,0,24)
			break;
			case "'":
			addImg(168,0,12)
			break;
			case "(":
			addImg(192,0,15)
			break;
			case ")":
			addImg(216,0,15)
			break;
			case "*":
			addImg(240,0,24)
			break;
			case "+":
			addImg(264,0,21)
			break;
			case ",":
			addImg(288,0,9)
			break;
			case "-":
			addImg(312,0,21)
			break;
			case ".":
			addImg(336,0,9)
			break;
			case "/":
			addImg(360,0,15)
			break;
			case "0":
			addImg(384,0,24)
			break;
			case "1":
			addImg(408,0,15)
			break;
			case "2":
			addImg(432,0,24)
			break;
			case "3":
			addImg(456,0,24)
			break;
			case "4":
			addImg(480,0,24)
			break;
			case "5":
			addImg(504,0,24)
			break;
			case "6":
			addImg(528,0,24)
			break;
			case "7":
			addImg(552,0,24)
			break;
			case "8":
			addImg(576,0,24)
			break;
			case "9":
			addImg(600,0,24)
			break;
			case ":":
			addImg(624,0,9)
			break;
			case ";":
			addImg(648,0,9)
			break;
			case "<":
			addImg(672,0,18)
			break;
			case "=":
			addImg(696,0,21)
			break;
			case ">":
			addImg(720,0,18)
			break;
			case "[":
			addImg(648,30,15)
			break;
			case "\\":
			addImg(672,30,15)
			break;
			case "]":
			addImg(696,30,15)
			break;
			case "^":
			addImg(720,30,24)
			break;
			case "_":
			addImg(744,30,24)
			break;
			case "█":
			addImg(216,90,24,systextcolor)
			break;
			case "▓":
			addImg(240,90,24,systextcolor)
			break;
			case "▒":
			addImg(264,90,24,systextcolor)
			break;
			case "░":
			addImg(312,90,24,systextcolor)
			break;
			default:
			addImg(24,90,36,systextcolor)
			break;
			}
	}
	canType = true
	return whattotypeout
}
/* printSystemText("█████████████▓▓▓▓███████████▓▒▒▒▓▒\n███████████▓▒▒▒▓███████▓▒▓███▒▒▓▒▒\n███████████▒▒▒▒█▒▓░░░█████▓████▒▒▒\n███████████▒▒▒█▒▓▓█████████████▒██\n██████▓▓██▒▒▒█▒▒▓▓███▒████████████\n██████▒▒▓▒▒▒▒█░░▓▓██████▓▓████████\n████▓▒▒▒▒▓▓▒▒▒░░░▓▓▓██▓▓▓▓████████\n█████▓▒▒▓▓▓▓▒▒▒▓█████▓▓▒▓█████████\n█████████▓▓▓▒▒▒▒▒▒▒▒▒▒▒▓▓█████████\n█████████▓▓▓▒▒▒▒▒▒▒▒▒▓▓▓██████████\n█▓▓██████▓▓▒▒▒▒▒▒▒▓▓▒▒▓███▓▓██████\nSubscribe!!!","font") */