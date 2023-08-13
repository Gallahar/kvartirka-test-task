export const getNextDateFromUrl = (url: string) => {
	return url.split('&')[1].slice(9)
}
