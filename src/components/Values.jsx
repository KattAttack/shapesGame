import React from "react";

export var squareWordBank = ["APPLE", "ORANGE", "HOUSE"];
export var pentagonWordBank = ["MANSION", "GEORGIA", "PEANUT"];
export var hexagonWordBank = ["AQUEDUCT", "TELEPHONE", "KITTYCATS"];
export var octagonWordBank = ["WATERMELON", "ARCHEOLOGY", "UNENLIGHTENED"];

export var winMessageText = "YOU WIN!!!";
export var squareGuesses = 4;
export var pentagonGuesses = 5;
export var hexagonGuesses = 6;
export var octagonGuesses = 8;
export var loseMessageText = "YOU LOSE :c";

export var confettiColor = {
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

export var squareObj = {
  4: (
    <svg
      id="Square"
      width="66"
      height="66"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="3"
        width="60"
        height="60"
        stroke="#e50000"
        fill="transparent"
        strokeWidth="3"
      />
    </svg>
  ),
  3: (
    <svg
      id="Square"
      width="66"
      height="66"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="3,3 63,3 63,63 3,63 63,63 63,3"
        stroke="#e50000"
        fill="transparent"
        strokeWidth="3"
      />
    </svg>
  ),
  2: (
    <svg
      id="Square"
      width="66"
      height="66"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="3,3 63,3 63,63 63,3"
        stroke="#e50000"
        fill="transparent"
        strokeWidth="3"
      />
    </svg>
  ),
  1: (
    <svg
      id="Square"
      width="66"
      height="66"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="3,3 63,3"
        stroke="#e50000"
        fill="transparent"
        strokeWidth="3"
      />
    </svg>
  ),
  name: "square"
};

export var pentagonObj = {
  5: (
    <svg
      id="Pentagon"
      width="66"
      height="66"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="3,28 33,3 63,28 54,63 12,63"
        stroke="purple"
        fill="transparent"
        strokeWidth="3"
      />
    </svg>
  ),
  4: (
    <svg
      id="Pentagon"
      width="66"
      height="66"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="3,28 33,3 63,28 54,63 12,63 54,63 63,28 33,3"
        stroke="purple"
        fill="transparent"
        strokeWidth="3"
      />
    </svg>
  ),
  3: (
    <svg
      id="Pentagon"
      width="66"
      height="66"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="3,28 33,3 63,28 54,63 63,28 33,3"
        stroke="purple"
        fill="transparent"
        strokeWidth="3"
      />
    </svg>
  ),
  2: (
    <svg
      id="Pentagon"
      width="66"
      height="66"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="3,28 33,3 63,28, 33,3"
        stroke="purple"
        fill="transparent"
        strokeWidth="3"
      />
    </svg>
  ),
  1: (
    <svg
      id="Pentagon"
      width="66"
      height="66"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="3,28 33,3"
        stroke="purple"
        fill="transparent"
        strokeWidth="3"
      />
    </svg>
  ),
  name: "pentagon"
};

export var hexagonObj = {
  6: (
    <svg
      id="Hexagon"
      width="66"
      height="66"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="33,3 60,18 60,48 33,63 6,48 6,18"
        stroke="green"
        fill="transparent"
        strokeWidth="3"
      />
    </svg>
  ),
  5: (
    <svg
      id="Hexagon"
      width="66"
      height="66"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="6,18 33,3 60,18 60,48 33,63 6,48 33,63 60,48 60,18 33,3"
        stroke="green"
        fill="transparent"
        strokeWidth="3"
      />
    </svg>
  ),
  4: (
    <svg
      id="Hexagon"
      width="66"
      height="66"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="6,18 33,3 60,18 60,48 33,63 60,48 60,18 33,3"
        stroke="green"
        fill="transparent"
        strokeWidth="3"
      />
    </svg>
  ),
  3: (
    <svg
      id="Hexagon"
      width="66"
      height="66"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="6,18 33,3 60,18 60,48 60,18 33,3"
        stroke="green"
        fill="transparent"
        strokeWidth="3"
      />
    </svg>
  ),
  2: (
    <svg
      id="Hexagon"
      width="66"
      height="66"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="6,18 33,3 60,18 33,3"
        stroke="green"
        fill="transparent"
        strokeWidth="3"
      />
    </svg>
  ),
  1: (
    <svg
      id="Hexagon"
      width="66"
      height="66"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="6,18 33,3"
        stroke="green"
        fill="transparent"
        strokeWidth="3"
      />
    </svg>
  ),
  name: "hexagon"
};

export var octagonObj = {
  8: (
    <svg
      id="Octagon"
      width="66"
      height="66"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="20,3 46,3 63,22 63,46 46,63 20,63 3,46 3,22"
        stroke="yellow"
        fill="transparent"
        strokeWidth="3"
      />
    </svg>
  ),
  7: (
    <svg
      id="Octagon"
      width="66"
      height="66"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="20,3 46,3 63,22 63,46 46,63 20,63 3,46 3,22 3,46 20,63 46,63 63,46 63,22 46,3"
        stroke="yellow"
        fill="transparent"
        strokeWidth="3"
      />
    </svg>
  ),
  6: (
    <svg
      id="Octagon"
      width="66"
      height="66"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="20,3 46,3 63,22 63,46 46,63 20,63 3,46 20,63 46,63 63,46 63,22 46,3"
        stroke="yellow"
        fill="transparent"
        strokeWidth="3"
      />
    </svg>
  ),
  5: (
    <svg
      id="Octagon"
      width="66"
      height="66"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="20,3 46,3 63,22 63,46 46,63 20,63 46,63 63,46 63,22 46,3"
        stroke="yellow"
        fill="transparent"
        strokeWidth="3"
      />
    </svg>
  ),
  4: (
    <svg
      id="Octagon"
      width="66"
      height="66"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="20,3 46,3 63,22 63,46 46,63 63,46 63,22 46,3"
        stroke="yellow"
        fill="transparent"
        strokeWidth="3"
      />
    </svg>
  ),
  3: (
    <svg
      id="Octagon"
      width="66"
      height="66"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="20,3 46,3 63,22 63,46 63,22 46,3"
        stroke="yellow"
        fill="transparent"
        strokeWidth="3"
      />
    </svg>
  ),
  2: (
    <svg
      id="Octagon"
      width="66"
      height="66"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="20,3 46,3 63,22 46,3"
        stroke="yellow"
        fill="transparent"
        strokeWidth="3"
      />
    </svg>
  ),
  1: (
    <svg
      id="Octagon"
      width="66"
      height="66"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="20,3 46,3"
        stroke="yellow"
        fill="transparent"
        strokeWidth="3"
      />
    </svg>
  ),
  name: "octagon"
};
