import { Header } from '@/components/Header'
import '@/assets/styles/globals.css'
import type { Metadata } from 'next'
import { Passion_One } from 'next/font/google'
import { MainProvider } from '@/providers/MainProvider'
import { asteroidService } from '@/services/asteroidService'

const passionOne = Passion_One({
	weight: '400',
	preload: true,
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export const revalidate = 0

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const today = new Date().toLocaleDateString('en-CA')
	const { data } = await asteroidService.getPortionServer(today, today)

	return (
		<html lang='en'>
			<body>
				<Header className={passionOne.className} />
				<MainProvider initialDate={today} apiResponse={data}>
					{children}
				</MainProvider>
			</body>
		</html>
	)
}
