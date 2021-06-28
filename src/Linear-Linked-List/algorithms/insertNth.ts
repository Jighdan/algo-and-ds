/*
	Inserts a new node at any index within a list, if the index
	is out of bounds, add the node to the tail.

	IN  -> (head: Node | null, value: number, index: number)
	OUT -> (head: Node | null)
*/

import Node from "../node";

const insertNth = (head: Node | null, value: number, index: number): Node => {
	// If the head is null return null
	// If the index is 0, swap the head and add the node in that index

	if (head === null || index === 0) {
		const node: Node = { value, next: head };
		return node;
	};

	let currentNode: Node | null = head;
	let currentIndex = 0;

	while(currentNode !== null) {
		if (currentNode.next === null) {
			const node: Node = { value, next: null };
			currentNode.next = node;
			return head;
		};

		if (currentIndex === index) {
			const node: Node = { value, next: currentNode.next };
			currentNode.next = node;
			return head;
		};

		currentIndex++;
		currentNode = currentNode.next;
	};

	return head;
};

export default insertNth;
