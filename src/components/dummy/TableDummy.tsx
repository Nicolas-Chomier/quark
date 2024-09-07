import React from 'react';
import styles from './TableDummy.module.css';

export type TableDummyProps = {
	message?: string;
	width?: number;
	spinner?: boolean;
};

export const TableDummy: React.FC<TableDummyProps> = ({
	message,
	width,
	spinner,
}) => {
	return (
		<div className={styles.container} style={{ width: `${width}px` }}>
			{message}
			{spinner ? <span className={styles.loader}></span> : null}
		</div>
	);
};
