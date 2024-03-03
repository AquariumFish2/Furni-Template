let loaderLetters = document.querySelector(".loader .logo .logo-des").children;
let logoMainLetter = document.querySelector(".loader .logo .logo-main");
let logoContainer = document.querySelector(".loader .logo");
let loader = document.querySelector(".loader");
let main = document.querySelector("main");
let firstItemLeft = 1.1;

logoContainer.style.marginLeft = "-10em";
function animate() {
  for (let i = 0; i < loaderLetters.length; i++) {
    console.log(loaderLetters[i]);
    loaderLetters[i].style.left = firstItemLeft + "em";
    if (i == 1 || i == loaderLetters.length - 2) {
      firstItemLeft += 0.3;
    } else {
      firstItemLeft += 0.5;
    }
  }
  console.log(loader)
}

async function afterAnimation() {
  await loader.getAnimations()[0].finished;
  for (let i = 0; i < loaderLetters.length; i++) {
    loaderLetters[i].style.left = 0 +"em";
    console.log(loaderLetters[i].style.left)
  }
  console.log(await loader.getAnimations()[0].finished);
  loader.style.display = "none";
  main.style.display = "block";
}

animate();
afterAnimation();
