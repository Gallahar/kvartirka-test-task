'use client'

import { FC } from 'react'
import s from './asteroidDistance.module.css'
import { IconDistance } from '@/assets/icons/IconDistance'
import { formatNumString } from '@/lib/utils/formatNumString'
import { getSpellingLunar } from '@/lib/utils/getSpellingLunar'
import { useMainContext } from '@/lib/hooks/useMainContext'

interface DistanceProps {
	lunarDistance: string
	kmDistance: string
}

export const AsteroidDistance: FC<DistanceProps> = ({
	kmDistance,
	lunarDistance,
}) => {
	const { distanceType } = useMainContext()
	return (
		<div className={s.asteroidDistance}>
			<span className={s.distanceText}>
				{distanceType === 'lun'
					? `${formatNumString(lunarDistance)} ${getSpellingLunar(
							formatNumString(lunarDistance)
					  )}`
					: `${formatNumString(kmDistance)} км`}
			</span>
			<IconDistance />
		</div>
	)
}
