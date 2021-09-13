import { expect } from "chai";
import Node from "../../node";
import LinearLinkedList from "../../index";
import getNth from "../../methods/getNth";

describe("Linear Linked List: GetNth", () => {
	const linearLinkedList = new LinearLinkedList();
	linearLinkedList.build([1, 2, 3]);

	it("Returns null on empty Node", () => {
		const emptyLinearLinkedList = new LinearLinkedList();
		expect(getNth(emptyLinearLinkedList.head, 0)).to.be.equal(null);
	});
	
	it("Returns null when index is out of bounds", () => {
		const outOfBoundsIndex = getNth(linearLinkedList.head, 100);
		expect(outOfBoundsIndex).to.be.equal(null);
	});

	it("Returns the correct index", () => {
		const firstIndex = getNth(linearLinkedList.head, 0);
		const secondIndex = getNth(linearLinkedList.head, 1);
		const thirdIndex = getNth(linearLinkedList.head, 2);

		expect((firstIndex as Node).value).to.be.equal(1);
		expect((secondIndex as Node).value).to.be.equal(2);
		expect((thirdIndex as Node).value).to.be.equal(3);
	});
});
