'use client'

import { ApiResponse } from '@/models/apiResponse.interface'
import { createContext, FC, ReactNode, useEffect, useState } from 'react'
import { mainContextInitialValue } from './mainProviderData'
import { MainContextProps } from './mainProviderInterface'
import { getNextDateFromUrl } from '@/lib/utils/getNextDateFromUrl'
import { asteroidService } from '@/services/asteroidService'
import { Asteroid } from '@/models/asteroid.interface'
import { usePathname } from 'next/navigation'

export const MainContext = createContext<MainContextProps>(
	mainContextInitialValue
)

interface SectionProviderProps {
	children: ReactNode
	apiResponse: ApiResponse
	initialDate: string
}

export const MainProvider: FC<SectionProviderProps> = ({
	children,
	apiResponse,
	initialDate,
}) => {
	const pathName = usePathname()

	const [cartProducts, setCartProducts] = useState<Map<string, Asteroid>>(
		new Map()
	)

	const [isFetching, setIsFetching] = useState(false)

	const [nextDate, setNextDate] = useState(
		getNextDateFromUrl(apiResponse.links.next ?? '')
	)
	const [asteroids, setAsteroids] = useState(
		apiResponse.near_earth_objects[initialDate]
	)

	const addProductToCart = (product: Asteroid) => {
		setCartProducts(
			(cartProducts) => new Map(cartProducts.set(product.id, product))
		)
	}

	const getNextPortion = async () => {
		if (!apiResponse.links.next || !nextDate || isFetching) return

		try {
			setIsFetching(true)
			const { data } = await asteroidService.getPortionClient(
				nextDate,
				nextDate
			)
			setAsteroids((asteroids) => [
				...asteroids,
				...data.near_earth_objects[nextDate],
			])
			setNextDate(getNextDateFromUrl(data.links.next ?? ''))
		} catch (error) {
			console.log(error)
		} finally {
			setIsFetching(false)
		}
	}

	useEffect(() => {
		const handleScroll = () => {
			const isReachedEnd =
				window.scrollY + window.innerHeight === document.body.scrollHeight

			if (isReachedEnd) {
				getNextPortion()
			}
		}
		if (pathName === '/') {
			window.addEventListener('scroll', handleScroll)
		}

		return () => window.removeEventListener('scroll', handleScroll)
	}, [isFetching, pathName])

	return (
		<MainContext.Provider
			value={{
				asteroids,
				cartProducts,
				addProductToCart,
			}}
		>
			{children}
		</MainContext.Provider>
	)
}
