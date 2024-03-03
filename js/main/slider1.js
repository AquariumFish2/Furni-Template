// Getting initial data
slideContainer = document.querySelector(".test .container .content");
navigators = document.querySelectorAll(".test .navigators .navigator");
nextButton = document.querySelector(".test .next-button");
prevButton = document.querySelector(".test .prev-button");

console.log(nextButton);
console.log(prevButton);
// Setting initial values
selectedSlide = 0;

// setter function
function check() {
  console.log("Got into check");
  console.log(selectedSlide)
  reset();
  slideContainer.style.transform =
    "translateX(" + (selectedSlide * -100) / navigators.length + "%)";
  navigators[selectedSlide].classList.add("selected-navigator");
}

// reseting function
function reset() {
  navigators.forEach((navigator) => {
    navigator.classList.remove("selected-navigator");
  });
}

// next button function
function next() {
  if (selectedSlide + 1 >= navigators.length) {
    console.log("Next if ")
    selectedSlide = -1;
  }
  selectedSlide++;
  console.log("Got into next");
  check();
}

// prev button function
function prev() {
  if (selectedSlide - 1 <= -1) {
    selectedSlide = navigators.length;
  }
  selectedSlide--;
  console.log("Got into prev");
  check();
}

var nav = function navFunction(navigator) {
  console.log(navigator.srcElement);
  selectedSlide = navigator.srcElement.id;
  check();
};

setInterval(next, 5000);
check();

nextButton.onclick = next;
prevButton.onclick = prev;

for (let i = 0; i < navigators.length; i++) {
  navigators[i].id = i;
  navigators[i].onclick = nav;
  console.log(i);
  // console.log(navigators[i].id);
}

