/* "https://i.stack.imgur.com/vJscc.png" */
function createHeaderAndFooter() {
    var header="<div class=\"navigationbar\" id=\"navbarshrinky\">\r\n<a href=\"404.html\"><div id=\"wholetitle\" class=\"titlish\"><img class=\"imglogo44\" src=\"assets\/AzureChiveLogo64x64.png\"><\/img> AzureChive<\/div>\r\n<a id=\"helpa\" class=\"inactive hoverablea\" href=\"404.html\"><i class=\"fa-solid fa-circle-question\"><\/i> Help<\/a>\r\n<a id=\"abouta\" class=\"inactive hoverablea\" href=\"404.html\"><i class=\"fa-solid fa-circle-info\"><\/i> About<\/a>\r\n<a id=\"homea\" class=\"inactive hoverablea\" href=\"404.html\"><i class=\"fa-solid fa-house\"><\/i> Home<\/a>\r\n\t\t<div class=\"progress-container\" id=\"barcontainer\">\r\n\t\t<div class=\"progress-bar\" id=\"myBar\"><\/div>\r\n\t<\/div>\r\n<\/div>";
    var footer="<div class=\"FooterPart\"><center>Copyright &copy; 2018 \"Sagiri&amp;Makigiri\" All Rights reserved.<\/center><\/div>";
	document.body.innerHTML = header + document.body.innerHTML + footer;
	if (document.getElementById("skin") != null) {
		var idElem = document.getElementById("SkinParams");
		var skinsParamsDiv = "<div>PARAMETERS GO HERE:<br/>" + Param1 + "</div>"
		idElem.innerHTML = skinsParamsDiv
	}
}
window.addEventListener("load", createHeaderAndFooter);

window.onscroll = function() {myFunction()};

function myFunction() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;
	var appear = 0;
	if(scrolled>0){
		appear = 8
	}
	document.getElementById("barcontainer").style.height = appear + "px";
	document.getElementById("myBar").style.height = appear + "px";
	document.getElementById("myBar").style.width = scrolled + "%";
	document.getElementById("navbarshrinky").style.height = appear + 57 + "px";
	document.getElementById("wholetitle").style.margin = appear + 9 + "px" + " 16px" + " 0px" + " 16px";
	document.getElementById("helpa").style.padding = appear + 14 + "px" + " 1%";
	document.getElementById("abouta").style.padding = appear + 14 + "px" + " 1%";
	document.getElementById("homea").style.padding = appear + 14 + "px" + " 1%";
}

console.log("\r\n\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557   \u2588\u2588\u2557                                \r\n\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255A\u2588\u2588\u2557 \u2588\u2588\u2554\u255D                                \r\n\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D \u255A\u2588\u2588\u2588\u2588\u2554\u255D                                 \r\n\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557  \u255A\u2588\u2588\u2554\u255D                                  \r\n\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D   \u2588\u2588\u2551                                   \r\n\u255A\u2550\u2550\u2550\u2550\u2550\u255D    \u255A\u2550\u255D                                   \r\n                                                 \r\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557          \r\n\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551          \r\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2588\u2557\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551          \r\n\u255A\u2550\u2550\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551          \r\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551          \r\n\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u255D          \r\n                                                 \r\n\u2588\u2588\u2557  \u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \r\n\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557\u255A\u2550\u2550\u2588\u2588\u2554\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557\r\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2551\r\n\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2551\u255A\u2588\u2588\u2554\u255D\u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2551\r\n\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2551 \u255A\u2550\u255D \u2588\u2588\u2551\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D   \u2588\u2588\u2551   \u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\r\n\u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u255D\u255A\u2550\u255D     \u255A\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D    \u255A\u2550\u255D    \u255A\u2550\u2550\u2550\u2550\u2550\u255D \r\n                                                 \r\n");