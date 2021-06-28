import { expect } from "chai";
import Node from "../../node";
import LinearLinkedList from "../../index";
import sortedInsert from "../../algorithms/sortedInsert";

describe("Linear Linked List: SortedInsert", () => {
	const linearLinkedList = new LinearLinkedList();
	linearLinkedList.push(1);
	linearLinkedList.push(3);
	linearLinkedList.push(5);

	it("Handles null head", () => {
		const emptyLinearLinkedList = new LinearLinkedList();
		emptyLinearLinkedList.head = sortedInsert(emptyLinearLinkedList.head, 4);

		expect((emptyLinearLinkedList.head as Node).value).to.equal(4);
	});

	it("Inserts the node in a sorted manner", () => {
		linearLinkedList.head = sortedInsert(linearLinkedList.head, 2);
		const getValues = () => linearLinkedList.print();
		expect(getValues()).to.eql([1, 2, 3, 5]);

		linearLinkedList.head = sortedInsert(linearLinkedList.head, 4);
		expect(getValues()).to.eql([1, 2, 3, 4, 5]);

		linearLinkedList.head = sortedInsert(linearLinkedList.head, 7);
		expect(getValues()).to.eql([1, 2, 3, 4, 5, 7]);

		linearLinkedList.head = sortedInsert(linearLinkedList.head, 0);
		expect(getValues()).to.eql([0, 1, 2, 3, 4, 5, 7]);
	});
});
