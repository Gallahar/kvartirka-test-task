import { HomePage } from '@/modules/HomePage'
import { asteroidService } from '@/services/asteroidService'
import { notFound } from 'next/navigation'

export const revalidate = 0

export default async function Home() {
	const today = new Date()
		.toLocaleDateString('sv-SE', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
		})

	const { data } = await asteroidService.getPortionServer(today, today)

	if (!data) return notFound()

	return <HomePage initialAsteroids={data.near_earth_objects[today]} />
}
