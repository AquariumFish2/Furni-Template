navTogglerIcon = window.document.getElementsByClassName("toggler-button");
navOptions = window.document.getElementsByClassName("nav-options");
togglerContainer = window.document.getElementsByClassName("nav-bar-toggler-container");
options = document.getElementsByClassName("option")
togglerBool = true

function toggler() {
  if (togglerBool) {
    navOptions[0].style.height = "300px";
    navTogglerIcon[0].style.margin = "0vh";
    for (let index = 0; index < options.length; index++) {
      const element = options[index];
      element.style.display = "block"
    }
    console.log(options);
    togglerBool= false
  } else {
    // navOptions[0].style.display = "";
    
    navOptions[0].style.height = "0";
    navTogglerIcon[0].style.margin = "auto 0";
    for (let index = 0; index < options.length; index++) {
      const element = options[index];
      element.style.display = "none"
    }
    // togglerContainer[0].style.alignItems = "center";
    togglerBool= true
  }
}

navTogglerIcon[0].onclick = toggler;