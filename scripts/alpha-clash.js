// function play() {
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");

//   // show the playground

//   const playGroundSection = document.getElementById("play-ground");
//   playGroundSection.classList.remove("hidden");
// }

function handleKeybordButtonPress(event) {
  const plyerPressed = event.key;
  console.log(plyerPressed);

  if (plyerPressed === "Escape") {
    gameOver();
  }

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  // console.log(plyerPressed, expectedAlphabet);

  if (plyerPressed === expectedAlphabet) {
    console.log("ok");

    const currentScore = getTextElementvalueById("current-score");

    const updatedScore = currentScore + 1;
    setTextElementValueById("current-score", updatedScore);

    // const currentScoreElement = document.getElementById("current-score");
    // const currentScroeText = currentScoreElement.innerText;
    // const currentSore = parseInt(currentScroeText);

    // const newScore = currentSore + 1;

    // currentScoreElement.innerText = newScore;

    removeBackgroundColorById(expectedAlphabet);
    continuGame();
  } else {
    console.log("not okey");

    const currentLife = getTextElementvalueById("current-life");
    const updatedLife = currentLife - 1;
    setTextElementValueById("current-life", updatedLife);

    if (updatedLife === 0) {
      gameOver();
    }

    // const currentLifeElement = document.getElementById("current-life");
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);

    // const newLife = currentLife - 1;

    // currentLifeElement.innerText = newLife;
  }
}

document.addEventListener("keyup", handleKeybordButtonPress);

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
  hideElementById("final-score");
  showElementById("play-ground");

  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);

  continuGame();
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");

  const lastScore = getTextElementvalueById("current-score");
  setTextElementValueById("game-end-score", lastScore);

  const currentAlphabet = getElementTextById("current-alphabet");
  removeBackgroundColorById(currentAlphabet);
}
