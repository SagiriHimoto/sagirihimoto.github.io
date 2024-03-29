function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
	tablinks[i].className = tablinks[i].className.replace(" active", "");
	tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className = "tablinks active";
}

function openManeColors(evt, maneName) {
  // Declare all variables
  var i, manetabcontent, manetablinks;

  // Get all elements with class="manetabcontent" and hide them
  manetabcontent = document.getElementsByClassName("manetabcontent");
  for (i = 0; i < manetabcontent.length; i++) {
    manetabcontent[i].style.display = "none";
  }

  // Get all elements with class="manetablinks" and remove the class "active"
  manetablinks = document.getElementsByClassName("manetablinks");
  for (i = 0; i < manetablinks.length; i++) {
    manetablinks[i].className = manetablinks[i].className.replace(" active", "");
    manetablinks[i].className = manetablinks[i].className.replace(" active", "");
    manetablinks[i].className = manetablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  evt.currentTarget.className += " active";
}

function openBackManeColors(evt, backmaneName) {
  // Declare all variables
  var i, backmanetabcontent, backmanetablinks;

  // Get all elements with class="backmanetabcontent" and hide them
  backmanetabcontent = document.getElementsByClassName("backmanetabcontent");
  for (i = 0; i < backmanetabcontent.length; i++) {
    backmanetabcontent[i].style.display = "none";
  }

  // Get all elements with class="backmanetablinks" and remove the class "active"
  backmanetablinks = document.getElementsByClassName("backmanetablinks");
  for (i = 0; i < backmanetablinks.length; i++) {
    backmanetablinks[i].className = backmanetablinks[i].className.replace(" active", "");
    backmanetablinks[i].className = backmanetablinks[i].className.replace(" active", "");
    backmanetablinks[i].className = backmanetablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(backmaneName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openTailColors(evt, tailName) {
  // Declare all variables
  var i, tailtabcontent, tailtablinks;

  // Get all elements with class="tailtabcontent" and hide them
  tailtabcontent = document.getElementsByClassName("tailtabcontent");
  for (i = 0; i < tailtabcontent.length; i++) {
    tailtabcontent[i].style.display = "none";
  }

  // Get all elements with class="tailtablinks" and remove the class "active"
  tailtablinks = document.getElementsByClassName("tailtablinks");
  for (i = 0; i < tailtablinks.length; i++) {
    tailtablinks[i].className = tailtablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tailName).style.display = "block";
  evt.currentTarget.className += " active";
}

openCity(event, 'Body')
document.getElementById("bodbutton").className += " active";

function maneinactive(SomeManeToActivate) {
  actualManes = document.getElementsByClassName("mane");
  for (i = 0; i < actualManes.length; i++) {
    actualManes[i].className = actualManes[i].className.replace("charedititem mane charedititemactive", "charedititem mane");
  }
  actualManes[SomeManeToActivate].className = actualManes[SomeManeToActivate].className.replace("charedititem mane", "charedititem mane charedititemactive");
			for (i = 0; i < actualManePatterns.length; i++) {
				if (i > char.manePatternCountPerMane[SomeManeToActivate]) {
					actualManePatterns[i-1].className = "nodisplay manepattern";
					} else {
					if (i != char.manePattern) {
						actualManePatterns[i].className = "charedititem manepattern";
					} else {
						actualManePatterns[i].className = "charedititem manepattern charedititemactive";
					}
				}
			}
			if (char.manePattern > char.manePatternCountPerMane[SomeManeToActivate]) {
			char.manePattern = char.manePatternCountPerMane[SomeManeToActivate];
			manepatterninactive(char.manePatternCountPerMane[SomeManeToActivate]);
			char.drawMyChar();
			}
			changepatternitemsgraphics(SomeManeToActivate + 1)
}

function changepatternitemsgraphics(thatpatternitemboxgraphictochange) {
	if (thatpatternitemboxgraphictochange == 1) {
		manepattern1.style.setProperty('--itembg', 'url(./assets/mane1.png)');
	} else if (thatpatternitemboxgraphictochange == 2) {
		manepattern1.style.setProperty('--itembg', 'url(./assets/mane2.png)');
		manepattern2.style.setProperty('--itembg', 'url(./assets/mane2pattern1.png)');
	} else if (thatpatternitemboxgraphictochange == 3) {
		manepattern1.style.setProperty('--itembg', 'url(./assets/mane3.png)');;
	} else if (thatpatternitemboxgraphictochange == 4) {
		manepattern1.style.setProperty('--itembg', 'url(./assets/mane4.png)');;
	} else if (thatpatternitemboxgraphictochange == 5) {
		manepattern1.style.setProperty('--itembg', 'url(./assets/mane5.png)');;
	} else if (thatpatternitemboxgraphictochange == 6) {
		manepattern1.style.setProperty('--itembg', 'url(./assets/mane6.png)');;
	}
	console.log(thatpatternitemboxgraphictochange)
}

function manepatterninactive(SomeManePatternToActivate) {
  for (i = 0; i < actualManePatterns.length; i++) {
    actualManePatterns[i].className = actualManePatterns[i].className.replace("charedititem manepattern charedititemactive", "charedititem manepattern");
  }
  actualManePatterns[SomeManePatternToActivate].className = actualManePatterns[SomeManePatternToActivate].className.replace("charedititem manepattern", "charedititem manepattern charedititemactive");
  char.manePattern = SomeManePatternToActivate;
}

function eyesinactive(SomeEyeToActivate) {
  actualEyes = document.getElementsByClassName("eye");
  for (i = 0; i < actualEyes.length; i++) {
    actualEyes[i].className = actualEyes[i].className = "charedititem eye";
  }
  actualEyes[SomeEyeToActivate].className = actualEyes[SomeEyeToActivate].className = "charedititem eye charedititemactive";
}