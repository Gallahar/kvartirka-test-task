'use client'

import { useMainContext } from '@/lib/hooks/useMainContext'
import s from './cartPage.module.css'
import { ListWrapper } from '@/components/ListWrapper'
import { ActionLink } from '@/ui/Buttons/ActionButton/ActionLink'
import { ListHeading } from '@/components/ListHeading'
import { AsteroidCard } from '@/components/AsteroidCard'

export const CartPage = () => {
	const { cartProducts } = useMainContext()

	return (
		<main className={s.cart}>
			<ActionLink className={s.link} href='/'>
				Вернуться на главную
			</ActionLink>
			<ListWrapper>
				<ListHeading
					title={cartProducts.size ? 'Заказ отправлен!' : 'Корзина пуста'}
				/>
				{[...cartProducts.values()].map((product) => (
					<AsteroidCard key={product.id} asteroid={product} />
				))}
			</ListWrapper>

			<p className={s.copyright}>© Все права и планеты защищены</p>
		</main>
	)
}
