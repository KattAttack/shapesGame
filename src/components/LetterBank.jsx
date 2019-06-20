import React, { Component } from "react";
import PropTypes from "prop-types";
import { SvgShape } from "./SvgShape";
import { confettiColor } from "./Values";

export class LetterBank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedLettersArr: [],
      showButton: true,
      runConfettiFunc: true
    };
    this.blah = this.blah.bind(this);
    this.nextRound = this.nextRound.bind(this);
    this.nextShape = this.nextShape.bind(this);
    this.tryAgain = this.tryAgain.bind(this);
    this.runConfettiTime = this.runConfettiTime.bind(this);
  }

  tryAgain() {
    this.setState({
      clickedLettersArr: []
    });
    this.props.tryAgain();
  }

  nextRound() {
    this.setState({
      clickedLettersArr: []
    });
    this.props.nextRound();
  }

  nextShape() {
    this.setState({
      clickedLettersArr: [],
      runConfettitime: true
    });
    this.props.nextShape();
  }

  blah(item) {
    // var svgObj = this.props.svgObj;
    // var svgObjArray = Object.keys(svgObj);
    // var svgObjLength = 0;
    var correctLetterClicked = false;
    // var clickedLetterCount = this.props.clickedLetterCount;
    var secretWord = this.props.word;
    var clickedLetter = item;
    // console.log("item", item);
    // console.log("Letter clicked", clickedLetter);
    for (var i = 0; i < secretWord.length; i++) {
      var currentSecretLetter = secretWord[i];
      if (clickedLetter === currentSecretLetter) {
        correctLetterClicked = true;
        // console.log("correct");
        // console.log("item", item);

        this.props.updateDashes(currentSecretLetter, i);
        this.state.clickedLettersArr.push(clickedLetter);
        this.setState({
          clickedLettersArr: this.state.clickedLettersArr
        });
      } else {
        this.state.clickedLettersArr.push(clickedLetter);
        this.setState({
          clickedLettersArr: this.state.clickedLettersArr
        });
      }
    }
    if (correctLetterClicked === false) {
      this.props.wrongGuess();
    }
  }

  runConfettiTime() {
    this.setState({
      showButton: false,
      runConfettiFunc: false
    });
    this.props.confettiTime(confettiColor[this.props.svgObj.name]);
    setTimeout(() => {
      this.setState({
        showButton: true
      });
    }, 4000);
  }

  render() {
    var svgObj = this.props.svgObj;
    var svgObjArray = Object.keys(svgObj);
    var svgObjLength = svgObjArray.length - 1;
    console.log("svgObj length", svgObjLength);
    var wrongLetterCount = this.props.wrongLetterCount;
    // var svgObj = this.props.svgObj;
    var clickedLetterCount = this.props.clickedLetterCount;
    var secretWord = this.props.word;
    var winMessageText = "YOU WIN!!!";
    var loseMessageText = "YOU LOSE :c";

    if (
      clickedLetterCount === secretWord.length ||
      wrongLetterCount === svgObjLength
    ) {
      // for (var i = 0; i < clickedLettersArr.length; i++) {
      //   if (clickedLettersArr[i] === item) {
      //     itemClicked = true;
      //   }
      // }
      // if (itemClicked === true) {
      //   //Black letter (unclickable)
      //   return <div className="LetterClicked"> {item} </div>;
      // }
      // //White letter (unclickable)
      // return <div className="LetterContainer"> {item} </div>;
      if (clickedLetterCount === secretWord.length) {
        return (
          <div>
            <div className="ButtonContainer">
              <div className="Button" onClick={this.props.quitGame}>
                {" "}
                Quit{" "}
              </div>
              <NextButton
                wordBank={this.props.wordBank}
                nextRound={this.nextRound}
                nextShape={this.nextShape}
                showButton={this.state.showButton}
              />
            </div>
            <div className="MessageContainer">
              <div className="MessageTextContainer"> {winMessageText} </div>
            </div>
            <Confetti
              runConfettiFunc={this.state.runConfettiFunc}
              runConfettiTime={this.runConfettiTime}
              wordBank={this.props.wordBank}
            />
          </div>
        );
      } else {
        return (
          <div>
            <div className="ButtonContainer">
              <div className="Button" onClick={this.props.quitGame}>
                {" "}
                Quit{" "}
              </div>
              <div className="Button" onClick={this.tryAgain}>
                {" "}
                Try Again{" "}
              </div>
            </div>
            <div className="MessageContainer">
              <div className="MessageTextContainer"> {loseMessageText} </div>
            </div>
          </div>
        );
      }
    }

    var renderedOutput = letters.map(item => {
      var clickedLettersArr = this.state.clickedLettersArr;
      var itemClicked = false;

      // console.log("Clicked Array", clickedLettersArr);
      if (clickedLettersArr.length >= 1) {
        // console.log("clicked Array", clickedLettersArr);

        for (var i = 0; i < clickedLettersArr.length; i++) {
          if (clickedLettersArr[i] === item) {
            itemClicked = true;
          }
        }
        if (itemClicked === true) {
          return <div className="LetterClicked"> {item} </div>;
        }
        return (
          <div className="LetterContainer" onClick={e => this.blah(item)}>
            {" "}
            {item}{" "}
          </div>
        );
      } else {
        return (
          <div className="LetterContainer" onClick={e => this.blah(item)}>
            {" "}
            {item}{" "}
          </div>
        );
      }
    });

    return (
      <div>
        <div className="LettersContainer">{renderedOutput}</div>
        <div className="ButtonContainer">
          <div className="Button" onClick={this.props.quitGame}>
            {" "}
            Quit{" "}
          </div>
        </div>
      </div>
    );
  }
}

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

function NextButton(props) {
  if (props.showButton === false) {
    return <div />;
  }

  return (
    <div
      className="Button"
      onClick={props.wordBank.length > 1 ? props.nextRound : props.nextShape}
    >
      {props.wordBank.length > 1 ? "Next Round" : "Next Shape"}
    </div>
  );
}

function Confetti(props) {
  if (props.runConfettiFunc === true) {
    return (
      <div className="Confetti">
        {props.wordBank.length === 1 ? props.runConfettiTime() : null}
      </div>
    );
  }
  return <div />;
}

// for (var i = 0; i < wordLength; i++) {

// }

// var renderedOutput = word.map(item => (
//   <div className="Dash"> {item} </div>
// ));

// return <div className="DashContainer">{renderedOutput}</div>;
