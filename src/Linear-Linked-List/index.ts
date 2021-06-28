import Node from "./node";

class LinearLinkedList {
	head: Node | null;

	constructor() {
		this.head = null;
	};

	public push(value: number): void {
		// Takes a value and appends a new node with that value to the Linked List
		if (this.head === null) {
			this.head = { value, next: null };
			return;
		};

		let currentNode = this.head;
		while (currentNode !== null) {
			if (currentNode.next === null) {
				currentNode.next = { value, next: null };
				return;
			};

			currentNode = currentNode.next;
		};
	};

	public print(): Array<Node["value"]> {
		// Returns an array with all the values from the Linked List
		const values = [];
		let currentNode = this.head;

		while (currentNode !== null) {
			values.push(currentNode.value);
			currentNode = currentNode.next;
		};

		return values;
	};
};

export default LinearLinkedList;
