const minimumBribes = require("../src/minimumBribes");

describe("minimumBribes", () => {
	it("should return 0 if there is no input", () => {
		expect(minimumBribes()).toEqual(0);
	});
	it("should return 0 if no queue", () => {
		let queue = [];
		expect(minimumBribes(queue)).toEqual(0);
	});
	it("should return 0 if there is one person in queue", () => {
		let queue = [1];
		expect(minimumBribes(queue)).toEqual(0);
	});
	it("should return 0 if there is 2 person in order", () => {
		let queue = [1, 2];
		expect(minimumBribes(queue)).toEqual(0);
	});
	it("should return 1 if there is 2 person in queue", () => {
		let queue = [2, 1];
		expect(minimumBribes(queue)).toEqual(1);
	});
	it("should return 0 if there is 3 person in order", () => {
		let queue = [1, 2, 3];
		expect(minimumBribes(queue)).toEqual(0);
	});
	it("should return 1 if there is 1 bribe", () => {
        let queue = [1, 3, 2];
		expect(minimumBribes(queue)).toEqual(1);
		queue = [2, 1, 3];
		expect(minimumBribes(queue)).toEqual(1);
	});
	it("should return 2 minimum bribe", () => {
        let queue = [3, 1, 2];
		expect(minimumBribes(queue)).toEqual(2);
	});
	it("should return 3 minimum bribe", () => {
        let queue = [3, 2, 1];
		expect(minimumBribes(queue)).toEqual(3);
	});
});
