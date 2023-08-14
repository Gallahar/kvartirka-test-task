import { Asteroid } from '@/models/asteroid.interface'
import { Dispatch, SetStateAction } from 'react'

export type DistanceType = 'km' | 'lun'

export interface MainContextProps {
	asteroids: Asteroid[]
	addProductToCart: (asteroid: Asteroid) => void
	cartProducts: Map<string, Asteroid>
	isFetching: boolean
	distanceType: DistanceType
	setDistanceType: Dispatch<SetStateAction<DistanceType>>
}
