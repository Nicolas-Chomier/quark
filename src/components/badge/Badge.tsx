import React, { useCallback } from 'react';
import styles from './Badge.module.css';

export interface BadgeProps
	extends React.HTMLAttributes<HTMLSpanElement | HTMLButtonElement> {
	color?: 'theme' | 'accent' | 'info' | 'success' | 'warning' | 'danger';
	size?: 'small' | 'medium' | 'large';
	borderRadius?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'full';
	clickable?: boolean;
	variant?: 'solid' | 'outline' | 'fade';
	className?: string;
	onClick?: (
		event: React.MouseEvent<HTMLSpanElement | HTMLButtonElement>,
	) => void;
}

export const Badge: React.FC<BadgeProps> = ({
	color,
	size,
	borderRadius,
	clickable,
	variant,
	className,
	children,
	onClick,
	...props
}) => {
	const Element = clickable ? 'button' : 'span';

	const handleClick = useCallback(
		(e: React.MouseEvent<HTMLSpanElement | HTMLButtonElement>) => {
			e.stopPropagation();
			if (onClick) {
				onClick(e);
			}
		},
		[onClick],
	);

	return (
		<Element
			className={`${styles.badge} ${className || ''}`}
			data-color={color}
			data-variant={variant}
			data-size={size}
			data-border-radius={borderRadius}
			data-clickable={clickable}
			{...(clickable && { type: 'button', onClick: handleClick })}
			{...props}
		>
			{children}
		</Element>
	);
};
