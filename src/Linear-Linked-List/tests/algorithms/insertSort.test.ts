import { expect } from "chai";
import Node from "../../node";
import LinearLinkedList from "../../index";
import insertSort from "../../algorithms/insertSort";

describe("Linear Linked List: InsertSort", () => {
	it("Handles null head", () => {
		const emptyLinearLinkedList = new LinearLinkedList();
		emptyLinearLinkedList.head = insertSort(emptyLinearLinkedList.head);
		
		expect(emptyLinearLinkedList.head).to.equal(null);
	});

	it("Sorts the list increasingly", () => {
		const linearLinkedList = new LinearLinkedList();
		linearLinkedList.push(5);
		linearLinkedList.push(7);
		linearLinkedList.push(1);
		linearLinkedList.push(2);

		const unsortedValues = linearLinkedList.print();
		expect(unsortedValues).to.eql([5, 7, 1, 2]);

		linearLinkedList.head = insertSort(linearLinkedList.head);
		const sortedValues = linearLinkedList.print();
		expect(sortedValues).to.eql([1, 2, 5, 7]);
	});
});
