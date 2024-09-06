import React from 'react';
import { Spinner } from '../spinner/Spinner';
import styles from './TableDummy.module.css';

export type TableDummyProps = {
	message?: string;
	width?: '3xs' | '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl';
	spinner?: boolean;
};

export const TableDummy: React.FC<TableDummyProps> = ({
	message,
	width,
	spinner,
}) => {
	return (
		<div className={styles.container} data-width={width}>
			{message}
			{spinner ? (
				<span>
					<Spinner size='l' />
				</span>
			) : null}
		</div>
	);
};
