import React from 'react';
import styles from './Flex.module.css';

type FlexSize =
	| '1'
	| '2'
	| '3'
	| '4'
	| '5'
	| '6'
	| '7'
	| '8'
	| '9'
	| '10'
	| '11'
	| '12'
	| '13'
	| '14'
	| '15'
	| '16'
	| '17'
	| '18'
	| '19'
	| '20'
	| '21'
	| '22'
	| '23'
	| '24'
	| '25'
	| '26'
	| '27'
	| '28'
	| '29'
	| '30';

type FlexGap =
	| '3xs'
	| '2xs'
	| 'xs'
	| 's'
	| 'm'
	| 'l'
	| 'xl'
	| '2xl'
	| '3xl'
	| '4xl'
	| '5xl'
	| '6xl';

type FlexBorderRadius =
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

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
	background?:
		| 'style1'
		| 'style2'
		| 'style3'
		| 'danger'
		| 'success'
		| 'warning'
		| 'info';
	width?: boolean;
	height?: boolean;
	direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
	wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
	justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
	align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
	gap?: FlexGap;
	borderRadius?: FlexBorderRadius;
	border?: boolean;
	inline?: boolean;
	pt?: FlexSize;
	pb?: FlexSize;
	pl?: FlexSize;
	pr?: FlexSize;
}

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
	(
		{
			background,
			width,
			height,
			direction,
			wrap,
			justify,
			align,
			gap,
			pt,
			pb,
			pl,
			pr,
			borderRadius,
			border,
			inline,
			children,
			className,
			...props
		},
		ref,
	) => {
		return (
			<div
				data-background={background}
				data-full-width={width}
				data-full-height={height}
				data-direction={direction}
				data-wrap={wrap}
				data-justify={justify}
				data-align={align}
				data-gap={gap}
				data-pt={pt}
				data-pb={pb}
				data-pl={pl}
				data-pr={pr}
				data-inline={inline}
				data-border-radius={borderRadius}
				data-border={border}
				className={`${styles.flex} ${className || ''}`}
				ref={ref}
				{...props}
			>
				{children}
			</div>
		);
	},
);

Flex.displayName = 'Flex';
