import { formatNumString } from '@/lib/utils/formatNumString'
import asteroidImg from '@/assets/images/pngegg 2.png'
import s from './asteroidCard.module.css'
import Image from 'next/image'
import { Asteroid } from '@/models/asteroid.interface'
import { FC } from 'react'
import { convertDate } from '@/lib/utils/convertDate'
import { IconDanger } from '@/assets/icons/IconDanger'
import { formatAsteroidName } from '@/lib/utils/formatAsteroidName'
import { useMainContext } from '@/lib/hooks/useMainContext'
import { usePathname } from 'next/navigation'
import { ActionLink } from '@/ui/Buttons/ActionButton/ActionLink'
import { AsteroidDistance } from '../AsteroidDistance'

interface AsteroidCardProps {
	asteroid: Asteroid
}

export const AsteroidCard: FC<AsteroidCardProps> = ({ asteroid }) => {
	const {
		id,
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

	const isAddedToCart = cartProducts.has(asteroid.id)

	return (
		<div className={s.cardWrapper}>
			<p className={s.cardDate}>{`${convertDate(close_approach_date)}`}</p>
			<div className={s.asteroid}>
				<AsteroidDistance kmDistance={kilometers} lunarDistance={lunar} />
				<Image
					src={asteroidImg}
					width={+diameter > 100 ? 36 : 22}
					height={+diameter > 100 ? 40 : 24}
					alt='asteroid'
				/>
				<div className={s.asteroidInfo}>
					<ActionLink href={`asteroids/${id}`} className={s.asteroidName}>
						{formatAsteroidName(name)}
					</ActionLink>
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
