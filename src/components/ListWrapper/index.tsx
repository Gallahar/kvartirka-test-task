import { FC, PropsWithChildren } from 'react'
import s from './index.module.css'

export const ListWrapper: FC<PropsWithChildren> = ({ children }) => {
	return <div className={s.asteroidsListWrapper}>{children}</div>
}
