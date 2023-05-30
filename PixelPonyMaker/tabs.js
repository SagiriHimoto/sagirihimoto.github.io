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
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

openCity(event, 'Body')

function maneinactive(SomeManeToActivate) {
  actualManes = document.getElementsByClassName("mane");
  for (i = 0; i < actualManes.length; i++) {
    actualManes[i].className = actualManes[i].className.replace("charedititem mane charedititemactive", "charedititem mane");
  }
  actualManes[SomeManeToActivate].className = actualManes[SomeManeToActivate].className.replace("charedititem mane", "charedititem mane charedititemactive");
}

function eyesinactive(SomeEyeToActivate) {
  actualEyes = document.getElementsByClassName("eye");
  for (i = 0; i < actualEyes.length; i++) {
    actualEyes[i].className = actualEyes[i].className.replace("charedititem eye charedititemactive", "charedititem eye");
  }
  actualEyes[SomeEyeToActivate].className = actualEyes[SomeEyeToActivate].className.replace("charedititem eye", "charedititem eye charedititemactive");
}