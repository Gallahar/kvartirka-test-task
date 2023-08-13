import { Asteroid } from './asteroid.interface'

export interface ApiResponse {
	links: {
		next?: string
		prev: string
		self: string
	}
	element_count: number
	near_earth_objects: {
		[key: string]: Asteroid[]
	}
}
