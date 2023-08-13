import { FC, HTMLAttributes } from 'react'
import s from './header.module.css'

export const Header: FC<HTMLAttributes<HTMLDivElement>> = ({
	className,
	...rest
}) => {
	return (
		<header {...rest} className={`${s.header} ${className}`}>
			<h1 className={s.headerTitle}>armageddon 2023</h1>
			<p className={s.headerInfo}>
				{'ООО "Команда им. Б. Уиллиса".\nВзрываем астероиды с 1998 года.'}
			</p>
		</header>
	)
}
