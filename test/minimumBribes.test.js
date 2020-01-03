const minimumBribes = require("../src/minimumBribes");

describe("minimumBribes", () => {
	it("should return 0 if no queue", () => {
        expect(minimumBribes()).toEqual(0);
    });
});
