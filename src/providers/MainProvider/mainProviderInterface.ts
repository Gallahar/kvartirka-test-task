import { Asteroid } from '@/models/asteroid.interface'

export interface MainContextProps {
	asteroids: Asteroid[]
	addProductToCart: (asteroid: Asteroid) => void
	cartProducts: Map<string, Asteroid>
}
