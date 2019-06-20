import React, { Component } from "react";
import { render } from "react-dom";

class StatelessComponent extends Component {
  render() {
    const name = this.props.name;
    const age = this.props.age;
    return (
      <div>
        name:{name} age:{age}
      </div>
    );
  }
}

class StatefulComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Hello Kat",
      greetingInput: "",
      name: "",
      age: null,
      ageAndNameInput: ""
    };
    this.changeGreeting = this.changeGreeting.bind(this);
    this.changeNameAndAge = this.changeNameAndAge.bind(this);
  }

  changeGreeting(greeting) {
    this.setState({
      greeting: greeting
    });
  }

  changeNameAndAge(nameAndAge) {
    var splitString = nameAndAge.split(" ");
    var name = splitString[0];
    var age = splitString[1];
    this.setState({
      name: name,
      age: age
    });
  }

  render() {
    var greeting = this.state.greeting;
    var name = this.state.name;
    var age = this.state.age;
    var greetingInput = this.state.greetingInput;
    var ageAndNameInput = this.state.ageAndNameInput;
    return (
      <div>
        <StatelessComponent name={name} age={age} />
        <div id="Greeting">{greeting}</div>
        <Button
          input={greetingInput}
          update={g => {
            this.setState({
              greeting: g
            });
          }}
        >
          Press Me!
        </Button>
        <input
          onChange={e => {
            this.setState({ greetingInput: e.target.value });
          }}
          type="text"
          value={greetingInput}
        />
        <Button input={ageAndNameInput} update={this.changeNameAndAge}>
          Press Me!
        </Button>
        <input
          onChange={e => {
            this.setState({ ageAndNameInput: e.target.value });
          }}
          type="text"
          value={ageAndNameInput}
        />
      </div>
    );
  }
}

function Button({ input, update, children }) {
  return (
    <div className="ButtonContainer">
      <div className="Button" onClick={() => update(input)} id="PressMe">
        {children}
      </div>
    </div>
  );
}

render(<StatefulComponent />, document.getElementById("app"));

// var Input = document.getElementById("Input");
// var PressMe = document.getElementById("PressMe");
// var Greeting = document.getElementById("Greeting");
// PressMe.addEventListener("click", () => {
//   if (Input.value === "") {
//     Greeting.innerHTML = "Type Greeting";
//   } else {
//     Greeting.innerHTML = Input.value;
//   }
// });
// console.log("Input", Input);

// function car(color, name) {
//   // this = {};
//   this.color = color;
//   this.name = name;

//   // return this;
// }

// function car2(color, name) {
//  const newObj = {};
//  newObj.color = color;
//  newObj.name = name;
//  newObj.action = () => {
//    console.log('Hello');
//  }
//  return newObj;
// }

// class car3 {
//   constructor(props, color, name){
//     super(props);
//     this.color = color;
//     this.name = name;
//     this.action = this.action.bind(this);
//   }

//   action() {
//     console.log('Hello');
//   }
// }

// var a = new car("Red", "Honda");
// var b = car2("Green", "Toyota");
// b.action();
// var a = "Hello";
// var b = `${a} Kat!`;
