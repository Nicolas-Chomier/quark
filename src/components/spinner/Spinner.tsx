import React from 'react';
import styles from './Spinner.module.css';

export interface SpinnerProps {
	size?: 's' | 'm' | 'l' | 'xl' | 'xxl';
	color?: 'theme' | 'accent' | 'basic';
}

export const Spinner: React.FC<SpinnerProps> = ({
	size = 'm',
	color = 'basic',
}) => {
	return (
		<span className={styles.spinner} data-size={size} data-color={color} />
	);
};
