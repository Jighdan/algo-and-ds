const binarySearch = (list: Array<number>, number: number): number => {
	let lowIndex = 0;
	let highIndex = list.length - 1;

	while (lowIndex <= highIndex) {
		let midIndex = lowIndex + highIndex;
		const guessElement = list[midIndex];

		if (guessElement == number) {
			return midIndex;
		};

		if (guessElement > number) {
			highIndex = midIndex - 1;
		} else {
			lowIndex = midIndex + 1;
		};
	};

	return -1;
};

export default binarySearch;
