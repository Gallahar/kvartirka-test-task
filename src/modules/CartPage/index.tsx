'use client'

import { useMainContext } from '@/lib/hooks/useMainContext'
import s from './cartPage.module.css'
import { AsteroidsList } from '@/components/AsteroidsList'
import { ActionLink } from '@/ui/Buttons/ActionButton/ActionLink'

export const CartPage = () => {
	const { cartProducts } = useMainContext()

	return (
		<main className={s.cart}>
			<ActionLink className={s.link} href='/'>
				Вернуться на главную
			</ActionLink>
			<AsteroidsList
				asteroids={[...cartProducts.values()]}
				listTitle={cartProducts.size ? 'Заказ отправлен!' : 'Корзина пуста'}
			/>
			<p className={s.copyright}>© Все права и планеты защищены</p>
		</main>
	)
}
