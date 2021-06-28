import LinearLinkedList from "../index";

const countOccurrences = (head: LinearLinkedList["head"], value: number): number => {
	/*
		Counts the number of times a given int occurs in a list.

		IN  -> (head: Node | null, value: number)
		OUT -> number
	*/

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
