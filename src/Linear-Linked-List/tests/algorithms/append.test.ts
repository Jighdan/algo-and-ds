import { expect } from "chai";
import Node from "../../node";
import LinearLinkedList from "../../index";
import append from "../../algorithms/append";

describe("Linear Linked List: Append", () => {
	it("Appends two lists together", () => {
		const headMain = new LinearLinkedList();
		headMain.build([1, 2, 3]);
		const headToAppend = new LinearLinkedList();
		headToAppend.build([4, 5, 6]);

		headMain.head = append(headMain.head, headToAppend.head);
		const values = headMain.print();

		expect(values).to.eql([1, 2, 3, 4, 5, 6]);
	});

	it("Works when the list to append is null", () => {
		const headMain = new LinearLinkedList();
		headMain.build([1, 2, 3]);
		const headToAppend = new LinearLinkedList();

		headMain.head = append(headMain.head, headToAppend.head);
		const values = headMain.print();
		expect(values).to.eql([1, 2, 3]);
	});

	it("Works when the main list is null", () => {
		const headMain = new LinearLinkedList();
		const headToAppend = new LinearLinkedList();
		headToAppend.build([4, 5, 6]);

		headMain.head = append(headMain.head, headToAppend.head);
		const values = headMain.print();
		expect(values).to.eql([4, 5, 6]);
	});

	it("Works when both lists are null", () => {
		const headMain = new LinearLinkedList();
		const headToAppend = new LinearLinkedList();

		headMain.head = append(headMain.head, headToAppend.head);
		const values = headMain.print();

		expect(values).to.eql([]);
		expect(values.length).to.equal(0);
	});
});
