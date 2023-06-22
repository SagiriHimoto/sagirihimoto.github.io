function drawBodyColor(){
}

function drawFrontMane1AndHornColor(FrontManeXoffset, FrontManeYoffset) {
		if (FrontManeXoffset == undefined) {
			FrontManeXoffset = 0;
			FrontManeYoffset = 0;
		};
		
		if (char.manePattern == 0) {
			charCtx.fillStyle = char.maneColor3;
			charCtx.fillRect(50+FrontManeXoffset, 36+FrontManeYoffset, 9, 6);
		}
}