export const getSpellingProduct = (quantity: number) => {
	const key = quantity + ''
	const dict: Record<string, string> = {
		1: '',
		2: 'а',
		3: 'а',
		4: 'а',
	}
	return dict[key] ?? 'ов'
}
