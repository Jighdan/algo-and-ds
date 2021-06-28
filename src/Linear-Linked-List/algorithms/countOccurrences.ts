import LinearLinkedList from "../index";

const countOccurrences = (head: LinearLinkedList["head"], value: number): number => {
	let occurrencesCount = 0;
	let currentNode = head;

	while (currentNode !== null) {
		if (currentNode.value === value) {
			occurrencesCount++;
		};

		currentNode = currentNode.next;
	};

	return occurrencesCount;
};

export default countOccurrences;
