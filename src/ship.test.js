const Ship = require("./ship.js");

const myShip = Ship(5);


describe("Ship tests", ()=> {

	it("getLength() returns it's length", () => {
		expect(myShip.getLength()).toEqual(5);
	});

	it("shipState() returns an array with the ships status", () => {
		expect(myShip.shipState()).toEqual([0,0,0,0,0]);
	});

	it("hit() takes a number and then marks that position as ‘hit’.", () => {
		myShip.hit(3);
		expect(myShip.shipState()).toEqual([0,0,1,0,0]);
	});

	it("isSunk() should be false if ship positions arent hit", () => {
		expect(myShip.isSunk()).toBeFalsy();
	});


	it("isSunk() should be truth if ship positions are all hit", () => {
		myShip.hit(1);
		myShip.hit(2);
		myShip.hit(3);
		myShip.hit(4);
		myShip.hit(5);
		expect(myShip.isSunk()).toBeTruthy();
	});

});