import { expect } from "chai";
import Node from "../node";
import LinearLinkedList from "../index";

describe("Linear Linked List", () => {
	it("Initializes an empty Linear Linked List", () => {
		const linearLinkedList = new LinearLinkedList();

		expect(linearLinkedList.head).to.equal(null);
	});

	it("Values can be pushed", () => {
		const linearLinkedList = new LinearLinkedList();
		linearLinkedList.push(1);
		linearLinkedList.push(2);
		linearLinkedList.push(3);

		const firstNode = linearLinkedList.head as Node;
		const secondNode = firstNode.next as Node;
		const thirdNode = secondNode.next as Node;

		expect(firstNode.value).to.equal(1);
		expect(firstNode.next).to.equal(secondNode);

		expect(secondNode.value).to.equal(2);
		expect(secondNode.next).to.equal(thirdNode);

		expect(thirdNode.next).to.equal(null);
		expect(thirdNode.value).to.equal(3);
	});

	it("Can be printed", () => {
		const linearLinkedList = new LinearLinkedList();
		const emptyList = linearLinkedList.print();
		expect(emptyList).to.have.same.members([]);
		expect(emptyList.length).to.equal(0);

		linearLinkedList.push(1);
		linearLinkedList.push(2);
		linearLinkedList.push(3);

		expect(linearLinkedList.print().length).to.equal(3);
		expect(linearLinkedList.print()).to.have.same.members([1, 2, 3]);
	});
});
