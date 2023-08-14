import { HomePage } from '@/modules/HomePage'
import { asteroidService } from '@/services/asteroidService'

export const revalidate = 0

export default async function Home() {
	const today = new Date().toLocaleDateString('en-CA')

	const { data } = await asteroidService.getPortionServer(today, today)

	return <HomePage initialAsteroids={data.near_earth_objects[today]} />
}
