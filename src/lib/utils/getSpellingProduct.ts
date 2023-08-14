const dict: Record<string, string> = {
	1: '',
	2: 'а',
	3: 'а',
	4: 'а',
}

export const getSpellingProduct = (quantity: number) => {
	const key = quantity + ''

	return dict[key] ?? 'ов'
}
