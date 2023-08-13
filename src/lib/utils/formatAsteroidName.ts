export const formatAsteroidName = (name: string) => {
	const [f, s] = name.split('(')

	return s.slice(0, s.length - 1)
}
