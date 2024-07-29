import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import * as CheckBox from '@radix-ui/react-checkbox';
import styles from './Checkbox.module.css';

export type CheckboxProps = {
	handleChange?: (state: boolean | 'indeterminate') => void;
	name: string;
	defaultChecked?: boolean;
	disabled?: boolean;
	size?: 's' | 'm' | 'l';
	borderRadius?: 's' | 'm' | 'l' | 'full';
	color?: 'theme' | 'accent' | 'standard' | 'fade';
	variant?: 'outline' | 'solid';
	className?: string;
	children?: ReactNode;
};

export const Checkbox: React.FC<CheckboxProps> = ({
	handleChange,
	name,
	defaultChecked = false,
	disabled,
	size = 'm',
	borderRadius,
	color,
	variant,
	className,
	children,
}) => {
	const [isChecked, setIsChecked] = useState<boolean | 'indeterminate'>(
		false,
	);

	const handleCheckedChange = useCallback(
		(newState: boolean | 'indeterminate') => {
			setIsChecked(newState);
			if (handleChange && newState) handleChange(newState);
		},
		[handleChange],
	);

	useEffect(() => {
		if (disabled) {
			setIsChecked(false);
		} else {
			setIsChecked(defaultChecked);
		}
	}, [defaultChecked, disabled]);

	return (
		<CheckBox.Root
			checked={isChecked}
			onCheckedChange={handleCheckedChange}
			name={`checkbox-${name}`}
			disabled={disabled}
			data-size={size}
			data-border-radius={borderRadius}
			data-color={color}
			data-variant={variant}
			className={`${styles.checkboxDefault} ${className ?? ''}`}
		>
			<CheckBox.Indicator className={styles.checkboxDefaultIndicator}>
				{children ?? 'X'}
			</CheckBox.Indicator>
		</CheckBox.Root>
	);
};
