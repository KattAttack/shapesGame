import React, { Component } from "react";
import { squareObj, pentagonObj, hexagonObj, octagonObj, confettiColor } from "./Values";

var squareWordBank = ["ALIEN", "ORANGE", "HOUSE"];
var pentagonWordBank = ["MANSION", "GEORGIA", "PEANUT"];
var hexagonWordBank = ["AQUEDUCT", "TELEPHONE", "KITTYCATS"];
var octagonWordBank = ["WATERMELON", "ARCHEOLOGY", "UNENLIGHTENED"];

export class InteractiveShapes extends Component {
	render() {
		return (
			<div>
				<div className='ShapesContainer'>
					<div
						className='SquareContainer'
						onClick={() =>
							this.props.wonShapes.includes("square")
								? null
								: this.props.nextView(squareWordBank, squareObj)
						}
					>
						{this.props.wonShapes.includes("square") ? filledSquare : firstSquare}
					</div>
					<div
						className='PentagonContainer'
						onClick={() =>
							this.props.wonShapes.includes("pentagon")
								? null
								: this.props.nextView(pentagonWordBank, pentagonObj)
						}
					>
						{this.props.wonShapes.includes("pentagon") ? filledPentagon : firstPentagon}
					</div>
					<div
						className='HexagonContainer'
						onClick={() =>
							this.props.wonShapes.includes("hexagon")
								? null
								: this.props.nextView(hexagonWordBank, hexagonObj)
						}
					>
						{this.props.wonShapes.includes("hexagon") ? filledHexagon : firstHexagon}
					</div>
					<div
						className='OctagonContainer'
						onClick={() =>
							this.props.wonShapes.includes("octagon")
								? null
								: this.props.nextView(octagonWordBank, octagonObj)
						}
					>
						{this.props.wonShapes.includes("octagon") ? filledOctagon : firstOctagon}
					</div>
				</div>
				{this.props.wonShapes.length === 4 ? (
					<div>
						<div className='Confetti'>
							{this.props.confettiTime(confettiColor.trophy)}
						</div>
						<div className='TrophyImg'>
							{" "}
							<img
								src='https://uploads.codesandbox.io/uploads/user/2f347ef5-8b33-4476-9394-6f88e36e3e58/Iio2-6661f96e9c.svg'
								alt='TROPHY'
							/>{" "}
						</div>
					</div>
				) : null}
			</div>
		);
	}
}

//SquareSVG
var firstSquare = (
	<svg id='Square' width='66' height='66' version='1.1' xmlns='http://www.w3.org/2000/svg'>
		<rect
			x='3'
			y='3'
			width='60'
			height='60'
			stroke='#e50000'
			fill='transparent'
			strokeWidth='3'
		/>
	</svg>
);

var filledSquare = (
	<svg id='Square' width='66' height='66' version='1.1' xmlns='http://www.w3.org/2000/svg'>
		<rect x='3' y='3' width='60' height='60' stroke='#ff0000' fill='#c90000' stroke-width='3' />
	</svg>
);

//PentagonSVG
var firstPentagon = (
	<svg id='Pentagon' width='66' height='66' version='1.1' xmlns='http://www.w3.org/2000/svg'>
		<polygon
			points='3,28 33,3 63,28 54,63 12,63'
			stroke='purple'
			fill='transparent'
			strokeWidth='3'
		/>
	</svg>
);

var filledPentagon = (
	<svg id='Pentagon' width='66' height='66' version='1.1' xmlns='http://www.w3.org/2000/svg'>
		<polygon
			points='3,28 33,3 63,28 54,63 12,63'
			stroke='#a906a9'
			fill='purple'
			stroke-width='3'
		/>
	</svg>
);

//HexagonSVG
var firstHexagon = (
	<svg id='Hexagon' width='66' height='66' version='1.1' xmlns='http://www.w3.org/2000/svg'>
		<polygon
			points='33,3 60,18 60,48 33,63 6,48 6,18'
			stroke='green'
			fill='transparent'
			strokeWidth='3'
		/>
	</svg>
);

var filledHexagon = (
	<svg id='Hexagon' width='66' height='66' version='1.1' xmlns='http://www.w3.org/2000/svg'>
		<polygon
			points='33,3 60,18 60,48 33,63 6,48 6,18'
			stroke='#11b611'
			fill='green'
			stroke-width='3'
		/>
	</svg>
);

//OctagonSVG
var firstOctagon = (
	<svg id='Octagon' width='66' height='66' version='1.1' xmlns='http://www.w3.org/2000/svg'>
		<polygon
			points='20,3 46,3 63,22 63,46 46,63 20,63 3,46 3,22'
			stroke='yellow'
			fill='transparent'
			strokeWidth='3'
		/>
	</svg>
);

var filledOctagon = (
	<svg id='Octagon' width='66' height='66' version='1.1' xmlns='http://www.w3.org/2000/svg'>
		<polygon
			points='20,3 46,3 63,22 63,46 46,63 20,63 3,46 3,22'
			stroke='ffff87'
			fill='yellow'
			stroke-width='3'
		/>
	</svg>
);
