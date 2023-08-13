import { Asteroid } from '@/models/asteroid.interface'

export const mainContextInitialValue = {
	asteroids: [],
	cartProducts: new Map<string, Asteroid>(),
	addProductToCart: () => {},
}
