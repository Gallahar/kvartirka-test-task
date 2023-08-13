import { IconDistance } from '@/assets/icons/IconDistance'
import { formatNumString } from '@/lib/utils/formatNumString'
import asteroidImg from '@/assets/images/pngegg 2.png'
import s from './asteroidCard.module.css'
import Image from 'next/image'
import { Asteroid } from '@/models/asteroid.interface'
import { FC } from 'react'
import { getMonthName } from '@/lib/utils/getMonthName'
import { IconDanger } from '@/assets/icons/IconDanger'
import { formatAsteroidName } from '@/lib/utils/formatAsteroidName'
import { getSpellingLunar } from '@/lib/utils/getSpellingLunar'
import { useMainContext } from '@/lib/hooks/useMainContext'
import { usePathname } from 'next/navigation'

interface AsteroidCardProps {
	asteroid: Asteroid
	distanceType: 'lun' | 'km'
}

export const AsteroidCard: FC<AsteroidCardProps> = ({
	asteroid,
	distanceType,
}) => {
	const {
		name,
		is_potentially_hazardous_asteroid,
		close_approach_data,
		estimated_diameter,
	} = asteroid
	const { miss_distance, close_approach_date } = close_approach_data[0]
	const { lunar, kilometers } = miss_distance
	const { meters } = estimated_diameter

	const pathname = usePathname()

	const { addProductToCart, cartProducts } = useMainContext()

	const diameter = formatNumString(String(meters.estimated_diameter_min))
	const [year, month, day] = close_approach_date.split('-')

	const isAddedToCart = cartProducts.has(asteroid.id)

	return (
		<div className={s.cardWrapper}>
			<p className={s.cardDate}>{`${day} ${getMonthName(month)} ${year}`}</p>
			<div className={s.asteroid}>
				<div className={s.asteroidDistance}>
					<span className={s.distanceText}>
						{distanceType === 'lun'
							? `${formatNumString(lunar)} ${getSpellingLunar(
									formatNumString(lunar)
							  )}`
							: `${formatNumString(kilometers)} км`}
					</span>
					<IconDistance />
				</div>
				<Image
					src={asteroidImg}
					width={+diameter > 100 ? 36 : 22}
					height={+diameter > 100 ? 40 : 24}
					alt='asteroid'
				/>
				<div className={s.asteroidInfo}>
					<p className={s.asteroidName}>{formatAsteroidName(name)}</p>
					<span className={s.asteroidSize}>{`Ø ${diameter} m`}</span>
				</div>
			</div>
			<div className={s.cardControls}>
				{pathname === '/' && (
					<button
						disabled={isAddedToCart}
						onClick={() => addProductToCart(asteroid)}
						className={`${s.cardButton} ${isAddedToCart ? s.isInCart : ''}`}
					>
						{isAddedToCart ? 'в корзине' : 'заказать'}
					</button>
				)}
				{is_potentially_hazardous_asteroid && (
					<div className={s.danger}>
						<IconDanger />
						Опасен
					</div>
				)}
			</div>
		</div>
	)
}
