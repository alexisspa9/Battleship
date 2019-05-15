const Ship = require('./ship.js');

const Gameboard = () => {
	let placedShips = [];
	let missedShots = [];

	const receiveAttack = (x,y) => {
		if ((x < 0 || x > 10) || (y < 0 || y > 10)) {
			return false;
		} else {
			return true;
		}
	}

	const createShips = () => {
		for (let i = 0; i < 4; i++) {
			const sh = Ship();
			placedShips.push({
				ship: sh,
				length: 1
			});
		}
		for (let i = 0; i < 3; i++) {
			const sh = Ship(2);
			placedShips.push({
				ship: sh,
				length: 2
			});
		}

		for (let i = 0; i < 2; i++) {
			const sh = Ship(3);
			placedShips.push({
				ship: sh,
				length: 3
			});
		}
		const sh = Ship(4);
		placedShips.push({
				ship: sh,
				length: 4
			});
	}

	createShips();

	const placeShip = (ship) => {
		return null
	}

	const shipsSinked = () => {
		return null
	}

	const boardSunk = () => {
		return null
	}

	const getShips = () => {
		return placedShips;
	}

	return {
		boardSunk,
		shipsSinked,
		receiveAttack,
		getShips
	}

}


module.exports = Gameboard;