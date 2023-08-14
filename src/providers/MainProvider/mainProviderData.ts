import { Asteroid } from '@/models/asteroid.interface'
import { DistanceType } from './mainProviderInterface'

export const mainContextInitialValue = {
	asteroids: [],
	cartProducts: new Map<string, Asteroid>(),
	addProductToCart: () => {},
	isFetching: false,
	distanceType: 'km' as DistanceType,
	setDistanceType: () => {},
}
