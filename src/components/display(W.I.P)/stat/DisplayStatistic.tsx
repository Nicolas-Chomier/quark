import React from 'react';
import { useDisplayRootContext } from '../root/DisplayRoot';
import styles from './DisplayStatistic.module.css';

export type DisplayStatisticProps = {
	children: number;
	className?: string;
	fontSize?: 's' | 'm' | 'l';
};

export const DisplayStatistic: React.FC<DisplayStatisticProps> = ({
	children,
	className,
	fontSize,
}) => {
	const { style, disable } = useDisplayRootContext();

	if (!children) return null;
	return (
		<div
			className={`${className ?? styles.statistic}`}
			data-disabled={disable}
			data-style={style}
			data-font-size={fontSize}
		>
			{children}
		</div>
	);
};
