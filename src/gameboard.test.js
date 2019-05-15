const Gameboard = require('./gameboard.js');

const gmBoard = Gameboard();

describe("Gameboard tests", () => {
	it("getShips() return an array of Ship factories", () => {
		expect(gmBoard.getShips().length).toBe(10);
	});

	it("contains 4 ships of length 1", () => {
		const array = gmBoard.getShips().slice(0,4);
		array.forEach((placedShip) => {
			expect(placedShip.ship.getLength()).toEqual(1);
		});
	});

	it("contains 3 ships of length 2", () => {
		const array = gmBoard.getShips().slice(4,7);
		array.forEach((placedShip) => {
			expect(placedShip.ship.getLength()).toEqual(2);
		});
	});

	it("contains 2 ships of length 3", () => {
		const array = gmBoard.getShips().slice(7,9);
		array.forEach((placedShip) => {
			expect(placedShip.ship.getLength()).toEqual(3);
		});
	});

	it("contains a ships of length 4", () => {
		expect(gmBoard.getShips().pop().ship.getLength()).toEqual(4);
	});


	it("returns false if it receives illegal attack coordinates", () => {
		expect(gmBoard.receiveAttack(12,14)).toBeFalsy();
		expect(gmBoard.receiveAttack(10,14)).toBeFalsy();
		expect(gmBoard.receiveAttack(9,14)).toBeFalsy();
		expect(gmBoard.receiveAttack(12,10)).toBeFalsy();
		expect(gmBoard.receiveAttack(12,0)).toBeFalsy();
	});

	it("returns true if it receives legal attack coordinates", () => {
		expect(gmBoard.receiveAttack(9,10)).toBeTruthy();
		expect(gmBoard.receiveAttack(0,0)).toBeTruthy();
		expect(gmBoard.receiveAttack(10,10)).toBeTruthy();
		expect(gmBoard.receiveAttack(10,2)).toBeTruthy();
	});

});