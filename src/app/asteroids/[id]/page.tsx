import { AsteroidPage } from '@/modules/AsteroidPage'
import { asteroidService } from '@/services/asteroidService'
import { notFound } from 'next/navigation'

export default async function Asteroid({ params }: { params: { id: string } }) {
	const { data } = await asteroidService.getById(params.id)

	if (!data) return notFound()

	return <AsteroidPage AsteroidData={data} />
}
