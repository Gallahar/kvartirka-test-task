const dict: Record<string, string> = {
	1: 'лунная орбита',
	2: 'лунные орбиты',
	3: 'лунные орбиты',
	4: 'лунные орбиты',
}

export const getSpellingLunar = (quantity: string) => {
	const key =
		quantity.length > 1 ? quantity.slice(quantity.length - 1) : quantity

	return dict[key] ?? 'лунных орбит'
}
