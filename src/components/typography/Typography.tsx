import React from 'react';
import styles from './Typography.module.css';

type TypographyElement = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'span';
type TypographySize =
	| 'xs'
	| 's'
	| 'm'
	| 'l'
	| 'xl'
	| '2xl'
	| '3xl'
	| '4xl'
	| '5xl';
type TypographyVariant = 'body1' | 'body2' | 'subtitle1' | 'subtitle2';

export interface TypographyProps {
	element: TypographyElement;
	variant?: TypographyVariant;
	size?: TypographySize;
	blink?: boolean;
	fontWeight?: 'lighter' | 'normal' | 'medium' | 'semibold' | 'bold';
	truncate?: boolean;
	gutter?: boolean;
	capitalyse?: boolean;
	uppercase?: boolean;
	spaceWord?: boolean;
	prewrap?: boolean;
	align?: 'left' | 'center' | 'right' | 'justify';
	color?: 'theme' | 'accent' | 'info' | 'success' | 'warning' | 'danger';
	space?: 'tight' | 'wide';
	underline?: boolean;
	className?: string;
	children: React.ReactNode;
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
	(
		{
			element = 'p',
			variant,
			size,
			blink,
			fontWeight,
			truncate,
			gutter,
			capitalyse,
			uppercase,
			spaceWord,
			prewrap,
			align,
			color,
			space,
			underline,
			className,
			children,
			...props
		},
		ref,
	) => {
		const Component = element as React.ElementType;

		if (!children) return null;
		return (
			<Component
				tabIndex={-1}
				data-element={element}
				data-variant={variant}
				data-size={size}
				data-blink={blink}
				data-font-weight={fontWeight}
				data-truncate={truncate}
				data-gutter={gutter}
				data-capitalyse={capitalyse}
				data-uppercase={uppercase}
				data-space-word={spaceWord}
				data-pre-wrap={prewrap}
				data-align={align}
				data-color={color}
				data-space={space}
				data-underline={underline}
				className={`${styles.typography} ${className || ''}`}
				ref={ref}
				{...props}
			>
				{children}
			</Component>
		);
	},
);

Typography.displayName = 'Typography';
