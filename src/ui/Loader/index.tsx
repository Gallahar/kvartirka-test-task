import { FC, HTMLAttributes } from 'react'
import s from './loader.module.css'

export const Loader: FC<HTMLAttributes<HTMLSpanElement>> = ({
	className,
	...rest
}) => {
	return <span {...rest} className={`${s.loader} ${className}`} />
}
