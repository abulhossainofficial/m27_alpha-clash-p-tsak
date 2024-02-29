// function play() {
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");

//   // show the playground

//   const playGroundSection = document.getElementById("play-ground");
//   playGroundSection.classList.remove("hidden");
// }

function continuGame() {
  // step - 1: generate a random alphabet
  const alphabet = getARandomAlphabet();
  //   console.log(alphabet);

  // set random generated alphabet to the screen
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  setBackgroundColor(alphabet);
}

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  continuGame();
}
