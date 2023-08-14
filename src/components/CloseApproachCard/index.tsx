import { CloseApproachData } from '@/models/asteroid.interface'
import s from './closeApproachCard.module.css'
import { FC } from 'react'
import { translatePlanet } from '@/lib/utils/translatePlanet'
import { useMainContext } from '@/lib/hooks/useMainContext'
import { AsteroidDistance } from '../AsteroidDistance'
import { formatNumString } from '@/lib/utils/formatNumString'
import { convertDate } from '@/lib/utils/convertDate'

interface CloseApproachCardProps {
	closeApproachData: CloseApproachData
}

export const CloseApproachCard: FC<CloseApproachCardProps> = ({
	closeApproachData,
}) => {
	const {
		close_approach_date,
		miss_distance,
		orbiting_body,
		relative_velocity,
	} = closeApproachData

	return (
		<div className={s.cardWrapper}>
			<h3 className={s.date}>{convertDate(close_approach_date)}</h3>
			<p>
				{'Летит по орбите: '}
				<span>{translatePlanet(orbiting_body)}</span>
			</p>
			<p>
				Скорость относительно земли:{' '}
				<span>{`${formatNumString(
					relative_velocity.kilometers_per_hour
				)} км/ч`}</span>
			</p>
			<div className={s.distance}>
				<p>Расстояние до земли:</p>
				<AsteroidDistance
					kmDistance={miss_distance.kilometers}
					lunarDistance={miss_distance.lunar}
				/>
			</div>
		</div>
	)
}
