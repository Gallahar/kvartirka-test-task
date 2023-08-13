'use client'

import { MainContext } from '@/providers/MainProvider'
import { useContext } from 'react'

export const useMainContext = () => {
	const data = useContext(MainContext)

	return data
}
