import { expect } from "chai";
import LinearLinkedList from "../../index";
import countOccurrences from "../../algorithms/countOccurrences";

describe("Linear Linked List: Count Occurrences", () => {
	const linearLinkedList = new LinearLinkedList();

	it("Works when there's no head", () => {
		const count = countOccurrences(linearLinkedList.head, 0);
		expect(count).to.equal(0);
	});

	it("Works when there are no matches", () => {
		linearLinkedList.build([1, 2, 3]);
		const count = countOccurrences(linearLinkedList.head, 0);

		expect(count).to.equal(0);
	});

	it("Matches occurrences", () => {
		linearLinkedList.build([4, 4, 5, 6]);
		
		const twoCount = countOccurrences(linearLinkedList.head, 4);
		expect(twoCount).to.equal(2);

		const oneCount = countOccurrences(linearLinkedList.head, 5);
		expect(oneCount).to.equal(1);
	});
});
