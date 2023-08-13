import { ActionButton } from '@/ui/Buttons/ActionButton'
import s from './listHeading.module.css'
import { FC } from 'react'

interface ListHeadingProps {
	distanceType: 'km' | 'lun'
	onClickKm: () => void
	onClickLun: () => void
	title: string
}

export const ListHeading: FC<ListHeadingProps> = ({
	distanceType,
	onClickKm,
	onClickLun,
	title,
}) => {
	return (
		<div className={s.listHeadingWrapper}>
			<h3 className={s.listHeading}>{title}</h3>
			{title === 'Ближайшие подлеты астероидов' && (
				<div className={s.listControls}>
					<ActionButton onClick={onClickKm} isActive={distanceType === 'km'}>
						в километрах
					</ActionButton>
					<span>|</span>
					<ActionButton onClick={onClickLun} isActive={distanceType === 'lun'}>
						в лунных орбитах
					</ActionButton>
				</div>
			)}
		</div>
	)
}
