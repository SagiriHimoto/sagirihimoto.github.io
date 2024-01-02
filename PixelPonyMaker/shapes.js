function drawBodyColor(){
}

var Mane2Color1 = document.getElementById("Mane2Color1");
var Mane2Color2 = document.getElementById("Mane2Color2");
var Mane2Color3 = document.getElementById("Mane2Color3");
var Mane2Color4 = document.getElementById("Mane2Color4");
var Mane2Color5 = document.getElementById("Mane2Color5");
function drawFrontMane1AndHornColor(FrontManeXoffset, FrontManeYoffset) {
		if (FrontManeXoffset == undefined) {
			FrontManeXoffset = 0;
			FrontManeYoffset = 0;
		};
		
		if (char.manePattern == 0 || char.manePattern == 1) {
			charCtx.fillStyle = char.maneColor1;
			charCtx.fillRect(47+FrontManeXoffset, 31+FrontManeYoffset, 8, 5);
			charCtx.fillRect(45+FrontManeXoffset, 32+FrontManeYoffset, 2, 6);
			charCtx.fillRect(47+FrontManeXoffset, 36+FrontManeYoffset, 3, 1);
			charCtx.fillRect(39+FrontManeXoffset, 38+FrontManeYoffset, 7, 1);
			charCtx.fillRect(43+FrontManeXoffset, 33+FrontManeYoffset, 2, 5);
			charCtx.fillRect(37+FrontManeXoffset, 34+FrontManeYoffset, 6, 4);
			charCtx.fillRect(35+FrontManeXoffset, 34+FrontManeYoffset, 2, 2);
			charCtx.fillRect(36+FrontManeXoffset, 36+FrontManeYoffset, 1, 1);
			charCtx.fillRect(34+FrontManeXoffset, 31+FrontManeYoffset, 1, 4);
			charCtx.fillRect(35+FrontManeXoffset, 33+FrontManeYoffset, 3, 1);
			charCtx.fillRect(35+FrontManeXoffset, 32+FrontManeYoffset, 1, 1);
			charCtx.fillRect(55+FrontManeXoffset, 32+FrontManeYoffset, 2, 4);
			charCtx.fillRect(57+FrontManeXoffset, 33+FrontManeYoffset, 2, 3);
			if (char.manePattern == 1) {
			charCtx.fillStyle = char.maneColor2;
			}
			if (char.manePattern == 1) {
			charCtx.fillStyle = char.maneColor3;
			}
			charCtx.fillRect(50+FrontManeXoffset, 36+FrontManeYoffset, 9, 6);
			charCtx.fillRect(47+FrontManeXoffset, 37+FrontManeYoffset, 3, 6);
			if (char.manePattern == 1) {
			charCtx.fillStyle = char.maneColor4;
			}
			if (char.manePattern == 1) {
			charCtx.fillStyle = char.maneColor5;
			}
		}
}