import React from 'react';
import styles from './input.module.css';

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	type: 'text' | 'password' | 'email' | 'number';
	name: string;
	width?: 's' | 'm' | 'l' | 'xl' | 'xxl' | 'full';
	height?: 's' | 'm' | 'l';
	border?: boolean;
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
	className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{
			type,
			name,
			width = 's',
			height = 's',
			border = false,
			borderRadius = undefined,
			className,
			...props
		},
		ref,
	) => {
		return (
			<input
				id={name}
				name={name}
				type={type}
				data-width={width}
				data-height={height}
				data-border={border}
				data-border-radius={borderRadius}
				className={`${styles.input} ${className || ''}`}
				ref={ref}
				{...props}
			/>
		);
	},
);
Input.displayName = 'Input';
