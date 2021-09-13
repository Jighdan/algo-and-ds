import { expect } from "chai";
import Node from "../../node";
import LinearLinkedList from "../../index";
import insertNth from "../../methods/insertNth";

describe("Liner Linked List: InsertNth", () => {
	const linearLinkedList = new LinearLinkedList();
	linearLinkedList.build([1, 2, 3]);

	it("Inserts a new node at index 0", () => {
		linearLinkedList.head = insertNth(linearLinkedList.head, 0, 0);
		const values = linearLinkedList.print();

		expect(values).to.have.members([0, 1, 2, 3]);
		expect(values.length).to.equal(4);
	});

	it("Handles null head", () => {
		const emptyLinearLinkedList = new LinearLinkedList();
		emptyLinearLinkedList.head = insertNth(emptyLinearLinkedList.head, 0, 4);

		expect((emptyLinearLinkedList.head as Node).value).to.be.equal(0);
	});

	it("Inserts a node to the desired index", () => {
		linearLinkedList.head = insertNth(linearLinkedList.head, 5, 1);
		linearLinkedList.head = insertNth(linearLinkedList.head, 9, 2);

		expect(linearLinkedList.print()).to.have.members([0, 1, 9, 5, 2, 3]);
	});

	it("Inserts a node to the tail when index is out of bounds", () => {
		linearLinkedList.head = insertNth(linearLinkedList.head, 12, 500);
		linearLinkedList.head = insertNth(linearLinkedList.head, 13, 100);
		const values = linearLinkedList.print();

		expect(values).to.have.members([0, 1, 9, 5, 2, 3, 12, 13]);
		expect(values.length).to.equal(8);
	});
});
