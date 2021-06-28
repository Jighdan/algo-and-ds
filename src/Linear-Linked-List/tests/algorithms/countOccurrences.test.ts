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
		linearLinkedList.push(1);
		linearLinkedList.push(2);
		linearLinkedList.push(3);
		const count = countOccurrences(linearLinkedList.head, 0);

		expect(count).to.equal(0);
	});

	it("Matches occurrences", () => {
		linearLinkedList.push(4);
		linearLinkedList.push(4);
		linearLinkedList.push(5);
		linearLinkedList.push(6);
		
		const twoCount = countOccurrences(linearLinkedList.head, 4);
		expect(twoCount).to.equal(2);

		const oneCount = countOccurrences(linearLinkedList.head, 5);
		expect(oneCount).to.equal(1);
	});
});
