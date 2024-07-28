import React, { ReactNode } from 'react';
import styles from './Label.module.css';

export interface LabelProps
	extends React.LabelHTMLAttributes<HTMLLabelElement> {
	htmlFor: string;
	text: string;
	textAlign?: 'left' | 'center' | 'right';
	fontSize?: 'xs' | 's' | 'm' | 'l' | 'xl';
	fontWeight?: 'normal' | 'medium' | 'semibold' | 'bold';
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
				className={`${styles.label} ${className}`}
				ref={ref}
				{...props}
			>
				<div className={styles.text}>{text}</div>
				{children}
			</label>
		);
	},
);

Label.displayName = 'Label';
