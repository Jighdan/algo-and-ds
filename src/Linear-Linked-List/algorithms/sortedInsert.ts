/*
	Insert a new node at the correct sorted position

	IN  -> (head: Node | null, value)
	OUT -> (Node)
*/

import Node from "../node";

const sortedInsert = (head: Node | null, value: number): Node => {
	if (head === null) {
		const node: Node = { value, next: null };
		head = node;
	};

	let currentNode: Node | null = head;

	while(currentNode !== null) {
		const hasNextNode = currentNode.next !== null;

		if (hasNextNode) {
			const isNextNodeValueGreater = (currentNode.next as Node).value >= value;
			if (isNextNodeValueGreater) {
				const node: Node = { value, next: currentNode.next };
				currentNode.next = node;
				return head;
			};
		};

		if (!hasNextNode) {
			const node: Node = { value, next: null };
			currentNode.next = node;
			return head;
		};

		currentNode = currentNode.next;
	};

	return head;
};

export default sortedInsert;
