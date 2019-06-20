// Two player game
// One person comes up with the secret word and another person guesses the secret word
// Dashes are drawn to represent the secret word
// The number of dashes equals the number of letters in the secret word
// Player guesses one letter at a time
// For each wrong guess, a line of a shape is drawn
// The shape drawn is chosen at start of game, and the the more sides, the more guesses
// Hints are given optionally in exchange for a line.
// You can guess the word, but lose if wrong.
// If the shape is completed before the word is guessed, you lose.

// Architecture
// Random Word Generator
// Dashes For Each Letter of Word
// Enter a letter / word input box.
// Submit letter/word
// Hint Button
// The Shapes you can pick
// Octogon
// Hexagon
// Pentagon
// Square

// View A
// Shapes!
// Rules of the Game Link and dropdown
// Shapes in the center
// Click shape - Shape explodes.   Other shapes disappear
// View B
// Lines Appear
// Box where you can type in guesses appear
// Hint Button
// Quit Button
// Border around Box Hint and Quit
// View C
// If lose, then shape fills in color and expands to screen,
// and then "You lose." is written.
// View D
// If win, box explodes with confetti
// View A
// If you pick the other shapes, then you get more confetti when
// when you win

var gameContainer = document.createElement("div");
gameContainer.className = "GameContainer";
var messageTextContainer;
var buttonContainer;

var trophySource =
  "https://uploads.codesandbox.io/uploads/user/2f347ef5-8b33-4476-9394-6f88e36e3e58/Iio2-6661f96e9c.svg";

var confettiColor = {
  square: ["#e50000"],
  pentagon: ["#800080"],
  hexagon: ["#00ff00"],
  octagon: ["#ffff00"],
  trophy: [
    "#ff0000",
    "#800080",
    "#00ff00",
    "#ffff00",
    "#0000ff",
    "#00ffff",
    "#f6a1b0"
  ]
};

var finishedShapesArray = [];
var square;
var pentagon;
var hexagon;
var octagon;

var squareWordBank = ["APPLE", "ORANGE", "HOUSE"];
var pentagonWordBank = ["MANSION", "GEORGIA", "PEANUT"];
var hexagonWordBank = ["AQUEDUCT", "TELEPHONE", "KITTYCATS"];
var octagonWordBank = ["WATERMELON", "ARCHEOLOGY", "UNENLIGHTENED"];
var dashes = [];
var guessedLetterCount = 0;
var letterContainerArray = [];
var winMessageText = "YOU WIN!!!";
var squareGuesses = 4;
var pentagonGuesses = 5;
var hexagonGuesses = 6;
var octagonGuesses = 8;
var loseMessageText = "YOU LOSE :c";
var xGuessesRemaining = null;
var svgObj = {};
var squareObj = {
  0: `<svg id = "Square" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <rect x="3" y= "3" width= "60" height= "60" stroke= "#e50000" fill= "transparent" stroke-width="3" />	
  </svg>`,
  1: `<svg id = "Square" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <polygon points="3,3 63,3 63,63 3,63 63,63 63,3" stroke= "#e50000" fill= "transparent" stroke-width="3" />	
  </svg>`,
  2: `<svg id = "Square" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <polygon points="3,3 63,3 63,63 63,3" stroke= "#e50000" fill= "transparent" stroke-width="3" />	
  </svg>`,
  3: `<svg id = "Square" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <polygon points="3,3 63,3" stroke= "#e50000" fill= "transparent" stroke-width="3" />	
  </svg>`,
  name: "square"
};

var pentagonObj = {
  0: `<svg id = "Pentagon" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <polygon points="3,28 33,3 63,28 54,63 12,63" stroke= "purple" fill= "transparent" stroke-width="3" />	
  </svg>`,
  1: `<svg id = "Pentagon" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <polygon points="3,28 33,3 63,28 54,63 12,63 54,63 63,28 33,3" stroke= "purple" fill= "transparent" stroke-width="3" />	
  </svg>`,
  2: `<svg id = "Pentagon" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <polygon points="3,28 33,3 63,28 54,63 63,28 33,3" stroke= "purple" fill= "transparent" stroke-width="3" />	
  </svg>`,
  3: `<svg id = "Pentagon" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <polygon points="3,28 33,3 63,28, 33,3" stroke= "purple" fill= "transparent" stroke-width="3" />	
  </svg>`,
  4: `<svg id = "Pentagon" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <polygon points="3,28 33,3" stroke= "purple" fill= "transparent" stroke-width="3" />	
  </svg>`,
  name: "pentagon"
};

var hexagonObj = {
  0: `<svg id = "Hexagon" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <polygon points="33,3 60,18 60,48 33,63 6,48 6,18" stroke= "green" fill= "transparent" stroke-width="3" />	
  </svg>`,
  1: `<svg id = "Hexagon" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <polygon points="6,18 33,3 60,18 60,48 33,63 6,48 33,63 60,48 60,18 33,3" stroke= "green" fill= "transparent" stroke-width="3" />	
  </svg>`,
  2: `<svg id = "Hexagon" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <polygon points="6,18 33,3 60,18 60,48 33,63 60,48 60,18 33,3" stroke= "green" fill= "transparent" stroke-width="3" />	
  </svg>`,
  3: `<svg id = "Hexagon" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <polygon points="6,18 33,3 60,18 60,48 60,18 33,3" stroke= "green" fill= "transparent" stroke-width="3" />	
  </svg>`,
  4: `<svg id = "Hexagon" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <polygon points="6,18 33,3 60,18 33,3" stroke= "green" fill= "transparent" stroke-width="3" />	
  </svg>`,
  5: `<svg id = "Hexagon" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <polygon points="6,18 33,3" stroke= "green" fill= "transparent" stroke-width="3" />	
  </svg>`,
  name: "hexagon"
};

var octagonObj = {
  0: `<svg id = "Octagon" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <polygon points="20,3 46,3 63,22 63,46 46,63 20,63 3,46 3,22" stroke= "yellow" fill= "transparent" stroke-width="3" />	
  </svg>`,
  1: `<svg id = "Octagon" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <polygon points="20,3 46,3 63,22 63,46 46,63 20,63 3,46 3,22 3,46 20,63 46,63 63,46 63,22 46,3" stroke= "yellow" fill= "transparent" stroke-width="3" />	
  </svg>`,
  2: `<svg id = "Octagon" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <polygon points="20,3 46,3 63,22 63,46 46,63 20,63 3,46 20,63 46,63 63,46 63,22 46,3" stroke= "yellow" fill= "transparent" stroke-width="3" />	
  </svg>`,
  3: `<svg id = "Octagon" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <polygon points="20,3 46,3 63,22 63,46 46,63 20,63 46,63 63,46 63,22 46,3" stroke= "yellow" fill= "transparent" stroke-width="3" />	
  </svg>`,
  4: `<svg id = "Octagon" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <polygon points="20,3 46,3 63,22 63,46 46,63 63,46 63,22 46,3" stroke= "yellow" fill= "transparent" stroke-width="3" />	
  </svg>`,
  5: `<svg id = "Octagon" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <polygon points="20,3 46,3 63,22 63,46 63,22 46,3" stroke= "yellow" fill= "transparent" stroke-width="3" />	
  </svg>`,
  6: `<svg id = "Octagon" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <polygon points="20,3 46,3 63,22 46,3" stroke= "yellow" fill= "transparent" stroke-width="3" />	
  </svg>`,
  7: `<svg id = "Octagon" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <polygon points="20,3 46,3" stroke= "yellow" fill= "transparent" stroke-width="3" />	
  </svg>`,
  name: "octagon"
};

var letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

const bottomHalfNode = buildLayout();
buildShapes(bottomHalfNode);

function buildLayout() {
  const topHalfNode = document.createElement("div");

  const app = document.getElementById("app");
  app.appendChild(topHalfNode);

  const headerNode = document.createElement("div");
  topHalfNode.appendChild(headerNode);

  const headerNodeS1 = document.createElement("div");
  const headerTextNodeS1 = document.createTextNode("S");
  headerNodeS1.appendChild(headerTextNodeS1);

  const headerNodeH = document.createElement("div");
  const headerTextNodeH = document.createTextNode("H");
  headerNodeH.appendChild(headerTextNodeH);

  const headerNodeA = document.createElement("div");
  const headerTextNodeA = document.createTextNode("A");
  headerNodeA.appendChild(headerTextNodeA);

  const headerNodeP = document.createElement("div");
  const headerTextNodeP = document.createTextNode("P");
  headerNodeP.appendChild(headerTextNodeP);

  const headerNodeE = document.createElement("div");
  const headerTextNodeE = document.createTextNode("E");
  headerNodeE.appendChild(headerTextNodeE);

  const headerNodeS2 = document.createElement("div");
  const headerTextNodeS2 = document.createTextNode("S");
  headerNodeS2.appendChild(headerTextNodeS2);

  const headerNodeBhang = document.createElement("div");
  const headerTextNodeBhang = document.createTextNode("!");
  headerNodeBhang.appendChild(headerTextNodeBhang);

  headerNode.appendChild(headerNodeS1);
  headerNode.appendChild(headerNodeH);
  headerNode.appendChild(headerNodeA);
  headerNode.appendChild(headerNodeP);
  headerNode.appendChild(headerNodeE);
  headerNode.appendChild(headerNodeS2);
  headerNode.appendChild(headerNodeBhang);

  topHalfNode.className = "TopHalf";
  headerNode.className = "ShapesHeader";
  headerNodeS1.className = "LetterS1";
  headerNodeH.className = "LetterH";
  headerNodeA.className = "LetterA";
  headerNodeP.className = "LetterP";
  headerNodeE.className = "LetterE";
  headerNodeS2.className = "LetterS2";
  headerNodeBhang.className = "Bhang";

  const bottomHalfNode = document.createElement("div");
  bottomHalfNode.className = "BottomHalf";
  app.appendChild(bottomHalfNode);

  return bottomHalfNode;
}

//shape event listeners (add/remove)
function squareClick(event) {
  const {
    bottomHalfNode,
    shapesContainer,
    squareWordBank,
    squareGuesses,
    squareObj
  } = event.target.parentElement;
  console.log("label", event);
  bottomHalfNode.removeChild(shapesContainer);
  buildGamePlay(squareWordBank, squareGuesses, squareObj);
}

function pentagonClick(event) {
  const {
    bottomHalfNode,
    shapesContainer,
    pentagonWordBank,
    pentagonGuesses,
    pentagonObj
  } = event.target.parentElement;
  console.log("label", event);
  bottomHalfNode.removeChild(shapesContainer);
  buildGamePlay(pentagonWordBank, pentagonGuesses, pentagonObj);
}

function hexagonClick(event) {
  const {
    bottomHalfNode,
    shapesContainer,
    hexagonWordBank,
    hexagonGuesses,
    hexagonObj
  } = event.target.parentElement;
  console.log("label", event);
  bottomHalfNode.removeChild(shapesContainer);
  buildGamePlay(hexagonWordBank, hexagonGuesses, hexagonObj);
}

function octagonClick(event) {
  const {
    bottomHalfNode,
    shapesContainer,
    octagonWordBank,
    octagonGuesses,
    octagonObj
  } = event.target.parentElement;
  console.log("label", event);
  bottomHalfNode.removeChild(shapesContainer);
  buildGamePlay(octagonWordBank, octagonGuesses, octagonObj);
}

//build shapes to select from
function buildShapes(bottomHalfNode) {
  //Shapes
  const shapesContainer = document.createElement("div");
  shapesContainer.className = "ShapesContainer";
  bottomHalfNode.appendChild(shapesContainer);

  //Square
  const squareContainer = document.createElement("div");
  squareContainer.innerHTML = `<svg id = "Square" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y= "3" width= "60" height= "60" stroke= "#e50000" fill= "transparent" stroke-width="3" />	
    </svg>`;
  shapesContainer.appendChild(squareContainer);
  squareContainer.className = "SquareContainer";

  square = document.getElementById("Square");

  if (!finishedShapesArray.includes("square")) {
    square.addEventListener("click", squareClick);
    square.bottomHalfNode = bottomHalfNode;
    square.shapesContainer = shapesContainer;
    square.squareWordBank = squareWordBank;
    square.squareGuesses = squareGuesses;
    square.squareObj = squareObj;
  } else {
    squareContainer.innerHTML = `<svg id = "Square" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y= "3" width= "60" height= "60" stroke= "#ff0000" fill= "#c90000" stroke-width="3" />	
    </svg>`;
  }

  //Pentagon
  const pentagonContainer = document.createElement("div");
  pentagonContainer.innerHTML = `<svg id = "Pentagon" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="3,28 33,3 63,28 54,63 12,63" stroke= "purple" fill= "transparent" stroke-width="3" />	
    </svg>`;
  shapesContainer.appendChild(pentagonContainer);
  pentagonContainer.className = "PentagonContainer";

  pentagon = document.getElementById("Pentagon");

  if (!finishedShapesArray.includes("pentagon")) {
    pentagon.addEventListener("click", pentagonClick);
    pentagon.bottomHalfNode = bottomHalfNode;
    pentagon.shapesContainer = shapesContainer;
    pentagon.pentagonWordBank = pentagonWordBank;
    pentagon.pentagonGuesses = pentagonGuesses;
    pentagon.pentagonObj = pentagonObj;
  } else {
    pentagonContainer.innerHTML = `<svg id = "Pentagon" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="3,28 33,3 63,28 54,63 12,63" stroke= "#a906a9" fill= "purple" stroke-width="3" />	
    </svg>`;
  }

  //Hexagon
  const hexagonContainer = document.createElement("div");
  hexagonContainer.innerHTML = `<svg id = "Hexagon" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="33,3 60,18 60,48 33,63 6,48 6,18" stroke= "green" fill= "transparent" stroke-width="3" />	
    </svg>`;
  shapesContainer.appendChild(hexagonContainer);
  hexagonContainer.className = "HexagonContainer";

  hexagon = document.getElementById("Hexagon");

  if (!finishedShapesArray.includes("hexagon")) {
    hexagon.addEventListener("click", hexagonClick);
    hexagon.bottomHalfNode = bottomHalfNode;
    hexagon.shapesContainer = shapesContainer;
    hexagon.hexagonWordBank = hexagonWordBank;
    hexagon.hexagonGuesses = hexagonGuesses;
    hexagon.hexagonObj = hexagonObj;
  } else {
    hexagonContainer.innerHTML = `<svg id = "Hexagon" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="33,3 60,18 60,48 33,63 6,48 6,18" stroke= "#11b611" fill= "green" stroke-width="3" />	
    </svg>`;
  }

  //Octagon
  const octagonContainer = document.createElement("div");
  octagonContainer.innerHTML = `<svg id = "Octagon" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="20,3 46,3 63,22 63,46 46,63 20,63 3,46 3,22" stroke= "yellow" fill= "transparent" stroke-width="3" />	
    </svg>`;
  shapesContainer.appendChild(octagonContainer);
  octagonContainer.className = "OctagonContainer";

  octagon = document.getElementById("Octagon");

  if (!finishedShapesArray.includes("octagon")) {
    octagon.addEventListener("click", octagonClick);
    octagon.bottomHalfNode = bottomHalfNode;
    octagon.shapesContainer = shapesContainer;
    octagon.octagonWordBank = octagonWordBank;
    octagon.octagonGuesses = octagonGuesses;
    octagon.octagonObj = octagonObj;
  } else {
    octagonContainer.innerHTML = `<svg id = "Octagon" width="66" height="66" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="20,3 46,3 63,22 63,46 46,63 20,63 3,46 3,22" stroke= "ffff87" fill= "yellow" stroke-width="3" />	
    </svg>`;
  }
}
//pick random word
function word(wordBank, gameContainer) {
  var word = wordBank[Math.floor(Math.random() * wordBank.length)];
  var wordLength = word.length;

  const dashContainer = document.createElement("div");
  dashContainer.className = "DashContainer";
  gameContainer.appendChild(dashContainer);
  //create dashes
  for (var i = 0; i < wordLength; i++) {
    const dash = document.createElement("div");
    dash.className = "Dash";
    dashContainer.appendChild(dash);
    dashes.push(dash);
  }
  return word;
}
//Check game state
function guesses(
  guessedLetterCount,
  mysteryWord,
  xGuessesRemaining,
  gameContainer,
  lettersContainer,
  xWordBank,
  shapeGuesses,
  svgShape
) {
  console.log("xGuessesRemaining", xGuessesRemaining);
  console.log("guessedLetterCount", guessedLetterCount);
  if (xGuessesRemaining === 0) {
    gameContainer.removeChild(lettersContainer);

    const messageContainer = document.createElement("div");
    messageContainer.className = "MessageContainer";
    gameContainer.appendChild(messageContainer);
    messageTextContainer = document.createElement("div");
    messageTextContainer.className = "MessageTextContainer";
    messageContainer.appendChild(messageTextContainer);
    messageTextContainer.innerHTML = loseMessageText;

    // Create try again button if game lose
    if (messageTextContainer.innerHTML === loseMessageText) {
      const tryAgainButton = document.createElement("div");
      tryAgainButton.className = "Button";
      buttonContainer.appendChild(tryAgainButton);
      tryAgainButton.innerHTML = "Try Again";
      tryAgainButton.addEventListener("click", () => {
        tryAgain(bottomHalfNode, xWordBank, shapeGuesses, svgShape);
      });
    }
  } else if (guessedLetterCount === mysteryWord.length) {
    gameContainer.removeChild(lettersContainer);

    const messageContainer = document.createElement("div");
    messageContainer.className = "MessageContainer";
    gameContainer.appendChild(messageContainer);
    messageTextContainer = document.createElement("div");
    messageTextContainer.className = "MessageTextContainer";
    messageContainer.appendChild(messageTextContainer);
    messageTextContainer.innerHTML = winMessageText;

    if (xWordBank.length > 1) {
      //Create next round buton if game win
      const nextRoundButton = document.createElement("div");
      nextRoundButton.className = "Button";
      buttonContainer.appendChild(nextRoundButton);
      nextRoundButton.innerHTML = "Next Round";
      nextRoundButton.addEventListener("click", () => {
        nextRound(
          bottomHalfNode,
          mysteryWord,
          xWordBank,
          shapeGuesses,
          svgShape
        );
      });
    } else if (finishedShapesArray.length === 3) {
      confettiTime(confettiColor.trophy);
      var trophyImg = new Image(100, 200);
      trophyImg.src = trophySource;
      trophyImg.className = "TrophyImg";
      gameContainer.appendChild(trophyImg);
    } else {
      //Confetti time!

      confettiTime(confettiColor[svgShape.name]);
      console.log("label", confettiColor[svgShape.name]);

      //Create next shape button if wordbank empty
      setTimeout(() => {
        const nextShapeButton = document.createElement("div");
        nextShapeButton.className = "Button";
        buttonContainer.appendChild(nextShapeButton);
        nextShapeButton.innerHTML = "Next Shape";
        finishedShapesArray.push(svgShape.name);
        nextShapeButton.addEventListener("click", () => {
          nextShape(
            bottomHalfNode,
            mysteryWord,
            xWordBank,
            shapeGuesses,
            svgShape
          );
        });
      }, 4000);
    }
  }
}
//letterBank function
function createLetters(
  letters,
  gameContainer,
  mysteryWord,
  dashes,
  svgShapeContainer,
  xWordBank,
  shapeGuesses,
  svgShape
) {
  const lettersContainer = document.createElement("div");
  lettersContainer.className = "LettersContainer";
  gameContainer.appendChild(lettersContainer);

  for (var i = 0; i < letters.length; i++) {
    var letter = letters[i];

    const letterContainer = document.createElement("div");
    letterContainerArray.push(letterContainer);
    letterContainer.className = "LetterContainer";
    lettersContainer.appendChild(letterContainer);
    letterContainer.innerHTML = letter;
    letterContainer.addEventListener("click", function poo(event) {
      console.log("clicked!");
      console.log(event);

      var clickedLetter = event.target.innerHTML;
      if (guessedLetterCount !== mysteryWord.length) {
        event.target.style.color = "black";
        var correctLetterPicked = false;
        for (var j = 0; j < mysteryWord.length; j++) {
          var currentLetter = mysteryWord[j];
          console.log(mysteryWord);
          console.log(currentLetter);
          if (clickedLetter === currentLetter) {
            correctLetterPicked = true;
            guessedLetterCount++;
            console.log(guessedLetterCount);
            var input = dashes[j];
            input.style.borderBottomColor = "black";
            input.innerHTML = clickedLetter;
            console.log(input);
          }
        }
        if (correctLetterPicked == false) {
          xGuessesRemaining--;
          svgShapeContainer.innerHTML = svgObj[xGuessesRemaining];
        }
        guesses(
          guessedLetterCount,
          mysteryWord,
          xGuessesRemaining,
          gameContainer,
          lettersContainer,
          xWordBank,
          shapeGuesses,
          svgShape
        );
        letterContainer.removeEventListener("click", poo);
      }
    });
  }
}
//quits the current game, reloads 1st view
function quitGame() {
  bottomHalfNode.removeChild(gameContainer);
  gameContainer.innerHTML = "";
  dashes = [];
  guessedLetterCount = 0;
  xGuessesRemaining = null;
  buildShapes(bottomHalfNode);
  // console.log(dashes);
}

function tryAgain(bottomHalfNode, xWordBank, shapeGuesses, svgShape) {
  bottomHalfNode.removeChild(gameContainer);
  gameContainer.innerHTML = "";
  dashes = [];
  guessedLetterCount = 0;
  xGuessesRemaining = null;

  buildGamePlay(xWordBank, shapeGuesses, svgShape);

  console.log("tried again");
}

function nextRound(
  bottomHalfNode,
  mysteryWord,
  xWordBank,
  shapeGuesses,
  svgShape
) {
  bottomHalfNode.removeChild(gameContainer);
  gameContainer.innerHTML = "";
  dashes = [];
  guessedLetterCount = 0;
  xGuessesRemaining = null;

  var filteredWordBank = xWordBank.filter(function(xWord) {
    if (xWord === mysteryWord) {
      return false;
    }
    return true;
  });
  buildGamePlay(filteredWordBank, shapeGuesses, svgShape);

  console.log("next round");
}

function nextShape(
  bottomHalfNode,
  mysteryWord,
  xWordBank,
  shapeGuesses,
  svgShape
) {
  //Removing confetti
  const canvasTags = document.getElementsByTagName("canvas");
  document.body.removeChild(canvasTags[0]);
  document.body.removeChild(canvasTags[0]);

  bottomHalfNode.removeChild(gameContainer);
  gameContainer.innerHTML = "";
  dashes = [];
  guessedLetterCount = 0;
  xGuessesRemaining = null;
  buildShapes(bottomHalfNode);
  // if (shapeGuesses == squareGuesses) {
  //   square.removeEventListener("click", squareClick);
  // }
  // if (shapeGuesses == pentagonGuesses) {
  //   pentagon.removeEventListener("click", pentagonClick);
  // }
  // if (shapeGuesses == hexagonGuesses) {
  //   hexagon.removeEventListener("click", hexagonClick);
  // }
  // if (shapeGuesses == octagonGuesses) {
  //   octagon.removeEventListener("click", octagonClick);
  // }

  console.log("next shape");
}

function buildGamePlay(xWordBank, shapeGuesses, svgShape) {
  bottomHalfNode.appendChild(gameContainer);

  const inputContainer = document.createElement("div");
  inputContainer.className = "InputContainer";
  gameContainer.appendChild(inputContainer);

  const svgShapeContainer = document.createElement("div");
  svgShapeContainer.className = "SvgShapeContainer";
  inputContainer.appendChild(svgShapeContainer);

  console.log("wordbank", xWordBank);
  var mysteryWord = word(xWordBank, gameContainer);

  createLetters(
    letters,
    gameContainer,
    mysteryWord,
    dashes,
    svgShapeContainer,
    xWordBank,
    shapeGuesses,
    svgShape
  );

  xGuessesRemaining = shapeGuesses;

  svgObj = svgShape;

  buttonContainer = document.createElement("div");
  buttonContainer.className = "ButtonContainer";
  gameContainer.appendChild(buttonContainer);

  const quitButton = document.createElement("div");
  quitButton.className = "Button";
  buttonContainer.appendChild(quitButton);
  quitButton.innerHTML = "Quit";
  quitButton.addEventListener("click", () => {
    quitGame();
  });
}

function confettiTime(confettiColor) {
  class Progress {
    constructor(param = {}) {
      this.timestamp = null;
      this.duration = param.duration || Progress.CONST.DURATION;
      this.progress = 0;
      this.delta = 0;
      this.progress = 0;
      this.isLoop = !!param.isLoop;

      this.reset();
    }

    static get CONST() {
      return {
        DURATION: 1000
      };
    }

    reset() {
      this.timestamp = null;
    }

    start(now) {
      this.timestamp = now;
    }

    tick(now) {
      if (this.timestamp) {
        this.delta = now - this.timestamp;
        this.progress = Math.min(this.delta / this.duration, 1);

        if (this.progress >= 1 && this.isLoop) {
          this.start(now);
        }

        return this.progress;
      } else {
        return 0;
      }
    }
  }

  class Confetti {
    constructor(param) {
      this.parent = param.elm || document.body;
      this.canvas = document.createElement("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.colors = param.color;
      this.width = param.width || this.parent.offsetWidth;
      this.height = param.height || this.parent.offsetHeight;
      this.length = param.length || Confetti.CONST.PAPER_LENGTH;
      this.yRange = param.yRange || this.height * 2;
      this.progress = new Progress({
        duration: param.duration,
        isLoop: true
      });
      this.rotationRange =
        typeof param.rotationLength === "number" ? param.rotationRange : 10;
      this.speedRange =
        typeof param.speedRange === "number" ? param.speedRange : 10;
      this.sprites = [];

      this.canvas.style.cssText = [
        "display: block",
        "position: absolute",
        "top: 0",
        "left: 0",
        "pointer-events: none"
      ].join(";");

      this.render = this.render.bind(this);

      this.build();

      this.parent.appendChild(this.canvas);
      this.progress.start(performance.now());

      requestAnimationFrame(this.render);
    }

    static get CONST() {
      return {
        SPRITE_WIDTH: 9,
        SPRITE_HEIGHT: 16,
        PAPER_LENGTH: 100,
        DURATION: 8000,
        ROTATION_RATE: 50
      };
    }

    build() {
      for (let i = 0; i < this.length; ++i) {
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");

        canvas.width = Confetti.CONST.SPRITE_WIDTH;
        canvas.height = Confetti.CONST.SPRITE_HEIGHT;

        canvas.position = {
          initX: Math.random() * this.width,
          initY: -canvas.height - Math.random() * this.yRange
        };

        canvas.rotation =
          this.rotationRange / 2 - Math.random() * this.rotationRange;
        canvas.speed =
          this.speedRange / 2 + Math.random() * (this.speedRange / 2);

        ctx.save();
        // console.log("Color:", this.colors);
        ctx.fillStyle = this.colors[(Math.random() * this.colors.length) | 0];
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();

        this.sprites.push(canvas);
      }
    }

    render(now) {
      let progress = this.progress.tick(now);

      this.canvas.width = this.width;
      this.canvas.height = this.height;

      for (let i = 0; i < this.length; ++i) {
        this.ctx.save();
        this.ctx.translate(
          this.sprites[i].position.initX +
            this.sprites[i].rotation * Confetti.CONST.ROTATION_RATE * progress,
          this.sprites[i].position.initY +
            progress * (this.height + this.yRange)
        );
        this.ctx.rotate(this.sprites[i].rotation);
        this.ctx.drawImage(
          this.sprites[i],
          (-Confetti.CONST.SPRITE_WIDTH *
            Math.abs(
              Math.sin(progress * Math.PI * 2 * this.sprites[i].speed)
            )) /
            2,
          -Confetti.CONST.SPRITE_HEIGHT / 2,
          Confetti.CONST.SPRITE_WIDTH *
            Math.abs(Math.sin(progress * Math.PI * 2 * this.sprites[i].speed)),
          Confetti.CONST.SPRITE_HEIGHT
        );
        this.ctx.restore();
      }

      requestAnimationFrame(this.render);
    }
  }

  (confettiColor => {
    const DURATION = 8000,
      LENGTH = 120;

    new Confetti({
      color: confettiColor,
      width: window.innerWidth,
      height: window.innerHeight,
      length: LENGTH,
      duration: DURATION
    });

    setTimeout(() => {
      new Confetti({
        color: confettiColor,
        width: window.innerWidth,
        height: window.innerHeight,
        length: LENGTH,
        duration: DURATION
      });
    }, DURATION / 2);
  })(confettiColor);
}
