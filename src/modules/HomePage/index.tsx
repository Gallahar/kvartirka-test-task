'use client'

import { CartWidget } from '@/components/CartWidget'
import s from './homePage.module.css'
import { ListWrapper } from '@/components/ListWrapper'
import { useMainContext } from '@/lib/hooks/useMainContext'
import { AsteroidCard } from '@/components/AsteroidCard'
import { FC, useState } from 'react'
import { ListHeading } from '@/components/ListHeading'
import { Asteroid } from '@/models/asteroid.interface'
import { Loader } from '@/ui/Loader'

interface HomePageProps {
	initialAsteroids: Asteroid[]
}

export const HomePage: FC<HomePageProps> = ({ initialAsteroids }) => {
	const { asteroids, isFetching } = useMainContext()
	return (
		<main className={s.mainWrapper}>
			<div className={s.main}>
				<ListWrapper>
					<ListHeading
						showControls={true}
						title={'Ближайшие подлёты астероидов'}
					/>
					{initialAsteroids.map((asteroid) => (
						<AsteroidCard key={asteroid.id} asteroid={asteroid} />
					))}
					{asteroids.map((asteroid) => (
						<AsteroidCard key={asteroid.id} asteroid={asteroid} />
					))}
					{isFetching && <Loader className={s.loaderPos} />}
				</ListWrapper>
				<CartWidget />
			</div>
		</main>
	)
}
