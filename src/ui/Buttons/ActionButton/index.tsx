import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import s from './actionButton.module.css'

export interface ActionButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	isActive?: boolean
}

export const ActionButton: FC<PropsWithChildren<ActionButtonProps>> = ({
	className,
	children,
	isActive,
	...rest
}) => {
	return (
		<button
			className={`${s.actionButton} ${className} ${isActive ? s.active : ''}`}
			{...rest}
		>
			{children}
		</button>
	)
}
