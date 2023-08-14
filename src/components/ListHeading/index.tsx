'use client'

import { ActionButton } from '@/ui/Buttons/ActionButton'
import s from './listHeading.module.css'
import { FC } from 'react'
import { useMainContext } from '@/lib/hooks/useMainContext'

interface ListHeadingProps {
	title: string
	showControls?: boolean
}

export const ListHeading: FC<ListHeadingProps> = ({ title, showControls }) => {
	const { distanceType, setDistanceType } = useMainContext()

	return (
		<div className={s.listHeadingWrapper}>
			<h3 className={s.listHeading}>{title}</h3>
			{showControls ? (
				<div className={s.listControls}>
					<ActionButton
						onClick={() => setDistanceType('km')}
						isActive={distanceType === 'km'}
					>
						в километрах
					</ActionButton>
					<span>|</span>
					<ActionButton
						onClick={() => setDistanceType('lun')}
						isActive={distanceType === 'lun'}
					>
						в лунных орбитах
					</ActionButton>
				</div>
			) : null}
		</div>
	)
}
