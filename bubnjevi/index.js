for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    // console.log(buttonInnerHTML);
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
/*Tipkovnia*/
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "s":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "d":
    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let carsh = new Audio("sounds/crash.mp3");
      carsh.play();
      break;
    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      break;
  }
}
/*Animacije*/

function buttonAnimation(currentKey) {
  let activebutton = document.querySelector("." + currentKey);
  activebutton.classList.add("pressed");
  setTimeout(function () {
    activebutton.classList.remove("pressed");
  }, 100);
}
