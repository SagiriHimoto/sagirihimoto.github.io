//sancho panza	

		//body
	var myImage = document.getElementById("myImg");
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
	screen.width = 50;
	screen.height = 50;
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
	            charCtx.drawImage(myImage, 48, 0, 48, 48, 0, 0, 48, 48);
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
	    this.giveBirth = () => {
			var personality = [];
				if(document.getElementById("autoEquip").checked){	
			var randNumber = Math.floor((Math.random() * 10) + 1);
			var randNumber2 = Math.floor((Math.random() * 360) + 1);
			var randNumber3 = (Math.floor((Math.random() * 10) + 1))-1;
					
			//console.log(randNumber3);
			var armor = [0,192,288]
						
			charCtx.filter = 'hue-rotate('+ randNumber2 +'deg) brightness('+ Number(1 - (randNumber2/1000)) +')  ';
			if(randNumber3 == 0 && this.gender == "female"){
				console.log("bad look");
			}else{
			charCtx.drawImage(myImage5,armor[randNumber3], 0, 48, 48, 0, 1, 48, 48);	
			};
					
			if(randNumber3 == 1){
			personality.push("Templar");	
			} else
			if(randNumber3 == 0){
			personality.push("Enforcer");	
			} else
			if(randNumber3 == 2){
			personality.push("Knight");	
			}

			if(randNumber3 == 1)randNumber3 = (Math.floor((Math.random() * 4) + 1))-1;
			if(randNumber3 != 1){
				randNumber = Math.floor((Math.random() * 10) + 1);
			 randNumber2 = Math.floor((Math.random() * 360) + 1);
								
				if(randNumber3 == 0 && this.gender == "female"){
				console.log("bad look");
			}else{
				charCtx.filter = 'hue-rotate('+ randNumber2 +'deg) brightness('+ Number(1 - (randNumber2/1000)) +')  ';
			charCtx.drawImage(myImage5,armor[randNumber3], 0, 48, 48, 0, 1, 48, 48);	
			};	
			}
			 randNumber = Math.floor((Math.random() * 11) + 1)-1;
			 randNumber2 = Math.floor((Math.random() * 360) + 1);
				
			charCtx.filter = 'hue-rotate('+ randNumber2 +'deg) brightness('+ Number(1 - (randNumber2/1000)) +')  ';
			charCtx.drawImage(myImage4, randNumber*48, 0, 48, 48, 0, 3, 48, 48);
		
			 randNumber = Math.floor((Math.random() * 10) + 1);
			 randNumber2 = Math.floor((Math.random() * 360) + 1);		
			charCtx.filter = 'hue-rotate('+ randNumber2 +'deg) brightness('+ Number(1 - (randNumber2/1000)) +')  ';
			charCtx.drawImage(myImage6, randNumber*48, 0, 48, 48, 0, 3, 48, 48);
			}
			console.log(personality);
			var x = document.createElement("IMG");
			x.src = screen.toDataURL('image/png');
			x.style.width = "100px";
	        document.getElementById("myChildren").appendChild(x);
 charCtx.clearRect(0, 0, 60, 60);char = new NewChar();
	    }
	}
	var char = new NewChar();