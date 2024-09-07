import React, { useCallback } from 'react';
import { Spinner } from '../spinner/Spinner';
import styles from './Button.module.css';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	text?: string;
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
	width?: 's' | 'm' | 'l' | 'full';
	size?: 'xs' | 's' | 'm' | 'l' | 'xl';
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

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			onClick,
			text,
			loading,
			variant,
			width,
			borderRadius,
			size,
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

		// Renders the content of the button
		const renderContent = () => {
			if (text && loading) {
				return (
					<>
						<Spinner />
						<span className={styles.space} />
						<span className={styles.text}>{text}</span>
					</>
				);
			}
			if (text && children) {
				return (
					<>
						{children}
						<span className={styles.space} />
						<span className={styles.text} data-font-size>
							{text}
						</span>
					</>
				);
			}

			return (
				<>
					<span className={styles.text}>{text}</span>
					{children}
				</>
			);
		};

		if (!text && !children) return null;
		return (
			<button
				onClick={handleClick}
				data-isloading={loading}
				data-variant={variant}
				data-width={width}
				data-size={size}
				data-border-radius={borderRadius}
				className={`${styles.button} ${className || ''}`}
				ref={ref}
				{...props}
			>
				{renderContent()}
			</button>
		);
	},
);

Button.displayName = 'Button';
