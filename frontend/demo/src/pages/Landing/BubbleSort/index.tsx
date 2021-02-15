export default function bubbleSort(list: any[]) {
	const len = list.length;

	for (let i = 0; i < len - 1; i++) {
		for (let j = 0; j < len; j++) {
			if (list[j] > list[j + 1]) {
				[list[j], list[j + 1]] = [list[j + 1], list[j]];
			}
		}
	}
	return list;
}
