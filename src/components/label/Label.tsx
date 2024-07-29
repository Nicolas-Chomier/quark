import React, { ReactNode } from 'react';
import styles from './Label.module.css';

type Offset =
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
	| '20';
export interface LabelProps
	extends React.LabelHTMLAttributes<HTMLLabelElement> {
	htmlFor: string;
	text: string;
	textAlign?: 'left' | 'center' | 'right';
	fontSize?: 'xs' | 's' | 'm' | 'l' | 'xl';
	fontWeight?: 'normal' | 'medium' | 'semibold' | 'bold';
	offsetLeft?: Offset;
	offsetRight?: Offset;
	className?: string;
	children: ReactNode;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
	(
		{
			htmlFor,
			text,
			textAlign,
			fontSize,
			fontWeight,
			offsetLeft,
			offsetRight,
			children,
			className,
			...props
		},
		ref,
	) => {
		if (!text && !children) return null;
		return (
			<label
				htmlFor={htmlFor}
				data-text-align={textAlign}
				data-font-size={fontSize}
				data-font-weight={fontWeight}
				className={`${styles.label} ${className || ''}`}
				ref={ref}
				{...props}
			>
				<div
					className={styles.text}
					data-offset-right={offsetRight}
					data-offset-left={offsetLeft}
				>
					{text}
				</div>
				{children}
			</label>
		);
	},
);

Label.displayName = 'Label';
