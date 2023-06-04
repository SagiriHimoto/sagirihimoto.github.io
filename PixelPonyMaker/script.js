//sancho panza	

		//body
	var myImage = document.getElementById("bodyTexture");
	//eyes
	var myImage2 = document.getElementById("EYEris");
	var eyetypes = document.getElementById("EYEs");
	//hair
		var fmanestyle = document.getElementById("maneTexture");
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
	
     function NewChar(x1,x2,x3,x4,x5,defaultEyes) {
		if(x1==undefined){
			x1="male";
			x2=0;
			x3=1;
			x4=[ [0],[4],[48, 200, 336] ];
			x5=0;
			defaultEyes=0;
			defaultMane=0;
			defaultBackmane=0;
			defaultTail=0;
		};
		
		
	    this.gender = "male";
	    this.Bodycolor = x2;
		this.Bodybright = 1;
		this.Bodysatur = 100;
	    this.ethnicity = x3;
	    this.hair = x4;
		this.mane = defaultMane;
		this.manePattern = 0;
		this.maneColor1 = [ [0], [1], [100] ];
		this.maneColor2 = [ [45], [1], [100] ];
		this.maneColor3 = [ [90], [1], [100] ];
		this.maneColor4 = [ [135], [1], [100] ];
		this.maneColor5 = [ [180], [1], [100] ];
		this.maneColor6 = [ [225], [1], [100] ];
		this.maneColor7 = [ [270], [1], [100] ];
		this.maneColor8 = [ [315], [1], [100] ];
		this.backmane = defaultBackmane;
		this.tail = defaultTail;
	    this.eyes = x5;
		this.eyesBright = 1;
		this.eyesSatur = 100;
		this.eyetype = defaultEyes;
		this.drawMyChar = () => {
	        charCtx.clearRect(0, 0, 128, 128);
			charCtx.filter = 'hue-rotate(' + this.Bodycolor + 'deg) brightness(' + this.Bodybright + ') saturate(' + this.Bodysatur + '%)';

	        charCtx.drawImage(myImage, 0, 0, 128, 128, 0, 0, 128, 128);
			
			charCtx.filter = 'none';
			if (this.eyetype==0) {
			charCtx.drawImage(eyetypes, 128, 0, 128, 128, 0, 0, 128, 128);
			} else {
			charCtx.drawImage(eyetypes, 0, 0, 128, 128, 0, 0, 128, 128);
			};
			
	        charCtx.filter = 'hue-rotate(' + this.eyes + 'deg)   brightness(' + this.eyesBright + ') saturate(' + this.eyesSatur + '%)';
			if (this.eyetype==0) {
			charCtx.drawImage(myImage2, 128, 0, 128, 128, 0, 0, 128, 128);
			} else {
			charCtx.drawImage(myImage2, 0, 0, 128, 128, 0, 0, 128, 128);
			};
			
			charCtx.filter = 'hue-rotate(' + this.maneColor1[0] + 'deg)   brightness(' + this.maneColor1[1] + ') saturate(' + this.maneColor1[2] + '%)';
			if (this.mane == 0) {
	            charCtx.drawImage(fmanestyle, 0, 0, 128, 128, 0, 0, 128, 128);
	        } else if (this.mane == 1) {
	            charCtx.drawImage(fmanestyle, 128, 0, 128, 128, 0, 0, 128, 128);
	        } else if (this.mane == 2) {
	            charCtx.drawImage(fmanestyle, 256, 0, 128, 128, 0, 0, 128, 128);
	        } else if (this.mane == 3) {
	            charCtx.drawImage(fmanestyle, 384, 0, 128, 128, 0, 0, 128, 128);
	        } else if (this.mane == 4) {
	            charCtx.drawImage(fmanestyle, 0, 128, 128, 128, 0, 0, 128, 128);
	        } else if (this.mane == 5) {
	            charCtx.drawImage(fmanestyle, 128, 128, 128, 128, 0, 0, 128, 128);
	        } else {
	            charCtx.drawImage(fmanestyle, 0, 0, 128, 128, 0, 0, 128, 128);
	        };
			
			
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

function hexToHSL(H) {
  // Convert hex to RGB first
  let r = 0, g = 0, b = 0;
  if (H.length == 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length == 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r,g,b),
      cmax = Math.max(r,g,b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

  if (delta == 0)
    h = 0;
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  else if (cmax == g)
    h = (b - r) / delta + 2;
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0)
    h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return "hsl(" + h + "," + s + "%," + l + "%)";
}

function toHSLObject(OLDHSL) {
  var obj = {};
  var array = OLDHSL.replace(/\s+/g, '').split(',');
  obj.h = parseInt(array[0].replace('hsl(', ''), 10);
  obj.s = parseInt(array[1].replace(/%+/g, ''), 10);
  obj.l = parseInt(array[2].replace('/%+/g)', ''), 10);
  return obj;
}

const eyeBrightIn = document.querySelector('#eyeBright')
const eyebrightNumIn = document.querySelector('#eyebrightNumIn')
const eyeColorIn = document.querySelector("#eyeColor")
const eyecolorNumIn = document.querySelector("#eyecolorNumIn")
const eyeSaturIn = document.querySelector("#eyeSatur")
const eyesaturNumIn = document.querySelector("#eyesaturNumIn")

const bodyBrightIn = document.querySelector('#bodyBrightIn')
const bodybrightNumIn = document.querySelector('#bodybrightNumIn')
const bodyColorIn = document.querySelector("#bodyColorIn")
const bodycolorNumIn = document.querySelector("#bodycolorNumIn")
const bodySaturIn = document.querySelector("#bodySaturIn")
const bodysaturNumIn = document.querySelector("#bodysaturNumIn")

const ManeColor1Input = document.querySelector('#ManeColor1Input')
const ManeColor2Input = document.querySelector('#ManeColor2Input')
const ManeColor3Input = document.querySelector('#ManeColor3Input')
const ManeColor4Input = document.querySelector('#ManeColor4Input')
const ManeColor5Input = document.querySelector('#ManeColor5Input')
const ManeColor6Input = document.querySelector('#ManeColor6Input')
const ManeColor7Input = document.querySelector('#ManeColor7Input')
const ManeColor8Input = document.querySelector('#ManeColor8Input')
const ManeColor1NumIn = document.querySelector('#ManeColor1NumIn')
const ManeColor2NumIn = document.querySelector('#ManeColor2NumIn')
const ManeColor3NumIn = document.querySelector('#ManeColor3NumIn')
const ManeColor4NumIn = document.querySelector('#ManeColor4NumIn')
const ManeColor5NumIn = document.querySelector('#ManeColor5NumIn')
const ManeColor6NumIn = document.querySelector('#ManeColor6NumIn')
const ManeColor7NumIn = document.querySelector('#ManeColor7NumIn')
const ManeColor8NumIn = document.querySelector('#ManeColor8NumIn')
const ManeBright1Input = document.querySelector('#ManeBright1Input')
const ManeBright2Input = document.querySelector('#ManeBright2Input')
const ManeBright3Input = document.querySelector('#ManeBright3Input')
const ManeBright4Input = document.querySelector('#ManeBright4Input')
const ManeBright5Input = document.querySelector('#ManeBright5Input')
const ManeBright6Input = document.querySelector('#ManeBright6Input')
const ManeBright7Input = document.querySelector('#ManeBright7Input')
const ManeBright8Input = document.querySelector('#ManeBright8Input')
const ManeBright1NumIn = document.querySelector('#ManeBright1NumIn')
const ManeBright2NumIn = document.querySelector('#ManeBright2NumIn')
const ManeBright3NumIn = document.querySelector('#ManeBright3NumIn')
const ManeBright4NumIn = document.querySelector('#ManeBright4NumIn')
const ManeBright5NumIn = document.querySelector('#ManeBright5NumIn')
const ManeBright6NumIn = document.querySelector('#ManeBright6NumIn')
const ManeBright7NumIn = document.querySelector('#ManeBright7NumIn')
const ManeBright8NumIn = document.querySelector('#ManeBright8NumIn')
const ManeSat1Input = document.querySelector('#ManeSat1Input')
const ManeSat2Input = document.querySelector('#ManeSat2Input')
const ManeSat3Input = document.querySelector('#ManeSat3Input')
const ManeSat4Input = document.querySelector('#ManeSat4Input')
const ManeSat5Input = document.querySelector('#ManeSat5Input')
const ManeSat6Input = document.querySelector('#ManeSat6Input')
const ManeSat7Input = document.querySelector('#ManeSat7Input')
const ManeSat8Input = document.querySelector('#ManeSat8Input')
const ManeSat1NumIn = document.querySelector('#ManeSat1NumIn')
const ManeSat2NumIn = document.querySelector('#ManeSat2NumIn')
const ManeSat3NumIn = document.querySelector('#ManeSat3NumIn')
const ManeSat4NumIn = document.querySelector('#ManeSat4NumIn')
const ManeSat5NumIn = document.querySelector('#ManeSat5NumIn')
const ManeSat6NumIn = document.querySelector('#ManeSat6NumIn')
const ManeSat7NumIn = document.querySelector('#ManeSat7NumIn')
const ManeSat8NumIn = document.querySelector('#ManeSat8NumIn')

document.addEventListener('DOMContentLoaded', function() {
   char.drawMyChar();
}, false);

window.onscroll = function (e) { 
		if (window.scrollY > 80) {
			document.querySelector("#charScreen").className = "chrscr fixedSCR";
		} else {
			document.querySelector("#charScreen").className = "chrscr";
		}
}