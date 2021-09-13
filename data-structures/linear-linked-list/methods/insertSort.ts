/*
	Sorts a Linked List so they are organized in increasing order.

	IN  -> (head: Node | null)
	OUT -> Node | null
*/

import Node from "../node";
import sortedInsert from "./sortedInsert";

const insertSort = (head: Node | null): Node | null => {
	let newHead = null;
	let currentNode: Node | null = head;

	while (currentNode !== null) {
		newHead = sortedInsert(newHead, currentNode.value);
		currentNode = currentNode.next;
	};

	return newHead;
};

export default insertSort;
