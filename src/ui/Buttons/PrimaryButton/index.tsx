import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import s from './index.module.css'

export const PrimaryButton: FC<
	PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ children, className }) => {
	return <button className={`${s.button} ${className}`}>{children}</button>
}
