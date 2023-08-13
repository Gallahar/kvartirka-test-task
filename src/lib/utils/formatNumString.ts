export const formatNumString = (numString: string) => {
	return numString.split('.')[0].replace(/(\d)(?=(\d{3})+$)/g, '$1 ')
}
