const planetNames: Record<string, string> = {
	Mercury: 'Меркурия',
	Venus: 'Венеры',
	Earth: 'Земли',
	Mars: 'Марса',
	Jupiter: 'Юпитера',
	Saturn: 'Сатурна',
	Uranus: 'Урана',
	Neptune: 'Нептуна',
}

export const translatePlanet = (name: string) => {
	return planetNames[name] ?? 'Земли'
}
