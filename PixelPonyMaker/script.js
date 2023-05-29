//sancho panza	

		//body
	var myImage = document.getElementById("bodyTexture");
	//eyes
	var myImage2 = document.getElementById("myImg2");
	//hair
	var myImage3 = document.getElementById("myImg3");
	//weapons and gear
	var myImage4 = document.getElementById("offWeapons");
	var myImage5 = document.getElementById("armor");
	var myImage6 = document.getElementById("mainHand");
	
    var backSize = document.getElementById("gd1");
    var screen = document.getElementById("charScreen");
	screen.width = 128;
	screen.height = 128;
	var charCtx = screen.getContext("2d");
	
     function NewChar(x1,x2,x3,x4,x5) {
		if(x1==undefined){
			x1="male";
			x2=0;
			x3=1;
			x4=[ [0],[4],[48, 240, 336] ];
			x5=0;
		};
		
		
	    this.gender = x1;
	    this.race = x2;
	    this.ethnicity = x3;
	    this.hair = x4;
	    this.eyes = x5;
		this.drawMyChar = () => {
	        charCtx.clearRect(0, 0, 48, 48);
			charCtx.filter = 'hue-rotate(' + this.race + 'deg) brightness(' + this.ethnicity + ')  ';
			if (this.gender == "male") {
	            charCtx.drawImage(myImage, 0, 0, 128, 128, 0, 0, 128, 128);
	        } else if (this.gender == "female") {
	            charCtx.drawImage(myImage, 192, 0, 48, 48, 0, 0, 48, 48);
	        } else {
	            charCtx.drawImage(myImage, 336, 0, 48, 48, 0, 0, 48, 48);
	        };
			
	        charCtx.filter = 'hue-rotate(' + this.eyes + 'deg) brightness(1)  ';
	        charCtx.drawImage(myImage2, 0+48, 0, 48, 48, 0, 0, 48, 48);
			
			
	        charCtx.filter = 'hue-rotate(' + this.hair[0] + 'deg) brightness(' + Number(1 - (this.hair[0] / 1000)) + ')  ';
	        charCtx.drawImage(myImage3, this.hair[2][this.hair[1]], 0, 48, 48, 0, 0, 48, 48);
		};
			   
	    this.drawMyChar();

	}
	var char = new NewChar();
	
function calculate_shader(color,percent){

    var ctx = document.createElement('canvas').getContext('2d');

    ctx.fillStyle = color;
    ctx.fillRect(0,0,1,1);

    var color = ctx.getImageData(0,0,1,1);
    var r = color.data[0] - Math.floor( percent / 100 * 255 );
    var g = color.data[1] - Math.floor( percent / 100 * 255 / 2);
    var b = color.data[2] - Math.floor( percent / 100 * 255 );

    return 'rgb('+r+','+g+','+b+')';
}