import { baseAxios, clientAxios } from '@/api'
import { ApiResponse } from '@/models/apiResponse.interface'
import { AxiosResponse } from 'axios'

export const asteroidService = {
	async getById(id: string) {
		return await baseAxios.get(`/neo/${id}`)
	},
	async getPortionServer(
		start_date: string,
		end_date: string = ''
	): Promise<AxiosResponse<ApiResponse>> {
		return await baseAxios.get(`/feed`, { params: { start_date, end_date } })
	},
	async getPortionClient(
		start_date: string,
		end_date: string = ''
	): Promise<AxiosResponse<ApiResponse>> {
		return await clientAxios.get(`/feed`, { params: { start_date, end_date } })
	},
}
