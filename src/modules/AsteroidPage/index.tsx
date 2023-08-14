import { CloseApproachCard } from '@/components/CloseApproachCard'
import { Asteroid } from '@/models/asteroid.interface'
import { FC } from 'react'
import s from './asteroidPage.module.css'
import { formatNumString } from '@/lib/utils/formatNumString'
import { ListHeading } from '@/components/ListHeading'
import { ActionLink } from '@/ui/Buttons/ActionButton/ActionLink'

interface AsteroidPageProps {
	AsteroidData: Asteroid
}

export const AsteroidPage: FC<AsteroidPageProps> = ({ AsteroidData }) => {
	const {
		name,
		estimated_diameter,
		close_approach_data,
		absolute_magnitude_h,
	} = AsteroidData
	const { meters } = estimated_diameter
	return (
		<main className={s.pageWrapper}>
			<div className={s.asteroidInfo}>
				<ActionLink className={s.link} href='/'>
					Вернуться на главную
				</ActionLink>
				<p className={s.asteroidName}>{name}</p>
				<p>{`Диаметр(м): ${formatNumString(
					String(meters.estimated_diameter_min)
				)} - ${formatNumString(String(meters.estimated_diameter_max))}`}</p>
				<p>{`Абсолютная звездная величина: ${absolute_magnitude_h}`}</p>
			</div>
			<div className={s.approachesWrapper}>
				<ListHeading showControls={true} title={`Список сближений:`} />
				{close_approach_data.map((closeApproach) => (
					<CloseApproachCard
						closeApproachData={closeApproach}
						key={closeApproach.close_approach_date_full}
					/>
				))}
			</div>
		</main>
	)
}
