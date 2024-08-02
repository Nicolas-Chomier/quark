import React from 'react';
import styles from './FallBack.module.css';
import { Spinner } from '../spinner/Spinner';

type FallBackProps = {
	loading?: boolean;
	message?: string;
	loadingMessage?: string;
	width?: 's' | 'm' | 'l' | 'full';
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
};

export const FallBack: React.FC<FallBackProps> = ({
	loading,
	loadingMessage = 'Loading...',
	message = 'No data !',
	width,
	borderRadius,
}) => {
	return (
		<div
			className={styles.fallback}
			data-width={width}
			data-border-radius={borderRadius}
		>
			{loading ? <Spinner size={'s'} color='theme' /> : null}
			<span className={styles.fallbackText}>
				{loading ? loadingMessage : message}
			</span>
		</div>
	);
};
