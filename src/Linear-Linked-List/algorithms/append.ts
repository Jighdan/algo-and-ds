/*
	Takes another Linked List and appends it to the tail of the calling Linked List.

	IN  -> (headMain: Node | null, headToAppend: Node | null)
	OUT -> (Node | null)
*/

import Node from "../node";

const append = (headMain: Node | null, headToAppend: Node | null): Node | null => {
	if (headMain === null) {
		headMain = headToAppend;
		return headMain;
	};

	let currentNode = headMain;

	while(currentNode !== null) {
		if (currentNode.next === null) {
			currentNode.next = headToAppend;
			return headMain;
		};

		currentNode = currentNode.next;
	};

	return headMain;
};

export default append;
