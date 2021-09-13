import { expect } from "chai";
import linearSearch from "./index";

describe("Linear Linked List: Base", () => {
	it("Returns -1 when the element is not in the list", () => {
		const list = [1, 2, 3];
		const index = linearSearch(list, 4);
		expect(index).to.equal(-1);
	});

	it("Returns the found index", () => {
		const list = [1, 2, 3];
		const firstIndex = linearSearch(list, 1);
		const secondIndex = linearSearch(list, 2);
		const thirdIndex = linearSearch(list, 3);

		expect(firstIndex).to.equal(0);
		expect(secondIndex).to.equal(1)
		expect(thirdIndex).to.equal(2)
	});
});
