'use client'

import { FC, useState } from 'react'
import { AsteroidCard } from '../AsteroidCard'
import s from './index.module.css'
import { ListHeading } from '../ListHeading'
import { Asteroid } from '@/models/asteroid.interface'

interface AsteroidsListProps {
	listTitle: string
	asteroids: Asteroid[]
}

export const AsteroidsList: FC<AsteroidsListProps> = ({
	asteroids,
	listTitle,
}) => {
	const [distanceType, setDistanceType] = useState<'lun' | 'km'>('km')

	return (
		<div className={s.asteroidsListWrapper}>
			<ListHeading
				distanceType={distanceType}
				title={listTitle}
				onClickKm={() => setDistanceType('km')}
				onClickLun={() => setDistanceType('lun')}
			/>
			<div className={s.asteroidsListWrapper}>
				{asteroids.map((asteroid) => (
					<AsteroidCard
						distanceType={distanceType}
						key={asteroid.id + asteroid.nasa_jpl_url}
						asteroid={asteroid}
					/>
				))}
			</div>
		</div>
	)
}
