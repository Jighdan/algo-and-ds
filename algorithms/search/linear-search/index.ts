const linearSearch = <T>(list: Array<T>, value: T): number => {
	for (let indexStr in list) {
		const index = parseInt(indexStr);
		const item = list[index];
		if (item === value) {
			return index;
		};
	};

	return -1;
};

export default linearSearch;
