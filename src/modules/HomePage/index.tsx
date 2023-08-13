'use client'

import { CartWidget } from '@/components/CartWidget'
import s from './homePage.module.css'
import { AsteroidsList } from '@/components/AsteroidsList'
import { useMainContext } from '@/lib/hooks/useMainContext'

export const HomePage = () => {
	const { asteroids } = useMainContext()

	return (
		<main className={s.mainWrapper}>
			<div className={s.main}>
				<AsteroidsList
					listTitle={'Ближайшие подлеты астероидов'}
					asteroids={asteroids}
				/>
				<CartWidget />
			</div>
		</main>
	)
}
