import Node from "../node";

const getNth = (head: Node | null, index: number): Node | null => {
	/*
		Takes an integer index and returns the data value stored in the node at
		that index position; if the index is greater than the length of the linked list,
		return null

		IN  -> (head: Node | null, index: number)
		OUT -> (Node | null)
	*/

	if (head === null) {
		return head;
	};

	let currentNode: Node | null = head;
	let currentIndex = 0;

	while(currentNode !== null) {
		if (currentIndex === index) {
			return currentNode;
		};

		currentIndex++;
		currentNode = currentNode.next;
	};

	return null;
};

export default getNth;
