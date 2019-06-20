import React, { Component } from "react";
import PropTypes from "prop-types";

export class Word extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("word", this.props.word);
    var renderedOutput = this.props.word.map(item => {
      if (item === " ") {
        return <div className="Dash"> {item} </div>;
      } else {
        return <div className="ReplaceDash"> {item} </div>;
      }
    });

    return <div className="DashContainer">{renderedOutput}</div>;
  }
}
