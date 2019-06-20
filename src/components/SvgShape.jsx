import React from "react";

export function SvgShape(props) {
  console.log(props);

  return (
    <div className="SvgShapeContainer">
      <div className="SvgShape">{props.svgObj[props.wrongLetterCount]}</div>
    </div>
  );
}
