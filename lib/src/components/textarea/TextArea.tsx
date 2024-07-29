import React from 'react';
import styles from './TextArea.module.css';

export interface TextAreaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	name: string;
	width?: 's' | 'm' | 'l' | 'full' | 'auto';
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
	fontSize?: 'xs' | 's' | 'm' | 'l' | 'xl';
	standardFontFamily?: boolean;
	className?: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
	(
		{
			name,
			width,
			border,
			borderRadius,
			fontSize,
			standardFontFamily,
			className,
			...props
		},
		ref,
	) => {
		return (
			<textarea
				id={name}
				name={name}
				data-width={width}
				data-border={border}
				data-border-radius={borderRadius}
				data-font-size={fontSize}
				data-standard-font-family={standardFontFamily}
				className={`${styles.textarea} ${className || ''}`}
				ref={ref}
				{...props}
			/>
		);
	},
);

TextArea.displayName = 'TextArea';
