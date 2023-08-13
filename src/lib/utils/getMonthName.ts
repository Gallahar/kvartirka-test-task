export const getMonthName = (month: string) => {
	const date = new Date()
	date.setMonth(+month - 1)
	return date.toLocaleString('ru-RU', { month: 'short' })
}
