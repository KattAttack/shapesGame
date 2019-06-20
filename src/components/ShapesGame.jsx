import React, { Component } from "react";
import { Title } from "./Title";
import { InteractiveShapes } from "./InteractiveShapes";
import { LetterBank } from "./LetterBank";
import { Word } from "./Word";
import { SvgShape } from "./SvgShape";
import { confettiColor } from "./Values";

export class ShapesGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showShapes: true,
      wordBank: null,
      guessedWord: null,
      mysteryWord: null,
      clickedLetterCount: 0,
      wrongLetterCount: 0,
      svgObj: null,
      roundCount: 0,
      wonShapes: []
    };
    this.nextView = this.nextView.bind(this);
    this.updateDashes = this.updateDashes.bind(this);
    this.wrongGuess = this.wrongGuess.bind(this);
    this.quitGame = this.quitGame.bind(this);
    this.tryAgain = this.tryAgain.bind(this);
    this.nextRound = this.nextRound.bind(this);
    this.nextShape = this.nextShape.bind(this);
    this.confettiTime = this.confettiTime.bind(this);
  }

  nextView(wordBank, svgObj) {
    var arr = [];
    // console.log("Shape: clicked");
    var word = wordBank[Math.floor(Math.random() * wordBank.length)];
    var wordLength = word.length;
    console.log("Mystery word:", word);
    for (var i = 0; i < wordLength; i++) {
      arr.push(" ");
    }

    this.setState({
      showShapes: false,
      wordBank: wordBank,
      guessedWord: arr,
      mysteryWord: word,
      svgObj: svgObj
    });
    console.log("Word Bank", wordBank);
  }

  updateDashes(currentSecretLetter, i) {
    const guessedWord = this.state.guessedWord;
    guessedWord[i] = currentSecretLetter;

    // console.log("UpdateDashes");
    // console.log("clicked Letters", this.state.clickedLetterCount);
    this.setState({
      clickedLetterCount: this.state.clickedLetterCount + 1,
      guessedWord
    });
  }

  wordGuessed() {
    this.setState({
      roundCount: this.state.roundCount + 1
    });
  }

  wrongGuess() {
    this.setState({
      wrongLetterCount: this.state.wrongLetterCount + 1
    });
  }

  quitGame() {
    this.setState({
      showShapes: true,
      guessedWord: null,
      mysteryWord: null,
      clickedLetterCount: 0,
      wrongLetterCount: 0,
      svgObj: null
    });
  }

  tryAgain() {
    this.setState({
      showShapes: false,
      guessedWord: null,
      mysteryWord: null,
      clickedLetterCount: 0,
      wrongLetterCount: 0,
      svgObj: null
    });

    this.nextView(this.state.wordBank, this.state.svgObj);
  }

  nextRound() {
    console.log("Mystery Word", this.state.mysteryWord);
    var newWordBank = this.state.wordBank.filter(item => {
      // if (item === word) {
      //   return false;
      // }

      //return true;

      return item !== this.state.mysteryWord;
    });
    console.log("New WordBank", newWordBank);
    this.setState({
      showShapes: false,
      wordBank: newWordBank,
      guessedWord: null,
      mysteryWord: null,
      clickedLetterCount: 0,
      wrongLetterCount: 0,
      svgObj: null
    });

    this.nextView(newWordBank, this.state.svgObj);
  }

  nextShape() {
    this.state.wonShapes.push(this.state.svgObj.name);
    this.setState({
      wonShapes: this.state.wonShapes,
      showShapes: true,
      guessedWord: null,
      mysteryWord: null,
      clickedLetterCount: 0,
      wrongLetterCount: 0,
      svgObj: null
    });
    //Remove Confetti
    const canvasTags = document.getElementsByTagName("canvas");
    document.body.removeChild(canvasTags[0]);
    document.body.removeChild(canvasTags[0]);
    // console.log("Won Shapes", this.state.wonShapes);
  }

  confettiTime(confettiColor) {
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
              this.sprites[i].rotation *
                Confetti.CONST.ROTATION_RATE *
                progress,
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
              Math.abs(
                Math.sin(progress * Math.PI * 2 * this.sprites[i].speed)
              ),
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

  render() {
    return (
      <div>
        <div className="TopHalf">
          <Title />
        </div>
        <div className="BottomHalf">
          {this.state.showShapes ? (
            <InteractiveShapes
              nextView={this.nextView}
              wonShapes={this.state.wonShapes}
              confettiTime={this.confettiTime}
            />
          ) : (
            <div>
              <SvgShape
                wrongLetterCount={this.state.wrongLetterCount}
                svgObj={this.state.svgObj}
              />
              <Word word={this.state.guessedWord} />
              <LetterBank
                wordBank={this.state.wordBank}
                word={this.state.mysteryWord}
                updateDashes={this.updateDashes}
                wrongGuess={this.wrongGuess}
                wrongLetterCount={this.state.wrongLetterCount}
                svgObj={this.state.svgObj}
                clickedLetterCount={this.state.clickedLetterCount}
                quitGame={this.quitGame}
                tryAgain={this.tryAgain}
                nextRound={this.nextRound}
                nextShape={this.nextShape}
                roundCount={this.state.roundCount}
                confettiTime={this.confettiTime}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
