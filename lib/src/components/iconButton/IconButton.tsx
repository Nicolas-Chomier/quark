import React, { useCallback } from 'react';
import { Spinner } from '../spinner/Spinner';
import styles from './IconButton.module.css';

export interface IconButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	loading?: boolean;
	variant?:
		| 'theme'
		| 'accent'
		| 'simple'
		| 'outline'
		| 'fade'
		| 'ghost'
		| 'info'
		| 'success'
		| 'warning'
		| 'danger';
	size?: 's' | 'm' | 'l';
	borderRadius?:
		| 'xxxs'
		| 'xxs'
		| 'xs'
		| 's'
		| 'm'
		| 'l'
		| 'xl'
		| 'xxl'
		| 'xxxl'
		| 'full';
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
	(
		{
			onClick,
			loading,
			variant,
			size,
			borderRadius,
			children,
			className,
			...props
		},
		ref,
	) => {
		// Handles the click event
		const handleClick = useCallback(
			(e: React.MouseEvent<HTMLButtonElement>) => {
				e.stopPropagation();
				if (onClick) {
					onClick(e);
				}
			},
			[onClick],
		);

		if (!children) return null;
		return (
			<button
				onClick={handleClick}
				data-isloading={loading}
				data-variant={variant}
				data-size={size}
				data-border-radius={borderRadius}
				className={`${styles.iconButton} ${className}`}
				ref={ref}
				{...props}
			>
				{loading ? (
					<Spinner size={size} />
				) : (
					<span className={styles.icon}>{children}</span>
				)}
			</button>
		);
	},
);

IconButton.displayName = 'IconButton';
