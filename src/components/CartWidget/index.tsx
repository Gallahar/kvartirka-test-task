'use client'
import { getSpellingProduct } from '@/lib/utils/getSpellingProduct'
import s from './cardWidget.module.css'
import { PrimaryButton } from '@/ui/Buttons/PrimaryButton'
import { useMainContext } from '@/lib/hooks/useMainContext'
import Link from 'next/link'

export const CartWidget = () => {
	const { cartProducts } = useMainContext()

	return (
		<div className={s.widgetWrapper}>
			<div className={s.widgetInfo}>
				<p className={s.infoTitle}>Корзина</p>
				<span className={s.infoQuantity}>{`${
					cartProducts.size
				} астеройд${getSpellingProduct(cartProducts.size)}`}</span>
			</div>
			<Link href={'cart'}>
				<PrimaryButton>Отправить</PrimaryButton>
			</Link>
		</div>
	)
}
