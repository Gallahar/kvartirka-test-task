import axios from 'axios'

export const baseAxios = axios.create({
	baseURL: process.env.API_URL,
	params: { api_key: process.env.API_KEY },
})

export const clientAxios = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	params: { api_key: process.env.NEXT_PUBLIC_API_KEY },
})
