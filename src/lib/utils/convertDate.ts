export const convertDate = (dateString: string) => {
	const date = new Date(dateString)

	return date.toLocaleString('ru-RU', {
		month: 'short',
		day: '2-digit',
		year: 'numeric',
	})
}
