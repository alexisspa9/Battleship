const Ship = (shipLength = 1) => {
	const _shipLength = shipLength;
	const _shipStatus = [];

	const getLength = () => {
		return _shipLength;
	}

	const createShipStatus = () => {
		for(let i = 0; i < getLength(); i++) {
			_shipStatus.push(0);
		}
	}
	createShipStatus();

	const hit = (n) => {
		_shipStatus[n-1] = 1;
	}

	const shipState = () => {
		return _shipStatus;
	}

	const isSunk = () => {
		return _shipStatus.every( val => val === 1 );
	}

	return {
		getLength,
		shipState,
		hit,
		isSunk
	}
}


module.exports = Ship;