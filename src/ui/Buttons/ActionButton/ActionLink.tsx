import Link from 'next/link'
import { ActionButton, ActionButtonProps } from '.'
import { FC, PropsWithChildren } from 'react'

interface ActionLinkProps extends ActionButtonProps {
	href: string
}

export const ActionLink: FC<PropsWithChildren<ActionLinkProps>> = ({
	href,
	children,
	...rest
}) => {
	return (
		<Link href={href}>
			<ActionButton {...rest}>{children}</ActionButton>
		</Link>
	)
}
